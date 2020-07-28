import Link from 'next/link';

const Navbar = () => {
  return (
    <aside className='navbar'>
      <img className='logo' src='./Official-CSA-Square-Logo.png'></img>
      <nav>
        <ul className='nav-list'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/events'>Events</Link>
          </li>
          <li>
            <Link href='/officers'>Officers</Link>
          </li>
          <li>
            <Link href='/families'>Families</Link>
          </li>
          <li>
            <Link href='/alumni'>Alumni</Link>
          </li>
          <li>
            <Link href='/gallery'>Gallery</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
