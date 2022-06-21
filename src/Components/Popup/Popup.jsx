import { useState } from "react";
import "./Popup.scss";
import Modal from "react-awesome-modal";
import { LoanFollowForm } from "../Form/LoanFollowForm";

export const Popup = () => {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };

  return (
    <div className="popup">
      <input type="button" value="Open" onClick={() => openModal()} />
      <Modal
        visible={visible}
        width="400"
        height="300"
        effect="fadeInUp"
        onClickAway={() => closeModal()}
      >
        <div>
          <LoanFollowForm />
          <span onClick={() => closeModal()}>X</span>
        </div>
      </Modal>
    </div>
  );
};
