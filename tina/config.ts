import { defineConfig, type Form } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  // Uncomment to allow cross-origin requests from non-localhost origins
  // during local development (e.g. GitHub Codespaces, Gitpod, Docker).
  // Use 'private' to allow all private-network IPs (WSL2, Docker, etc.)
  // server: {
  //   allowedOrigins: ['https://your-codespace.github.dev'],
  // },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        ui: {
          filename: {
            readonly: false,
          },
          beforeSubmit: async ({
            form,
            // cms,
            values,
          }: {
            form: Form
            // cms: TinaCMS
            values: Record<string, any>
          }) => {
            if (form.crudType === 'create') {
              return {
                ...values,
                pubDate: new Date().toISOString(),
              }
            }

            if (form.crudType === 'update') {
              return {
                ...values,
                updatedDate: new Date().toISOString(),
              }
            }
          },
        },
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
            description: "This will be generated at first publish",
            ui: {
              timeFormat: "HH:mm",
            }
          },
          {
            type: "datetime",
            name: "updatedDate",
            label: "Updated Date",
            description: "This will be generated if it's already published on save.",
            ui: {
              timeFormat: "HH:mm"
            }
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true
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
