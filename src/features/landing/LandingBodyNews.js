import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

const NewsSection = () => {
    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: '500'}}>
                Заголовок <span style={{ color: '#d4a12e' }}>13 АВГУСТА</span>
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Box
                        component="img"
                        src="https://www.studylab.ru/upload/Articles/image/big/86946b2e115270a117a1a9e8f73cca3e.jpeg"
                        alt="News Image"
                        sx={{ width: '100%', borderRadius: 1 }}
                    />
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        Университет Англии
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="body1" sx={{ mb: 2, fontWeight: 'bold', color: '#555' }}>
                            Американские Университеты: подборка лучших университетов Америки
                        </Typography>
                        <Divider />
                        <Typography variant="body1" sx={{ my: 2, fontWeight: 'bold', color: '#555' }}>
                            Зимние документы: о важном, сроки и списки
                        </Typography>
                        <Divider />
                        <Typography variant="body1" sx={{ my: 2, fontWeight: 'bold', color: '#555' }}>
                            IELTS: все о международном экзамене
                        </Typography>
                        <Divider />
                        <Typography variant="body1" sx={{ my: 2, fontWeight: 'bold', color: '#555' }}>
                            Nazarbayev University: поступление в 2025 году
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Button variant="contained" color="primary" sx={{ alignSelf: 'flex-end', mt: 'auto', borderRadius: '20px', paddingX: 3 }}>
                            Больше новостей
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default NewsSection;
