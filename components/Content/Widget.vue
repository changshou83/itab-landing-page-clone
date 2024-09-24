<template>
  <div
    class="swiper-slide-content-container"
    style="background-image: linear-gradient(45deg, #e8f6fd, #ffefef)"
  >
    <div class="swiper-slide-content-title-container">
      <span ref="Title" class="swiper-slide-content-title">
        <h1 class="swiper-slide-content-title-heading">
          卡片式小组件，好看又好用
        </h1>
        <em class="bg-[#ffdd12] swiper-slide-content-title-em"></em>
      </span>
      <p ref="SubTitle" class="swiper-slide-content-subtitle">
        海量组件，免费使用。多种尺寸任意调节，令你的桌面独具一格
      </p>
    </div>
    <div>
      <ClientOnly>
        <Marquee
          v-for="(item, idx) of list"
          :key="item[0]"
          :direction="idx % 2 === 0 ? 'reverse' : 'normal'"
          :gradient="true"
          :pauseOnHover="true"
          :gradientColor="[`rgba(255, 255, 255, 1)`, `rgba(255, 255, 255, 0)`]"
          gradientLength="100px"
        >
          <img v-for="href in item" :key="href" :src="href" />
        </Marquee>
      </ClientOnly>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTitleAnimation } from "~/composables/titleAnimation";

function generateList() {
  const imgURL = (order: string) =>
    `https://files.codelife.cc/itab.link/widgets/icon-${order}.png`;
  const result: Array<Array<string>> = [[], [], []];
  result.forEach((list, idx) => {
    for (let _idx = 1; _idx <= 5; _idx++) {
      list.push(imgURL(`${idx + 1}-${_idx}`));
    }
    for (let _idx = 1; _idx <= 5; _idx++) {
      list.push(imgURL(`${idx + 1}-${_idx}`));
    }
  });
  return result;
}
const list = ref(generateList());
// 添加动画
const swiperSlideInstance = useSwiperSlide();
const titleRef = useTemplateRef("Title");
const subTitleRef = useTemplateRef("SubTitle");
useTitleAnimation(swiperSlideInstance, { titleRef, subTitleRef });
</script>

<style scoped>
img {
  display: inline-block;
  height: 180px;
  margin: 10px;
}
</style>
