import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import CreateAccount from "../pages/CreateAccount";
import Login from "../pages/Login";
import MyAccount from "../pages/MyAccount";
import NewPassword from "../pages/NewPassword";
import NotFound from "../pages/NotFound";
import Orders from "../pages/Orders";
import RecoveryPassword from "../pages/RecoveryPassword";
import SendEmail from "../pages/SendEmail";

import "../styles/global.css";

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/create-account" element={<CreateAccount />} />
					<Route path="/login" element={<Login />} />
					<Route path="/my-account" element={<MyAccount />} />
					<Route path="/new-password" element={<NewPassword />} />
					<Route path="/orders" element={<Orders />} />
					<Route path="/recovery-password" element={<RecoveryPassword />} />
					<Route path="/send-email" element={<SendEmail />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
