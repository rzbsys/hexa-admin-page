import { createTheme } from "@mui/material/styles";
import * as locales from "@mui/material/locale";
import { koKR } from "@mui/x-data-grid";

const theme = createTheme(
	{
		palette: {
			primary: {
				main: "#001C54",
			},
		},
	},
	locales["koKR"],
  koKR
);

export default theme;
