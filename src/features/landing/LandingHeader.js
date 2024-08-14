import React, { useState } from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const LandingHeader = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        {isMobile ? (
                            <>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                    onClick={handleDrawerToggle}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Drawer
                                    anchor="left"
                                    open={isDrawerOpen}
                                    onClose={handleDrawerToggle}
                                    sx={{ width: 350 }}
                                >
                                    <List>
                                        <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
                                            <ListItemText primary="Главная" />
                                        </ListItem>
                                        <ListItem button component={Link} to="/colleges" onClick={handleDrawerToggle}>
                                            <ListItemText primary="Университеты" />
                                        </ListItem>
                                        <ListItem button component={Link} to="/services" onClick={handleDrawerToggle}>
                                            <ListItemText primary="Услуги" />
                                        </ListItem>
                                        <ListItem button component={Link} to="/contact" onClick={handleDrawerToggle}>
                                            <ListItemText primary="Контакты" />
                                        </ListItem>
                                    </List>
                                </Drawer>
                            </>
                        ) : (
                            <>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component={Link}
                                    to="/"
                                    sx={{
                                        flexGrow: 1,
                                        textDecoration: 'none',
                                        color: 'inherit',
                                    }}
                                >
                                    Логотип
                                </Typography>
                                <Button component={Link} to="/" color="inherit">Главная</Button>
                                <Button component={Link} to="/colleges" color="inherit">Университеты</Button>
                                <Button component={Link} to="/services" color="inherit">Услуги</Button>
                                <Button component={Link} to="/contact" color="inherit">Контакты</Button>
                            </>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

export default LandingHeader;