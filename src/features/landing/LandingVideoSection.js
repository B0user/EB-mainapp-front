import React from 'react';
import { Box, Typography, Grid, Button, Card, CardMedia, CardContent } from '@mui/material';
import { styled } from '@mui/system';

const videos = [
    {
        title: '3 Things to Know About Having Hard Conversations',
        image: 'https://path-to-your-featured-video-image.jpg',
        description: 'John Rose gives advice for having hard conversations. Whether talking about politics, religion, relationships, or any other subject, it is important to follow these guidelines to have a successful conversation.',
        isFeatured: true,
    },
    {
        title: 'Salt Marshes | Why Do You Study That?',
        image: 'https://path-to-your-video1.jpg',
    },
    {
        title: 'Big Computers, Big Hair and Basketball Duke Decades | 1980s',
        image: 'https://path-to-your-video2.jpg',
    },
];

const FeaturedCard = styled(Card)(({ theme }) => ({
    border: '1px solid #ddd',
    boxShadow: 'none',
    '&:hover': {
        boxShadow: theme.shadows[3],
    },
    backgroundColor: '#003366',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
}));

const SmallCard = styled(Card)(({ theme }) => ({
    border: '1px solid #ddd',
    boxShadow: 'none',
    '&:hover': {
        boxShadow: theme.shadows[3],
    },
    display: 'flex',
    color: '#ffffff',
    backgroundColor: '#003366',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
}));

const FeaturedCardMedia = styled(CardMedia)({
    height: 280,
    width: '100%',
    color: '#ffffff',
});

const SmallCardMedia = styled(CardMedia)({
    height: 140,
    width: 400,
    color: '#ffffff',
});

const DukeInActionSection = () => {
    const featuredVideo = videos.find(video => video.isFeatured);
    const sideVideos = videos.filter(video => !video.isFeatured);

    return (
        <Box pb={10} px={10} style={{ backgroundColor: 'rgb(1, 81, 140)', color: '#ffffff', paddingTop: '40px'}}>
            <Typography variant="h2" textAlign="center" gutterBottom>
                Duke in Action
            </Typography>
            <Grid container spacing={4} mt={2} justifyContent="center">
                <Grid item xs={12} md={5} display="flex" justifyContent="center">
                    {featuredVideo && (
                        <FeaturedCard>
                            <FeaturedCardMedia
                                image={featuredVideo.image}
                                title={featuredVideo.title}
                            />
                            <CardContent>
                                <Typography variant="h5">{featuredVideo.title}</Typography>
                                <Typography variant="body1" paragraph>
                                    {featuredVideo.description}
                                </Typography>
                                <Button variant="contained" sx={{
                                    backgroundColor: 'white', color: 'black'}}>
                                    Watch Video on YouTube
                                </Button>
                            </CardContent>
                        </FeaturedCard>
                    )}
                </Grid>
                <Grid item xs={12} md={3} display="flex" flexDirection="column" alignItems="center">
                    <Grid container spacing={2}>
                        {sideVideos.map((video, index) => (
                            <Grid item xs={12} key={index} display="flex" justifyContent="center">
                                <SmallCard>
                                    <SmallCardMedia
                                        image={video.image}
                                        title={video.title}
                                    />
                                    <CardContent>
                                        <Typography variant="subtitle1" color="white">
                                            {video.title}
                                        </Typography>
                                    </CardContent>
                                </SmallCard>
                            </Grid>
                        ))}
                    </Grid>
                    <Box mt={2} display="flex" justifyContent="center">
                        <Button variant="contained" sx={{
                                backgroundColor: 'white', color: 'black'}}>
                            More Videos
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DukeInActionSection;
