import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div style={styles.container} role="main">
      <h1 style={styles.title}>
        404
        <span style={styles.srOnly}> Error</span>
      </h1>
      <p style={styles.subtitle} role="heading" aria-level={2}>Page Not Found</p>
      <p style={styles.message}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" style={styles.link} aria-label="Return to Hayes Lab home page">
        Return to Home
      </Link>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '6rem',
    color: '#507DCD',
    margin: '0',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '2rem',
    color: '#333',
    margin: '10px 0',
    fontWeight: 'bold',
  },
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: '0',
  },
  message: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '30px',
  },
  link: {
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: '#507DCD',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    fontSize: '1.1rem',
    transition: 'background-color 0.2s',
  },
};

export default NotFound;
