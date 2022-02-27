import styled from "styled-components";
import { motion } from "framer-motion";

export interface ITheme {
  imageUrl?: string;
}

export const CustomButton = styled(motion.button)`
  background-image: url(${({ imageUrl }: ITheme) => imageUrl});
  background-position: left;
  background-size: cover;
  min-width: 1px;
`;
