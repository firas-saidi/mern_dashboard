import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import TestTab from "./components/Table/TestTab";
import Info from "./Info";
import Homepage from "./components/homepage/Homepage";
import Single from "./components/single/Single";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			 <Route path="/" exact element={user ?<Main />:<Homepage/>} />
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			{ user && 	<Route path="/test" element={<TestTab  />} />}
		{ user && 	<Route path="/info" element={<Info />} />}
			<Route path="/post/:id" element={<Single />} />
			{ user && <Route path="/oldhome" element={<Homepage />} />}

		</Routes>
	);
}

export default App;
