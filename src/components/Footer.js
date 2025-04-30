import React from 'react';

export default function Footer() {
  return (
    <footer id="about" style={styles.footer}>
      <div style={styles.footerContainer}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h3 style={styles.footerHeading}>AutoExpert</h3>
            <p style={styles.footerText}>
              Your trusted source for automobile knowledge and advice.
            </p>
          </div>
          
          <div style={styles.footerSection}>
            <h3 style={styles.footerHeading}>Contributors: </h3>
            <div>
              <ul style={styles.socialLinks}>
                <li><a href="https://twitter.com" style={styles.socialLink}>Archit Srivastava</a></li>
                <li><a href="https://facebook.com" style={styles.socialLink}>Chaitanya Shekhar Pandey</a></li>
                <li><a href="https://instagram.com" style={styles.socialLink}>Ayush Kumar Tank</a></li>
              </ul>            
            </div>
          </div>
        </div>
        
        <div style={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} AutoExpert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footerContainer: {
    maxWidth: '90%',
    margin: '0 auto',
    padding: '0 20px'
  },
  footer: {
    backgroundColor: 'var(--secondary-bg)',
    color: 'var(--text-secondary)',
    padding: '40px 0 20px',
    marginTop: '64px'
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: '32px'
  },
  footerSection: {
    flex: '1',
    minWidth: '250px',
    marginBottom: '24px'
  },
  footerHeading: {
    color: 'var(--text-primary)',
    marginBottom: '16px',
    fontSize: '18px'
  },
  footerText: {
    lineHeight: '1.6',
    marginBottom: '16px'
  },
  footerList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  footerLink: {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '8px',
    transition: 'color 0.3s ease'
  },
  socialLinks: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '16px'
  },
  socialLink: {
    color: 'var(--accent-color)',
    textDecoration: 'none'
  },
  copyright: {
    borderTop: '1px solid #333',
    paddingTop: '20px',
    textAlign: 'center'
  }
};