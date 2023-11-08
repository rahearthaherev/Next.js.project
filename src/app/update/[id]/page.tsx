"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";

export default function Update() {
    const router = useRouter();
    const params = useParams();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const id = params.id;
    useEffect(() => {
        fetch('http://localhost:9999/topics/' + id)
            .then((resp) => resp.json())
            .then((result) => {
                setTitle(result.title);
                setBody(result.body);
            })
    }, []);
    return <>
        <form onSubmit={(e: any) => {
            e.preventDefault();
            const title = e.target.title.value;
            const body = e.target.body.value;
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
        }}>
            <p><input type="text" name="title" placeholder="title" value={title}
                onChange={(e: any) => { setTitle(e.target.value) }} /></p>
            <p><input type="text" name="body" placeholder="body" value={body}
                onChange={(e: any) => { setBody(e.target.value) }} /></p>
            <p><input type="submit" value='Update' /></p>
        </form>
    </>
}