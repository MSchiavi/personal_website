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
import {isMobile} from 'react-device-detect';

const useStyles = makeStyles({
  root: {
    width: '50px',
    position: 'relative',
    top: '30vh',
    backgroundColor: 'rgb(37,31,71)',
  },
  rootMobile: {
    width: '50px',
    position: 'relative',
    top: '0vh',
    backgroundColor: 'rgb(37,31,71)',
  },
  menuItem: {
      paddingBottom:  10,
  }
});


const NavMenu = () => {

  const classes = useStyles();

  const getMenuClass = (isMobile:boolean) =>{
    if(isMobile){
      return classes.rootMobile;
    }else{
      return classes.root;
    }
  }

  return (
    <Paper elevation={1} className={getMenuClass(isMobile)} >
      <MenuList >
        <Tooltip title="Home"  placement="right">
          <MenuItem component={Link} to="/" className={classes.menuItem} >
            <ListItemIcon>
              <HomeIcon fontSize="small" style={{color:'rgb(111,156,235)'}}/>
            </ListItemIcon>
          </MenuItem>
        </Tooltip>
        <Tooltip title="Education" placement="right">
          <MenuItem component={Link} to = "/education" className={classes.menuItem}>
            <ListItemIcon>
              <SchoolIcon fontSize="small" style={{color:'rgb(111,156,235)'}}/>
            </ListItemIcon>
          </MenuItem>
        </Tooltip>
        <Tooltip title="Literature" placement="right">
          <MenuItem component={Link} to="/literature" className={classes.menuItem}> 
            <ListItemIcon>
              <BookIcon fontSize="small" style={{color:'rgb(111,156,235)'}}/>
            </ListItemIcon>
          </MenuItem>
        </Tooltip>
        <Tooltip title="My Github Page" placement="right">
          <MenuItem className={classes.menuItem}>
            <ListItemIcon>
            <a style={{color: 'inherit'}} href="https://www.github.com/MSchiavi">
              <GitHubIcon fontSize="small" style={{color:'rgb(111,156,235)'}}/>
            </a>
            </ListItemIcon>
          </MenuItem>
        </Tooltip>
        <Tooltip title="My Linkedin Page" placement="right">
          <MenuItem className={classes.menuItem}>
            <ListItemIcon>
            <a style={{color: 'inherit'}} href="https://www.linkedin.com/in/matthew-schiavi-84250295/">
              <LinkedInIcon fontSize="small" style={{color:'rgb(111,156,235)'}}/>
            </a>
            </ListItemIcon>
          </MenuItem>
        </Tooltip>
      </MenuList>
    </Paper>
  );
}


export default NavMenu;