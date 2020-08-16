import { useRef } from 'react';
import PropTypes from 'prop-types';

import CsaCarousel from '../Carousel';

const FamilyPanel = (props) => {
  return (
    <div key={props.name} className='family-container'>
      <div className='family-img-container'>
        <img className='family-img' src={props.image}></img>
      </div>
      <div className='family-info-container'>
        <div className='family-info'>
          <div className='animal'>
            <img className='animal-img' src={props.animalImg}></img>
          </div>

          <h2>{props.name}</h2>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

const FamilyView = (props) => {
  const carouselRef = useRef();
  const familyPanels = props.families.map((obj) => {
    return <FamilyPanel key={obj.name} {...obj}></FamilyPanel>;
  });
  const familyButtons = props.families.map((obj, slide) => {
    return (
      <div
        key={obj.name}
        className='family-button'
        onClick={() => carouselRef.current.updateCurrentSlide(slide)}
      >
        <div className='animal'>
          <img className='animal-img' src={obj.animalImg}></img>
        </div>

        <h4>{obj.name}</h4>
      </div>
    );
  });

  return (
    <div className='family-view'>
      <div className='family-buttons'>{familyButtons}</div>
      <div className='family-gallery-wrapper'>
        <CsaCarousel ref={carouselRef}>{familyPanels}</CsaCarousel>
      </div>
    </div>
  );
};

FamilyView.propTypes = {
  families: PropTypes.array,
};

export default FamilyView;
