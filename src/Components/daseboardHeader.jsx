import React from "react";
import { makeStyles } from "@mui/styles";
import { Avatar, Badge, IconButton, Toolbar, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import { Bell as BellIcon } from "../icons/bell";
import { Users as UsersIcon } from "../icons/users";
import { UserCircle as UserCircleIcon } from "../icons/user-circle";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    [theme.breakpoints.up("md")]: {
      left: "280px",
      width: "100%",
    },
  },
}));

const DaseboardHeader = (props) => {
  const { onSidebarOpen } = props;
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Toolbar
        disableGutters
        sx={{
          minHeight: 64,
          left: 0,
          px: 2,
        }}
      >
        <IconButton
          onClick={onSidebarOpen}
          sx={{
            display: {
              xs: "inline-flex",
              lg: "none",
            },
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
        <Tooltip title="Search">
          <IconButton sx={{ ml: 1 }}>
            <SearchIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Box sx={{ flexGrow: 1 }} />
        <Tooltip title="Contacts">
          <IconButton sx={{ ml: 1 }}>
            <UsersIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Notifications">
          <IconButton sx={{ ml: 1 }}>
            <Badge badgeContent={4} color="primary" variant="dot">
              <BellIcon fontSize="small" />
            </Badge>
          </IconButton>
        </Tooltip>
        <Avatar
          sx={{
            cursor: "pointer",
            height: 40,
            width: 40,
            ml: 1,
          }}
          src=""
        >
          <UserCircleIcon fontSize="small" />
        </Avatar>
      </Toolbar>
    </div>
  );
};

export default DaseboardHeader;
