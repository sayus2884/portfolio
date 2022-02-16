import styled from "styled-components";

export interface ITheme {
  imageUrl?: string;
}

export const ImageBanner = styled.div`
  background-image: url(${({ imageUrl }: ITheme) => imageUrl});
  background-position: top left;
  background-size: cover;
  min-width: 1px;
`;
