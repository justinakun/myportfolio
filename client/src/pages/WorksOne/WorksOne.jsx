import "./WorksOne.scss";

const WorksOne = () => {
  return (
    <div className="works-one-container">
      <h1 className="works-one-title">NFT Landing</h1>
      <div className="works-one-description">
        Here is the final project for the HTML and CSS module of the Front-End
        course. This page showcases responsive design, which you can discover by
        scrolling down.
      </div>
      <div className="works-one-comment">Desktop version:</div>
      <div className="works-one-image">
        <img src="/nft_web.png" alt="nft_web" />
      </div>
      <div className="works-one-comment">Mobile version:</div>
      <div className="works-one-small-image">
        <img src="/nft_mobile.png" alt="nft_mobile" />
      </div>
    </div>
  );
};

export default WorksOne;
