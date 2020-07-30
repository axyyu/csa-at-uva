import { Component } from 'react';
import PropTypes from 'prop-types';

class FamilyView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: null,
    };
  }

  animateSelect(name) {
    this.setState({ current: name });
  }

  render() {
    const familyButtons = this.props.families.map((obj) => {
      return (
        <div key={obj.name} className='family-button'>
          <div className='animal'>
            <img className='animal-img' src={obj.animalImg}></img>
          </div>

          <h4>{obj.name}</h4>
        </div>
      );
    });

    const familyPanels = this.props.families.map((obj) => {
      return (
        <div key={obj.name} className='family-container'>
          <div className='family-info'>
            <div className='animal'>
              <img className='animal-img' src={obj.animalIcon}></img>
            </div>

            <h4>{obj.name}</h4>
            <p>{obj.desc}</p>
          </div>
          <div className='family-img-container'>
            <img className='family-img' src={obj.image}></img>
          </div>
        </div>
      );
    });
    return (
      <div className='family-view'>
        <div className='family-buttons'>{familyButtons}</div>
        <div className='family-gallery'>{familyPanels}</div>
      </div>
    );
  }
}

FamilyView.propTypes = {
  families: PropTypes.array,
};

export default FamilyView;
