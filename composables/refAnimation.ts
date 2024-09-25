interface AnimationProp {
  enter: string;
  leave: string;
}
export const useRefAnimation = (
  swiperSlideInstance: Ref,
  refList: Array<{ ref: Ref; animation: AnimationProp }>
) => {
  watch(
    () => swiperSlideInstance.value.isActive,
    (active) => {
      refList.forEach(({ ref, animation }) => {
        animateRef(ref, animation, active);
      });
      setAnimateDelay(active);
    }
  );
  function animateRef(ref: Ref, animation: AnimationProp, active: boolean) {
    const classList = ref.value?.classList!;

    if (!classList.contains("animate__animated")) {
      classList.add("animate__animated");
    }
    if (active) {
      // 添加进入动画
      classList.remove(`animate__${animation.leave}`);
      classList.add(`animate__${animation.enter}`);
    } else {
      // 添加退出动画
      classList.remove(`animate__${animation.enter}`);
      classList.add(`animate__${animation.leave}`);
    }
  }
  function setAnimateDelay(active: boolean) {
    const refs = refList.map((item) => item.ref.value);
    refs.forEach((ref) => {
      ref?.style.setProperty("--animate-delay", active ? "0.5s" : "0.1s");
    });
  }
};
