const FlipCard = ({ icon, frontTitle, frontText, backTitle, backText }) => {
  return (
    <div className="col-md-4">
      <div className="flip-card">
        <div className="flip-card-inner">

          {/* Front */}
          <div className="flip-card-front wd-block welfare">
            <div className="wd-icon">
              <i className={icon}></i>
            </div>

            <h4 className="wd-heading">{frontTitle}</h4>
            <p>{frontText}</p>
          </div>

          {/* Back */}
          <div className="flip-card-back wd-block welfare">
            <h4 className="wd-heading">{backTitle}</h4>
            <p>{backText}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FlipCard;