const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">LawFirm</h1>
        <nav className="nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <a href="#" className="btn btn-primary">
          Get Consultation
        </a>
      </div>
    </header>
  );
};

export default Header;
