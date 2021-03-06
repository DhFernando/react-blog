import React , { useEffect, useState } from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer'; 
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto',
    backgroundColor:"red"
  },
  rootDrower:{
    
  }
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    setOpen(props.open)
  },[props.open])

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={()=>props.handleDrawer(false)}
      onKeyDown={()=>props.handleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
        <React.Fragment>
          <Drawer className={classes.rootDrower} anchor="left" open={open} onClose={()=>props.handleDrawer(false)}>
            {list()}
          </Drawer>
        </React.Fragment>
    </div>
  );
}