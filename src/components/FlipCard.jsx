const FlipCard = ({ icon, frontTitle, backTitle, backText }) => {
  return (
    <div className="col-md-4">
      <div className="flip-card" onClick={(e)=>e.currentTarget.classList.toggle("active")}>
        <div className="flip-card-inner">

          {/* Front */}
          <div className="flip-card-front wd-block welfare">
            <div className="wd-icon">
              <i className={icon}></i>
            </div>

            <h4 className="wd-heading">{frontTitle}</h4>
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