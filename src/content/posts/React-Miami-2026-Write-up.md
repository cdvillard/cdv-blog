---
title: React Miami 2026 Write-up
pubDate: 2026-06-12T02:33:19.552Z
description: Emptying my cup and learning about a ecosystem new to me
draft: true
---

## Conference write-up

The week of April 23rd and 24th, I attended the 2026 React Miami Conference held in at the Hyatt Regency Miami in Downtown Miami. Over the course of two days, I’d be attending talks, networking, and learning more about the modern React ecosystem along with its various relationships to TypeScript, JavaScript, AI, product design, and more.

### Context, intentions and goals

Unlike many developers, my first frontend framework was not React, but Vue.js. It wasn’t until five years into my career that I had worked on a React project, and on one born of an older [paradigm](https://create-react-app.dev/) at that. In joining the Baseball Applications team, I was now touching a project built on the most modern version of React I’d ever worked with.

Feeling behind on React’s modern tooling and capabilities, I attended React Miami with the goal of exposing myself to the modern React ecosystem, learning more about the challenges being faced, and finding actionable performance, architectural, and developer experience improvements that could be applied to Atlantis and future applications.

### Themes amongst that talks

### Modern React web development

Naturally, many of the talks focused on the use of React in modern web development. This included discussions around improving UX with animations and transitions, performance optimization, introducing new features in tools and libraries, and discussing strategies for improved developer experience.

These were my primary focus, where I came away with insights and experiments to conduct:

* Brooks Lybrand’s talk on [React Router v8 and Beyond 34b6353295d480f98f0fe26059a3bccf](https://app.notion.com/p/React-Router-v8-and-Beyond-34b6353295d480f98f0fe26059a3bccf-37db9aac136681779ed8cee99b69be1e?pvs=21) offered actionable APIs we might be able to leverage to speed up load times.
* Mark Erikson’s [A Guide to React Compiler Rendering 34c6353295d480518456c05181db51dd](https://app.notion.com/p/A-Guide-to-React-Compiler-Rendering-34c6353295d480518456c05181db51dd-37db9aac136681a2851cc796529ef408?pvs=21) could yield performance benefits, and I’ve already put these notes through Codex against Atlantis to find [A Guide to React Compiler Rendering 34c6353295d480518456c05181db51dd](https://app.notion.com/p/A-Guide-to-React-Compiler-Rendering-34c6353295d480518456c05181db51dd-37db9aac136681a2851cc796529ef408?pvs=21).
* Dimitri M.’s presentation on [Solving Your TypeScript Performance Problems 36e6353295d480c2bba7d35b6488c742](https://app.notion.com/p/Solving-Your-TypeScript-Performance-Problems-36e6353295d480c2bba7d35b6488c742-37db9aac1366815898cefdcabfc0a4c2?pvs=21) highlighted a tool we can easily use to assess our type performance, which can turn into a bottleneck especially during CI.

### Using AI in software engineering

A few talks discussed developing for “the agentic web”, ranging from building UI applications to be rendered within agents, preparing content for generative engine optimization, agentic engineering workflows, and designing agentic applications with guardrails.

* Rizel Scarlett’s overview of \[MCP Apps]\(React%20Miami%202026/React%20Miami%202026%20%E2%80%94%20Talks/The%20Last%20Website%20You’ll%20Ever%20Visit%20(in%20the%20Browser%[2034c6353295d480318b29c6e6928d8481.md](http://2034c6353295d480318b29c6e6928d8481.md)) aligns with some pie-in-the-sky ideas that’ve been discussed in building chat-driven applications, rendering graphs and UI based on queries
* Rhys discussed a [Shipping quality full stack TypeScript apps in the 34c6353295d480d892acdb5fac1bb1b7](https://app.notion.com/p/Shipping-quality-full-stack-TypeScript-apps-in-the-34c6353295d480d892acdb5fac1bb1b7-37db9aac136681db91bee5b66412fa5d?pvs=21) for full-stack Typescript development when using AI using EffectTS

### Using AI as software engineers

Several talks focused on the greater effects of AI on the industry as a whole, from varying perspectives of career growth, product design, and leadership principles.

* Will King’s discussion on [AI broke hiring… what now (Will King) 34b6353295d480269368f3e49318fac6](https://app.notion.com/p/AI-broke-hiring-what-now-Will-King-34b6353295d480269368f3e49318fac6-37db9aac136681e9a577d58d157fc65c?pvs=21) aligned well with the timing of our recent interviews

### Other themes

Additional talks discussed React Native development, software engineering experiments, web security best practices, and the state of the React ecosystem.

Now that videos are available online, I’ve built a small living database listing and categorizing the talks, alongside summarizations.

[React Miami 2026 — Talks 2f3a3ce31c744e5392bd2a88a9868d0c](https://app.notion.com/p/37db9aac13668166a612f4ea63d251aa?pvs=21)

### The hallway track: networking, discussions, and energy

While attending as many talks as possible, I did my best to take advantage of the hallway track to learn what I could of the ecosystem from the community. The overall sense I came away with was that many in the community are excited around the possibilities being enabled by using newer frameworks and approaches in conjunction with AI. A common thread across discussions was what people were able to build and what capabilities they could now unlock for themselves.

Amongst the generally positive air of the conference, there was some consensus that the ecosystem is storming a bit. An open awareness stands that React has reached a mature state. Several factors included Meta’s transfer of React to its own foundation, which garnered praise for its stewardship and and concerns for its future development. Also, some architectural paradigms, pushed primarily by specific vendors, have also spurred conversation about React’s place in the stack. This was even highlighted in Miguel Angel Duran’s [El futuro de React es ahora \[ES\] 34b6353295d48027a033e15d30acacfa](https://app.notion.com/p/El-futuro-de-React-es-ahora-ES-34b6353295d48027a033e15d30acacfa-37db9aac13668114a415fd30c2e37ee4?pvs=21) about the Future of React, where he highlighted React/Next.js alternative like TanStack and Astro.

### Actionable takeaways

Beyond having a great time networking and learning about the React ecosystem, I came away with a number of items to dig deeper into:

### Performance improvements

As I mentioned previously, several talks highlighted potential improvements in UX and DX performance that I’d like to explore when the time is appropriate. Especially given Joe Healy’s recent work on performance in the backend, I’d like to explore how and where we can take advantage of the React Compiler to reduce manual memoization, as well as where we’re causing layout thrash and how we can reduce unnecessary re-renders and bundle size.

### AI Utilization

I’m also curious about how we can leverage available tooling to improve and maybe scale workflow automation. After a conversation with staff from Figma, I’d like to experiment with Figma’s Make and other agentic tooling to try and improve the pipeline between our Figma documents and our component library.
