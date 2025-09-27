---
title: 'Setting up the Vercel Toolbar for frontend Vite projects: a rant'
pubDate: 2025-09-24T19:35:58.236Z
updatedDate: 2025-09-27T03:04:54.789Z
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

gave it my best shot empathized with his frustrations, so . Even with some assistance from GitHub CoPilot, I couldn't get t.

The issue never was enabling the Vercel Toolbar itself. Their documentation in that regard was, for the most part, usable. The trouble really came when trying to enable Flags Explorer, which requires an API call be present for local development.

You know what? I can't let this slide. I need to take a few words to call out something about Vercel's documentation.

### Vercel's documentation loop

Vercel's documentation focuses on frameworks for which it offers first-class support. That's fair, but many of their users still use Vite. They know this. So why is the only documentation acknowledging Vite projects stuck as a footnote under the instructions for "other frameworks?"

![](</Screenshot 2025-09-26 at 10.40.47 AM.png>)

I am under no illusion that Vite single-handedly runs all JavaScript-based projects the world round, but it's certainly a large enough contingent to warrant a bit more obvious documentation. If someone new to front-end development looked at the suggested SvelteKit documentation, what are the chances they'd still be stuck because they're unaware of what the web standards equivalent of onMount are? If your answer is anything greater than zero, that should be a sign this needs improvement.

## The Flags Explorer

My gripes with Vercel's documentation aside, the toolbar's [Flags Explorer](https://vercel.com/docs/feature-flags/flags-explorer) feature is what I was after.  
