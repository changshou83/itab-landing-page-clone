export const useTitleAnimation = (
  swiperSlideInstance: Ref,
  { titleRef, subTitleRef }: Record<string, Ref>
) => {
  watch(
    () => swiperSlideInstance.value.isActive,
    (active) => {
      animateTitle(active);
      animateSubTitle(active);
      setAnimateDelay(active);
    }
  );
  function animateTitle(active: boolean) {
    const titleClassList = titleRef.value?.classList!;

    if (!titleClassList.contains("animate__animated")) {
      titleClassList.add("animate__animated");
    }
    if (active) {
      // 添加进入动画
      titleClassList.remove("animate__fadeOutUp");
      titleClassList.add("animate__fadeInDown");
    } else {
      // 添加退出动画
      titleClassList.remove("animate__fadeInDown");
      titleClassList.add("animate__fadeOutUp");
    }
  }
  function animateSubTitle(active: boolean) {
    const subTitleClassList = subTitleRef.value?.classList!;
    if (!subTitleClassList.contains("animate__animated")) {
      subTitleClassList.add("animate__animated");
    }
    if (active) {
      // 添加进入动画
      subTitleClassList.remove("animate__fadeOutDown");
      subTitleClassList.add("animate__fadeInUp");
    } else {
      // 添加退出动画
      subTitleClassList.remove("animate__fadeInUp");
      subTitleClassList.add("animate__fadeOutDown");
    }
  }
  function setAnimateDelay(active: boolean) {
    const refs = [titleRef.value, subTitleRef.value];
    refs.forEach((ref) => {
      ref?.style.setProperty("--animate-delay", active ? "0.5s" : "0.1s");
    });
  }
};
