import React from 'react';

export default function Header() {
  return (
    <header style={styles.header}>
      <div className="container" style={styles.container}>
        <h1 style={styles.logo}>AutoExpert</h1>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}><a href="#about" style={styles.navLink}>About Contributors</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: 'var(--secondary-bg)',
    padding: '16px 0',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
    marginBottom: '32px'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 'bold',
    cursor: 'default',
    color: 'var(--accent-color)'
  },
  nav: {
    display: 'flex'
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex'
  },
  navItem: {
    marginLeft: '24px'
  },
  navLink: {
    fontWeight: '700',
    color: 'var(--text-primary)',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    fontSize: '16px'
  }
};