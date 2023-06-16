"use client";
import { Grid } from "@tremor/react";
import { useState } from "react";

export default function Page() {
	const [selectedSquare, setSelectedSquare] = useState(null);
	const [editingSquare, setEditingSquare] = useState(null);
	const [eventText, setEventText] = useState({});
	const [eventTime, setEventTime] = useState({});

	const handleSaveEvent = (event, index) => {
		event.preventDefault();
		const inputText = document.getElementById(`event-input-text-${index}`);
		const inputTime = document.getElementById(`event-input-time-${index}`);
		setEventText((prevState) => ({
			...prevState,
			[index]: inputText.value,
		}));
		setEventTime((prevState) => ({
			...prevState,
			[index]: inputTime.value,
		}));
		setEditingSquare(null);
	};

	return (
		<>
			<div className="w-full text-center mt-10 ">
				<h1 className="text-black-500 font-extrabold text-xl">Planner</h1>
			</div>
			<div className="mt-12">
				<Grid numCols={7} className="h-screen gap-2">
					{Array.from({ length: 30 }).map((_, index) => (
						<div
							key={index}
							className={`bg-gray-300 h-24 relative rounded-lg ${
								selectedSquare === index ? "bg-blue-400" : ""
							}`}
							onClick={() => {
								setSelectedSquare(index);
								setEditingSquare(index);
							}}
						>
							<span className="absolute top-0 left-0 m-2">{index + 1}</span>
							{editingSquare === index && (
								<div className="absolute bg-white p-2 rounded-lg shadow-md bottom-0 left-0">
									<form onSubmit={(event) => handleSaveEvent(event, index)}>
										<label htmlFor={`event-input-text-${index}`}>
											Criar evento:
										</label>
										<br />
										<input
											id={`event-input-text-${index}`}
											type="text"
											placeholder="Digite o evento"
										/>
										<br />
										<label htmlFor={`event-input-time-${index}`}>
											Horário do evento:
										</label>
										<br />
										<input
											id={`event-input-time-${index}`}
											type="time"
											placeholder="Digite o horário"
										/>
										<br />
										<button type="submit">Salvar</button>
									</form>
								</div>
							)}
							{eventText[index] && (
								<div className="absolute bg-white p-2 rounded-lg shadow-md top-0 right-0">
									<p>{eventText[index]}</p>
									<p>{eventTime[index]}</p>
								</div>
							)}
						</div>
					))}
				</Grid>
			</div>
		</>
	);
}
