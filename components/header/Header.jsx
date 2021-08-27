import Link from 'next/link';

/* Components */
// import DarkModeToggle from "../DarkModeToggle";

const Header = ({ props }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-2">
        <Link href="/">
          <a className="nav-item nav-link">Home</a>
        </Link>
        <Link href="/about">
          <a className="nav-item nav-link">About</a>
        </Link>

      </nav>
      <style jsx>{`
        a {
          margin: 0 10px 0 0;
        }
      `}</style>
    </>
  );
};

export default Header;
