import React, { ReactElement } from "react";
import TopNavBar from "./top-navbar";
import LeftSideBar from "./side-navbar";
import { Box } from "@mui/material";
import { TOP_NAVBAR_HEIGHT, LEFT_NAVBAR_WIDTH } from "@constant";

interface DashboardLayoutProps {
	children: ReactElement;
}

function DashboardLayout(props: DashboardLayoutProps) {
	return (
		<Box display={"flex"} flexDirection={"column"}>
			<TopNavBar />
			<LeftSideBar />
			<Box
				sx={{
					marginTop: TOP_NAVBAR_HEIGHT + "px",
					marginLeft: LEFT_NAVBAR_WIDTH + "px",
				}}
			>
				{props.children}
			</Box>
		</Box>
	);
}

export default DashboardLayout;
