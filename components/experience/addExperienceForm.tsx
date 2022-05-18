import React from 'react';
import { Grid, InputLabel, Paper, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Controller, Control, FieldValues, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';

interface IFormInput {
    designation: string;
    duration: string;
    companyName: string;
    description: string;
}
const BorderTop = { py: 2 };
const ExperienceForm: React.FC = (): JSX.Element => {
    const { control, handleSubmit } = useForm<IFormInput>();
    const router = useRouter()
    console.log(router.pathname, '<<<PATH NAME')
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
                    }}>Add New Experience</Typography>
                </Grid>
                <Grid item lg={6} height="calc(100vh - 145px)" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={2}>
                    <Grid container
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Grid item xs={2} width="100%">
                            <InputLabel required={true}>Designation</InputLabel>
                        </Grid>

                        <Grid item xs={6}>
                            <Controller
                                name="designation"
                                control={control}
                                render={({ field, fieldState: { invalid, error: { message } = {} } }) => (
                                    <TextField {...field}
                                        sx={{ width: "100%" }}
                                        id="outlined-basic"
                                        label="Designation"
                                        variant="outlined"
                                        error={invalid}
                                        helperText={message}
                                        placeholder="Software Engineer"
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
                            <InputLabel required={true}>Duration</InputLabel>
                        </Grid>

                        <Grid item xs={6}>
                            <Controller
                                name="duration"
                                control={control}
                                render={({ field, fieldState: { invalid, error: { message } = {} } }) => (
                                    <TextField {...field}
                                        sx={{ width: "100%" }}
                                        id="outlined-basic"
                                        label="Duration"
                                        variant="outlined"
                                        error={invalid}
                                        helperText={message}
                                        placeholder="Mar 2020 - Present"
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
                            <InputLabel required={true}>Company Name</InputLabel>
                        </Grid>

                        <Grid item xs={6}>
                            <Controller
                                name="companyName"
                                control={control}
                                render={({ field, fieldState: { invalid, error: { message } = {} } }) => (
                                    <TextField {...field}

                                        sx={{ width: "100%" }}
                                        id="outlined-basic"
                                        label="Company Name"
                                        variant="outlined"
                                        error={invalid}
                                        helperText={message}
                                        placeholder="Google"
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
                            <InputLabel required={true}>Description</InputLabel>
                        </Grid>

                        <Grid item xs={6} >
                            <Controller
                                name="description"
                                control={control}
                                render={({ field, fieldState: { invalid, error: { message } = {} } }) => (
                                    <TextField {...field}
                                        sx={{ width: "100%" }}
                                        id="outlined-basic"
                                        label="Description"
                                        variant="outlined"
                                        error={invalid}
                                        helperText={message}
                                        placeholder="my role was to develop UI"
                                    />
                                )}
                            />
                        </Grid>

                    </Grid>
                </Grid>
            </Grid >
        </>
    )
}

export default ExperienceForm;