import React from 'react';

const Footer = () => {
  return (
    <footer className="modal__footer">
      <p>
        Ⓒ
        <a href="https://dalius.digital" target="_blank">
          {' '}
          Dalius Slavickas{' '}
        </a>
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
