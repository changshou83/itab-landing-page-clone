<template>
  <swiper
    :style="`--swiper-pagination-color: ${paginationColor.active};--swiper-pagination-bullet-inactive-color: ${paginationColor.inactive};`"
    :modules="[SwiperPagination, SwiperMousewheel]"
    :direction="'vertical'"
    :allow-touch-move="false"
    :pagination="{
      clickable: true,
    }"
    :mousewheel="{
      enabled: true,
    }"
    @slide-change="setPaginationColor"
  >
    <slot />
  </swiper>
</template>

<script lang="ts" setup>
const paginationColor = reactive({
  active: "#fff",
  inactive: "#000",
});
const colorMap = new Map([
  ["Widget", { active: "#00a5f2", inactive: "#00a5f2" }],
  ["Simple", { active: "#00a5f2", inactive: "#00a5f2" }],
  ["More", { active: "#fff", inactive: "#fff" }],
  ["Start", { active: "#00a5f2", inactive: "#00a5f2" }],
]);
function setPaginationColor(evt: any) {
  const { activeIndex, slides } = evt;
  const activeSlide = slides[activeIndex];
  const swiperSlideIndex = activeSlide.dataset.swiperSlideIndex;

  if (colorMap.has(swiperSlideIndex)) {
    const { active, inactive } = colorMap.get(swiperSlideIndex)!;
    paginationColor.active = active;
    paginationColor.inactive = inactive;
  } else {
    paginationColor.active = "#fff";
    paginationColor.inactive = "#000";
  }
}
</script>

<style>
.swiper-wrapper {
  transition-delay: 0.3s;
}
.swiper {
  width: 100vw;
  height: 100vh;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-pagination {
  transition: 0.3s opacity;
  margin-right: 5px;
  z-index: 1200;
}
.swiper-pagination-bullet {
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}
.swiper-pagination-bullet-active {
  height: 24px;
  border-radius: 8px;
  opacity: 1 !important;
}

.animate__animated {
  --animate-duration: 300ms;
  animation-delay: var(--animate-delay);
}
</style>
