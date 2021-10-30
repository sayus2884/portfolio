import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`;
