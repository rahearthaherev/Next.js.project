import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import Link from "next/link";

export default function SideMenu(props: SideMenuInfo) {
    const drawerWidth = 240;

    return <>
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
            <List>
                {props.topics.map((topic: TopicInfo) => (
                    <ListItem key={topic.id} disablePadding>
                        <ListItemButton href={"/read/" + topic.id} component={Link}>
                            <ListItemIcon>
                                <FolderIcon />
                            </ListItemIcon>
                            <ListItemText primary={topic.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton href={"/other/componentapi"} component={Link}>
                        <ListItemIcon>
                            <FolderIcon />
                        </ListItemIcon>
                        <ListItemText primary="ComponentAPI" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton href={"/other/reducer"} component={Link}>
                        <ListItemIcon>
                            <FolderIcon />
                        </ListItemIcon>
                        <ListItemText primary="UseReducer" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton href={"/other/styledcomponent"} component={Link}>
                        <ListItemIcon>
                            <FolderIcon />
                        </ListItemIcon>
                        <ListItemText primary="StyledComponent" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    </>
}