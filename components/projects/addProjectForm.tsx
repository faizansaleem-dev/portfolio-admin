import React from 'react';
import { Button, Grid, Input, InputLabel, Paper, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Controller, Control, FieldValues, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';

interface IFormInput {
	name: string;
	description: string;
	projectUrl: string;
	videoUrl: string;
	logo: any;
}
const BorderTop = { py: 2 };
const ProjectForm: React.FC = (): JSX.Element => {
	const { control, handleSubmit } = useForm<IFormInput>();
	return (
		<>
			<Grid container spacing={2} sx={BorderTop}>
				<Grid item lg={6} height="calc(100vh - 145px)" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={2}>
					<Typography component={'h1'} sx={{
						fontFamily: 'monospace',
						fontWeight: 700,
						fontSize: '30px',
						letterSpacing: '.3rem',
						color: 'inherit',
						textDecoration: 'none',
					}}>Add New Project</Typography>
				</Grid>
				<Grid item lg={6} height="calc(100vh - 145px)" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={2}>
					<Grid container
						alignItems="center"
						justifyContent="center"
					>
						<Grid item xs={2} width="100%">
							<InputLabel required={true}>Project Name</InputLabel>
						</Grid>

						<Grid item xs={6}>
							<Controller
								name="name"
								control={control}
								render={({ field, fieldState: { invalid, error: { message } = {} } }) => (
									<TextField {...field}
										sx={{ width: "100%" }}
										id="outlined-basic"
										label="Project Name"
										variant="outlined"
										error={invalid}
										helperText={message}
										placeholder="Project Name"
									/>
								)}
							/>
						</Grid>
					</Grid>

					<Grid container
						alignItems="center"
						justifyContent="center"
					>
						<Grid item xs={2}>
							<InputLabel required={true}>Project Description</InputLabel>
						</Grid>

						<Grid item xs={6}>
							<Controller
								name="description"
								control={control}
								render={({ field, fieldState: { invalid, error: { message } = {} } }) => (
									<TextField {...field}
										sx={{ width: "100%" }}
										id="outlined-basic"
										label="Project Description"
										variant="outlined"
										error={invalid}
										helperText={message}
										placeholder="It is my first project"
									/>
								)}
							/>
						</Grid>
					</Grid>
					<Grid container
						alignItems="center"
						justifyContent="center"
					>
						<Grid item xs={2}>
							<InputLabel>Project Url</InputLabel>
						</Grid>

						<Grid item xs={6}>
							<Controller
								name="projectUrl"
								control={control}
								render={({ field, fieldState: { invalid, error: { message } = {} } }) => (
									<TextField {...field}
										sx={{ width: "100%" }}
										id="outlined-basic"
										label="Project Url"
										variant="outlined"
										error={invalid}
										helperText={message}
										placeholder="http://myproject.com"
									/>
								)}
							/>
						</Grid>

					</Grid>

					<Grid container
						alignItems="center"
						justifyContent="center"
					>
						<Grid item xs={2}>
							<InputLabel>Video Url</InputLabel>
						</Grid>

						<Grid item xs={6} >
							<Controller
								name="videoUrl"
								control={control}
								render={({ field, fieldState: { invalid, error: { message } = {} } }) => (
									<TextField {...field}
										sx={{ width: "100%" }}
										id="outlined-basic"
										label="Video Url"
										variant="outlined"
										error={invalid}
										helperText={message}
										placeholder="http://myproject.com"
									/>
								)}
							/>
						</Grid>

					</Grid>
					<Grid container
						alignItems="center"
						justifyContent="center"
					>
						<Grid item xs={2}>
							<InputLabel required={true}>Logo</InputLabel>
						</Grid>

						<Grid item xs={6} >
							<Controller
								name="logo"
								control={control}
								render={({ field, fieldState: { invalid, error: { message } = {} } }) => (
									<Input {...field}
										type='file'
										sx={{ width: "100%" }}
										id="outlined-basic"
										error={invalid}
									/>
								)}
							/>
						</Grid>

					</Grid>
					<Grid container
						alignItems="flex-start"
						justifyContent="center"
					>
						<Grid item xs={2}>
							<Button variant='contained' color='primary'>Add</Button>
						</Grid>
						<Grid item xs={6}></Grid>
					</Grid>
				</Grid>
			</Grid >
		</>
	)
}

export default ProjectForm;