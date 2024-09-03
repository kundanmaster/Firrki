// ScrollToTopButton.js
import React from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Import the arrow up icon from React Icons

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        backgroundColor: '#AD8C87',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        padding: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
