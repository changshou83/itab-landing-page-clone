<template>
  <div>
    <AppHeader />
    <AppContent>
      <SwiperSlide virtual-index="Banner"><ContentBanner /></SwiperSlide>
      <SwiperSlide virtual-index="Widget"><ContentWidget /></SwiperSlide>
      <SwiperSlide><ContentIcon /></SwiperSlide>
      <SwiperSlide><ContentApp /></SwiperSlide>
      <SwiperSlide><ContentSimple /></SwiperSlide>
      <SwiperSlide><ContentVideo /></SwiperSlide>
      <SwiperSlide><ContentMore /></SwiperSlide>
      <SwiperSlide><ContentStart /></SwiperSlide>
    </AppContent>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
