// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import {
  createVuetify,
} from "vuetify";
import {
  VBtn, VCard,
} from "vuetify/components";



export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: import.meta.dev ? "solarizeDark" : "solarizeDark",
      themes: {
        purple: {
          dark: true,
          colors: {
            background: "#231b30",
            surface: "#2a2335",
            primary: "#3e364b",
            secondary: "#93a1a1",
            warning: "#b58900",
            success: "#859900",
            error: "#dc322f",
            info: "#513879",
            accent: "#d4baff",
          },
        },
        solarizeDark: {
          dark: true,
          colors: {
            background: "#00202b",
            surface: "#002a36",
            primary: "#014052",
            secondary: "#93a1a1",
            warning: "#b58900",
            success: "#859900",
            error: "#dc322f",
            info: "#268bd2",
            accent: "#2aa198",
          },
        },
      },
      variations: {
        colors: [
          "error", "success", "info",
        ],
        lighten: 5,
        darken: 5,
      },
    },
    aliases: {
      VSuperCard: VCard,
      VSubCard: VCard,
      VSquareBtn: VBtn,
    },
    defaults: {
      VToolbar: {
        color: "surface",
      },
      VCardTitle: {
        style: [
          "text-wrap: wrap;",
        ],
      },
      VCardActions: {
        class: [
          "justify-end",
        ],
      },
      VCardText: {
        VCard: {
          color: "primary",
          elevation: 2,
        },
      },
      VChip: {
        rounded: "0",
        class: [
          "rounded",
        ],
        elevation: 2,
        variant: "elevated",
        color: "primary",
      },

    },
  });
  app.vueApp.use(vuetify);
});
