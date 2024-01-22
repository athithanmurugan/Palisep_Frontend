import React, { useState } from "react";
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

function Recherche() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const paysOptions = [
    "Luxembourg",
    "Hongrie",
    "Italy",
    "Espagnole",
    "France",
    "Malt",
    "Auricle",
    "Grace",
    "Lithuania",
    "Chypre",
  ];

  const [envoyerOpen, setEnvoyerOpen] = useState(false);

  const handleToggle = () => {
    setEnvoyerOpen(!envoyerOpen);
  };

  return (
    <Box component="main" className="bg-[#faebd7] px-3 mb-2 py-28">
      <Box>
      <Box className="formWrapper">
                <h2 className="formHeading">Weapon & Family Search</h2>
        <form onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "auto auto",
              gap: "10px",
            }}
          >
            <fieldset className="px-2">
              <legend>Search by surname</legend>
              <Box className="flex gap-2">
                <TextField
                  margin="normal"
                  required
                  label="Surname/Family"
                  autoComplete="off"
                  size="small"
                  fullWidth
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 2, mb: 2, textTransform: "capitalize" }}
                >
                  research
                </Button>
              </Box>
            </fieldset>
            <fieldset className="px-2">
              <legend>Search by Field</legend>
              <Box className="flex gap-2">
                <TextField
                  margin="normal"
                  required
                  label="Fiefdom or Commune"
                  autoComplete="off"
                  size="small"
                  fullWidth
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 2, mb: 2, textTransform: "capitalize" }}
                >
                  research
                </Button>
              </Box>
            </fieldset>
          </Box>
          <Box className="pt-3">
            <fieldset className="px-2">
              <legend>Search by Weapons</legend>
              <Box className="flex gap-5">
                <TextField
                  margin="normal"
                  required
                  label="Weapons"
                  autoComplete="off"
                  size="small"
                  sx={{ width: "70%" }}
                />
                <Box className="flex gap-2" style={{ marginTop: "22px" }}>
                  <img
                    alt="icon"
                    src="https://europe.palisep.fr/resources/images/echange.jpg"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <span className="italic">Ordered words</span>
                </Box>
              </Box>
              <Box className="flex gap-52">
                <Box style={{ width: "50%" }}>
                  <TextField
                    margin="normal"
                    required
                    label="Surname"
                    autoComplete="off"
                    size="small"
                    fullWidth
                  />
                  <TextField
                    margin="normal"
                    required
                    label="Stronghold / Communes"
                    autoComplete="off"
                    size="small"
                    fullWidth
                  />
                  <FormControl sx={{ mt: 2.5, width: 200 }}>
                    <InputLabel
                      id="demo-multiple-name-label"
                      style={{ marginTop: "-8px" }}
                    >
                      Century
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      input={
                        <OutlinedInput
                          style={{ marginTop: "-4px" }}
                          label="Century"
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
                  <Box className="py-3">
                    <FormLabel className="text-black">Seal</FormLabel>
                    <Checkbox {...label} />
                  </Box>
                </Box>
                <Box className="grid" style={{ width: "50%" }}>
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
                      Department
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      input={
                        <OutlinedInput
                          style={{ marginTop: "-4px" }}
                          label="Department"
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
                </Box>
              </Box>
              <Box className="flex justify-center">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 2, mb: 2, textTransform: "capitalize" }}
                >
                  To research
                </Button>
              </Box>
            </fieldset>
          </Box>
        </form>
        <Box>
          <Button
            type="button"
            variant="contained"
            sx={{ mt: 2, mb: 2, textTransform: "capitalize" }}
            onClick={handleToggle}
          >
            Private
          </Button>
          {envoyerOpen && (
            <Box className="flex gap-2">
              <TextField
                margin="normal"
                required
                autoComplete="off"
                size="small"
              />
              <Button
                type="button"
                variant="contained"
                sx={{ mt: 2, mb: 2, textTransform: "capitalize" }}
              >
                Send
              </Button>
            </Box>
          )}
        </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Recherche;
