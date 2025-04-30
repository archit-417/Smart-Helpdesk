import React from 'react';

export default function ErrorMessage({ message }) {
  return (
    <div style={styles.container}>
      <div style={styles.icon}>!</div>
      <h3 style={styles.heading}>Error</h3>
      <p style={styles.message}>{message}</p>
      <p style={styles.help}>Please try again or rephrase your question.</p>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: 'rgba(229, 115, 115, 0.1)',
    border: '1px solid var(--error-color)',
    borderRadius: '8px',
    padding: '24px',
    marginBottom: '32px',
    textAlign: 'center'
  },
  icon: {
    backgroundColor: 'var(--error-color)',
    color: 'white',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  heading: {
    color: 'var(--error-color)',
    marginTop: 0,
    marginBottom: '8px'
  },
  message: {
    marginBottom: '16px'
  },
  help: {
    color: 'var(--text-secondary)',
    fontSize: '14px',
    margin: 0
  }
};