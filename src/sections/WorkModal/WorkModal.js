import { useContext } from "react";
import Image from "next/image";
import { Container } from "./WorkModal.styles";

import Modal from "../../components/Modal/Modal";

import ModalsContext from "../../contexts/ModalsContext";

function WorkModal({}) {
  const { showWorkModal, closeWorkModal } = useContext(ModalsContext);

  return (
    <Modal isOpen={showWorkModal} onClose={closeWorkModal}>
      <div className="text-white"> This is a good modal</div>
    </Modal>
  );
}

export default WorkModal;
