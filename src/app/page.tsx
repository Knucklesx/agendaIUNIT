import LandingPage from "@/components/landing_page";

export default function Home() {
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

				<LandingPage />

        </div>
			</div>
		</>
	);
}
