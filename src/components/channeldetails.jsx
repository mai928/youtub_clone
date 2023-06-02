import React from "react";
import { useEffect, useState } from "react";
import { Videos, ChannelCard } from "./";
import { Box } from "@mui/material";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

const ChannelDetails = () => {
	const [channelDetail, setChannelDetails] = useState(null);
	const [videos, setVideos] = useState([]);
	const { id } = useParams();
	console.log(channelDetail, videos);

	useEffect(() => {
		fetchFromApi(`channels?part=snippet&id=${id}`).then((data) => {
			setChannelDetails(data?.items[0]);
		});

		fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
			(data) => {
				setVideos(data?.items);
			},
		);
	}, [id]);

	return (
		<Box minHeight="90vh">
			<Box>
				<div
					style={{
						background: "rgb(2,0,36)",
						background:
							"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(186,12,191,1) 100%)",
						zIndex: 10,
						height: "200px",
					}}
				/>

				<ChannelCard channelDetail={channelDetail} marginTop="-110px" />
			</Box>

			<Box display="flex" p={2}>
				<Box
					sx={{
						mr: { sm: "100px" },
					}}
				/>
					<Videos videos={videos} />
				
			</Box>
		</Box>
	);
};

export default ChannelDetails;

// const fetch =async()=>{
//   const data = await fetchFromApi(`channels?part=snippet&id=${id}`);
//     setChannelDetails(data?.items[0]);
//      }
// fetch();
// }, [id]);
