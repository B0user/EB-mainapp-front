import React from 'react';
import { Box, Typography, Grid, Button, Card, CardMedia, CardContent } from '@mui/material';
import { styled } from '@mui/system';

const resources = [
    {
        title: 'Racial Equity at Duke',
        image: 'https://duke.edu/assets/img/anti-racism-tile.jpg',
    },
    {
        title: 'Arts at Duke',
        image: 'https://duke.edu/assets/img/anti-racism-tile.jpg',
    },
    {
        title: 'Coronavirus Response',
        image: 'https://duke.edu/assets/img/coronavirus-respsonse-tile.jpg',
    },
    {
        title: 'Climate Change at Duke',
        image: 'https://duke.edu/assets/img/coronavirus-respsonse-tile.jpg',
    },
    {
        title: 'Research at Duke',
        image: 'https://duke.edu/assets/img/research-tile.jpg',
    },
    {
        title: 'For the Media',
        image: 'https://duke.edu/assets/img/for-the-media-tile.jpg',
    },
    {
        title: 'For the Media',
        image: 'https://duke.edu/assets/img/for-the-media-tile.jpg',
    },
    {
        title: 'For the Media',
        image: 'https://duke.edu/assets/img/for-the-media-tile.jpg',
    }
];

const StyledCard = styled(Card)(({ theme }) => ({
    border: '3px solid #ddd',
    boxShadow: 'none',
    '&:hover': {
        boxShadow: theme.shadows[3],
    },
    backgroundColor: '#EEEDE0'
}));

const StyledCardMedia = styled(CardMedia)({
    height: 190,
    width: 200
});

const StyledCardContent = styled(CardContent)({
    padding: '8px 2px',
    textAlign: 'center',
});

const ResourcesSection = () => {
    return (
        <Box mt={4} >
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} style={{ backgroundColor: '#BEBFD0' }}>
                    <Box ml={2} mb={4} display="flex" flexDirection="column" alignItems="flex-start">
                        <Typography variant="h2" style={{color: '#0A106E'}}>Up Next</Typography>
                        <Button variant="outlined" color="primary" style={{ marginTop: '16px', color: '#0A106E'}}>
                            More from Events at Duke
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={{ backgroundColor: 'rgb(241, 242, 243)', color: '#0A106E' }}>
                    <Typography variant="h2" ml={1} mb={2}>Resources</Typography>
                    <Grid container spacing={0.5} mb={4}>
                        {resources.map((resource, index) => (
                            <Grid item xs={12} sm={3} key={index} display="flex" justifyContent="center">
                                <StyledCard>
                                    <StyledCardMedia
                                        image={resource.image}
                                        alt={resource.title}
                                    />
                                    <StyledCardContent>
                                        <Typography variant="subtitle1" color="primary"  style={{color: '#0A106E'}}>
                                            {resource.title}
                                        </Typography>
                                    </StyledCardContent>
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ResourcesSection;