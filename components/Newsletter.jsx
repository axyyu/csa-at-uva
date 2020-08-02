import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

const Newsletter = (props) => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-wrapper">
        <div className="newsletter">
          <div className="close" onClick={() => props.closeNewsletter()}>
            <FaTimes />
          </div>
          <div className="csa-logo-container">
            <img src="favicon.png" alt="CSA Logo"></img>
          </div>

          <h2>Never miss an event again.</h2>

          <div className="newsletter-input">
            <label>Name</label>
            <input type="text" placeholder="Your Name"></input>
          </div>

          <div className="newsletter-input">
            <label>Email</label>
            <input type="email" placeholder="yourid@virginia.edu"></input>
          </div>

          <button onClick={() => props.closeNewsletter()}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

Newsletter.propTypes = {
  closeNewsletter: PropTypes.func,
};

export default Newsletter;
