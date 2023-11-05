import "./ContentLoader.css";

const ContentLoader = () => {
  return (
    <div>
      <div className="loaderContent">
        <div data-glitch="Loading..." className="glitchContent">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default ContentLoader;
