"use client"

import { Box, Button, TextField } from "@mui/material"
import { useRecoilState } from "recoil"
import { ItemAtom } from "../recoil/ItemAtom";
import Link from "next/link";

export default function ItemBox() {
    const [Item, setItem] = useRecoilState(ItemAtom);

    return <>
        <Box>
            <TextField
                label="ID"
                value={Item.id}
                variant="standard"
                InputProps={{
                    readOnly: true,
                }}
            />
        </Box>
        <Box>
            <TextField
                label="Title"
                value={Item.title}
                variant="standard"
                InputProps={{
                    readOnly: true,
                }}
            />
        </Box>
        <Box>
            <TextField
                label="Body"
                value={Item.body}
                variant="standard"
                InputProps={{
                    readOnly: true,
                }}
            />
        </Box>
        <Box>
            <Button href={"/itembox/items"} component={Link}>UpdatePage</Button>
        </Box>
    </>
}