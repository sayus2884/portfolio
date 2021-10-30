import { useContext } from "react";
import Image from "next/image";
import { Container } from "./WorkModal.styles";

import Modal from "../../components/Modal/Modal";

import ModalsContext from "../../contexts/ModalsContext";
import WorkContext from "../../contexts/WorkContext";

function WorkModal({}) {
  const { showWorkModal, closeWorkModal } = useContext(ModalsContext);
  const { selectedWork } = useContext(WorkContext);
  const { src, title, technologies, description } = selectedWork;

  return (
    <Modal isOpen={showWorkModal} onClose={closeWorkModal}>
      <div className="flex gap-70 text-white height-full">
        <div className="flex flex-col gap-55">
          <div className="relative h-180 w-180 border-moonlight">
            <Image
              className="rounded-full"
              src={src}
              layout="fill"
              blurDataURL={src}
              quality={25}
              objectFit="cover"
              objectPosition="center"
            />
          </div>

          <div className="flex flex-col gap-22">
            <button className="text-moonlight border border-moonlight px-10 py-8 rounded">
              Learn More
            </button>
            <button className="text-moonlight border border-moonlight px-10 py-8 rounded">
              Learn More
            </button>
            <button className="text-moonlight border border-moonlight px-10 py-8 rounded">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-22">
          <h2 className="text-32 font-semibold"> {title}</h2>
          <p>
            Developed with{" "}
            {technologies.map(({ name, url }, i) => (
              <span key={i}>
                <a className="underline" href={url} target="_blank">
                  {name}
                </a>
                {i < technologies.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>
          <p>{description}</p>
        </div>
      </div>
    </Modal>
  );
}

export default WorkModal;
