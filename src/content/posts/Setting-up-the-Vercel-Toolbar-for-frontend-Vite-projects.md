---
title: Setting up the Vercel Toolbar for frontend Vite projects
pubDate: 2025-09-24T19:35:58.236Z
description: A frontend-only solution to a Vercel-specific problem
draft: true
---

I work as a frontend developer at a major enterprise IT company helping service teams succeed by getting some of the repetitive drudgery of web development out of their way. Right now, that mainly focuses on building them a post-authorization header, one that users will see once they've logged into our platform and click on to access the services these teams build. That might sound really simple, but I can assure you that it's far more complex than you might imagine when account for things like:

* workspace types - is this a workspace for a single company, or for a managed service provider? Maybe an MSP client?
* deployment environments - is this being served online or off a server in some government dark site?
* authorization - what's this user allowed to access? Are they allowed to access anything at all?!
* feature flags - is this user lucky enough to see that new shiny AI logo we just added?
* frontend frameworks - did the service team actually choose something than React? Really?!

Sarcasm aside, we have a lot of controls and levers we need to push and pull to make this work.
