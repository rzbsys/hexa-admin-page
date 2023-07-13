import React from "react";
import "@styles/global.css";
import DashboardLayout from "@layouts/dashboard/layout";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "@pages/home";
import Error404Page from "@pages/404";
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<DashboardLayout>
					<Routes>
						<Route path='/' element={<Navigate to={"/home"}></Navigate>}></Route>
						<Route path='/home' element={<HomePage></HomePage>}></Route>
						<Route path='/*' element={<Error404Page></Error404Page>}></Route>
					</Routes>
				</DashboardLayout>
			</BrowserRouter>
		</div>
	);
}

export default App;
