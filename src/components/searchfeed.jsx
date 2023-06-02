import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
	const [videos, setvideos] = useState([]);
	const { searchTerm } = useParams();

	console.log('term' ,{searchTerm})
	useEffect(() => {
		fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
			setvideos(data.items);
		});
	}, [searchTerm]);
	return (
		<Box
			sx={{
				overflow: "auto",
				height: "90vh",
				flex: 2,
			}}
		>
			<Typography variant="h4" fontWeight="bold" color="white" mb={2}>
				The Result For :
				<span style={{ color: "#FC1503" }}> {searchTerm} video</span>
			</Typography>

			<Videos videos={videos} />
		</Box>
	);
};

export default SearchFeed;
