<template>
  <div class="swiper-slide-content-container bg-white">
    <div class="swiper-slide-content-title-container">
      <span ref="Title" class="swiper-slide-content-title">
        <h1 class="swiper-slide-content-title-heading text-[#27223A]">
          极简模式，保持专注
        </h1>
        <em class="bg-[#C0C0C0] swiper-slide-content-title-em"></em>
      </span>
      <p ref="SubTitle" class="swiper-slide-content-subtitle text-[#453C41]">
        点击时间快捷切换，沉浸式搜索体验。
      </p>
    </div>
    <div ref="Image" class="max-w-[53vw] text-center mt-12">
      <img src="https://files.codelife.cc/itab.link/simple.webp" alt="" />
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
