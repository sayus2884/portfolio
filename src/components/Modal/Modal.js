import { cloneElement } from "react";
import { Container } from "./Modal.styles";

import Portal from "../Portal/Portal";

function Modal({ children, height = 500, width = 800, onClose, isOpen }) {
  const iconProps = {
    className: "h-25 w-25 text-moonlight",
  };

  const handleOnClose = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <Portal portalId="modal-root">
      {isOpen && (
        <Container
          height={height}
          width={width}
          className="relaive fixed bg-midnight z-40 top-1/2-nav left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2 px-40 py-45 shadow rounded">
          {children}

          <button className="absolute text-white right-0 top-0 pr-22 pt-15" onClick={handleOnClose}>
            X
          </button>
        </Container>
      )}
    </Portal>
  );
}

export default Modal;
