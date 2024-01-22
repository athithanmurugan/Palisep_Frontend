import React from "react";
import './Iconographies.css';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {
	Checkbox,
	FormControl,
	FormLabel,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
} from "@mui/material";

const Iconographies = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const label = { inputProps: { "aria-label": "Checkbox demo" } };
	const paysOptions = [
		"Luxembourg",
		"Hongrie",
		"Italie",
		"Espagne",
		"France",
		"Malte",
		"Autriche",
		"Grèce",
		"Lituanie",
		"Chypre",
	];

	return (
		<Box component="main" className="bg-[#faebd7] px-3 mb-2 py-28">
			<Box>
			<Box className="formWrapper">
                <h2 className="formHeading">Search for Iconographies</h2>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
					<Box className="pt-3">
						<fieldset className="px-2">
							<Box
								sx={{
									display: "grid",
									gridTemplateColumns: "auto auto",
									gap: "280px",
									padding: "0px 40px 0px 70px",
								}}
							>
								<Box className="grid">
									<FormControl sx={{ mt: 2.5, width: 300 }}>
										<InputLabel
											id="demo-multiple-name-label"
											style={{ marginTop: "-8px" }}
										>
											Country
										</InputLabel>
										<Select
											labelId="demo-multiple-name-label"
											id="demo-multiple-name"
											input={
												<OutlinedInput
													style={{ marginTop: "-4px" }}
													label="Country"
												/>
											}
											size="small"
										>
											{paysOptions.map((name) => (
												<MenuItem key={name} value={name}>
													{name}
												</MenuItem>
											))}
										</Select>
									</FormControl>
									<FormControl sx={{ mt: 2.5, width: 300 }}>
										<InputLabel
											id="demo-multiple-name-label"
											style={{ marginTop: "-8px" }}
										>
											Region
										</InputLabel>
										<Select
											labelId="demo-multiple-name-label"
											id="demo-multiple-name"
											input={
												<OutlinedInput
													style={{ marginTop: "-4px" }}
													label="Region"
												/>
											}
											size="small"
										>
											{paysOptions.map((name) => (
												<MenuItem key={name} value={name}>
													{name}
												</MenuItem>
											))}
										</Select>
									</FormControl>
									<FormControl sx={{ mt: 2.5, width: 300 }}>
										<InputLabel
											id="demo-multiple-name-label"
											style={{ marginTop: "-8px" }}
										>
											Municipality
										</InputLabel>
										<Select
											labelId="demo-multiple-name-label"
											id="demo-multiple-name"
											input={
												<OutlinedInput
													style={{ marginTop: "-4px" }}
													label="Municipality"
												/>
											}
											size="small"
										>
											{paysOptions.map((name) => (
												<MenuItem key={name} value={name}>
													{name}
												</MenuItem>
											))}
										</Select>
									</FormControl>
									<TextField
										margin="normal"
										required
										label="Village"
										autoComplete="off"
										size="small"
										fullWidth
									/>
									<TextField
										margin="normal"
										required
										label="Building (Conservation)"
										autoComplete="off"
										size="small"
										fullWidth
									/>
									<TextField
										margin="normal"
										required
										label="Surname"
										autoComplete="off"
										size="small"
										fullWidth
									/>
									<FormControl sx={{ mt: 2.5, width: 300 }}>
										<InputLabel
											id="demo-multiple-name-label"
											style={{ marginTop: "-8px" }}
										>
											Date
										</InputLabel>
										<Select
											labelId="demo-multiple-name-label"
											id="demo-multiple-name"
											input={
												<OutlinedInput
													style={{ marginTop: "-4px" }}
													label="Date"
												/>
											}
											size="small"
										>
											{paysOptions.map((name) => (
												<MenuItem key={name} value={name}>
													{name}
												</MenuItem>
											))}
										</Select>
									</FormControl>
								</Box>
								<Box sx={{ display: "flex", flexDirection: "column" }}>
									<FormControl sx={{ mt: 2.5, width: 300 }}>
										<InputLabel
											id="demo-multiple-name-label"
											style={{ marginTop: "-8px" }}
										>
											Denomination
										</InputLabel>
										<Select
											labelId="demo-multiple-name-label"
											id="demo-multiple-name"
											input={
												<OutlinedInput
													style={{ marginTop: "-4px" }}
													label="Denomination"
												/>
											}
											size="small"
										>
											{paysOptions.map((name) => (
												<MenuItem key={name} value={name}>
													{name}
												</MenuItem>
											))}
										</Select>
									</FormControl>
									<FormControl sx={{ mt: 2.5, width: 300 }}>
										<InputLabel
											id="demo-multiple-name-label"
											style={{ marginTop: "-8px" }}
										>
											Category
										</InputLabel>
										<Select
											labelId="demo-multiple-name-label"
											id="demo-multiple-name"
											input={
												<OutlinedInput
													style={{ marginTop: "-4px" }}
													label="Category"
												/>
											}
											size="small"
										>
											{paysOptions.map((name) => (
												<MenuItem key={name} value={name}>
													{name}
												</MenuItem>
											))}
										</Select>
									</FormControl>
									<FormControl sx={{ mt: 2.5, width: 300 }}>
										<InputLabel
											id="demo-multiple-name-label"
											style={{ marginTop: "-8px" }}
										>
											Material
										</InputLabel>
										<Select
											labelId="demo-multiple-name-label"
											id="demo-multiple-name"
											input={
												<OutlinedInput
													style={{ marginTop: "-4px" }}
													label="Material"
												/>
											}
											size="small"
										>
											{paysOptions.map((name) => (
												<MenuItem key={name} value={name}>
													{name}
												</MenuItem>
											))}
										</Select>
									</FormControl>
									<TextField
										margin="normal"
										required
										label="Weapons"
										autoComplete="off"
										size="small"
										fullWidth
									/>
									<Box className="flex gap-2">
										<img
											alt="icon"
											src="https://europe.palisep.fr/resources/images/echange.jpg"
											style={{
												width: "20px",
												height: "20px",
												marginTop: "2px",
											}}
										/>
										<span className="italic">Ordered words</span>
									</Box>
									<Box className="py-3">
										<FormLabel className="text-black">Seal</FormLabel>
										<Checkbox {...label} />
									</Box>
								</Box>
							</Box>
							<Box className="flex justify-center">
								<Button
									type="button"
									variant="contained"
									sx={{ mt: 2, mb: 2, textTransform: "capitalize" }}
								>
									To research
								</Button>
							</Box>
						</fieldset>
					</Box>
				</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Iconographies;
