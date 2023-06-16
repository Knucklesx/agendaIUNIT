"use client";
import { Button, Card } from "@tremor/react";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Page() {


	return (
		<>
			<div 
      className="h-screen border-2 border-solid border-red-500 flex justify-center items-center bg-fixed"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1553034710-47f9e03ff808?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
      }
      >
        <div className="w-1/2">

				< CardsReg />

        </div>
			</div>
		</>


	);
}

export function CardsReg() {
	const [error, setError] = useState(false);
	const [disabled, setDisabled] = useState(true);
	const [password, setPassword] = useState("");

	const router = useRouter();

	const handleClick = (r: { preventDefault: () => void }) => {
		r.preventDefault();
		setError(true);
		router.push('/registro');
		// router.push("/");
	};

	const handleInputChange = (e) => {
		setPassword(e.target.value);
		setDisabled(e.target.value.length < 4);
	};

	return (
		<Card className="w-1/4 m-80 h-fit border-2 border-solid border-green-500 bg-color bg-slate-50">
			<div className="relative w-full mb-3">
				<label
					className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
					htmlFor="grid-password"
				>
					Usuário	
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
					<p className="text-red-500 text-xs italic">Já existe um usuário com esse nome</p>
				)}
			</div>
			<div>
				<Button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					type="button"
					onClick={handleClick}
					disabled={disabled}
				>
					Salvar
				</Button>
			</div>
			
		</Card>
	)
}