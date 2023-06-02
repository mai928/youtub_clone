import React from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { Videos } from "./";
import { CheckCircle } from "@mui/icons-material";
import { fetchFromApi } from "../utils/fetchFromApi";
import { positions } from "@mui/system";
import { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
const VideoDetails = () => {
	const [videodetail, setvideodetail] = useState(null);
	const [videos, setVideos] = useState(null);
	const { id } = useParams();
	useEffect(() => {
		fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => {
			setvideodetail(data.items[0]);
		});

		fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
			(data) => {
				setVideos(data.items);
			},
		);
	}, [id]);

	if (!videodetail?.snippet) return "Loading...";

	const {
		snippet: { title, channelId, channelTitle },
		statistics: { viewCount, likeCount },
	} = videodetail;

	return (
		<Box minHeight="95vh">
			<Stack
				direction={{
					xs: "column",
					md: "row",
				}}
			>
				<Box flex={1}>
					<Box
						sx={{
							width: "100%",
							position: "sticky",
							top: "50px",
						}}
					>
						<ReactPlayer
							className="react-player"
							controls
							url={`https://www.youtube.com/watch?v=${id}`}
						/>
						<Typography variant="h5" color="#fff" fontWeight="bold" p={2}>
							{title}
						</Typography>

						<Stack
							direction="row"
							justifyContent="space-between"
							px={2}
							sx={{
								color: "#fff",
							}}
						>
							<Link to={`/channel/${channelId}`}>
								<Typography
									variant={{ sm: "subtitle1", md: "h6" }}
									color="#fff"
								>
									{channelTitle}
									<CheckCircle
										sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
									/>
								</Typography>
							</Link>

							<Stack direction="row" gap="20px" alignItems="center">
								<Typography
									variant="body1"
									sx={{
										opacity: 0.7,
									}}
								>
									{parseInt(viewCount).toLocaleString()}views
								</Typography>

								<Typography
									variant="body1"
									sx={{
										opacity: 0.7,
									}}
								>
									{parseInt(likeCount).toLocaleString()} Likes
								</Typography>
							</Stack>
						</Stack>
					</Box>
				</Box>
				
				<Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center"
			  alignItems='center'
			>
			 	<Videos videos={videos}  direction='column' />
			</Box>
			</Stack>

			
		</Box>
	);
};

export default VideoDetails;
