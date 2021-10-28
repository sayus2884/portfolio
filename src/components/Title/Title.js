import { Header } from "./Title.styles";

function Title({ children, ...props }) {
  return <Header {...props}>{children}</Header>;
}

export default Title;
