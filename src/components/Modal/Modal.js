import { useEffect, useRef, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { Container } from "./Modal.styles";

import Portal from "../Portal/Portal";

import { modalAnim, VARIANTS } from "../../styles/animations";

function Modal({ children, height = 500, width = 800, onClose, isOpen, ...props }) {
  const containerRef = useRef();
  const iconProps = {
    className: "h-25 w-25 text-moonlight",
  };

  const handleOnClose = (event) => {
    event.preventDefault();
    onClose();
  };

  const handleOnClickOutside = useCallback(() => {
    if (containerRef && !containerRef.current.contains(event.target)) {
      onClose();
    }
  }, [onClose]);

  const handleOnEscapePress = useCallback(
    (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOnClickOutside);
      document.addEventListener("keydown", handleOnEscapePress);
    } else {
      document.removeEventListener("mousedown", handleOnClickOutside);
      document.removeEventListener("keydown", handleOnEscapePress);
    }

    return () => {
      document.removeEventListener("mousedown", handleOnClickOutside);
      document.removeEventListener("keydown", handleOnEscapePress);
    };
  }, [isOpen]);

  return (
    <Portal portalId="modal-root">
      <AnimatePresence>
        {isOpen && (
          <Container
            {...props}
            {...modalAnim}
            height={height}
            width={width}
            ref={containerRef}
            className="relaive fixed bg-midnight z-40 top-1/2-nav left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2 px-40 py-45 shadow rounded">
            {children}

            <button
              className="absolute text-white right-0 top-0 pr-22 pt-15"
              onClick={handleOnClose}>
              X
            </button>
          </Container>
        )}
      </AnimatePresence>
    </Portal>
  );
}

export default Modal;
