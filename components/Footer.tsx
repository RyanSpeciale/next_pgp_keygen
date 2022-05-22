import React from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import styles from '../styles/Bottom.module.scss';
import { Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Github } from 'grommet-icons';
import { Twitter } from 'grommet-icons';

type BottomProps = {
	name: string;
};

/**Please do not remove this Footer if using this code, this is the only credit for the author of the code.
 * If you wish to remove this please email me at difficultoctet@gmail.com to discuss a one time fee.
 */

const Bottom = (props: BottomProps) => {
	return (
		<div className={styles.container}>
			<Box className={styles.box} component='div'>
				<Stack direction='row' spacing={1}>
					<Typography
						variant='h6'
						align='center'
						gutterBottom
						className={styles.credit}
					>
						Coded with{' '}
						<span role='img' aria-label='Heart Emoji'>
							💗
						</span>{' '}
						by {props.name}.
					</Typography>
                    <Link href='https://github.com/RyanSpeciale' passHref>
                        <IconButton>
                            <Github size='medium'/>
                        </IconButton>
                    </Link>
                    <Link href='https://twitter.com/RyanSpeciale' passHref>
                        <IconButton>
                            <Twitter size='medium'/>
                        </IconButton>
                    </Link>
				</Stack>
			</Box>
		</div>
	);
};

export default Bottom;