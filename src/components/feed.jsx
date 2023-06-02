import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Videos, Sidebar } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

const Feed = () => {
	const [selectedCatagory, setselectedCatagory] = useState("New");
	const [videos, setvideos] = useState([]);

	useEffect(() => {
		fetchFromApi(`search?part=snippet&q=${selectedCatagory}`).then((data) => {
			setvideos(data.items);
		});
	}, [selectedCatagory]);
	return (
		<Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
			<Box
				sx={{
					borderRight: "1px solid #3d3d3d",
					height: { sx: "auto", md: "90vh" },
					px: { sx: 0, md: 2 },
				}}
			>
				<Sidebar
					selectedCatagory={selectedCatagory}
					setselectedCatagory={setselectedCatagory}
				/>
				<Typography
					sx={{
						mt: 1.5,
						color: "#fff",
					}}
				>
					Copyright © 2022 JSM Media
				</Typography>
			</Box>

			<Box
				sx={{
					overflow: "auto",
					height: "90vh",
					flex: 2,
				}}
			>
				<Typography variant="h4" fontWeight="bold" color="white" mb={2}>
					{selectedCatagory}
					<span style={{ color: "#FC1503" }}>video</span>
				</Typography>

				<Videos videos={videos} />
			</Box>
		</Stack>
	);
};

export default Feed;
