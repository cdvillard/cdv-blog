---
title: React Miami 2026 Write-up
pubDate: 2026-06-12T02:33:19.552Z
updatedDate: 2026-06-12T13:10:18.196Z
description: Emptying my cup and learning about a ecosystem new to me
draft: true
---

The week of April 23rd and 24th, I attended [React Miami](https://www.reactmiami.com/) at the Hyatt Regency in Downtown Miami. Over the course of two days, I attended talks, networked, and learned more about the modern React ecosystem along with its various relationships to TypeScript, JavaScript, AI, product design, and more.

Unlike many developers, my first frontend framework was not React, but [Vue.js](https://vuejs.org/). It wasn’t until five years into my career that I'd work on a React project, and on one born of an older [paradigm](https://create-react-app.dev/) at that. When I joined the Miami Marlins earlier this year, I'd started working on a project built on the most modern approach to React I’d ever worked with.

Feeling behind on React’s modern tooling and capabilities, I attended React Miami with the goal of exposing myself to the modern React ecosystem, learning more about the challenges being faced, and finding actionable improvements I could make to our current and future projects.

## Themes amongst that talks

### Modern React web development

Naturally, many of the talks focused on the use of React in modern web development. This included discussions around improving UX with animations and transitions, performance optimization, introducing new features in tools and libraries, and discussing strategies for improved developer experience. Brooks Lybrand’s talk on [React Router v8](https://www.youtube.com/watch?v=B6aYsTjeO4A "React Router v8"), Mark Erikson’s [Guide to React Compiler Rendering](https://www.youtube.com/watch?v=WsAmM-sx9kA "Guide to React Compiler Rendering"), Dimitri M.’s presentation on [Solving Your TypeScript Performance Problems](https://www.youtube.com/watch?v=fNBQ9QeiHOM "Solving Your TypeScript Performance Problems") all left me with experiments I'm looking forward to running on my projects.

### Using AI in software engineering

A few talks discussed developing for “the agentic web”, ranging from building UI applications to be rendered within agents, preparing content for generative engine optimization, agentic engineering workflows, and designing agentic applications with guardrails. Rizel Scarlett’s overview of [MCP Apps](https://www.youtube.com/watch?v=9PFjcoxYFic "MCP Apps") caught my attention for some pie-in-the-sky ideas I've been batting around, and Rhys Sullivan introduced us to how he's [developing full-stack Typescript development using AI](https://www.youtube.com/watch?v=Svj8oOy1vi8 "Shipping quality full stack TypeScript apps in the age of AI - Rhys Sullivan
").

### Using AI *as* software engineers

Several talks addressed the purple-graident elephant in the room, highlighting the effect of AI on the industry as a whole, from varying perspectives of career growth, product design, and leadership principles. As I mentioned in a previous post, both James Mirkut and Serge Leon respectively presented about the [freedom to experiment more](https://www.youtube.com/watch?v=oLw5UfNRt18) and [the need to build things that last](https://www.youtube.com/watch?v=WYOmgRBlJSU) in the face of newly unlocked capacities. Will King’s discussion on [AI breaking hiring](https://www.youtube.com/watch?v=7Xht-UxDy0s) was quite eye-opening as someone both still growing their career and getting involved in hiring.

## The hallway track

While attending as many talks as possible, I did my best to take advantage of the hallway track to learn what I could of the ecosystem from the community. The overall sense I came away with was that many in the community are excited around the possibilities being enabled by using newer frameworks and approaches in conjunction with AI. A common thread across discussions was what people were able to build and what capabilities they could now unlock for themselves.

Amongst the generally positive air of the conference, there was some consensus that the ecosystem is storming a bit. An open awareness stands that React has reached a mature state. Meta’s transfer of React to its own foundation garnered praise for its stewardship and and concerns for its future development. Some architectural paradigms, pushed primarily by specific vendors, also spurred conversation. This was highlighted in Miguel Angel Duran’s [El futuro de React es ahora](https://www.youtube.com/watch?v=fvuKr1u8MAk), the future of React, where he highlighted alternative like TanStack and Astro.

### Actionable takeaways

Beyond having a great time networking and learning about the React ecosystem, I came away with a number of items to dig deeper into:

### Performance improvements

As I mentioned previously, several talks highlighted potential improvements in UX and DX performance that I’d like to explore when the time is appropriate. Especially given Joe Healy’s recent work on performance in the backend, I’d like to explore how and where we can take advantage of the React Compiler to reduce manual memoization, as well as where we’re causing layout thrash and how we can reduce unnecessary re-renders and bundle size.

### AI Utilization

I’m also curious about how we can leverage available tooling to improve and maybe scale workflow automation. After a conversation with staff from Figma, I’d like to experiment with Figma’s Make and other agentic tooling to try and improve the pipeline between our Figma documents and our component library.
