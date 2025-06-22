# Shortastic: Astro + Keystatic URL Shortener

## 🗂 Project Structure

Inside the project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── content/
│       └── links/
│           └── a1b2c3d4.yaml    # Example: http://localhost:4321/a1b2c3d4
│           └── ...
│   └── pages/
│       └── [...slug].astro
│       └── 404.astro
│       └── index.astro
└── package.json
```

## 🚀 Getting Started

> [!CAUTION]
> Local mode is not safe to use this in production. You should use [GitHub mode](https://keystatic.com/docs/github-mode) or [Keystatic Cloud](https://keystatic.com/docs/cloud) instead.

```bash
npm install
npm run dev
```

1. Open http://localhost:4321/keystatic
2. Add a new link

   - Generate a slug with nanoid() or use a custom slug
   - Set the redirect URL
   - Set the link as active

3. Copy the generated short URL
4. Test it in your browser!

Examples:

- http://localhost:4321/a1b2c3d4
- http://localhost:4321/dev
