import React from 'react';

export default function LoadingSpinner() {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>Fetching expert answer...</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 0'
  },
  spinner: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '3px solid transparent',
    borderTopColor: 'var(--accent-color)',
    borderBottomColor: 'var(--accent-color)',
    animation: 'spin 1.5s linear infinite'
  },
  text: {
    marginTop: '16px',
    color: 'var(--text-secondary)',
    fontSize: '16px'
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  }
};

// Add the animation to document
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`, styleSheet.cssRules.length);