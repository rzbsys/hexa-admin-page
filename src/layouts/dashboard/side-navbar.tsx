import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import SideNavbarItem from "./side-navbar-item";

import { Typography } from "@mui/material";
import { LEFT_NAVBAR_WIDTH, TOP_NAVBAR_HEIGHT } from "@constant";

import menu from "./menu-list";

function LeftSideBar() {
	return (
		<Drawer
			variant='permanent'
			sx={{
				width: LEFT_NAVBAR_WIDTH,
				flexShrink: 0,
			}}
		>
			<Box
				sx={{ overflow: "auto", marginTop: TOP_NAVBAR_HEIGHT + "px" }}
				width={LEFT_NAVBAR_WIDTH + "px"}
				display={"flex"}
				flexDirection={"column"}
				alignItems={"center"}
			>
				<Box
					padding="30px 35px"
					width={LEFT_NAVBAR_WIDTH - 70}
					display={"flex"}
					flexDirection={"column"}
					alignItems={"start"}
					justifyContent={"center"}
					// position={"sticky"}
					top={0}
					sx={{
						backgroundColor:"white",
						zIndex: 1
					}}
				>
					<Box display={"flex"} flexDirection='row' alignItems={"end"} mb={1}>
						<Typography variant='h5' fontWeight={800}>
							김선욱
						</Typography>
						<Typography variant='subtitle1' color='#8d8d8d'>
							(5eonukkim)
						</Typography>
					</Box>
					<Typography variant='subtitle1' color='#4a4a4a'>기수 : 10기</Typography>
					<Typography variant='subtitle1' color='#4a4a4a'>학번 : 20학번</Typography>
					<Typography variant='subtitle1' color='#4a4a4a'>소속 : UNIST 산업공학과</Typography>
				</Box>

				<List>
					{menu.map((item, index) => {
						return (
							<SideNavbarItem key={index} menu_info={item}></SideNavbarItem>
						);
					})}
				</List>
			</Box>
		</Drawer>
	);
}

export default LeftSideBar;
