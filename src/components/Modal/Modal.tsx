import { ReactNode } from "react";
import "./modal.scss";

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="modal">
      <div className="modal__container">{children}</div>
    </div>
  );
};

export default Modal;
