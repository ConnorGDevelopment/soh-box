import type {
  VOptions,
} from "vuetify-nuxt-module";

// Stuart's Opera House Hexcode Colors:
// -------------------------------------
// Black: #424242 :  rgba(66,66,66,255)

// Green: #a9dad6 :  rgba(169,218,214,255)

// Red: #a53c40 : rgba(165,60,64,255)



// Stuart's Opera House Font Style:
// ---------------------------------
// Texas Poppin's and Open Sans


export const myVuetifyOptions: VOptions = {
  aliases: {
  },
  blueprint: {
  },
  components: [],
  date: {
  },
  defaults: {
  },
  directives: [],
  display: {
  },
  goTo: {
  },
  labComponents: [],
  locale: {
  },
  localeMessages: [],
  ssr: undefined,
  theme: {
    defaultTheme: "indexPage",
    themes: {
      black: {
        dark: true,
        colors: {
          background: "#a9dad6",

        },
      },

      indexPage: {
        dark: true,
        colors: {
          background: "#424242",
        },
      },
    },
  },
};
