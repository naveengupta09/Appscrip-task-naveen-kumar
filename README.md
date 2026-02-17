# Appscrip PLP Task

Responsive Product Listing Page built with Next.js (App Router) using server-side rendering. Product data loads from Fakestore API, while a static HTML/CSS version is included for evaluation.

## Project Structure

```
.
|-- html-version/        # Static HTML/CSS version
|-- public/              # Public assets for Next.js
|-- src/
|   |-- app/             # App Router pages, layout, and routes
|   |-- components/      # Reusable UI and client components
|   |-- constants/       # Static data arrays
|   |-- store/           # Client-side filter state
|   |-- styles/          # Global and component styles
|   `-- utils/           # Helpers (currency formatting)
`-- static/              # Alternate static demo assets
```

## Key Folders and Files

- App shell and metadata live in [src/app/layout.tsx](src/app/layout.tsx).
- Main entry page is [src/app/page.tsx](src/app/page.tsx).
- Product listing route is [src/app/products/page.tsx](src/app/products/page.tsx).
- Product loading UI is [src/app/products/loading.tsx](src/app/products/loading.tsx).
- Core UI building blocks are in [src/components](src/components).
- Filter state is managed in [src/store/filterStore.ts](src/store/filterStore.ts).
- Shared product data is in [src/constants/products.js](src/constants/products.js).
- Global styles are defined in [src/styles/globals.css](src/styles/globals.css).
- Product card styles are in [src/styles/ProductCard.module.css](src/styles/ProductCard.module.css).
- Static HTML/CSS version is in [html-version/index.html](html-version/index.html) with assets in [html-version/images](html-version/images).

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

## Application Flow

1. Request hits the Next.js App Router.
2. The route in [src/app/products/page.tsx](src/app/products/page.tsx) runs on the server and fetches product data.
3. The server returns HTML for the PLP, ensuring SSR on every request.
4. Client components such as filters, sorting, and catalog interactions hydrate on the browser.
5. Filter changes update state in [src/store/filterStore.ts](src/store/filterStore.ts), which re-renders relevant UI components.

## Rendering and State Flow

- Server-rendered content is produced by the App Router page in [src/app/products/page.tsx](src/app/products/page.tsx).
- Client behavior and interactivity are handled by components in [src/components](src/components).
- Filter and sort UI is split into server and client layers, with state stored in [src/store/filterStore.ts](src/store/filterStore.ts).
- Reusable data and configuration live under [src/constants](src/constants).

## SEO Coverage

- Page title and description set in [src/app/layout.tsx](src/app/layout.tsx) and [src/app/products/page.tsx](src/app/products/page.tsx).
- H1 and H2 structure on the product listing page.
- JSON-LD ItemList schema injected in [src/app/layout.tsx](src/app/layout.tsx), [src/app/products/page.tsx](src/app/products/page.tsx), and [html-version/index.html](html-version/index.html).
- SEO-friendly image names and descriptive alt text.

## Deployment Notes

- Host the Next.js app on Netlify (SSR supported).
- Set the repository name to `Appscrip-task-<candidate name>` for submission.
