import React, { useState, useEffect } from 'react';
import universities from './univer.json'
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import CardMedia from '@mui/material/CardMedia';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import TuneIcon from '@mui/icons-material/Tune';
import StarIcon from '@mui/icons-material/Star';
import LanguageIcon from '@mui/icons-material/Language';
import SchoolIcon from '@mui/icons-material/School';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Header from '../features/landing/LandingHeader'

// const universities = [
//     { id: 1, name: 'Harvard University', country: 'USA', type: 'Private', image: 'https://www.harvard.edu/wp-content/uploads/2021/02/091520_Stock_KS_025.jpeg?resize=1200,630',  qsRanking: 3,
//         language: 'English',
//         grants: 'Yes',
//         costOfLiving: 20000,
//         dualDegree: 'Yes',
//         tuition: 50000},
//     {  id: 2, name: 'University of Oxford', country: 'UK', type: 'Public', image: 'https://cdn.britannica.com/03/117103-050-F4C2FC83/view-University-of-Oxford-England-Oxfordshire.jpg',  qsRanking: 4,
//         language: 'English',
//         grants: 'Уеs',
//         costOfLiving: 15000,
//         dualDegree: 'No',
//         tuition: 40000 },
//     {  id: 3, name: 'MIT', country: 'USA', type: 'Private', image: 'https://www.ivywise.com/core/wp-content/uploads/2020/04/MIT.jpg',  qsRanking: 1,
//         language: 'English',
//         grants: 'Yes',
//         costOfLiving: 18000,
//         dualDegree: 'Yes',
//         tuition: 55000 },
//     { id: 4, name: 'Cambridge University', country: 'UK', type: 'Public', image: 'https://www.royce.ac.uk/content/uploads/2017/05/Cambridge3.jpg',  qsRanking: 2,
//         language: 'English',
//         grants: 'Yes',
//         costOfLiving: 17000,
//         dualDegree: 'No',
//         tuition: 42000 },
//
// ];





const CollegeCatalogPage = () => {

    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');
    const [filterCountry, setFilterCountry] = useState('');
    const [filterType, setFilterType] = useState('');
    const [filterQsRanking, setFilterQsRanking] = useState([1, 100]);
    const [filterLanguage, setFilterLanguage] = useState('');
    const [filterGrants, setFilterGrants] = useState(false);
    const [filterCostOfLiving, setFilterCostOfLiving] = useState([0, 50000]);
    const [filterDualDegree, setFilterDualDegree] = useState(false);
    const [filterTuition, setFilterTuition] = useState([0, 60000]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCountryChange = (event) => {
        setFilterCountry(event.target.value);
    };

    const handleTypeChange = (event) => {
        setFilterType(event.target.value);
    };

    const handleLanguageChange = (event) => {
        setFilterLanguage(event.target.value);
    };

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const filteredUniversities = universities.filter((university) => {
        return (
            university.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterCountry === '' || university.country === filterCountry) &&
            (filterType === '' || university.type === filterType) &&
            university.qsRanking >= filterQsRanking[0] &&
            university.qsRanking <= filterQsRanking[1] &&
            (filterLanguage === '' || university.language === filterLanguage) &&
            (!filterGrants || university.grants === 'Yes') &&
            university.costOfLiving >= filterCostOfLiving[0] &&
            university.costOfLiving <= filterCostOfLiving[1] &&
            (!filterDualDegree || university.dualDegree === 'Yes') &&
            university.tuition >= filterTuition[0] &&
            university.tuition <= filterTuition[1]
        );
    });

    const drawerContent = (
        <Box sx={{ width: 250, padding: 2 }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Фильтры
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>Страна</InputLabel>
                <Select
                    value={filterCountry}
                    onChange={handleCountryChange}
                >
                    <MenuItem value=''>Все страны</MenuItem>
                    <MenuItem value='USA'>США</MenuItem>
                    <MenuItem value='UK'>Великобритания</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>Тип</InputLabel>
                <Select
                    value={filterType}
                    onChange={handleTypeChange}
                >
                    <MenuItem value=''>Все типы</MenuItem>
                    <MenuItem value='Public'>Государственный</MenuItem>
                    <MenuItem value='Private'>Частный</MenuItem>
                </Select>
            </FormControl>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                QS Рейтинг
            </Typography>
            <Slider
                value={filterQsRanking}
                onChange={(e, newValue) => setFilterQsRanking(newValue)}
                valueLabelDisplay="auto"
                min={1}
                max={100}
                sx={{ marginBottom: 2 }}
            />
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>Язык обучения</InputLabel>
                <Select
                    value={filterLanguage}
                    onChange={handleLanguageChange}
                >
                    <MenuItem value=''>Все языки</MenuItem>
                    <MenuItem value='English'>Английский</MenuItem>
                    {/* Add more languages as needed */}
                </Select>
            </FormControl>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={filterGrants}
                        onChange={(e) => setFilterGrants(e.target.checked)}
                    />
                }
                label="Гранты/Стипендии"
                sx={{ marginBottom: 2 }}
            />
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                Стоимость проживания
            </Typography>
            <Slider
                value={filterCostOfLiving}
                onChange={(e, newValue) => setFilterCostOfLiving(newValue)}
                valueLabelDisplay="auto"
                min={0}
                max={50000}
                sx={{ marginBottom: 2 }}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={filterDualDegree}
                        onChange={(e) => setFilterDualDegree(e.target.checked)}
                    />
                }
                label="Программа двойных дипломов"
                sx={{ marginBottom: 2 }}
            />
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                Стоимость обучения за год
            </Typography>
            <Slider
                value={filterTuition}
                onChange={(e, newValue) => setFilterTuition(newValue)}
                valueLabelDisplay="auto"
                min={0}
                max={60000}
                sx={{ marginBottom: 2 }}
            />
        </Box>
    );

    return (
        <>
        <Header />
        <Box sx={{ display: 'flex', padding: 4 }}>
            {/* Sidebar */}
            {!isMobile && (
                <Box sx={{ width: 250, mr: 4 }}>
                    {drawerContent}
                </Box>
            )}

            {/* Content */}
            <Box sx={{ flexGrow: 1 }}>
                {isMobile && (
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                        <IconButton
                            color="primary"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                        >
                            <TuneIcon />
                        </IconButton>
                    </Box>
                )}

                <Drawer
                    anchor="left"
                    open={isDrawerOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawerContent}
                </Drawer>


                <TextField
                    fullWidth
                    label="Поиск по названию"
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    sx={{ marginBottom: 4 }}
                />

                <Grid container spacing={3}>
                    {filteredUniversities.map((university, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card sx={{ height: '450px', display: 'flex', flexDirection: 'column' }}>
                                <CardMedia
                                    component="img"
                                    image={university.image}
                                    alt={university.name}
                                    sx={{ height: 140 }}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        {university.name}
                                    </Typography>

                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                        <StarIcon sx={{ mr: 1, color: 'gold' }} />
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem' }}>
                                            QS Рейтинг: {university.qsRanking}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                        <LanguageIcon sx={{ mr: 1, color: 'blue' }} />
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem' }}>
                                            Язык обучения: {university.language}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                        <SchoolIcon sx={{ mr: 1, color: 'green' }} />
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem' }}>
                                            Гранты/Стипендии: {university.grants}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                        <AttachMoneyIcon sx={{ mr: 1, color: 'green' }} />
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem' }}>
                                            Стоимость проживания: {university.costOfLiving}$
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                        <ImportExportIcon sx={{ mr: 1, color: 'orange' }} />
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem' }}>
                                            Программа двойных дипломов: {university.dualDegree}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                        <MonetizationOnIcon sx={{ mr: 1, color: 'gold' }} />
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem' }}>
                                            Стоимость обучения за год: {university.tuition}$
                                        </Typography>
                                    </Box>
                                </CardContent>
                                <Box sx={{ padding: 2 }}>
                                    <Button variant="contained" color="primary" fullWidth  onClick={() => navigate(`/colleges/${university.id}`)}>
                                        Подробнее
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
        </>
    );
}

export default CollegeCatalogPage;