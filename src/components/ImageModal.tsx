import Modal from "react-modal";
import ImageType from "../App.types";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "90%",
    maxHeight: "90%",
    overflow: "auto",
  },
};

export default function ImageModal({ image, isOpen, onRequestClose }: { image: ImageType | null; isOpen: boolean; onRequestClose: () => void }) {
  if (!image) {
    return null;
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
      >
        <button onClick={onRequestClose} className="close-button">
          &times;
        </button>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          style={{ width: "100%", height: "auto" }}
        />
      </Modal>
    </div>
  );
}
