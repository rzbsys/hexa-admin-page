import { Box } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";

import Lottie from 'lottie-react';
import Error404Lottie from '@static/lottie/404.json';

import { TOP_NAVBAR_HEIGHT } from "@constant";

function Error404Page() {
	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			justifyContent={"center"}
			sx={{ height: `calc(100vh - ${TOP_NAVBAR_HEIGHT}px)`  }}
		>
            <Lottie animationData={Error404Lottie} loop={false}></Lottie>
			<Typography variant='h3' fontWeight={800} mt={2}>
				요청하신 정보를 찾을 수 없어요.
			</Typography>
            <Typography variant='h4' fontWeight={300} color="rgb(200, 200, 200)">
                return 404 살려줘..................................
			</Typography>
		</Box>
	);
}

export default Error404Page;
