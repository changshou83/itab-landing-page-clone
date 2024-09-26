<template>
  <div class="swiper-slide-content-container w-[100%] bg-black">
    <div class="swiper-slide-content-title-container">
      <span ref="Title" class="swiper-slide-content-title">
        <h1 class="swiper-slide-content-title-heading text-white">
          更多功能，丝滑体验
        </h1>
        <em class="bg-[#1E1E1E] swiper-slide-content-title-em"></em>
      </span>
      <p ref="SubTitle" class="swiper-slide-content-subtitle text-white">
        一键翻译，多端同步，书签导入，自定义搜索等功能让浏览器桌面更好用
      </p>
    </div>
    <ul ref="List" class="max-w-[51%] mt-[50px] mx-auto my-0">
      <li class="text-left">
        <h2>快速翻译</h2>
        <p>搜索栏内快速搜素入口，翻译，它很快...</p>
        <img
          class="h-28"
          src="https://files.codelife.cc/itab.link/more-search.png"
          alt="快速翻译"
        />
      </li>
      <li class="flex flex-wrap">
        <div class="flex-1 text-left">
          <h2>快速添加</h2>
          <p>一键将当前网站<br />添加到你的iTab主页</p>
          <p class="scale-90" style="margin-top: 100px">*仅支持插件版</p>
        </div>
        <img
          class="h-48"
          src="https://files.codelife.cc/itab.link/more-add.png"
          alt="快速添加"
        />
      </li>
      <li class="flex flex-wrap">
        <div class="flex-1 text-left">
          <h2 style="margin-top: 60px">丰富壁纸</h2>
          <p>轻松切换，4K也OK</p>
        </div>
        <img
          class="h-48"
          src="https://files.codelife.cc/itab.link/more-wall.png"
          alt="丰富壁纸"
        />
      </li>
      <li class="text-left">
        <h2>跨平台</h2>
        <p>一个账号，多端同步</p>
        <img
          class="h-28"
          src="https://files.codelife.cc/itab.link/more-os.png"
          alt="丰富壁纸"
        />
      </li>
    </ul>
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
    ref: useTemplateRef("List"),
    animation: { enter: "fadeIn", leave: "fadeOut" },
  },
]);
</script>

<style scoped>
li {
  width: 48%;
  height: 16rem;
  margin: 1%;
  float: left;
  background-color: #1e1e1e;
  border-radius: 16px;
  padding: 2rem;
}

li p {
  margin: 10px 0 20px 0;
  color: #606060;
  font-size: 0.8rem;
}

li h2 {
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
}
</style>
