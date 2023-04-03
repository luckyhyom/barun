import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ImageIcon from "@mui/icons-material/Image";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

export default function ColorTabs() {
    const [value, setValue] = React.useState("one");
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    return (
        <Box sx={{ width: "100%", display: "flex" }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Tab value="one" label="New Service Order" />
                <Tab value="two" label="Pricing" />
                <Tab value="three" label="Invoice" />
                <Tab value="four" label="AHJ Database" />
                <Tab value="five" label="Project Management" />
            </Tabs>
            <List
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                }}
            >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Hyomin Kim"
                        secondary="gyals0386@gmail.com"
                    />
                    <Badge badgeContent={4} color="primary">
                        <MailIcon color="action" />
                    </Badge>
                </ListItem>
            </List>
        </Box>
    );
}
