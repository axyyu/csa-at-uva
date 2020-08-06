import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Newsletter = (props) => {
  return (
    <div className='newsletter-container'>
      <div className='newsletter-wrapper'>
        <div className='newsletter'>
          <div className='close' onClick={() => props.closeNewsletter()}>
            <FaTimes />
          </div>
          <div className='csa-logo-container'>
            <img src='csa-logo.png' alt='CSA Logo'></img>
          </div>

          <h2>Never miss an event again.</h2>

          <form
            action='https://facebook.us20.list-manage.com/subscribe/post?u=5df38cf096c70a0a7d9613210&amp;id=a7ebb0ef17'
            method='post'
            name='mc-embedded-subscribe-form'
            target='_blank'
          >
            <div className='newsletter-input'>
              <label>Email *</label>
              <input
                type='email'
                placeholder='yourid@virginia.edu'
                name='EMAIL'
                required
              ></input>
            </div>

            <div className='newsletter-input'>
              <label>First Name</label>
              <input type='text' placeholder='Your Name' name='FNAME'></input>
            </div>

            <div className='newsletter-input'>
              <label>Last Name</label>
              <input type='text' placeholder='Your Name' name='LNAME'></input>
            </div>

            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

Newsletter.propTypes = {
  closeNewsletter: PropTypes.func,
};

export default Newsletter;
