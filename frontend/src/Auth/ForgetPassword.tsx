import InputForm from '../Components/InputForm';
import ButtonForm from '../Components/ButtonForm';
import TextAndLink from '../Components/TextAndLink';
function ForgetPassword() {
    return (
        <div className='form'>
            <h1>Forget password</h1>
            <InputForm name={'email'} placeholder={'Email'} type={'email'} />
            <TextAndLink text='Don’t have an account? ' link={'Signup'} path='/signup' />
            <ButtonForm content={'Continue'} />
        </div>
    )
}

export default ForgetPassword