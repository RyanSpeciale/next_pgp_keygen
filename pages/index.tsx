import React from 'react';
import { Stack, TextField, Button } from '@mui/material'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import { Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { Box } from '@mui/material';



const Home: NextPage = () => {
  const [submitted, setSubmitted] = React.useState<boolean>(false);
  const [input, setInput] = React.useState<object>({ name: '', email: '' });
  const [keys, setKeys] = React.useState<object | null>(null);
  
  if (keys != null) {
    return (
      <div>
        <h1>Here are your keys</h1>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Stack direction='column'>
        <Paper elevation={5} sx={{ padding: '6px'}}>
          <Typography variant='h6' gutterBottom sx={{ marginBottom: '8px' }}>
            We will never save or log your keys!!! This site is basically hosted for free and adsense and donations cover that. Any donations will go directly to hosting this site and developing other security freeware like it. The motivation behind this site is to give people a secure and actively maintained site they can generate PGP keys and encrypt their emails/data. I believe that we ALL should have access to and understand encryption, not just computer nerds.
          </Typography>
          <Typography variant='h6' fontWeight={900} align='center'>
            &quot;It&apos;s not that I have something to hide, it&apos;s that I have nothing I want you to see.&quot;  -Anon
          </Typography>
        </Paper>
        <Box className={styles.formbox}>
          <Typography variant='h5' align='center'>Enter your last name and email to generate your keys.</Typography>
          <Stack spacing={3}>
            <TextField label='Last Name' />
            <TextField label='Email' />
            <Button>
              Submit
            </Button>
          </Stack>
        </Box>
      </Stack>
    </div>
  )
}

export default Home
