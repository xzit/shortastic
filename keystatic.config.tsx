import { config, fields, collection } from "@keystatic/core";

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
          slug: { generate: () => nanoid() },
        }),
        redirect: fields.url({
          label: "Redirect",
          validation: { isRequired: true },
        }),
        active: fields.checkbox({ label: "Active", defaultValue: true }),
      },
    }),
  },
});
