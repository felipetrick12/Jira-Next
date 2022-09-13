import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" />
        <Typography>OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};
