import { Component } from 'react';
import PropTypes from 'prop-types';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

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

class FamilyView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
    };

    this.animateSelect.bind(this);
    this.animateLeft.bind(this);
    this.animateRight.bind(this);
  }

  animateSelect(name) {
    const famIndex = this.props.families.findIndex((obj) => obj.name === name);
    this.setState({ current: famIndex });
  }

  animateRight() {
    const famIndex = (this.state.current + 1) % this.props.families.length;
    this.setState({ current: famIndex });
  }

  animateLeft() {
    const famIndex =
      (this.state.current - 1 + this.props.families.length) %
      this.props.families.length;
    this.setState({ current: famIndex });
  }

  render() {
    const familyButtons = this.props.families.map((obj) => {
      return (
        <div
          key={obj.name}
          className='family-button'
          onClick={() => this.animateSelect(obj.name)}
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
        <p className='desc'>
          Every year, all CSA members are assigned to three different families.
          Families play a major role in the social activites in CSA.
        </p>
        <div className='family-buttons'>{familyButtons}</div>
        <div className='family-gallery-wrapper'>
          <div className='family-gallery'>
            <FamilyPanel
              {...this.props.families[this.state.current]}
            ></FamilyPanel>
          </div>
          <div className='left-arrow' onClick={() => this.animateLeft()}>
            <FaChevronLeft />
          </div>
          <div className='right-arrow' onClick={() => this.animateRight()}>
            <FaChevronRight />
          </div>
        </div>
      </div>
    );
  }
}

FamilyView.propTypes = {
  families: PropTypes.array,
};

export default FamilyView;
