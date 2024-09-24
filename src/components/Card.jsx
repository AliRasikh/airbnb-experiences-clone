// import saraImg from "../assets/images/katie-zaferes.png";
import PropTypes from "prop-types";
import star from "../assets/images/star.png";

function Card(props) {
  let available;
  props.openSpots === 0 ? (available = false) : (available = true);

  let badgeText;
  if (!available) badgeText = "Sold out";
  else if (props.location === "Online") badgeText = "Online";

  return (
    <div className="card">
      <img
        src={`/src/assets/images/${props.image}`}
        alt={props.alt}
        className="card--image"
      />
      {badgeText && <p id="card--badge">{badgeText}</p>}
      <p>
        <img id="card--star" src={star} alt="star iamge" />
        {props.stars}{" "}
        <span className="gray">
          ({props.reviewCount}) &#8226; {props.location}
        </span>
      </p>
      <h2>{props.title}</h2>
      <p>
        <span className="bold">From ${props.price}/</span> person
      </p>

      {available ? (
        <button className="card--button">Book now</button>
      ) : (
        <button className="card--button disabled" disabled>
          Sold out
        </button>
      )}
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  stars: PropTypes.string.isRequired,
  reviewCount: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  openSpots: PropTypes.number.isRequired,
};

export default Card;
