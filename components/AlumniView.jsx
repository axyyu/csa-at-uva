import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";

const AlumniView = (props) => {
  const pastYearContainers = props.pastYears.map((obj) => {
    const families = obj.families.map((fam) => {
      return (
        <div className="family">
          <div className="family-img-container">
            <img alt="Family Image" src={fam.animalImg}></img>
          </div>
          <h4 className="family-name">{fam.name}</h4>
        </div>
      );
    });
    return (
      <div className="past-year-container">
        <div className="year">
          <h2>{obj.year}</h2>
        </div>
        <div className="year-families">{families}</div>
        <div className="year-link">
          <h4>Summary</h4>
          <FaArrowRight />
        </div>
      </div>
    );
  });

  return (
    <div className="alumni-view">
      <div className="past-year-list">{pastYearContainers}</div>
    </div>
  );
};

AlumniView.propTypes = {
  pastYears: PropTypes.array,
};

export default AlumniView;
