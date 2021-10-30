import { useContext } from "react";
import Image from "next/image";
import { Container } from "./WorkModal.styles";

import Modal from "../../components/Modal/Modal";

import ModalsContext from "../../contexts/ModalsContext";
import WorkContext from "../../contexts/WorkContext";

function WorkModal({}) {
  const { showWorkModal, closeWorkModal } = useContext(ModalsContext);
  const { selectedWork } = useContext(WorkContext);
  const { src, title, description, technologies } = selectedWork;

  return (
    <Modal isOpen={showWorkModal} onClose={closeWorkModal}>
      <div className="text-white"> {title}</div>
    </Modal>
  );
}

export default WorkModal;
