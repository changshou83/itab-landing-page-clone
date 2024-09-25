import * as swiperModulesImports from "swiper/modules";
import {
  defineNuxtModule,
  addImports,
  extendViteConfig,
  addComponent,
} from "@nuxt/kit";

import type { SwiperModuleOptions, SwiperModulesType } from "./types";

export interface ModuleOptions extends SwiperModuleOptions {}

type EachSwiperModuleFn = (
  cb: (key: string) => void,
  modules: "*" | SwiperModulesType[]
) => void;
const eachSwiperModule: EachSwiperModuleFn = (cb, modules) => {
  // Import Each Swiper Module & CSS if it exists.
  for (const [key, _] of Object.entries(swiperModulesImports)) {
    // Turn key to snake-case.
    const snakeCase: string = key
      .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
      .replace(/^-/, "")
      .toLowerCase();

    const hasModule =
      modules === "*" ||
      (Array.isArray(modules) && modules.includes(snakeCase as any));

    if (hasModule && !["default", "Swiper"].includes(key)) {
      cb(key);
    }
  }
};

function getCSSImports({ styleLang, modules }: ModuleOptions) {
  const result = [`swiper/${styleLang}`];
  // Don't import if there is no css.
  const noCssInModules = [
    "autoplay",
    "controller",
    "effect-coverflow",
    "hash-navigation",
    "history",
    "keyboard",
    "manipulation",
    "mousewheel",
    "parallax",
    "thumbs",
  ];
  eachSwiperModule(
    // Push Import Styles for each module
    (key) => {
      const snakeCaseKey = snakeCase(key);
      if (!noCssInModules.includes(snakeCaseKey)) {
        result.push(`swiper/${styleLang}/${snakeCaseKey}`);
      }
    },
    modules!
  );
  return result;

  function snakeCase(key: string) {
    return key
      .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
      .replace(/^-/, "")
      .toLowerCase();
  }
}

function addSwiperImports(options: ModuleOptions) {
  // Add Composables imports from `swiper/vue`.
  const moduleImports = getModuleImports(options);
  addImports(moduleImports);
  function getModuleImports(options: ModuleOptions) {
    const { prefix, modules } = options;
    const result = [
      {
        name: "useSwiper",
        as: "useSwiper",
        from: "swiper/vue",
      },
      {
        name: "useSwiperSlide",
        as: "useSwiperSlide",
        from: "swiper/vue",
      },
    ];
    eachSwiperModule(
      (key) =>
        // Import Swiper Modules
        result.push({
          name: key,
          as: `${prefix}${key}`,
          from: "swiper/modules",
        }),
      modules!
    );
    return result;
  }
}

function addSwiperComponents(componentImports: string[]) {
  // Loop through each component to add to Nuxt.
  for (const cName of componentImports) {
    addComponent({
      name: cName,
      export: cName,
      filePath: "swiper/vue",
    });
  }
}

function optimizedBuild(config) {
  // Add Manual Chunks for Swiper for Vite.
  config.build = config.build || {};
  config.build.rollupOptions = config.build.rollupOptions || {};
  config.build.rollupOptions.output = config.build.rollupOptions.output || {};

  config.build.rollupOptions.output = {
    ...config.build.rollupOptions.output,
    manualChunks: (id) => {
      if (id.includes("/node_modules/swiper")) {
        return "swiper-vue";
      }
    },
  };
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    configKey: "swiper",
  },
  defaults: {
    prefix: "Swiper",
    styleLang: "css",
    modules: "*",
  },
  hooks: {
    "prepare:types": (ctx) => {
      ctx.tsConfig.compilerOptions ||= {};
      ctx.tsConfig.compilerOptions.types ||= [];
      ctx.tsConfig.compilerOptions!.types.push("swiper/vue");
      ctx.references.push({
        types: "swiper/vue",
      });
    },
  },
  setup(_options: ModuleOptions, nuxt) {
    // Add CSS Imports to the nuxt option.
    const cssImports = getCSSImports(_options);
    nuxt.options.css = [...nuxt.options.css, ...cssImports];

    addSwiperComponents(["Swiper", "SwiperSlide"]);
    addSwiperImports(_options);

    extendViteConfig((c) => optimizedBuild(c));
  },
});
