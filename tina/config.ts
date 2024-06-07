import { defineConfig, Form, TinaCMS } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "assets/media",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        ui: {
          // Example of beforeSubmit
          beforeSubmit: async ({
            form,
            cms,
            values,
          }: {
            form: Form
            cms: TinaCMS
            values: Record<string, any>
          }) => {
            return {
              ...values,
              updatedDate: new Date().toISOString(),
            }
          },
        },
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Publish Date",
            required: true,
          },
          {
            type: "datetime",
            name: "updatedDate",
            label: "Updated Date",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description"
          },
          {
            type: "string",
            name: "featuredImage",
            label: "Featured Image",
          },
          {
            type: "string",
            name: "featuredImageAlt",
            label: "Featured Image Alt Text"
          },
          {
            type: "boolean",
            name: "rssOnly",
            label: "RSS Only",
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
