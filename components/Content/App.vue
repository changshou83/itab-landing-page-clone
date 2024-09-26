<template>
  <div
    class="swiper-slide-content-container"
    style="background-image: linear-gradient(45deg, #29323c, #4e5c6b)"
  >
    <div
      class="absolute left-[50%] bottom-[50px] h-[120px] text-[220px] text-transparent uppercase whitespace-nowrap"
      style="
        transform: translate(-50%);
        -webkit-text-stroke: 1px rgba(255, 255, 255, 0.09);
      "
    >
      mini application
    </div>
    <div class="swiper-slide-content-title-container">
      <span ref="Title" class="swiper-slide-content-title">
        <h1 class="swiper-slide-content-title-heading text-white">
          原创应用，方便又高效
        </h1>
        <em class="bg-[#4E4AF0] swiper-slide-content-title-em"></em>
      </span>
      <p ref="SubTitle" class="swiper-slide-content-subtitle text-[#C1C1C1]">
        热门资讯，天气管理，屏幕录制，视频转码等功能一键开启，无需下载。信息直达，比别人更快一步
      </p>
    </div>
    <img
      src="https://files.codelife.cc/itab.link/miniapp.webp"
      class="block z-[1] relative px-24"
    />
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
]);
</script>

<style scoped></style>
