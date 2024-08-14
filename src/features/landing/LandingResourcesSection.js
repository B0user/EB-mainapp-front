import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const ResourcesSection = () => {
    const resources = [
        { count: 150, title: 'Nazarbayev University', img: 'https://vlast.kz/media/pages/8z/17103992352mfah_1600x900.jpg' },
        { count: 200, title: 'Astana IT University', img: 'https://astanait.edu.kz/wp-content/uploads/2020/11/DSC01511-scaled.jpg' },
        { count: 10, title: 'Massachusetts Institute of Technology', img: 'https://news.mit.edu/sites/default/files/images/202304/mit-entrance-aerial-view-00_0.jpg' },
        { count: 120, title: 'Abai University', img: 'https://upload.wikimedia.org/wikipedia/commons/8/84/KazNPU_imeni_Abaya.JPG' },
        { count: 4, title: 'Princeton University', img: 'https://www.princeton.edu//sites/default/files/images/2017/06/20060425_NassauHall_JJ_IMG_5973.jpg' },

    ];

    return (
        <Box sx={{ backgroundColor: '#f7f7f7', padding: 4 }}>
            <Grid container spacing={4}>
                {/* Левая колонка */}
                <Grid item xs={12} md={4}>
                    {/*<Typography variant="h4" sx={{ fontWeight: '400' }}>*/}
                    {/*    Далее*/}
                    {/*</Typography>*/}
                    <Button variant="outlined" sx={{ mt: 2 }}>
                        Подробнее
                    </Button>
                </Grid>

                {/* Правая колонка */}
                <Grid item xs={12} md={8}>
                    <Typography variant="h4" sx={{  fontWeight: '400' }}>
                        Успешные поступления 2024
                    </Typography>

                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        {resources.map((resource, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ height: '100%' }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={resource.img}
                                        alt={resource.title}
                                    />
                                    <CardContent>
                                        <Typography variant="body1" sx={{ fontWeight: '400' }}>
                                            {resource.title}
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: '400' }}>
                                            {resource.count} успешных поступлений
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ResourcesSection;