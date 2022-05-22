import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import styles from '../styles/TopNav.module.scss';
import { Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';

type TopNavProps = {
    labels: string[];
}

const TopNav = (props: TopNavProps) => {
  return (
    <div>
        <AppBar  className={styles.appbar}>
            <Toolbar>
                <Typography variant='h5' className={styles.title}>
                  Ryan&apos;s PGP Keygen
                </Typography>
                <Stack direction='row' spacing={2}>
                  <Link href='#' passHref>
                    <Button className={styles.button}>{props.labels[0]}</Button>
                  </Link>
                  <Link href='#' passHref>
                    <Button className={styles.button}>{props.labels[1]}</Button>
                  </Link>
                  <Link href='#' passHref>
                    <Button className={styles.button}>{props.labels[2]}</Button>
                  </Link>
                  <Link href='#' passHref>
                    <Button className={styles.button}>{props.labels[3]}</Button>
                  </Link>
                  <Link href='#' passHref>
                    <Button className={styles.button}>{props.labels[4]}</Button>
                  </Link>
                </Stack>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default TopNav