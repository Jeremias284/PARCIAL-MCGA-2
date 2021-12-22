// import React from 'react';

import React, { useEffect } from 'react';
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


  const Home = ({ getPatients, patients }) => {
    useEffect(() => {
      getPatients();
    }, []);
  
  return (
    <div className={styles.homeContainer}>
      <List className={styles.list}>
        {patients.isLoading ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        ) : (
          <div className={styles.item}>
            <div className={styles.primary}>
              <p className={styles.turns}>Monday</p>
            </div>
            {!patients.isLoading &&
              patients &&
              patients.list
                .filter((st) => st.turns.includes('Monday'))
                .slice(0, 3)
                .map((item) => {
                  return <ItemHome patient={item} key={item._id} />;
                })}
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

              <p className={styles.turns}>Tuesday</p>
            </div>

            {!patients.isLoading &&
              patients &&
              patients.list
                .filter((st) => st.turns.includes('Tuesday'))
                .slice(0, 3)
                .map((item) => {
                  return <ItemHome patient={item} key={item._id} />;
                })}

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
              <p className={styles.turns}>Wednesday</p>
            </div>

            {!patients.isLoading &&
              patients &&
              patients.list
                .filter((st) => st.turns.includes('Wednesday'))
                .slice(0, 3)
                .map((item) => {
                  return <ItemHome patient={item} key={item._id} />;
                })}

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
              <p className={styles.turns}>Thursday</p>
            </div>

            {!patients.isLoading &&
              patients &&
              patients.list
                .filter((st) => st.turns.includes('Thursday'))
                .slice(0, 3)
                .map((item) => {
                  return <ItemHome patient={item} key={item._id} />;
                })}
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
              <p className={styles.turns}>Friday</p>
            </div>

            {!patients.isLoading &&
              patients &&
              patients.list
                .filter((st) => st.turns.includes('Friday'))
                .slice(0, 3)
                .map((item) => {
                  return <ItemHome patient={item} key={item._id} />;
                })}
          </div>
        )}
      </List>
      <hr />
      <hr />
      
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