import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <section className="plant-home-container">
        <div className="plant-home-content">
          <div className="plant-home-left">
            <header className="plant-home-header">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc9bb06a473b6ebc5927bc8c722071e8edd04503314c2019049966d85bcac569?apiKey=c0b5e5e3cfed49a6ae1c729c1785de95&"
                alt="Plant icon"
                className="plant-icon"
              />
              <div className="plant-home-title">
                <span className="plant-text">plant</span>
                <span className="home-text">home</span>
              </div>
            </header>
            <div className="plant-home-description">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aed7ca0c33e45bb11f398a3c5694c6eff36b2214eeb3484e71f2486128daa1ff?apiKey=c0b5e5e3cfed49a6ae1c729c1785de95&"
                alt="Plant illustration"
                className="plant-image"
              />
              <p>
                🌱 Ready to bring a touch of nature indoors? Explore the world
                of indoor plants with our beginner-friendly guide! Discover the
                perfect plant for your space, learn how to care for it, and
                watch your indoor garden thrive.
                <br />
                Let's grow together!
              </p>
              <Link to="/addcontact">
                <button className="join-button">Join Now</button>
              </Link>
            </div>
          </div>
          <div className="plant-home-right">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b35b984aa11fb8b18a7d4e823096e5e8b0c4e5f1938a9f3d6b51c745d257493e?apiKey=c0b5e5e3cfed49a6ae1c729c1785de95&"
              alt="Featured plant"
              className="featured-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
