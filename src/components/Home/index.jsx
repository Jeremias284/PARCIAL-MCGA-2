// import React from 'react';

import React, { useEffect } from 'react';
import { SiJava, SiJavascript, SiPython } from 'react-icons/si';
import { FcLock } from 'react-icons/fc';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { getPatients as getPatiensActions } from '../../Redux/Actions/patientActions';
// eslint-disable-next-line import/no-named-as-default
import ItemHome from './ItemHome';
import styles from './home.module.css';

// const Home = () => {
  const Home = ({ getPatients, patients }) => {
    useEffect(() => {
      getPatients();
    }, []);
  
  return (
    <div className={styles.homeContainer}>
      {/* { <h2 className={styles.title}>Patients App</h2>
      <p>Made By Ivan Kopech and Jeremias Calzada</p> } */}
       <p className={styles.subtitle}>Check your health here</p>
      <List className={styles.list}>
        {patients.isLoading ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        ) : (
          <div className={styles.item}>
            <div className={styles.primary}>
              <FcLock className={styles.icon} />
              <p className={styles.turns}>Lunes</p>
            </div>
            {!patients.isLoading &&
              patients &&
              patients.list
                .filter((st) => st.turns.includes('Lunes'))
                .slice(0, 3)
                .map((item) => {
                  return <ItemHome patient={item} key={item._id} />;
                })}
            <p className={styles.text}>Available turn!</p>
          </div>
        )}
        <Divider variant="inset" component="li" />
        {patients.isLoading ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        ) : (
          <div className={styles.item}>
            <div className={styles.primary}>
              <SiPython className={styles.icon} />

              <p className={styles.turns}>Martes</p>
            </div>

            {!patients.isLoading &&
              patients &&
              patients.list
                .filter((st) => st.turns.includes('Martes'))
                .slice(0, 3)
                .map((item) => {
                  return <ItemHome patient={item} key={item._id} />;
                })}

            <p className={styles.text}>Available turn!</p>
          </div>
        )}
        <Divider variant="inset" component="li" />
        {patients.isLoading ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        ) : (
          <div className={styles.item}>
            <div className={styles.primary}>
              <SiJavascript className={styles.icon} />
              <p className={styles.turns}>Miercoles</p>
            </div>

            {!patients.isLoading &&
              patients &&
              patients.list
                .filter((st) => st.turns.includes('Miercoles'))
                .slice(0, 3)
                .map((item) => {
                  return <ItemHome patient={item} key={item._id} />;
                })}

            <p className={styles.text}>Available turn!</p>
          </div>
        )}
        <Divider variant="inset" component="li" />
        {patients.isLoading ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        ) : (
          <div className={styles.item}>
            <div className={styles.primary}>
              <SiJava className={styles.icon} />
              <p className={styles.turns}>Jueves</p>
            </div>

            {!patients.isLoading &&
              patients &&
              patients.list
                .filter((st) => st.turns.includes('Jueves'))
                .slice(0, 3)
                .map((item) => {
                  return <ItemHome patient={item} key={item._id} />;
                })}
            <p className={styles.text}>Available turn!</p>
          </div>
        )}
      </List>
    </div>
  );
};

// export default Home;
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getPatients: getPatiensActions,
    },
    dispatch
    );
  };
  
  const mapStateToProps = (state) => ({
    patients: state.patients,
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);