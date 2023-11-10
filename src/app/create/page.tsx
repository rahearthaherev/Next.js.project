"use client"

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Create() {
    const router = useRouter();
    const [open, setOpen] = useState(true);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleClose = () => {
        setOpen(false);
        router.push('/')
    };
    return (<>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Topic Create</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Title"
                    type="text"
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
                    multiline
                    rows={4}
                    fullWidth
                    variant="standard"
                    onChange={(e: any) => {
                        e.preventDefault();
                        setBody(e.target.value);
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={(e: any) => {
                    e.preventDefault();
                    const option = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ title, body })
                    };
                    fetch(`http://localhost:9999/topics`, option)
                        .then(res => res.json()).then(result => {
                            const lastId = result.id;
                            router.refresh();
                            router.push(`/read/${lastId}`)
                        });
                    handleClose();
                }}>Create</Button>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>

    </>)
}