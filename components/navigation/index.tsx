import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';

const NavigationBar: React.FC<{ pages: string[] }> = ({ pages }: { pages: string[] }): JSX.Element => {
	const router = useRouter();
	const { pathname } = router;
	const path = pathname.split('/')
	return (
		<AppBar position="static" sx={{ backgroundColor: 'black' }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters >
					<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						Portfolio Admin
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Button
								key={page}
								sx={{ my: 2, color: 'white', display: 'block', backgroundColor: path[1] === page.toLowerCase() ? 'grey!important' : 'black', marginRight: '5px' }}
								onClick={() => router.push(page.toLowerCase())}
							>
								{page}
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default NavigationBar;