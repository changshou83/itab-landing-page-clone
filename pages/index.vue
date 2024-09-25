<template>
  <div>
    <AppHeader />
    <AppContent>
      <SwiperSlide virtual-index="Banner"><ContentBanner /></SwiperSlide>
      <SwiperSlide virtual-index="Widget"><ContentWidget /></SwiperSlide>
      <SwiperSlide virtual-index="Icon"><ContentIcon /></SwiperSlide>
      <SwiperSlide virtual-index="App"><ContentApp /></SwiperSlide>
      <SwiperSlide virtual-index="Simple"><ContentSimple /></SwiperSlide>
      <SwiperSlide virtual-index="Video"><ContentVideo /></SwiperSlide>
      <SwiperSlide virtual-index="More"><ContentMore /></SwiperSlide>
      <SwiperSlide virtual-index="Start"><ContentStart /></SwiperSlide>
    </AppContent>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
