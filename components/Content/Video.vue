<template>
  <div class="swiper-slide-content-container bg-white">
    <video
      class="absolute w-[100%] h-[100%] left-0 top-0 object-cover"
      autoplay="true"
      loop="true"
      muted="true"
      poster="https://files.codelife.cc/itab/defaultWallpaper/videos/40.jpg?x-oss-process=image/resize,limit_0,m_fill,w_400,h_200/format,webp"
      src="https://files.codelife.cc/itab/defaultWallpaper/videos/40.mp4"
    ></video>
    <div class="swiper-slide-content-title-container">
      <span ref="Title" class="swiper-slide-content-title">
        <h1 class="swiper-slide-content-title-heading text-white">
          动态壁纸，精选壁纸
        </h1>
        <em class="bg-[#2b2b61] swiper-slide-content-title-em"></em>
      </span>
      <p ref="SubTitle" class="swiper-slide-content-subtitle text-[#EFEFEF]">
        海量壁纸库，每天换一张，天天不重样
      </p>
    </div>
    <div
      class="bg-contain bg-no-repeat bg-center relative p-[30px] z-[2] h-[66vh]"
      style="
        background-image: url(https://files.codelife.cc/itab.link/video-border.png);
      "
    >
      <img
        class="inline-block h-[100%] object-contain relative top-4"
        style="width: calc(100% - 20px)"
        src="https://files.codelife.cc/itab.link/video-border-icon.png"
        alt=""
      />
      <img
        class="absolute left-[50%] top-[59%] h-[59%] object-contain"
        style="
          transform: translate(-50%, -50%);
          box-shadow: 0 12px 32px #000000b3;
        "
        src="https://files.codelife.cc/itab.link/video-border-wall.png"
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
]);
</script>

<style scoped></style>
