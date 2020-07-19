import { FunctionComponent } from "react";
import Link from "next/link";

type NavbarProps = {};

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <header>
      <nav className="navbar">
        <></>
        <ul className="nav-list">
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          <li>
            <Link href="/officers">
              <a>Officers</a>
            </Link>
          </li>
          <li>
            <Link href="/families">
              <a>Families</a>
            </Link>
          </li>
          <li>
            <Link href="/alumni">
              <a>Alumni</a>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
          </li>
        </ul>
        <></>
      </nav>
    </header>
  );
};

export default Navbar;
