import Box from '@mui/material/Box';
import {TextField} from "@mui/material";

const Login = () => {
    return (
        <div>
            <span>{'hi'}</span>
            <Box component="form"
                 sx={{
                     '& .MuiTextField-root': { m: 1, width: '25ch' },
                 }}
                 noValidate
                 autoComplete="off">
                <div>
                    <TextField
                        label="Username"
                        id="username"
                        variant="outlined"/>
                </div>
            </Box>
        </div>
    )
}
export default Login;