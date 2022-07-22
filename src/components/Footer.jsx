import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          {/* eslint-disable-next-line */}
          <a href="" className="grey-text text-lighten-4 right">
            All Rights Reserved
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
