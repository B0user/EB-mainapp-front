import React from 'react';
import { Box, Button, Typography, Grid, Paper, Link, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import SchoolIcon from '@mui/icons-material/School';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HomeIcon from '@mui/icons-material/Home';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const UniversityBlock = () => {
    return (
        <Paper elevation={3} style={{ padding: 20, maxWidth: 1200, margin: 'auto' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>
                        Университет Западной Австралии (UWA)
                    </Typography>
                    <Box display="flex" alignItems="center" mb={2}>
                        <LocationOnIcon />
                        <Typography variant="body1" style={{ marginLeft: 8 }}>
                            35 Stirling Hwy, Кроули WA 6009
                        </Typography>
                    </Box>
                    <Button variant="contained" color="primary" style={{ marginBottom: 20 }}>
                        Подать документы
                    </Button>
                    <Box>
                        <IconButton color="primary" aria-label="YouTube" href="#">
                            <YouTubeIcon />
                        </IconButton>
                        <IconButton color="primary" aria-label="Facebook" href="#">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton color="primary" aria-label="LinkedIn" href="#">
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton color="primary" aria-label="Twitter" href="#">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton color="primary" aria-label="Website" href="#">
                            <LanguageIcon />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img
                        src="path-to-your-image.jpg"
                        alt="UWA"
                        style={{ width: '100%', borderRadius: 8 }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: 20 }}>
                <Grid item xs={6} sm={3}>
                    <Box display="flex" alignItems="center">
                        <LanguageIcon />
                        <Typography variant="body2" style={{ marginLeft: 8 }}>
                            Язык обучения <br /> Английский
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box display="flex" alignItems="center">
                        <MonetizationOnIcon />
                        <Typography variant="body2" style={{ marginLeft: 8 }}>
                            Стоимость обучения <br /> от 20,000 до 90,000 USD
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box display="flex" alignItems="center">
                        <SchoolIcon />
                        <Typography variant="body2" style={{ marginLeft: 8 }}>
                            Гранты <br /> Есть
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box display="flex" alignItems="center">
                        <HomeIcon />
                        <Typography variant="body2" style={{ marginLeft: 8 }}>
                            Стоимость проживания <br /> от 300 USD до 350 USD
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default UniversityBlock;