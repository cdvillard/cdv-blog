---
title: 'A rabbit hole into dropdown menus and `display: contents`'
pubDate: 2025-10-16T05:35:10.693Z
updatedDate: 2025-10-16T13:39:07.040Z
description: What new interesting patterns we can weave
draft: true
---

Dropdown menus are funny things. A stalwart UX holdover from the days of the [Apple Lisa,](https://kartsci.org/kocomu/computer-history/graphical-user-interface-history/#:~:text=Apple%20Lisa%20and%20the%20Mac,double%2Dclicked%20on%20that%20file.) dropdown menus are everywhere on the internet, in all shapes and sizes. They can contain more than just lists of links, though they're usually used on the web to show options or navigation. They're also typically pretty flat in their informational topography.\
\
Many times, they're pretty simple only covering one level of content. This one from the TinaCMS editor I'm using is a pretty good example.

![](</Screenshot 2025-10-16 at 9.37.22 AM.png>)

, you'll see them either render everything in a giant, page-spanning box; or they'll hang off another menu Spend any significant amount of time on the internet, and you'll find at least one out there waiting to pop open at a moment's notice, you mark my words. 

Two of the first things web developers learn about HTML and CSS are the Document Object Model and the Box Model. In a way, both concepts let developers think about the web as a bunch of nested containers. HTML lets us wrap content in tags to build a DOM tree to generate boxes, and CSS lets us figure out how we're going to arrange those boxes on the page.

Together, the DOM and Box Model make reasoning over content layout easy enough if it can just flow down the page. Not so much if we want to make something dynamic. Historically, both concepts effectively teach developers that content nested in containing elements can't break out of its container. 

This has made developing dynamic layouts a chore until more recent innovations like CSS Flexbox and Grid gained wider adoption, but they too are still subject to the 

Dropdown menus are a great example of this conundrum, a holdover from the days when. 

They can take all [kinds](https://www.interaction-design.org/literature/article/display-contents-the-classic-way-with-dropdown-menus) of forms, but dropdown menus are typically pretty flat as far as the DOM tree is concerned. one-dimensional or it contains a submenu that hangs off its side using absolute positioning. That's because, if written in semantic HTML, the submenu is typically nested in a `li` element of an unordered list.

![](</Screenshot 2025-10-16 at 2.10.32 AM.png>)

I had a chance to think deeply about them recently when asked to develop a dropdown menu with submenus. The catch? The design dictated that the submenus, when opened, had to influence its parent container. This sounds simple.

No. No, if you know anything about the [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model), you should know why it was not.

The rabbit hole this project sent me down took me through semantic HTML, accessibility, and CSS. Enough so that I had to document it for anyone else who may need some guidance when asked to work with nested elements rendering next to their parents.

## The thing with dropdowns and the DOM

If you don't work in HTML regularly, you're forgiven for not considering the markup of a typical dropdown menu. Dropdown menus are basically lists of links. A common pattern to render them would use a `nav` navigation element, wrapped around an `ul` unordered list, which itself wraps a bunch of `li` list elements containing `a` link anchors.

```html
<nav>
  <ul>
    <li>
      <a href="#">Company</a>
    </li>
    <li>
      <a href="#">Services</a>
    </li>
    <li>
      <a href="#">Shop</a>
    </li>
    <li>
      <a href="#">Contact</a>
    </li>
  </ul>
</nav>
```

Those li list elements can technically contain anything. That's why we see some really interesting and informative dropdown menus with visualizations and realtime data.

Sometimes, one level of items isn't enough. A dropdown menu might need to show what each section of a website offers. In that case, another ul element would get nested in the li elements that need extra links.

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

This is a trivial example, but imagine being an enterprise or major news outlet with hundreds of links. This isn't tenable, so you'll likely try and hide man
