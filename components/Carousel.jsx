import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';

class CsaCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentSlide: 0 };
  }
  select = () => {
    this.setState((state) => ({
      currentSlide: state.currentSlide + 1,
    }));
  };
  prev = () => {
    this.setState((state) => ({
      currentSlide: state.currentSlide - 1,
    }));
  };
  updateCurrentSlide = (index) => {
    const { currentSlide } = this.state;

    if (currentSlide !== index) {
      this.setState({
        currentSlide: index,
      });
    }
  };
  render() {
    return (
      <Carousel
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        useKeyboardArrows={true}
        stopOnHover={true}
        swipeable={true}
        showThumbs={false}
        selectedItem={this.state.currentSlide}
        onChange={this.updateCurrentSlide}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <div className='left-arrow' onClick={onClickHandler} title={label}>
            <FaChevronLeft />
          </div>
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <div className='right-arrow' onClick={onClickHandler} title={label}>
            <FaChevronRight />
          </div>
        )}
      >
        {this.props.children}
      </Carousel>
    );
  }
}

export default CsaCarousel;
{
  /* <div className='carousel'>
        <div className='family-gallery-wrapper'>
          <div className='family-gallery'>{}</div>
        </div>
      </div> */
}
