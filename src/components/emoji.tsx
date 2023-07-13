import React from "react";
import { Typography } from "@mui/material";

interface EmojiForm {
    emoji:string
    size?:number
}

function Emoji({emoji, size=20}:EmojiForm) {
    return (
        <Typography className="emoji" sx={{fontSize:size + "px", fontFamily:"Tossface !important"}}>
            {emoji}
        </Typography>
    );
}

export default Emoji;