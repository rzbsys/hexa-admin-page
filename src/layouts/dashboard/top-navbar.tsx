import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Logo from "@static/img/logo.png";

import { TOP_NAVBAR_HEIGHT } from "@constant";

function TopNavBar() {
	return (
		<AppBar
			position='fixed'
			elevation={0}
			sx={{
				height: TOP_NAVBAR_HEIGHT,
				display: "flex",
				justifyContent: "center",
				zIndex: (theme) => theme.zIndex.drawer + 1,
			}}
		>
			<Toolbar>
				<img src={Logo} alt='HeXALogo' height='60%' />
				<Typography
					variant='h6'
					component='div'
					sx={{ flexGrow: 1, marginLeft: 2 }}
				>
					HeXA Admin Page
				</Typography>
				<Button color='inherit'>소개</Button>
				<Button color='inherit'>회원</Button>
				<Button color='inherit'>활동</Button>
				<Button color='inherit'>게시판</Button>
				<Button color='inherit'>마이페이지</Button>
			</Toolbar>
		</AppBar>
	);
}

export default TopNavBar;
