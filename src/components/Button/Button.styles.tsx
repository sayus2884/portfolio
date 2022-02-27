import styled from "styled-components";
import { motion } from "framer-motion";

export interface ITheme {
  imageurl?: string;
}

export const CustomButton = styled(motion.button)`
  background-image: url(${({ imageurl }: ITheme) => imageurl});
  background-position: left;
  background-size: cover;
  min-width: 1px;
`;
