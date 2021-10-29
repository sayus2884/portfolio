import { cloneElement } from "react";
import { Container } from "./Modal.styles";

import Portal from "../Portal/Portal";

function Modal({ children, height = 500, width = 800 }) {
  const iconProps = {
    className: "h-25 w-25 text-moonlight",
  };

  return (
    <Portal portalId="modal-root">
      <Container
        height={height}
        width={width}
        className="fixed bg-midnight z-40 top-1/2-nav left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2">
        {children}
      </Container>
    </Portal>
  );
}

export default Modal;
