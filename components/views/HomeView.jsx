import Link from 'next/link';

import ThisWeekInCsa from '../ThisWeekInCsa';
import Carousel from '../Carousel';

const HomeView = (props) => {
  const homeImages = props.home.images.map((obj) => (
    <img key={obj} src={obj} alt='Home Image' />
  ));
  return (
    <div className='home-view'>
      <div className='home-gallery-wrapper'>
        <Carousel showArrows={false}>{homeImages}</Carousel>
      </div>
      <h1>
        Welcome to <span className='highlight'>CSA at UVA</span>
      </h1>
      <p className='mission-statement'>
        The Chinese Student Association (CSA), as one of the largest
        Asian-American cultural organizations on grounds, seeks to promote
        awareness and appreciation for traditional and modern Chinese culture
        within the University and greater Charlottesville community. CSA hosts
        an array of cultural and social events designed to reach out to and
        bring together both native and ethnic Chinese, as well as the
        non-Chinese populations of UVA, in order to share and celebrate Chinese
        culture.
      </p>

      <section className='home-newsletter'>
        <div className='newsletter-info'>
          <h2>Join Our Newsletter</h2>
          <p>
            Follow our newsletter to receive notifications for events and fun
            activities.
          </p>
        </div>

        <button onClick={() => props.openNewsletter()}>
          Join Our Newsletter
        </button>
      </section>

      <ThisWeekInCsa />

      <div className='section-list'>
        <section className='family'>
          <h2>See Our Families</h2>

          <p>Families are an integral part of CSA.</p>

          <Link href='/families'>
            <a>
              <button>View Families</button>
            </a>
          </Link>
        </section>
        <section className='officers'>
          <h2>Talk to Our Officers</h2>

          <p>Our officers are very cool</p>

          <Link href='/officers'>
            <a>
              <button>View Officers</button>
            </a>
          </Link>
        </section>

        <section className='gallery'>
          <h2>View Our Past Events</h2>

          <p>
            See pictures and videos of our past performances and social events!
          </p>

          <Link href='/gallery'>
            <a>
              <button>View Gallery</button>
            </a>
          </Link>
        </section>
      </div>
    </div>
  );
};

HomeView.propTypes = {};

export default HomeView;
