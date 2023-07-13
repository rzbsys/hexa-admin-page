import React from "react";

import PageLayout from "@layouts/page";
import { Breadcrumbs, Typography } from "@mui/material";
import { DataGrid, GridRow, GridColumnHeaders } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import Box from "@mui/material/Box";

import { TOP_NAVBAR_HEIGHT } from "@constant";
import useMockData from "./useMockdata";

const MemoizedRow = React.memo(GridRow);
const MemoizedColumnHeaders = React.memo(GridColumnHeaders);

function ProjectDataGrid() {
	const { data } = useDemoData({
		dataSet: "Commodity",
		rowLength: 10,
		editable: true,
	});

	console.log(data['columns']);
	const mock_data = useMockData()

	return (
		<Box sx={{ height: 520, width: "100%" }}>
			<DataGrid
				{...mock_data}
				rows={[
					{
						id:"0",
						project:"dalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliw",
						target_visible:'전체공개',
						status:"승인중",
					},					
					{
						id:"1",
						project:"dalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliw",
						target_visible:'멤버공개',
						status:"모집중",
					},					
					{
						id:"2",
						project:"dalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliw",
						target_visible:'Pro공개',
						status:"모집완료",
					},					
					{
						id:"3",
						project:"dalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliw",
						target_visible:'졸업생공개',
						status:"진행중",
					},					
					{
						id:"4",
						project:"dalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliwdalwkdjalodwkajwdliw",
						target_visible:'관리자공개',
						status:"진행완료",
					}
				]}
				loading={data.rows.length === 0}
				rowHeight={50}
				checkboxSelection
				components={{
					Row: MemoizedRow,
					ColumnHeaders: MemoizedColumnHeaders,
				}}
        sx={{height:`calc(100vh - ${TOP_NAVBAR_HEIGHT}px - 250px)`}}
			/>
		</Box>
	);
}

function HomePage() {
	return (
		<PageLayout>
			<Breadcrumbs aria-label='breadcrumb'>
				<Typography>활동(Admin)</Typography>
				<Typography>프로젝트 관리</Typography>
			</Breadcrumbs>
			<Typography variant='h4' fontWeight={800} mt={1} mb={3}>
				 프로젝트 관리
			</Typography>
			<ProjectDataGrid></ProjectDataGrid>
		</PageLayout>
	);
}

export default HomePage;
