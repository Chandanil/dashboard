import "./Popup.scss";
import Modal from "react-awesome-modal";

export const Popup = (props) => {
  return (
    <div className="popup">
      <Modal
        visible={props.visible}
        width="400"
        height="300"
        effect="fadeInUp"
        onClickAway={() => props.closeModal()}
      >
        <div>
          {/* to close popup */}
          <span onClick={() => props.closeModal()}>X</span>
          {/* component to be render */}
          {props.renderComponent}
        </div>
      </Modal>
    </div>
  );
};
