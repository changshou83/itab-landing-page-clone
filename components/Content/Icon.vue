<template>
  <div
    class="swiper-slide-content-container w-[100%]"
    style="background-image: linear-gradient(45deg, #330967, #30cdcf)"
  >
    <div class="swiper-slide-content-title-container">
      <span ref="Title" class="swiper-slide-content-title">
        <h1 class="swiper-slide-content-title-heading text-white">
          网站导航，自定义图标
        </h1>
        <em class="bg-[#30a2b8] swiper-slide-content-title-em"></em>
      </span>
      <p ref="SubTitle" class="swiper-slide-content-subtitle text-white">
        既是新标签页也是收藏夹。你可以收藏并自定义常用网站的图标样式，美化桌面，快捷访问
      </p>
    </div>
    <div ref="Image" class="max-w-[70vw] mx-auto mt-[100px] text-center">
      <img
        class="block mb-[50px]"
        src="https://files.codelife.cc/itab.link/icon.png"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRefAnimation } from "~/composables/refAnimation";

// 添加动画
const swiperSlideInstance = useSwiperSlide();
useRefAnimation(swiperSlideInstance, [
  {
    ref: useTemplateRef("Title"),
    animation: { enter: "fadeInDown", leave: "fadeOutUp" },
  },
  {
    ref: useTemplateRef("SubTitle"),
    animation: { enter: "fadeInUp", leave: "fadeOutDown" },
  },
  {
    ref: useTemplateRef("Image"),
    animation: { enter: "fadeInUp", leave: "fadeOutDown" },
  },
]);
</script>

<style scoped></style>
