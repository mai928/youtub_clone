import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";
import { color } from "@mui/system";

const SideBar = ({ selectedCatagory, setselectedCatagory }) => {
	return (
		<Stack
			direction="row"
			sx={{
				overflowY: "auto",
				height: { sx: "auto", md: "80vh" },
				flexDirection: { md: "column" },
			}}
		>
			{categories.map((catagory) => (
				<button
					onClick={() => {
						setselectedCatagory(catagory.name);
					}}
					className="category-btn"
					style={{
						background: catagory.name === selectedCatagory && "#FC1503",
						color: "white",
					}}
				>
					<span
						style={{
							color: catagory.name === selectedCatagory ? "white" : "red",
							marginRight: "10px",
						}}
					>
						{catagory.icon}
					</span>
					<span
						style={{
							opacity: catagory.name === selectedCatagory ? "1" : "0.8",
						}}
					>
						{catagory.name}
					</span>
				</button>
			))}
		</Stack>
	);
};

export default SideBar;
