import { Control } from "@/app/Control";
import { Box, TextField } from "@mui/material";

export default async function Read(props: any) {
    const resp =
        await fetch(`http://localhost:9999/topics/${props.params.id}`, { cache: 'no-store' })
    const topic =
        await resp.json();

    return (
        <Box sx={{ marginBottom: "20px", '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
            <Box>
                <TextField
                    id="standard-read-only-input"
                    label="Title"
                    value={topic.title}
                    variant="standard"
                    sx={{ m: 1, width: '50ch' }}
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Box>
            <Box>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Body"
                    value={topic.body}
                    multiline
                    rows={4}
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Box>
            <Control />
        </Box>
    )
}