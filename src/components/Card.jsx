import saraImg from "../assets/images/katie-zaferes.png";
import star from "../assets/images/star.png";

function Card() {
  return (
    <div className="card">
      <div className="card--image-container">
        <img src={saraImg} alt="katie-zaferes" className="card--image" />
        <p id="card--image-tag">Sold out</p>
      </div>
      <p>
        <img id="card--star" src={star} alt="star" />
        5.0 <span id="card--text-span">(6) &#8226; USA</span>
      </p>
      <p>life lessons with Katie Zaferes</p>
      <p>
        <b>From $136/</b> person
      </p>
    </div>
  );
}

export default Card;
