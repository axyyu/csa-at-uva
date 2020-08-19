import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }
  toggleNav = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    const display = this.state.show ? 'block' : 'none';
    return (
      <aside className='navbar'>
        <img className='logo' src='/Official-CSA-Square-Logo.png'></img>

        <div className='bars' onClick={this.toggleNav}>
          {this.state.show ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={display}>
          <ul className='nav-list'>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/events'>
                <a>Events</a>
              </Link>
            </li>
            <li>
              <Link href='/officers'>
                <a>Officers</a>
              </Link>
            </li>
            <li>
              <Link href='/families'>
                <a>Families</a>
              </Link>
            </li>
            <li>
              <Link href='/alumni'>
                <a>Alumni</a>
              </Link>
            </li>
            <li>
              <Link href='/gallery'>
                <a>Gallery</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={`social-container ${display}`}>
          <div className='social-links'>
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </aside>
    );
  }
}

export default Navbar;
