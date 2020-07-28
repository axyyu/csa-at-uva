import Link from 'next/link';

const Navbar = () => {
  return (
    <aside className='navbar'>
      <img className='logo' src='./Official-CSA-Square-Logo.png'></img>
      <nav>
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
    </aside>
  );
};

export default Navbar;
