---
title: 'A rabbit hole into dropdown menus and `display: contents`'
pubDate: 2025-10-16T05:35:10.693Z
updatedDate: 2025-10-16T15:05:33.633Z
description: What new interesting patterns we can weave
draft: true
---

Dropdown menus are funny things. Spend any time online, and you'll find at least one out there waiting to pop open, you mark my words. 

A stalwart UX holdover from the days of the [Apple Lisa,](https://kartsci.org/kocomu/computer-history/graphical-user-interface-history/#:~:text=Apple%20Lisa%20and%20the%20Mac,double%2Dclicked%20on%20that%20file.) dropdown menus are everywhere on the internet, in [all shapes and sizes](https://www.interaction-design.org/literature/article/display-contents-the-classic-way-with-dropdown-menus?srsltid=AfmBOopbZE9WdhT5O5-YysSWPpHgE7f2XgNYy9Kt-EX0kNwcOQRria0N). Many times, they're only covering one level of content. This one from the Tina CMS editor I'm using is a good example.

![](</Screenshot 2025-10-16 at 9.37.22 AM.png>)

Sometimes, you'll see "mega dropdowns" or "[mega menus](https://webflow.com/blog/mega-menu-examples)" that go a level or two level deep like the one on Webflow's marketing site.

![](</Screenshot 2025-10-16 at 1.33.13 AM.png>)

Funny enough, while collecting screenshots for this post, I couldn't find production examples of what I usually associate with dropdown menus, the multilevel dropdown menu. They seem to have gone out of fashion. UXPin has a [solid example](https://www.uxpin.com/examples/multilevel-dropdown-navigation) of what I'm talking about.

![](</Screenshot 2025-10-16 at 10.01.41 AM.png>)

It was a version of that latter dropdown menu my team and I were recently asked to develop, just a top-level list of links, some of which were associated with a secondary list of links. Even in just writing this, we can see there's plenty of prior art to borrow from. Right?

Quoting the late, great John Pinette, I say, "Nay nay!" There was a twist to this multilevel dropdown. Not only did it have to render submenus, but its container had to grow and shrink depending on the size of the submenu that was rendered! 👻

Fine, it's not exactly spooky, unless you know why HTML and CSS don't exactly make this simple. This task took me down a rabbit hole of semantic HTML, keyboard interaction, and accessibility that I thought only prudent to share, seeing as I couldn't find any examples for it myself. Let's dive in.

## Back to boxy basics

Two of the first things web developers learn about HTML and CSS are the Document Object Model and the Box Model. In a way, both concepts let developers think about the web as a bunch of nested containers. HTML lets us generate boxes by wrapping tags in tags to build a DOM tree, and CSS lets us figure out how we're going to arrange those boxes on the page.

Together, the DOM and Box Model make reasoning over content layout easy enough if it can just flow down the page. Not so much if we want to make something dynamic. Both concepts effectively teach developers that content nested in containing elements can't break out of its containers. 

This has made developing dynamic layouts a chore. Developers have reached for everything from spacer images and HTML tables to manipulating pseudo-elements and CSS positioning to make anything remotely dynamic work. It wasn't until more recent innovations like CSS Flexbox and Grid gained wider adoption that layouts became easier, but those are still subject to the whims of the DOM and the Box Model.

## The thing with dropdowns and the DOM

Multilevel dropdown menus are a great example of this conundrum. A semantic HTML pattern to render them might use a `nav` navigation element, wrapped around an `ul` unordered list, which itself wraps a bunch of `li` list elements containing `a` link elements. If one of the top-level links has a submenu, semantic HTML requires another container be nested in the `li` element containing that link. 

```html
<nav>
  <ul>
    <li>
      <a href="#">Company</a>
      <ul>
        <li>
          <a href="#">Careers</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">Services</a>
      <ul>
        <li>
          <a href="#">Installation</a>
        </li>
        <li>
          <a href="#">Cleaning</a>
        </li>
        <li>
          <a href="#">Repair</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">Shop</a>
      <ul>
        <li>
          <a href="#">Gizmos</a>
        </li>
        <li>
          <a href="#">Gadgets</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">Contact</a>
    </li>
  </ul>
</nav>
```

Typically, this will render as nested lists, but in a multilevel dropdown menu, you might to hide the submenu `ul` elements and only render them when their top-level link is interacted with. It's not uncommon to see them render to the side using [absolute positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position#absolute).

![](</Screenshot 2025-10-16 at 2.10.32 AM.png>)

Notice how when that submenu does render, the container of the main list doesn't change its size. That's because CSS positioning effectively pulls the element its affecting out of the flow of the HTML document. That element can then positioned on its own plane on top of the rest of the document, relative to its container or the document itself.
