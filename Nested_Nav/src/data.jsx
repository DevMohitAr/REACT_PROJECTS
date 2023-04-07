import { nanoid } from "nanoid";

const sublinks = [
  {
    pageId: nanoid(),
    page: "product",
    links: [
      {
        id: nanoid(),
        label: "community",
      },
      {
        id: nanoid(),
        label: "content",
      },
      {
        id: nanoid(),
        label: "roles",
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "solutions",
    links: [
      {
        id: nanoid(),
        label: "developers",
      },
      {
        id: nanoid(),
        label: "content managers",
      },
      {
        id: nanoid(),
        label: "business teams",
      },
      {
        id: nanoid(),
        label: "ecommerce",
      },
    ],
  },
  {
    page: "resources",
    pageId: nanoid(),
    links: [
      {
        id: nanoid(),
        label: "starters",
      },
      {
        id: nanoid(),
        label: "showcase",
      },
    ],
  },
];

export default sublinks;
