<template>
  <header class="left-0 z-30 lg:fixed lg:w-[100%] lg:top-0">
    <div
      class="shadow backdrop-blur-md border-b-[none] relative title-padding h-[--nav-h]"
    >
      <div class="flex justify-between mx-auto max-w-[1376px]">
        <NuxtLink to="/" class="flex items-center pt-px h-[--nav-h] logo">
          <span></span>
        </NuxtLink>
        <div class="flex justify-end items-center flex-grow">
          <nav role="tablist" class="tabs tabs-bordered h-[--nav-h]">
            <NuxtLink
              v-for="tab of navItems"
              :key="tab.href"
              :href="tab.href"
              role="tab"
              :class="`${isActiveTab(tab.href)} tab`"
              >{{ tab.label }}</NuxtLink
            >
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const route = useRoute();
const navItems = [
  { label: "首页", href: "/" },
  { label: "安装帮助", href: "/install" },
  { label: "FAQ", href: "/guide/faq" },
  { label: "隐私", href: "/guide/privacy" },
  { label: "关于", href: "/about" },
  { label: "更新记录", href: "/changelog" },
];
function isActiveTab(href) {
  return route.path === href ? "tab-active" : "";
}
</script>

<style scoped>
.title-padding {
  @apply pr-3 pl-6 md:pr-3 md:pl-8 xl:px-8;
}
.logo {
  @apply hover:opacity-60;
  transition: opacity 0.25s;
}
.logo::before {
  content: "";
  background: url(https://files.codelife.cc/itab.link/logo/logo.svg) no-repeat;
  width: 24px;
  height: 24px;
  background-size: cover;
  margin-right: 10px;
}
.logo::after {
  content: "iTab新标签页";
}
.tab {
  @apply flex justify-center h-[100%] px-3 text-[13px] font-medium whitespace-nowrap border-transparent hover:text-[--brand];
  line-height: calc(var(--nav-height) - 1px);
  transition: color 0.25s;
}
.tab-active {
  color: var(--brand);
  border-color: var(--brand) !important;
}
</style>
