import React from 'react';
import Markdown from 'react-markdown';

export default function ResponseCard({ query, response }) {
  return (
    <div style={styles.card}>
      <div style={styles.querySection}>
        <h3 style={styles.sectionTitle}>Your Question</h3>
        <p style={styles.query}>{query}</p>
      </div>
      
      <div style={styles.divider}></div>
      
      <div style={styles.responseSection}>
        <h3 style={styles.sectionTitle}>Expert Answer</h3>
        <div style={styles.response}>
          <Markdown>
            {response}
          </Markdown>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: 'var(--secondary-bg)',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    marginBottom: '32px'
  },
  querySection: {
    marginBottom: '16px'
  },
  sectionTitle: {
    fontSize: '18px',
    marginTop: 0,
    marginBottom: '8px',
    color: 'var(--accent-color)'
  },
  query: {
    color: 'var(--text-secondary)',
    marginBottom: 0
  },
  divider: {
    height: '1px',
    backgroundColor: '#333',
    margin: '20px 0'
  },
  responseSection: {
    marginTop: '16px'
  },
  response: {
    lineHeight: '1.6',
    fontSize: '16px'
  }
};