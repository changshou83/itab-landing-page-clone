// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      title: "iTab新标签页",
      meta: [
        {
          name: "description",
          content:
            "iTab新标签页,自定义您新标签页上的网站和壁纸以及搜索引擎,创建和编辑属于您自己的浏览器标签页,精美日历、炫酷天气、每日头条、海量壁纸、常用网址随心订制",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icons"],
  css: ["~/styles/tailwind.css", "~/styles/font.css", "~/styles/reset.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
