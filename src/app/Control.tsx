"use client"
import { Box, Button, ButtonGroup } from '@mui/material';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export function Control() {
    const params = useParams();
    const router = useRouter();
    const id = params.id;

    return <>
        {id ? <ButtonGroup sx={{ marginLeft: '9px' }}>
            <Button variant="outlined" component={Link} href={'/update/' + id}>Update</Button>
            <Button variant="contained" onClick={(e: any) => {
                const option = { method: 'DELETE' };
                fetch('http://localhost:9999/topics/' + id, option)
                    .then((resp) => { resp.json() })
                    .then((result) => {
                        router.refresh();
                        router.push('/');
                    });
            }}>Delete</Button>
        </ButtonGroup> : <Button variant="outlined" href='/create' sx={{ marginLeft: '9px' }} component={Link}>Create</Button>}
    </>;

}

/*
<Link href={'/update/' + id}>Update</Link>
            <input type='button' value='Delete' onClick={(e: any) => {
                const option = { method: 'DELETE' };
                fetch(process.env.API_URL + 'topics/' + id, option)
                    .then((resp) => { resp.json() })
                    .then((result) => {
                        router.refresh();
                        router.push('/');
                    });
            }} />
*/