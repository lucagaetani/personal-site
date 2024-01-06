import * as React from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider
} from '@mui/material';

export default function MenuAppBar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "wheat" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: "#553d3a" }}
            onClick={() => setOpenDrawer(!openDrawer)}
          >
          
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor="left"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            onOpen={() => setOpenDrawer(true)}
          >
            <Box
              sx={{ width: 250, backgroundColor: "wheat", color: "#553d3a", height: "100vh" }}
              role="presentation"
              onClick={() => setOpenDrawer(!false)}
              onKeyDown={() => setOpenDrawer(!false)}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Home"} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AppsIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Project1"} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AppsIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Project2"} />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary={"About"} />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </SwipeableDrawer>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#553d3a" }} fontWeight={"bold"}>
            Luca Gaetani
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}