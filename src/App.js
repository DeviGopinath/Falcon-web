import { Routes, Route ,Navigate } from 'react-router-dom';
import classes from './App.module.css';
import SignInContainer from './components/containers/SignInContainer';
import SignUpContainer from './components/containers/SignUpContainer';
import DashBoardContainer from './components/containers/DashboardContainer';
import DataContainer from './components/containers/DataContainer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

toast.configure();


const App = () => {

	const [isLoggedIn, setLoggedIn] = useState(false);

	const setAuth = b => {
		setLoggedIn(b);
	};

	async function isAuth() {
		try {
			const response = await fetch('http://localhost:5000/home/auth/is-verify', {
				method: 'GET',
				headers: { token: localStorage.token },
			});
			const parseRes = await response.json();
			console.log(parseRes);
			parseRes == true ? setAuth(true) : setAuth(false);

		} catch (err) {
			console.error(err.message);

		}
	}
	useEffect(() => {
		isAuth();
	})


	return (
		<div className={classes.App}>
			<Routes>
			
				<Route exact path='/' element={!isLoggedIn ? <SignInContainer setAuth={setAuth} /> : <Navigate replace to='/home' />} />
				<Route exact path='/signup' element={!isLoggedIn ? <SignUpContainer setAuth={setAuth} /> : <Navigate replace to='/home' />} />
				<Route exact path='/home' element={isLoggedIn ? <DataContainer setAuth={setAuth} /> : <Navigate replace to='/' />} />
				<Route
					exact
					path='/dashboards'
					element={isLoggedIn ? <DashBoardContainer setAuth={setAuth}/> : <Navigate replace to='/' />}
				/>
			</Routes>
		</div>
	);
};

export default App;
