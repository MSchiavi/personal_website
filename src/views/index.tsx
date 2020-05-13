import React from 'react';
import {Link} from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SchoolIcon from '@material-ui/icons/School';
import BookIcon from '@material-ui/icons/Book';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const useStyles = makeStyles({
  root: {
    width: 230,
  },
  menuItem: {
      paddingBottom:  10,
  },
  toolTip:{

  },
});

const NavMenu = () => {
  const classes = useStyles();


  return (
    //   height preset to help see what page would look like
    <Paper className={classes.root} style={{width:'50px'}}>
      <MenuList >
        <Tooltip title="Home"  placement="right" className={classes.toolTip}>
          <MenuItem component={Link} to="/" className={classes.menuItem} >
            <ListItemIcon>
              <HomeIcon fontSize="small" />
            </ListItemIcon>
          </MenuItem>
        </Tooltip>
        <Tooltip title="Education" placement="right">
          <MenuItem component={Link} to = "/education" className={classes.menuItem}>
            <ListItemIcon>
              <SchoolIcon fontSize="small" />
            </ListItemIcon>
          </MenuItem>
        </Tooltip>
        <Tooltip title="Literature" placement="right">
          <MenuItem component={Link} to="/literature" className={classes.menuItem}> 
            <ListItemIcon>
              <BookIcon fontSize="small" />
            </ListItemIcon>
          </MenuItem>
        </Tooltip>
        <Tooltip title="My Github Page" placement="right">
          <MenuItem className={classes.menuItem}>
            <ListItemIcon>
            <a style={{color: 'inherit'}} href="https://www.github.com/MSchiavi">
              <GitHubIcon fontSize="small" />
            </a>
            </ListItemIcon>
          </MenuItem>
        </Tooltip>
        <Tooltip title="My Linkedin Page" placement="right">
          <MenuItem className={classes.menuItem}>
            <ListItemIcon>
            <a style={{color: 'inherit'}} href="https://www.linkedin.com/in/matthew-schiavi-84250295/">
              <LinkedInIcon fontSize="small" />
            </a>
            </ListItemIcon>
          </MenuItem>
        </Tooltip>
      </MenuList>
    </Paper>
  );
}


export default NavMenu;