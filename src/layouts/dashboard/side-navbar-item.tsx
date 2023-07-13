import React, { useState } from "react";
import { List, ListItemText } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import { LEFT_NAVBAR_WIDTH, LEFT_NAVBAR_ITEM_TITLE_HEIGHT } from "@constant";
import Emoji from "@components/emoji";
import { useNavigate } from "react-router-dom";

interface SideNavbarMenuProps {
	text: string;
	emoji: string;
	open: any;
	Setopen: any;
}

function SideNavbarMenu(props: SideNavbarMenuProps) {
	const handleClick = () => {
		props.Setopen(!props.open);
	};

	return (
		<>
			<ListItemButton
				onClick={handleClick}
				sx={{
					width: LEFT_NAVBAR_WIDTH - 30 + "px",
					borderRadius: "20px",
					height: LEFT_NAVBAR_ITEM_TITLE_HEIGHT,
					backgroundColor: props.open ? "rgb(240, 240, 240)" : "white",
					marginTop: "10px",
					transition:"0.3s background-color",
					"&:hover": {
						backgroundColor: "rgb(250, 250, 250)",
					},
				}}
				disableRipple
				disableTouchRipple
			>
				{Emoji({ emoji: props.emoji })}
				<ListItemText>
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: "16px",
							marginLeft: "20px",
							color: "rgb(50, 50, 50)",
						}}
					>
						{props.text}
					</Typography>
				</ListItemText>
				{props.open ? (
					<ExpandLess sx={{ color: "rgb(180, 180, 180)" }} />
				) : (
					<ExpandMore sx={{ color: "rgb(180, 180, 180)" }} />
				)}
			</ListItemButton>
		</>
	);
}

interface SideNavbarSubMenuprops {
	open: any;
	sub_menu: any;
}

function SideNavbarSubMenu(props: SideNavbarSubMenuprops) {
	const navigator = useNavigate();

	return (
		<Collapse in={props.open} timeout='auto' unmountOnExit>
			<List component='div' disablePadding sx={{ marginTop: "10px" }}>
				{props.sub_menu.map(
					(item: { [key: string]: string }, index: number) => {
						return (
							<ListItemButton
								key={index}
								sx={{
									borderRadius: "20px",
									marginLeft:"20px",
									color: "rgb(100, 100, 100)",
									transition:"0.3s margin-left",
									"&:hover": {
										backgroundColor: "transparent",
										marginLeft:"25px",
									},
								}}
								disableRipple
								disableTouchRipple
								onClick={() => {
									navigator(item["to"])
								}}
							>
								<ListItemText primary={item["title"]} />
							</ListItemButton>
						);
					}
				)}
			</List>
		</Collapse>
	);
}

interface SideNavbarItemProps {
	menu_info: any;
}

function SideNavbarItem(props: SideNavbarItemProps) {
	const [open, Setopen] = useState(false);

	return (
		<>
			<SideNavbarMenu
				text={props.menu_info.title}
				emoji={props.menu_info.emoji}
				open={open}
				Setopen={Setopen}
			></SideNavbarMenu>
			<SideNavbarSubMenu
				open={open}
				sub_menu={props.menu_info["submenu"]}
			></SideNavbarSubMenu>
		</>
	);
}

export default SideNavbarItem;
