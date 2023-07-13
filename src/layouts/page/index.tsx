import { Box } from "@mui/system";
import React, { PropsWithChildren } from "react";

function PageLayout(props : PropsWithChildren) {
    return (
        <Box mt={4} ml={5} mr={5}>
            {props.children}
        </Box>
    );
}

export default PageLayout;