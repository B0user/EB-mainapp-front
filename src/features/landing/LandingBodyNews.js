import React from 'react';
import { Box, Typography, Button, Grid, Divider, Link } from '@mui/material';
import { styled } from '@mui/system';

const NewsImage = styled('img')({
    width: '90%',
    borderRadius: '6px',
    border: '5px solid #ccc',
});

const NewsSection = () => {
    return (
        <Box mb={8} mt={4} px={2}>
            <Box display="flex" justifyContent="space-between" alignItems="center" width="90%" px={2}>
                <Typography variant="h3">
                    Duke <span style={{ color: '#FF9900' }}>TODAY</span>
                </Typography>
                <Button variant="outlined" color="primary" style={{ borderColor: '#ccc' }}>
                    Working@Duke
                </Button>
            </Box>
            <Divider style={{ margin: '16px 0' }} />
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={5}>
                    <Box display="flex" justifyContent="center">
                        <NewsImage src="https://duke.edu/assets/img/dukexml/MRI%2520with%2520brain%2520tumor%2520Full-width%2520Image-187.jpg" alt="News" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={5} display="flex" flexDirection="column" justifyContent="center">
                    <Box mt={2}>
                        {['HackBio: A Taste of Careers in Science', 'Duke 100 Trailblazer: Rosa Gonzalez-Guarda', 'Duke Experts on How to Survive Severe Heat', 'Disability at Duke, From Academics to Advocacy'].map((text, index) => (
                            <Box key={index} mb={index < 3 ? 2 : 0}>
                                <Typography variant="body1">
                                    <Link href="#" underline="none" color="inherit" fontSize="15px">
                                        {text}
                                    </Link>
                                </Typography>
                                {index < 3 && <Divider style={{ margin: '8px 0' }} />}
                            </Box>
                        ))}
                    </Box>
                    <Box mt={4} display="flex" justifyContent="center">
                        <Button variant="outlined" color="primary" style={{ borderColor: '#ccc' }}>
                            More News from Duke Today
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default NewsSection;