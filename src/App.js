import React from "react";
import {Navigation} from './component/nav/Navigation';
import {Header} from './component/header/Header';
import {Donate} from './component/donate/Donate';
import {Footer} from './component/footer/Footer';
import {Toaster} from "sonner";

function App() {

  return (
		<>
			<div className="bg-zinc-900 grid min-h-screen">
				<Navigation></Navigation>
				<Header></Header>
				<Donate></Donate>
				<Footer></Footer>
			</div>

			<Toaster />
		</>
  );
}

export default App;
