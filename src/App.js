import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { Box } from "@mui/material";
import {
	NavBar,
	ChannelDetails,
	VideoDetails,
	SearchFeed,
	Feed,
} from "./components";

function App() {
	return (
		<BrowserRouter>
			<Box
				sx={{
					backgroundColor: "#000",
				}}
			>
				<NavBar />

				<Routes>
					<Route path="/" element={<Feed />}></Route>
					<Route path="SearchFeed" element={<SearchFeed />}></Route>
					<Route path="/video/:id" element={<VideoDetails />}></Route>
					<Route path="/channel/:id" element={<ChannelDetails />}></Route>
					<Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
				</Routes>
			</Box>
		</BrowserRouter>
	);
}

export default App;
