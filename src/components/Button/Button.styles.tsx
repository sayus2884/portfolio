import styled from "styled-components";

export interface ITheme {
  imageUrl?: string;
}

export const CustomButton = styled.button`
  background-image: url(${({ imageUrl }: ITheme) => imageUrl});
  background-position: left;
  background-size: cover;
  min-width: 1px;
`;
