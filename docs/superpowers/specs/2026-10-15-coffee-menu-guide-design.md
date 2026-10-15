# First Sip coffee menu guide page

Date: 2026-10-15

## Goal

Give coffee beginners a place to learn what common cafe drinks contain, how they taste, and how to ask for one. First Sip remains an informational guide; it does not sell drinks.

## Context

The home page already introduces Latte, Americano, and Mocha, offers a four-drink randomizer, and has three preference cards for milky, chocolate, and black coffee. The preference-card buttons currently all point back to the same home-page menu section, so they do not lead to deeper information.

## Approaches considered

1. Keep everything on the home page and remove the preference-card buttons. This is simplest, but leaves no deeper destination for people who want to learn more.
2. Add a dedicated menu guide page and make each preference-card button lead to its matching drink. This gives the buttons a useful destination and keeps the home page focused on discovery. **Selected.**
3. Expand drink details inline on the home page. This avoids page navigation, but adds interaction and length to an already long page.

## Page design

- Add `rush/menu.html`, titled “คู่มือเมนูกาแฟ”, using the current coffee colors, Sarabun typography, logo, sticky navigation, and footer.
- Introduce the page as a guide for people ordering at a cafe for the first time.
- Explain four beginner-friendly drinks already present in the randomizer: Latte, Americano, Mocha, and Cappuccino. Each entry covers its main ingredients, expected taste, who might enjoy it, and one sample order phrase.
- Keep the page informational: no prices, cart, purchase flow, or shop language.
- Use stable section IDs `latte`, `americano`, `mocha`, and `cappuccino` so links can target a specific drink.
- Keep the menu content in one readable, responsive page. Reuse the current image-over-card visual language in a balanced two-column desktop layout that collapses to one column on mobile, rather than introducing a new design system.

## Navigation and home-page links

- Repoint the existing “เลือกกาแฟ” navigation item to `menu.html` on the home, About Us, and menu pages; keep one navigation item so the header does not gain another link.
- Keep the existing “เลือกกาแฟ” taste-preference section on the home page reachable from its own page content.
- Point the three preference-card buttons to their matching guide entries: milk → `menu.html#latte`, chocolate → `menu.html#mocha`, black coffee → `menu.html#americano`.
- Give each button a specific label such as “ดูเมนูลาเต้”, “ดูเมนูมอคค่า”, and “ดูอเมริกาโน”.

## Scope and verification

This change adds one static page and updates the related navigation and links. It does not add search, filters, new randomizer behavior, or extra drink categories. Verify the four anchors, all page links, and layout at desktop and narrow widths; confirm the page makes no purchase claims.

## Self-review

- The page purpose is distinct from the existing home-page summary: it provides fuller beginner guidance for each drink.
- The three preference cards map to matching menu anchors, and the randomizer's four drinks match the guide's four entries.
- The language and scope stay informational and consistent with the user's preference to preserve the current site's design.
