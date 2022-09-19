import {
  Drawer,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import React, { useContext } from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import { UIContext } from "../../context/ui";

const menuItem: string[] = ["Inbox", "Starred", "Send Email", "Drafts"];

export const SideBar = () => {
  const { sideMenu, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={sideMenu} onClose={closeSideMenu}>
      <Box width={250}>
        <Box
          sx={{
            padding: "5px 10px",
          }}
        >
          <Typography variant="h4">Menu</Typography>
        </Box>
        <List>
          {menuItem.map((text, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                {index % 2 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};
