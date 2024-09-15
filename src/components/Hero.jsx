import heroImage from "../assets/images/hero-img.png";

function Hero() {
  return (
    <>
      <div className="hero">
        <img src={heroImage} alt="Hero Image" />
      </div>
      <div className="title">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </>
  );
}

export default Hero;
