# danielrwhitaker.github.io

Static business site for Daniel Whitaker (Lexington, Kentucky, USA). Plain HTML/CSS, no build step, no trackers. Hosted on GitHub Pages.

Files: `index.html`, `products.html` (+ `products.js`, `products.json`), `contact.html`, `terms.html`, `privacy.html`, `refunds.html`, `style.css`, `.nojekyll`.

## Add a product
Edit `products.json` and add an object to the array, then commit and push:

```json
[
  {
    "name": "Schedule C Expense Tracker",
    "description": "One-line description of what it does.",
    "price": "$19",
    "buy_link": "https://yourname.gumroad.com/l/xxxx"
  }
]
```

All four fields are shown on the Products page. When the array is empty, the page shows "New products coming soon". Keep the JSON valid (commas between entries, no trailing comma).

Preview locally: `python3 -m http.server 8000` then open http://localhost:8000 (opening the file directly won't load products.json).

## Legal pages — REVIEW BEFORE USE
`terms.html`, `privacy.html`, and `refunds.html` are generic small-seller templates (14-day refunds for digital goods). They are **not legal advice**. Review and adjust them for your actual products, processors, and situation, and update the "Last updated" date when you change them.
