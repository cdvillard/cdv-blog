---
title: 'Setting up the Vercel Toolbar for frontend Vite projects: a rant'
pubDate: 2025-09-24T19:35:58.236Z
updatedDate: 2025-09-27T22:34:37.091Z
description: A frontend-only solution to a Vercel-specific problem
draft: true
---

I work helping service teams succeed at a major enterprise IT company by getting some of the repetitive drudgery of front-end web development out of their way. Right now, that mainly focuses on building them a post-authorization header component, one that users will see once they've logged into our platform to access the myriad services these teams develop.

That might sound really simple, but I assure you it's far more complex than you imagine. This company typically grows through acquisition. So, in addition to being able to support potentially any kind of front-end tech stack, this component also has to account for things like:

* workspace types - is the user in a workspace for a single organization, or for a managed service provider? Maybe an MSP's client?
* deployment environments - is this being served online or off a server in some government dark site?
* authorization - what's this user allowed to access? Are they allowed to access anything at all?
* feature flags - is this user lucky enough to see that new shiny AI logo we just added?
* frontend frameworks - did that new service team really choose something not React? Really?!

Sarcasm aside, we have a lot of controls and levers we need to push and pull to meet all these needs.

Over time, the interweaving controls have grown too complex for us to manage manually. See, the repository housing this header component is all front-end: driven by Vite with TypeScript, styles, and an `index.html` file for local development and [Vercel's preview environments](https://vercel.com/docs/deployments/environments#preview-environment-pre-production). It has no backend to call its own. We build the thing, and bundle just the header component itself with fonts and internationalization files, nothing else. Since the project's early days, we would demo the header component on our computers or using Vercel Previews by toggling certain variables or assigning values to certain properties using a `script` tag in `index.html`. This was supposed to be temporary, but anything temporary in web and software becomes sticky fast. Everyone around it endured it, but no one enjoyed it.

## The final straw

A colleague of mine finally got fed up with the tedium and requested I finally add the [Vercel Toolbar](https://vercel.com/docs/vercel-toolbar) to the damn project, specifically the [Flags Explorer](https://vercel.com/docs/feature-flags/flags-explorer) feature. You could fit so many variables and conditions in this thing, and more than just feature flags too, which was only half of my problem. With all the various enumerated values, platforms, and environments I had to support, it only made sense to add this to our local and preview environments. He through a best-faith attempt into a branch with some LLM assistance and passed it over to me to take it to the finish line.

Empathizing with his frustrations, I gave it another shot. I'd tried in the past, but even with some assistance from GitHub CoPilot, I couldn't get it to stick. The issue never was enabling the Vercel Toolbar itself. Their documentation in that regard was, for the most part, usable. The trouble really came when trying to enable Flags Explorer, which requires an API call be present for local development.

You know what? I have to call something out. I need to write a few words about Vercel's documentation.

### Vercel's documentation loop

Vercel's documentation focuses on frameworks for which it offers first-class support. That much is fair, but many of their users do use Vite. They know this. So why is the only documentation acknowledging Vite projects stuck as a footnote under the instructions for "other frameworks?"

![](</Screenshot 2025-09-26 at 10.40.47 AM.png>)

I am under no illusion that Vite somehow single-handedly runs all JavaScript-based projects the world round, but it's certainly a large enough contingent to warrant a bit more obvious documentation. If a new frontend developer looked at the suggested SvelteKit documentation, what are the chances they'll know what the web standards equivalent of `onMount` are? If you suggest anything greater than zero, that should be a sign this needs improvement.

## Flags Explorer

The [non-framework instructions for the Flags Explorer](https://vercel.com/docs/feature-flags/flags-explorer/getting-started#:~:text=for%20SvelteKit.-,Using%20a%20custom%20setup,-Learn%20how%20to) are no better, but my gripes with Vercel's documentation aside that was what I was after. One of the immediate points of contention for a frontend-only project like mine was the hard requirement of an API endpoint that returns the flags configuration, like `./.well-known/vercel/flags`. This was what stopped me implementing the Flags Explorer before, not because I couldn't add a Hono or Express server to my project and call it a day, but because it felt unnecessary. There had to be a simpler way to do this within the confines of my simple development project.

Fed up once again with trying to find a solution, I gave GitHub CoPilot another chance. With a prompt and a link to [Vercel's Flags Explorer reference docs](https://vercel.com/docs/feature-flags/flags-explorer/reference), I asked it to come up for the endpoint for me. Lo, and behold, it did just that.

### Vite's plugin system and `configureServer`

Vite is a deceptively powerful platform to build on. Most developers may ever use it to simply whip up a foundation for a Vue, Astro, or React application and call it a day. That's all well and good, but there's some magic in its inner workings that deserve deeper exploration. That previously-mentioned prompt revealed to me one such magical API of its plugin system when it produced a solution to my toolbar woes.

For the uninitiated, Vite's plugin system, built on the shoulders of [Rollup](https://rollupjs.org/), exposes a bunch of hooks and options to help make working with various JavaScript and TypeScript frameworks and libraries easier. The [ecosystem](https://github.com/vitejs/awesome-vite#plugins) runs deep. One of the hooks these plugins can take advantage of is the Vite-specific [configureServer](https://vite.dev/guide/api-plugin.html#configureserver) hook, which grants access to the development server's internal workings. This is great for adding custom middleware that can run either before or after Vite's internal middleware, and it's exactly where CoPilot hooked into two functions needed to set up flags locally.

```typescript
// vite-plugin-flags.ts

//...
export function flagsPlugin(): Plugin {
  return {
    name: 'flags-dev-server',
    configureServer(server) {
      server.middlewares.use('/.well-known/vercel/flags', async (_req, res) => {
        try {
          // ...
        } catch (error) {
          console.error('Error handling flags discovery:', error);
          res.statusCode = 500;
          res.end('Internal Server Error');
        }
      });

      server.middlewares.use('/api/flag-values', async (req, res) => {
        try {
          // ...
        } catch (error) {
          console.error('Error handling flag values:', error);
          res.statusCode = 500;
          res.end('Internal Server Error');
        }
      });
    },
  };
}
```

This was the piece I'd been missing. It enabled the solution that my senior engineer handed me, which already worked in Vercel's preview environments, to work locally without having to spin up another server. Now, instead of having to plug in values in Chrome DevTools or markup, I can simply click on the toolbar in my local development environment, flip some switches, and write code. Hot module replacement doesn't break the experience, either. Plus, said flipping of switches makes demos easier as well, and now that I have it integrated with both local development and Vercel's previews, I can just share a link to product managers to show them my handiwork. 

So, is this how everyone with a Vite project should handle this? No, probably not. I'd wager most teams using Vercel have already reached for a meta-framework that can support APIs. Still, I can see this being useful for developers mocking up web applications, A/B testing designs for executives, or teams building design systems and components with a lightweight setup. While I'm still ironing out some kinks in my own project, I've create a gist with some basic instructions on how to get started for anyone else in a similar pickle who may want to add it to theirs. If you have any questions, leave a comment and I'll see if I can help.
