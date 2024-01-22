import { Routes, Route } from 'react-router-dom';
import Login from './Login'
import Signup from './SignUp'
import './Auth.scss'
import Logo from '../Components/Logo';

function Auth() {



    return (
        <main className='Auth'>
            <div className='hero'>
                <h1>{'Welcome to Q&A app'}</h1>
                <p>{'Because Every City Has a Story, and Your Questions Bring Them to Life!'}</p>
            </div>
            <div className='forms'>
                <Logo />
                <Routes>
                    <Route path="/login" element={<Login />} />

                </Routes>

                {/* <Route path="/signup" element={<Signup />} /> */}
            </div>
        </main>
    )
}

export default Auth
