import React from 'react';
import { MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { logOut as logOutAction } from '../../../Redux/Actions/authActions';
import styles from './header.module.css';

const Header = ({ authenticated, name, logOut }) => {
  const onLogout = (values) => {
    logOut(values);
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <h2 className={styles.title}>Patients App</h2>
        </Link>
        {!authenticated && (
          <div className={styles.loginButtons}>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <p className={styles.signIn}>Sign In</p>
            </Link>
            <div className={styles.signUp}>|</div>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <p className={styles.signUp}>Sign Up</p>
            </Link>
          </div>
        )}
        {authenticated && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Chip
              sx={{
                color: 'white',
              }}
              avatar={
                <Avatar
                  sx={{
                    textTransform: 'uppercase',
                  }}
                >
                  {name.charAt(0)}
                </Avatar>
              }
              label={name}
            />
            <Link
              onClick={() => onLogout()}
              to="/"
              style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                border: '1px solid white',
                margin: '0.4rem',
                padding: '0.4rem',
                borderRadius: '5px',
              }}
            >
              <p className={styles.logOut}>Log out</p>
              <MdLogout
                style={{
                  color: 'gray',
                  marginTop: '0.2rem',
                }}
              />
            </Link>
          </Box>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      logOut: logOutAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  name: state.auth.name,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);