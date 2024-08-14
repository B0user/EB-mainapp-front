import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Part1 = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            sx={{
                width: '100%',
                height: '60vh',
                backgroundImage: 'url(https://spotlight.duke.edu/wp-content/uploads/2024/06/duke-summer24@2x.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                color: '#fff',
                textAlign: 'center',
                p: 2,
            }}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    justifyContent="center"
                    sx={{
                        mb: isMobile ? 2 : 4,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            gap: isMobile ? 1 : 0,
                            boxShadow: isMobile ? 'none' : theme.shadows[4],
                            width: isMobile ? '100%' : '60%', // Ширина блока с кнопками в немобильной версии
                        }}
                    >
                        <Button
                            sx={{
                                borderRadius: isMobile ? 1 : '4px 0 0 4px',
                                width: isMobile ? '100%' : '25%',
                            }}
                            fullWidth={isMobile}
                            variant="contained"
                            color="primary"
                            size={isMobile ? 'medium' : 'large'}
                        >
                            Раздел 1
                        </Button>
                        <Button
                            sx={{
                                borderRadius: 0,
                                width: isMobile ? '100%' : '25%',
                            }}
                            fullWidth={isMobile}
                            variant="contained"
                            color="primary"
                            size={isMobile ? 'medium' : 'large'}
                        >
                            Раздел 2
                        </Button>
                        <Button
                            sx={{
                                borderRadius: 0,
                                width: isMobile ? '100%' : '25%',
                            }}
                            fullWidth={isMobile}
                            variant="contained"
                            color="primary"
                            size={isMobile ? 'medium' : 'large'}
                        >
                            Раздел 3
                        </Button>
                        <Button
                            sx={{
                                borderRadius: isMobile ? 1 : '0 4px 4px 0',
                                width: isMobile ? '100%' : '25%',
                            }}
                            fullWidth={isMobile}
                            variant="contained"
                            color="primary"
                            size={isMobile ? 'medium' : 'large'}
                        >
                            Раздел 4
                        </Button>
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
};

export default Part1;