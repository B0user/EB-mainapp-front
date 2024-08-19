import React, { useState } from 'react';
import universities from './univer.json';
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

import Header from '../features/landing/LandingHeader';

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
                <Select value={filterCountry} onChange={handleCountryChange}>
                    <MenuItem value=''>Все страны</MenuItem>
                    <MenuItem value='USA'>США</MenuItem>
                    <MenuItem value='UK'>Великобритания</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>Тип</InputLabel>
                <Select value={filterType} onChange={handleTypeChange}>
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
                sx={{ marginBottom: 2, color: '#003366' }}
            />
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>Язык обучения</InputLabel>
                <Select value={filterLanguage} onChange={handleLanguageChange}>
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
                sx={{ marginBottom: 2, color: '#003366' }}
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
                sx={{ marginBottom: 2, color: '#003366' }}
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
                            <Grid item xs={12} key={index}>
                                <Box sx={{ maxWidth: { sm: '900px' }, mx: { sm: 'auto' } }}>
                                    <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'center', sm: 'stretch' }, minHeight: '250px' }}>
                                        <CardMedia
                                            component="img"
                                            image={university.image}
                                            alt={university.name}
                                            sx={{
                                                width: { xs: '100%', sm: 400 },
                                                height: { xs: 250, sm: 'auto' },
                                                maxHeight: { sm: 400 },
                                                objectFit: 'cover',
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => navigate(`/colleges/${university.id}`)}
                                        />
                                        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                            <CardContent>
                                                <Typography
                                                    variant="h6"
                                                    sx={{ fontWeight: 'bold', color: '#003366', cursor: 'pointer' }}
                                                    onClick={() => navigate(`/colleges/${university.id}`)}
                                                >
                                                    {university.name}
                                                </Typography>

                                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                                    <StarIcon sx={{ mr: 1 }} />
                                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem' }}>
                                                        QS Рейтинг: {university.qsRanking}
                                                    </Typography>
                                                </Box>

                                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                                    <LanguageIcon sx={{ mr: 1}} />
                                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem' }}>
                                                        Язык обучения: {university.language}
                                                    </Typography>
                                                </Box>

                                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                                    <SchoolIcon sx={{ mr: 1}} />
                                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem' }}>
                                                        Гранты/Стипендии: {university.grants}
                                                    </Typography>
                                                </Box>

                                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                                    <AttachMoneyIcon sx={{ mr: 1}} />
                                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem' }}>
                                                        Стоимость проживания: {university.costOfLiving}$
                                                    </Typography>
                                                </Box>

                                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                                    <ImportExportIcon sx={{ mr: 1 }} />
                                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem' }}>
                                                        Программа двойных дипломов: {university.dualDegree}
                                                    </Typography>
                                                </Box>

                                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                                    <MonetizationOnIcon sx={{ mr: 1 }} />
                                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem' }}>
                                                        Стоимость обучения за год: {university.tuition}$
                                                    </Typography>
                                                </Box>
                                            </CardContent>

                                        </Box>
                                    </Card>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </>
    );
}

export default CollegeCatalogPage;
