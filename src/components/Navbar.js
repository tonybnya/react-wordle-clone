import logo from '../images/logo.png';

function Navbar() {
  return (
    <div>
      <img src={logo} className="logo" alt="Wordle Clone Logo" />
      <ul className="social-icons">
        <li>
          <a href="https://github.com/tonybnya">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/tonybnya">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;