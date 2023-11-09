import { Box, Paper, TextField, Typography } from "@mui/material";
import Head from "next/head";
import { Control } from "./Control";

export default function Home() {
  return (<>
    <Box sx={{ marginBottom: "20px", '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
      <Box>
        <TextField
          id="standard-read-only-input"
          label="Title"
          value="Welcome"
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
          value="Hello, WEB!"
          multiline
          rows={4}
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>
      <Control />
    </Box>
  </>)
}
