import "./DetailModal.css";

export default function DetailsModal({ showModal, setShowModal }) {
  return (
    <div
      onClick={() => setShowModal(false)}
      className={showModal ? "modal-bg" : "modal-bg hide"}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal"
      >
        <div className="modal-heading">
          <div className="text">Product Details</div>
          <svg
            onClick={() => setShowModal(false)}
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="modal-options">
          <p>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam eiusmod sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam eiusmod.
          </p>
        </div>
      </div>
    </div>
  );
}
