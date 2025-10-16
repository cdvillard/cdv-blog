---
title: 'Dropdown menus, slide-out sidebars, and `display: contents`'
pubDate: 2025-10-16T05:35:10.693Z
description: What weird patterns we may weave
draft: true
---

Dropdown menus are everywhere. Spend any significant amount of time online, and you'll be pressed to not run into some form of dropdown menu. They can take [all kinds of forms](https://www.interaction-design.org/literature/article/display-contents-the-classic-way-with-dropdown-menus), and they're out there waiting to pop out at a moment's notice, you mark my words.

I had a chance to think deeply about them recently when asked to develop a dropdown menu with submenus. The catch? The design dictated that the submenus, when opened, had to influence its parent container. This sounds simple.\
\
No. No, if you know anything about the [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model), you should know why it was not.\
\
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
