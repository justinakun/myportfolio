import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404: Grumpy Cat's Den</h1>
      <div className="not-found-text">
        <p>
          Uh-oh! You've landed on the wrong page, and even Grumpy the Cat's not
          pleased. But don't worry, you can still enjoy a grumpy cat photo below
          featuring none other than Grumpy himself. It might just make your day
          better!
        </p>
      </div>
      <img src="/grumpy.jpg" alt="Cat the Grumpy" />
    </div>
  );
};

export default NotFound;
