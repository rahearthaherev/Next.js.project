"use client"

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";

export default function Update() {
    const router = useRouter();
    const params = useParams();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const id = params.id;
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
        router.push('/')
    };

    useEffect(() => {
        fetch('http://localhost:9999/topics//' + id)
            .then((resp) => resp.json())
            .then((result) => {
                setTitle(result.title);
                setBody(result.body);
                console.log(title);
            })
    }, []);
    return <>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Topic Update</DialogTitle>
            <DialogContent>
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
            </DialogContent>
            <DialogActions>
                <Button onClick={(e: any) => {
                    e.preventDefault();
                    const option = {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ title, body })
                    };
                    fetch(`http://localhost:9999/topics/` + id, option)
                        .then(res => res.json()).then(result => {
                            const lastId = result.id;
                            router.refresh();
                            router.push(`/read/${lastId}`)
                        });
                    handleClose();
                }}>Update</Button>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    </>
}