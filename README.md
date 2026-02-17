# Appscrip PLP Task

Responsive Product Listing Page built with Next.js (App Router) using server-side rendering. Product data loads from Fakestore API, while a static HTML/CSS version is included for evaluation.

## Run Locally

```bash
npm run dev
```

Visit `http://localhost:3000/products`.

## Static HTML/CSS Version

Open [html-version/index.html](html-version/index.html) directly in a browser. All assets are in [html-version/images](html-version/images).

## SSR and Data Source

- Server-side rendering is handled by the App Router page component in [src/app/products/page.tsx](src/app/products/page.tsx), forced to be dynamic.
- Product data is fetched from `https://fakestoreapi.com/products` with `cache: "no-store"` to ensure SSR on each request.

## SEO Coverage

- Page title and description set in [src/app/layout.tsx](src/app/layout.tsx) and [src/app/products/page.tsx](src/app/products/page.tsx).
- H1 and H2 structure on the product listing page.
- JSON-LD ItemList schema injected in [src/app/layout.tsx](src/app/layout.tsx), [src/app/products/page.tsx](src/app/products/page.tsx), and [html-version/index.html](html-version/index.html).
- SEO-friendly image names and descriptive alt text.

## Deployment Notes

- Host the Next.js app on Netlify (SSR supported).
- Set the repository name to `Appscrip-task-<candidate name>` for submission.
