import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import styles from '../styles/TopNav.module.scss';

type TopNavProps = {
    labels: string[];
}

const TopNav = (props: TopNavProps) => {
  return (
    <div>
        <AppBar className={styles.appbar}>
            <Toolbar>
                <h3>Ryans PGP Keygen</h3>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default TopNav