import React, { useState, useRef } from "react";

//include images into your bundle

//create your first component
export function Home() {
	const player = useRef(null);
	const data = [
		{
			id: 1,
			category: "game",
			name: "Mario Castle",
			url: "files/mario/songs/castle.mp3"
		},
		{
			id: 2,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/hurry-starman.mp3"
		},
		{
			id: 3,
			category: "game",
			name: "Mario Overworld",
			url: "files/mario/songs/overworld.mp3"
		}
	];

	const [src, setSrc] = useState("");
	const [playing, setPlaying] = useState(false);

	const handleSongClick = index => {
		let song = `https://assets.breatheco.de/apis/sound/${data[index].url}`;
		setSrc(song);
		handlePlayClick();
	};
	const handlePauseClick = () => {
		player.current.pause();
		setPlaying(false);
	};

	const handlePlayClick = () => {
		if (src !== "") {
			player.current.play();
			setPlaying(true);
		} else {
			setTimeout(() => {
				player.current.play();
				setPlaying(true);
			}, 100);
		}
	};

	return (
		<div className="text-center py-3 px-1 player">
			<audio ref={player} src={src} />
			<ul>
				{data.map((song, index) => {
					return (
						<li key={index} onClick={() => handleSongClick(index)}>
							{song.name}
						</li>
					);
				})}
			</ul>
			<div className="nav">
				<i className="fas fa-chevron-circle-left mr-3" />
				{playing ? (
					<i
						className="far fa-pause-circle"
						onClick={handlePauseClick}
					/>
				) : (
					<i
						className="far fa-play-circle"
						onClick={handlePlayClick}
					/>
				)}
				<i className="fas fa-chevron-circle-right ml-3" />
			</div>
		</div>
	);
}
