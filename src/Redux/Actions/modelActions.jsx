import React from 'react';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h2 className={styles.title}>Patients App</h2>
      <p>Made By Ivan Kopech and Jeremias Calzada</p>
    </div>
  );
};

export default Home;