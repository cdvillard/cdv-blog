# Charles Villard's personal blog

This is my personal blog, cribbed from [Astro's blog template](https://github.com/withastro/astro/tree/main/examples/blog). I've done what I can to make it uniquely mine. Hope you enjoy it.

Features:

- ✅ SEO-friendly setup with canonical URLs and OpenGraph data
- ✅ Full Markdown support
- ✅ RSS 2.0 generation
- ✅ Sitemap.xml generation

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `yarn`            | Installs dependencies                        |
| `yarn dev`        | Starts local dev server at `localhost:3000`  |
| `yarn build`      | Build your production site to `./dist/`      |
| `yarn preview`    | Preview your build locally, before deploying |

## TODOs

(This is literally just a to-do list I make for myself as I make changes to the actual repo.)

- [X] Figure out how to leverage Astro's functionality in JavaScript utility functions like in [utils/getPosts.js](./src/utils/getPosts.js).
- [X] Improve the writing functionality for my blog with prismic!
- [X] Remove Prismic dependency in favor of portability and control over content
- [X] Render posts using Markdown or MDX
- [ ] Implement code highlighting
- [ ] Figure out the best way to host media without compromising on performance
- [ ] Write more content!
