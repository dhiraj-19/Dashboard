import PropTypes from "prop-types";
import { Box, Link, Button, ListItem } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  wrapperItem: {
    display: "flex",
    color: "#10B981",
    backgroundColor: "rgba(255,255,255, 0.08)",
    "& a": {
      textDecoration: "none",
      color: "#10B981",
      padding: "8px 20px",
      boxShadow: "none",
      borderRadius: "8px",
      minWidth: "220px",
    },
  },
}));

export const MenuItems = (props) => {
  const { icon, title } = props;
  const styles = useStyles();

  return (
    <ListItem disableGutters className={styles.wrapperItem}>
      <Link>
        <Button
          component="a"
          startIcon={icon}
          disableRipple
          sx={{
            backgroundColor: "rgba(255,255,255, 0.08)",
            borderRadius: 1,
            color: "#fff",
            fontWeight: "fontWeightBold",
            justifyContent: "flex-start",
            px: 3,
            textAlign: "left",
            textTransform: "none",
            width: "100%",
            "& .MuiButton-startIcon": {
              color: "neutral.400",
            },
            "&:hover": {
              backgroundColor: "rgba(255,255,255, 0.08)",
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
        </Button>
      </Link>
    </ListItem>
  );
};

MenuItems.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string,
};
