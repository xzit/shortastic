import { config, fields, collection, singleton } from "@keystatic/core";

import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz", 8);

export default config({
  storage: {
    kind: "local",
  },
  ui: {
    brand: { name: "Shortastic" },
  },
  collections: {
    links: collection({
      label: "Links",
      slugField: "title",
      path: "src/content/links/*",
      schema: {
        title: fields.slug({
          name: { label: "Title" },
          slug: { label: "URL Shortener", generate: () => nanoid() },
        }),
        redirect: fields.url({
          label: "Redirect",
          validation: { isRequired: true },
        }),
        active: fields.checkbox({ label: "Active", defaultValue: true }),
      },
    }),
  },
  singletons: {
    settings: singleton({
      label: "Settings",
      path: "src/content/settings",
      schema: {
        root: fields.url({
          label: "Root",
          description: "Redirect visitors from / to a custom URL",
        }),
        error: fields.url({
          label: "404",
          description: "Redirect users from the 404 page to a custom URL",
        }),
      },
    }),
  },
});
