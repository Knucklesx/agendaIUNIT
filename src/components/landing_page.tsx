"use client";
import { Button, Card } from "@tremor/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LandingPage() {
	const [error, setError] = useState(false);
	const [disabled, setDisabled] = useState(true);
	const [password, setPassword] = useState("");

	const router = useRouter();

	const handleClick = (r: { preventDefault: () => void }) => {
		r.preventDefault();
		// setError(true);
		router.push('/agenda');
		// router.push("/");
	};

	const handleInputChange = (e) => {
		setPassword(e.target.value);
		setDisabled(e.target.value.length < 4);
	};

	const handleClickRe = (r) => {
		r.preventDefault();
		router.push("/registro");
	}

	return (
		<Card className="w-1/4 m-80 h-fit border-2 border-solid border-green-500 bg-color bg-slate-50">
			<div className="relative w-full mb-3">
				<label
					className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
					htmlFor="grid-password"
				>
					Usuario
				</label>
				<input
					id="username"
					name="username"
					type="text"
					required
					// defaultValue="admin"
					className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
					placeholder="Usuario"
				/>
			</div>

			<div className="relative w-full mb-3">
				<label
					className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
					htmlFor="grid-password"
				>
					Senha
				</label>
				<input
					id="password"
					name="password"
					type="password"
					required
					value={password}
					onChange={handleInputChange}
					className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
					placeholder="Senha"
				/>
				{error && (
					<p className="text-red-500 text-xs italic">Campos incorretos</p>
				)}
			</div>
			<div>
				<Button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					type="button"
					onClick={handleClick}
					disabled={disabled}
				>
					Entrar
				</Button>
			</div>
			<div className="mt-5">
				<Button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					type="button"
					onClick={handleClickRe}
				>
					Registro
				</Button>
			</div>
		</Card>
	);
}
