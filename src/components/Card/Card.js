import "./Card.css";
import { useState } from "react";
import DetailModal from "../DetailsModal/DetailModal";
export default function Card({ item }) {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(true);
  }

  return (
    <article>
      <img src="https://picsum.photos/600/400?image=1063" alt="Sample -"></img>
      <div className="text">
        <h3>{item.Title}</h3>
        <p>
          Collaboratively administrate empowered markets via plug-and-play
          networks.
        </p>
      </div>
      <button className="btn btn1" onClick={handleClick}>
        Read More
      </button>
      <button className="btn btn2">Buy Now</button>
      <DetailModal showModal={showModal} setShowModal={setShowModal} />
    </article>
  );
}
