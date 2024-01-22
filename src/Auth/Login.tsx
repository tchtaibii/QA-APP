import InputForm from '../Components/InputForm';
import ButtonForm from '../Components/ButtonForm';

function Login() {
    return (
        <div className='form'>
            <InputForm name={'email'} placeholder={'Email'} type={'email'} />
            <InputForm name={'password'} placeholder={'Password'} type={'password'} />
            <ButtonForm content={'Sign in'} />
        </div>
    )
}

export default Login