export const VARIANTS = {
  OPEN: "open",
  CLOSED: "closed",
};

export const staggerOptions = {
  variants: {
    [VARIANTS.OPEN]: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    [VARIANTS.CLOSED]: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  },
};

export const easeInBottomAnim = {
  animate: VARIANTS.OPEN,
  initial: VARIANTS.CLOSED,
  variants: {
    [VARIANTS.OPEN]: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    [VARIANTS.CLOSED]: {
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  },
};

export const modalAnim = {
  animate: VARIANTS.OPEN,
  initial: VARIANTS.CLOSED,
  exit: VARIANTS.CLOSED,
  variants: {
    [VARIANTS.OPEN]: {
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "tween",
      },
    },
    [VARIANTS.CLOSED]: {
      opacity: 0,
    },
  },
};
