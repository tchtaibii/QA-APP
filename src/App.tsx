import { useState } from 'react'
import './App.scss'
import Auth from './Auth/Auth'
import Home from './Home/Home'

function App() {
	const [isLogin, setLogin] = useState(true)
	return (
		<>
			{
				isLogin
					?
					<Home />
					:
					<Auth />
			}
		</>
	)
}

export default App
