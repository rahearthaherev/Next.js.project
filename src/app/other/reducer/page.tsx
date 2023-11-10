"use client"

import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { useReducer } from "react"

export default function TestReducer() {
    function countReducer(oldCount: number, type: string) {
        if (type === "up") {
            return oldCount + 1;
        } else if (type === 'down') {
            return oldCount - 1;
        } else {
            return 0;
        }
    }

    function up() {
        countDispatch("up");
    }

    function down() {
        countDispatch("down");
    }

    function init() {
        countDispatch("init");
    }


    const [count, countDispatch] = useReducer(countReducer, 0);
    return <Box>
        <Typography>{count}</Typography>
        <ButtonGroup>
            <Button onClick={up}>+</Button>
            <Button onClick={init}>init</Button>
            <Button onClick={down}>-</Button>
        </ButtonGroup>
    </Box>
}