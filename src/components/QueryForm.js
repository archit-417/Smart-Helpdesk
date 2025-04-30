import React, { useState } from 'react';

export default function QueryForm({ onSubmit }) {
  const [userQuery, setUserQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userQuery.trim()) {
      onSubmit(userQuery);
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.heading}>Ask About Automobiles</h2>
      <p style={styles.subheading}>
        Get expert answers to your car-related questions, maintenance tips, buying advice, and more.
      </p>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <textarea
          style={styles.textarea}
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
          placeholder="E.g., What's the difference between disc and drum brakes? How often should I change my oil? What should I look for when buying a used truck?"
          rows="4"
          required
        />
        
        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.button}>
            Get Answer
          </button>
        </div>
      </form>
      
      <div style={styles.exampleQueries}>
        <p style={styles.exampleTitle}>Example questions:</p>
        <div style={styles.examples}>
          <button 
            onClick={() => setUserQuery("What causes engine overheating and how can I prevent it?")}
            style={styles.exampleButton}
          >
            Engine overheating causes
          </button>
          <button 
            onClick={() => setUserQuery("What's the difference between AWD and 4WD systems?")}
            style={styles.exampleButton}
          >
            AWD vs 4WD
          </button>
          <button 
            onClick={() => setUserQuery("How to check if a used car has been in an accident?")}
            style={styles.exampleButton}
          >
            Used car history
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  formContainer: {
    backgroundColor: 'var(--secondary-bg)',
    borderRadius: '8px',
    padding: '32px',
    marginBottom: '32px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
  },
  heading: {
    fontSize: '28px',
    marginTop: 0,
    marginBottom: '16px',
    textAlign: 'center'
  },
  subheading: {
    color: 'var(--text-secondary)',
    textAlign: 'center',
    marginBottom: '24px'
  },
  form: {
    width: '100%'
  },
  textarea: {
    width: '100%',
    padding: '16px',
    borderRadius: '4px',
    backgroundColor: '#262626',
    border: '1px solid #333',
    color: 'white',
    fontSize: '16px',
    boxSizing: 'border-box',
    resize: 'vertical'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '16px'
  },
  button: {
    backgroundColor: 'var(--accent-color)',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '12px 24px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background 0.3s ease'
  },
  exampleQueries: {
    marginTop: '24px'
  },
  exampleTitle: {
    color: 'var(--text-secondary)',
    fontSize: '14px',
    marginBottom: '8px'
  },
  examples: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  exampleButton: {
    backgroundColor: '#333',
    color: 'var(--text-primary)',
    border: 'none',
    borderRadius: '16px',
    padding: '8px 16px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background 0.3s ease'
  }
};

