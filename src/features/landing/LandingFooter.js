import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#333', color: '#fff', padding: 3 }}>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ fontWeight: '500' }}>
                        © 2024 Ваша компания. Все права защищены.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Link href="https://www.facebook.com" target="_blank" rel="noopener">
                        <IconButton sx={{ color: '#fff' }}>
                            <FacebookIcon />
                        </IconButton>
                    </Link>
                    <Link href="https://www.twitter.com" target="_blank" rel="noopener">
                        <IconButton sx={{ color: '#fff' }}>
                            <TwitterIcon />
                        </IconButton>
                    </Link>
                    <Link href="https://www.instagram.com" target="_blank" rel="noopener">
                        <IconButton sx={{ color: '#fff' }}>
                            <InstagramIcon />
                        </IconButton>
                    </Link>
                    <Link href="https://www.linkedin.com" target="_blank" rel="noopener">
                        <IconButton sx={{ color: '#fff' }}>
                            <LinkedInIcon />
                        </IconButton>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;