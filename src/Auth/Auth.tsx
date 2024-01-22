import { Routes, Route } from 'react-router-dom';
import Login from './Login'
import Signup from './SignUp'
import './Auth.scss'
import Logo from '../Components/Logo';
import ButtonForm from '../Components/ButtonForm';
import ForgetPassword from './ForgetPassword';
import { Link } from 'react-router-dom';


const Home = () => (
    <div className='form'>
        <Link to='/login'>
            <ButtonForm content={'Sign in'} />
        </Link>
        <Link to='/signup'>
            <ButtonForm color={{ background: '#A3A3A3', color: 'white' }} content={'Sign up'} />
        </Link>
    </div>
)

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
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/forget-password" element={<ForgetPassword />} />
                </Routes>

            </div>
        </main>
    )
}

export default Auth
