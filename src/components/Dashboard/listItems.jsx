import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArticleIcon from '@mui/icons-material/Article';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
export const MainListItems = ({setShow}) => {
  const handleClick = (target) => {
    setShow(target)
  }
  return (
    <React.Fragment>
    <ListItemButton  onClick={()=>{handleClick('test')}} > 
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Probar API" />
    </ListItemButton>
    <ListItemButton   onClick={()=>{handleClick('user')}} >
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Perfil" />
    </ListItemButton>
    <ListItemButton  onClick={()=>{handleClick('support')}}>
      <ListItemIcon>
        <SupportAgentIcon />
      </ListItemIcon>
      <ListItemText primary="Soporte" />
    </ListItemButton>
    <ListItemButton  onClick={()=>{handleClick('change')}}>
      <ListItemIcon>
        <ChangeCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Cambiar plan" />
    </ListItemButton>
    <ListItemButton  onClick={()=>{handleClick('documentation')}}>
      <ListItemIcon>
        <ArticleIcon />
      </ListItemIcon>
      <ListItemText primary="Documentación API" />
    </ListItemButton>
  </React.Fragment>
  )
  
  };

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
