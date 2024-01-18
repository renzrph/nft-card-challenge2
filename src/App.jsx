import "./index.css";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="image-container">
          <img
            className="equilibrium-image"
            src="/images/image-equilibrium.jpg"
            alt=""
          />
          <div>
            <img src="/images/icon-view.svg" alt="eye icon" />
          </div>
        </div>
        <h3 className="card-title">Equilibrium #3429</h3>
        <p className="card-description">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="eth-value-days-container">
          <p className="eth-value">
            <img
              className="etherium-icon"
              src="/images/icon-ethereum.svg"
              alt="etherium icon"
            />
            0.041 ETH
          </p>
          <p className="days-left">3 days left</p>
        </div>
        <hr className="blue-line" />
        <div className="profile-container">
          <img
            className="profile-image"
            src="/images/image-avatar.png"
            alt="profile image"
          />
          <p className="profile-name">
            Creation of <span>Jules Wyvern</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
