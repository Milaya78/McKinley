const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 LawFirm. All Rights Reserved.</p>
        <address>
          Contact us at: <a href="mailto:info@lawfirm.com">info@lawfirm.com</a>
        </address>
        <nav className="footer-nav">
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
