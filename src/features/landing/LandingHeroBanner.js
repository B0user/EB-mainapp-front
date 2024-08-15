import React from 'react';
import { Box, Typography, Button, Hidden } from '@mui/material';
import { styled } from '@mui/system';

const BackgroundImage = styled(Box)(({ theme }) => ({
    height: '60vh',
    backgroundImage: 'url("https://spotlight.duke.edu/wp-content/uploads/2024/06/duke-summer24@2x.jpg")', // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
        height: '40vh',
    },
}));

const Overlay = styled(Box)(({ theme }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
}));

const TextOverlay = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontWeight: 'bold',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '4rem',
    },
}));

const NavigationBar = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#002E6D',
    padding: theme.spacing(1),
}));

const NavButton = styled(Button)(({ theme }) => ({
    color: 'white',
    [theme.breakpoints.down('md')]: {
        fontSize: '0.8rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
    },
}));

const HeroSection = () => {
    return (
        <Box>
            <BackgroundImage>
                <Overlay />
                <TextOverlay variant="h2">
                    This is Duke
                </TextOverlay>
            </BackgroundImage>
            <Hidden mdDown>
                <NavigationBar>
                    {['Duke Health', 'Libraries', 'Giving to Duke', 'Athletics', 'About'].map((text, index, arr) => (
                        <Box
                            key={text}
                            display="flex"
                            alignItems="center"
                            borderRight={index !== arr.length - 1 ? 1 : 0}
                            borderColor="white"
                            paddingRight={2}
                            marginRight={2}
                        >
                            <NavButton>
                                {text}
                            </NavButton>
                        </Box>
                    ))}
                </NavigationBar>
            </Hidden>
        </Box>
    );
};

export default HeroSection;