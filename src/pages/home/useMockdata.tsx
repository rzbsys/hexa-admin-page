import { Chip } from "@mui/material";
import { Button } from "@mui/material";

const columns = [
	{
		field: "project",
		headerName: "프로젝트 이름",
		width: 800,
	},
	{
		editable: true,
		field: "target_visible",
		headerName: "노출",
		width: 150,
		renderCell: (data: any) => {
			switch (data["value"]) {
				case "전체공개":
					return <Chip label={data["value"]}></Chip>;
				case "멤버공개":
					return <Chip label={data["value"]} color='success'></Chip>;
				case "Pro공개":
					return <Chip label={data["value"]} color='info'></Chip>;
				case "졸업생공개":
					return <Chip label={data["value"]} color='secondary'></Chip>;
				case "관리자공개":
					return <Chip label={data["value"]} color='warning'></Chip>;
			}
		},
		type: "singleSelect",
		valueOptions: [
			"전체공개",
			"멤버공개",
			"Pro공개",
			"졸업생공개",
			"관리자공개",
		],
	},
	{
		field: "status",
		headerName: "상태",
		width: 150,
		type: "singleSelect",
		renderCell: (data: any) => {
			switch (data["value"]) {
				case "승인중":
					return <Chip label={data["value"]} variant='outlined'></Chip>;
				case "모집중":
					return (
						<Chip
							label={data["value"]}
							color='success'
							variant='outlined'
						></Chip>
					);
				case "모집완료":
					return (
						<Chip label={data["value"]} color='info' variant='outlined'></Chip>
					);
				case "진행중":
					return (
						<Chip
							label={data["value"]}
							color='secondary'
							variant='outlined'
						></Chip>
					);
				case "진행완료":
					return (
						<Chip
							label={data["value"]}
							color='warning'
							variant='outlined'
						></Chip>
					);
			}
		},
		valueOptions: ["승인중", "모집중", "모집완료", "진행중", "진행완료"],
		editable: true,
	},
	{
		field: "actions",
		headerName: "Actions",
		width: 150,
		// renderCell: (params: any) => (
		// 	<Button onClick={() => handleDelete(params.row.id)}>Delete</Button>
		// ),
	},
];

const useMockData = () => {
	return {
		columns: columns,
	};
};

export default useMockData;
