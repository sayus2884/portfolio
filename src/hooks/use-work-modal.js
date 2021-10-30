import { useCallback, useState } from "react";

const UseWorkModal = () => {
  const [showWorkModal, setShowWorkModal] = useState(false);

  const openWorkModal = useCallback(() => setShowWorkModal(true), []);
  const closeWorkModal = useCallback(() => setShowWorkModal(false), []);

  return { showWorkModal, openWorkModal, closeWorkModal };
};

export default UseWorkModal;
