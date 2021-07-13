import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";

const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  return (
    <Drawer anchor="top" onClose={() => setOpenDrawer(false)} open={openDrawer}>
      <List>
        <Link to="/">
          <ListItem divider button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>PokeHome</ListItemText>
          </ListItem>
        </Link>
        <Link to="/new">
          <ListItem divider button>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText>PokeCreate</ListItemText>
          </ListItem>
        </Link>
        <Link to="/search">
          <ListItem divider button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>PokeSearch</ListItemText>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
