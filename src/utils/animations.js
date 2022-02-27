export const VARIANTS = {
  OPEN: "open",
  CLOSED: "closed",
};

export const staggerOptions = (options = {}) => {
  const { delay = 0.2, stagger = 0.1 } = options;

  return {
    [VARIANTS.CLOSED]: { opacity: 0 },
    [VARIANTS.OPEN]: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };
};

export const easeInRightVariants = {
  [VARIANTS.OPEN]: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  [VARIANTS.CLOSED]: {
    x: -10,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

export const easeInLeftVariants = {
  [VARIANTS.OPEN]: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  [VARIANTS.CLOSED]: {
    x: 10,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

export const easeInBottomVariants = {
  [VARIANTS.OPEN]: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  [VARIANTS.CLOSED]: {
    y: 10,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const scaleUpVariants = {
  [VARIANTS.OPEN]: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  [VARIANTS.CLOSED]: {
    opacity: 0,
    scale: 0,
  },
};

export const scaleDownVariants = {
  [VARIANTS.OPEN]: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  [VARIANTS.CLOSED]: {
    opacity: 0,
    scale: 2,
  },
};
