import { useCallback, useState } from "react";

const UseWorkModal = () => {
  const [showWorkModal, setShowWorkModal] = useState(true);

  const openWorkModal = () => setShowWorkModal(true);
  const closeWorkModal = () => setShowWorkModal(false);

  return { showWorkModal, openWorkModal, closeWorkModal };
};

export default UseWorkModal;
