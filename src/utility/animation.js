export const SlideRigh = (duration) => {
  return {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: duration,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        duration: duration,
        ease: "easeInOut",
      },
    },
  };
};
