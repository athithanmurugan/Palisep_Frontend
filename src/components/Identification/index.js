import { Box, Button, Container, TextField } from "@mui/material";
import React from "react";

export default function Identification() {
	return (
		<Box component="main" className="bg-[#faebd7] px-6 py-28">
			<Container maxWidth="xs">
				<fieldset className="px-2">
					<legend>Administration</legend>
					<TextField
						margin="normal"
						required
						label="Pseudonym"
						autoComplete="off"
						size="small"
						fullWidth
					/>
					<TextField
						margin="normal"
						required
						label="Password"
						autoComplete="off"
						size="small"
						fullWidth
					/>
					<Box className="flex justify-center">
						<Button
							type="button"
							variant="contained"
							sx={{ mt: 2, mb: 2, textTransform: "capitalize" }}
						>
							connection
						</Button>
					</Box>
				</fieldset>
			</Container>
		</Box>
	);
}
