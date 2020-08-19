import PropTypes from 'prop-types';
import Link from 'next/link';

const GalleryView = (props) => {
  const galleries = props.galleries.map((obj) => {
    return (
      <Link href={`/gallery/${obj.id}`}>
        <a className='gallery'>
          <img alt='Gallery' src={obj.image}></img>
          <div className='gallery-info'>
            <h4>{obj.name}</h4>
          </div>
        </a>
      </Link>
    );
  });

  const spotlight = galleries.length > 0 ? galleries[0] : null;
  const featuredOne = galleries.length > 1 ? galleries[1] : null;
  const featuredTwo = galleries.length > 2 ? galleries[2] : null;
  const galleryList = galleries.filter((obj, index) => {
    return index > 2;
  });

  const galleryLayout = (
    <>
      <div className='gallery-showcase'>
        <div className='gallery-spotlight'>{spotlight}</div>
        <div className='gallery-featured'>
          {featuredOne}
          {featuredTwo}
        </div>
      </div>
      <div className='gallery-list'>{galleryList}</div>
    </>
  );

  return (
    <div className='gallery-view'>
      {galleries.length == 0 ? (
        <p>Sorry, no galleries found.</p>
      ) : (
        galleryLayout
      )}
    </div>
  );
};

GalleryView.propTypes = {
  galleries: PropTypes.array,
};

export default GalleryView;
