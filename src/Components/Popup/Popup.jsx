import "./Popup.scss";
import Modal from "react-awesome-modal";

export const Popup = (props) => {
  return (
    <div className="popup">
      <Modal
        visible={props.visible}
        width="70%"
        effect="fadeInUp"
        onClickAway={() => props.closeModal()}
      >
        <div className="modal-body">
          {/* to close popup */}
          <span className="close" onClick={() => props.closeModal()}>
            X
          </span>
          {/* component to be render */}
          {props.renderComponent}
        </div>
      </Modal>
    </div>
  );
};
