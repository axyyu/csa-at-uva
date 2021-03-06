import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const AlumniView = (props) => {
  const pastYearContainers = props.pastYears
    .sort((a, b) => b.endYear - a.endYear)
    .map((obj) => {
      return (
        <div className='past-year-container' key={obj.endYear}>
          <div className='chinafest'>
            <img src={obj.chinafestImg} alt='Chinafest Image'></img>
          </div>

          <div className='past-year-info'>
            <div className='year'>
              <h2>
                {obj.startYear} - {obj.endYear}
              </h2>
            </div>
            <Link href={`/alumni/${obj.id}`}>
              <a href={`/alumni/${obj.id}`}>
                <div className='year-link'>
                  <h4>Summary</h4>
                  <FaArrowRight />
                </div>
              </a>
            </Link>
          </div>
        </div>
      );
    });

  return (
    <div className='alumni-view'>
      <div className='past-year-list'>{pastYearContainers}</div>
    </div>
  );
};

AlumniView.propTypes = {
  pastYears: PropTypes.array,
};

export default AlumniView;
