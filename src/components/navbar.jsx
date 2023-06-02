import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./searchbar";
const NavBar = () => {
	return (
		<Stack
			direction="row"
			alignItems="center"
			p={2}
			
			sx={{
				position: "sticky",
				justifyContent: "space-between",
			}}
		>
			<Link to="/"  style={{
				display:'flex',
				alignItems:'center',

			}}>
				<img src={logo} height={45} />
			</Link>

			<SearchBar  />
		</Stack>
	);
};

export default NavBar;
