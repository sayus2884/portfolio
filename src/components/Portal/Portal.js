import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

// A portal wrapper for modals, toasts, and the like.
// It's also a  AnimatePressence wrapper to perform exit animations

// @req portalId

function GameModal({ portalId, children }) {
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.getElementById(portalId)) : null;
}

export default GameModal;
