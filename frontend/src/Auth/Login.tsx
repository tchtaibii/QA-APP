import InputForm from '../Components/InputForm';
import ButtonForm from '../Components/ButtonForm';
import TextAndLink from '../Components/TextAndLink';


function Login() {
    return (
        <div className='form'>
            <InputForm name={'email'} placeholder={'Email'} type={'email'} />
            <InputForm name={'password'} placeholder={'Password'} type={'password'} />
            <ButtonForm content={'Sign in'} />
            <TextAndLink text='do you ' link={'Forget password'} path='/forget-password' />
            <div className='line'></div>
            <TextAndLink position={'center'} text='Don’t have an account? ' link={'Signup'} path='/signup' />
        </div>
    )
}

export default Login