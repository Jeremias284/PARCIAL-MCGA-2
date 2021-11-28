import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Main from './Main';
import Footer from './Footer';
import styles from './layout.module.css';
import PropTypes from 'prop-types'

const Layout = ({ people }) => (
  <div className={styles.layoutContainer}>
    <div className={styles.mainContainer}>
      <Header />
      <NavBar />
      <Main container={people} />
      <Footer />
    </div>
  </div>
);
Layout.propTypes = {
  people: PropTypes.object.isRequired,
};

export default Layout;