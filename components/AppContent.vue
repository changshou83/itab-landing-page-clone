<template>
  <swiper
    :modules="[SwiperPagination, SwiperMousewheel]"
    :direction="'vertical'"
    :allow-touch-move="false"
    :pagination="{
      clickable: true,
    }"
    :mousewheel="{
      enabled: true,
    }"
  >
    <slot />
  </swiper>
</template>

<script lang="ts" setup></script>

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

.animate__animated {
  --animate-duration: 300ms;
  animation-delay: var(--animate-delay);
}
</style>
