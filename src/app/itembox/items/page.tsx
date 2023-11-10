"use client"

import { ItemAtom } from "@/app/recoil/ItemAtom";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSetRecoilState } from "recoil"

export default function itemAdd() {
    const setItem = useSetRecoilState(ItemAtom);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const router = useRouter();

    return <Box sx={{ width: '300px' }}>
        <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            value={title}
            fullWidth
            variant="outlined"
            onChange={(e: any) => {
                e.preventDefault();
                setTitle(e.target.value);
            }}
        />
        <TextField
            autoFocus
            margin="dense"
            id="body"
            label="Body"
            type="text"
            value={body}
            multiline
            maxRows={4}
            fullWidth
            variant="standard"
            onChange={(e: any) => {
                e.preventDefault();
                setBody(e.target.value);
            }}
        />
        <Button onClick={(e: any) => {
            setItem({ id: 0, title: title, body: body })
            router.refresh();
            router.push("/itembox");
        }}>Update</Button>
    </Box>
}