---
title: Setting up the Vercel Toolbar for frontend Vite projects
pubDate: 2025-09-24T19:35:58.236Z
updatedDate: 2025-09-26T03:39:36.831Z
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

Sarcasm aside, we have a lot of controls and levers we need to push and pull to meet all these needs. Over time, the interweaving controls got too complex for us to manage manually. The header component's repo consisted of a Vite-driven application using TypeScript, serving scripts, styles, and an `index.html` for local development. It has no frontend framework to speak of, unless you count the `fast-element` library, which we used to help us build parts of the header with HTML5 custom elements. In the earlier days of the project, we would demo the header component using local development and toggling certain features using a `script` tag in `index.html` to show the new layout or menu element. 
