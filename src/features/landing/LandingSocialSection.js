import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

// Import images directly from your project folder
import image1 from './social1.jpg';
import image2 from './social2.jpg';
import image3 from './social3.jpg';
import image4 from './social4.jpg';

const socialIcons = [
    { icon: <FacebookIcon />, url: 'https://facebook.com' },
    { icon: <TwitterIcon />, url: 'https://twitter.com' },
    { icon: <InstagramIcon />, url: 'https://instagram.com' },
    { icon: <YouTubeIcon />, url: 'https://youtube.com' },
];

const SocialCard = styled(Card)(({ theme }) => ({
    border: '1px solid #ddd',
    boxShadow: 'none',
    '&:hover': {
        boxShadow: theme.shadows[3],
    },
    maxWidth: '200px',
}));

const SocialCardMedia = styled(CardMedia)({
    height: 180,
    width: '100%',
});

const DukeSocialSection = () => {
    return (
        <Box py={4} style={{ backgroundColor: '#f7f7f7', color: '#000' }}>
            <Typography variant="h3" textAlign="center" gutterBottom>
                #DUKESOCIAL
            </Typography>
            <Grid container justifyContent="center" spacing={4}>
                <Grid item>
                    <SocialCard>
                        <SocialCardMedia
                            component="img"
                            src={image1}
                            title="Duke Social Post 1"
                        />
                    </SocialCard>
                </Grid>
                <Grid item>
                    <SocialCard>
                        <SocialCardMedia
                            component="img"
                            src={image2}
                            title="Duke Social Post 2"
                        />
                    </SocialCard>
                </Grid>
                <Grid item>
                    <SocialCard>
                        <SocialCardMedia
                            component="img"
                            src={image3}
                            title="Duke Social Post 3"
                        />
                    </SocialCard>
                </Grid>
                <Grid item>
                    <SocialCard>
                        <SocialCardMedia
                            component="img"
                            src={image4}
                            title="Duke Social Post 4"
                        />
                    </SocialCard>
                </Grid>
                <Grid item>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        {socialIcons.map((social, index) => (
                            <IconButton
                                key={index}
                                color="primary"
                                aria-label={`link to ${social.url}`}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {social.icon}
                            </IconButton>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DukeSocialSection;
