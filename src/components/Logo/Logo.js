import { Header } from "./Logo.styles";

function Logo({ children, ...props }) {
  return <Header {...props}>{children}</Header>;
}

export default Logo;
