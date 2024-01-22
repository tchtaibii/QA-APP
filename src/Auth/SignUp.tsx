import InputForm from '../Components/InputForm';
import ButtonForm from '../Components/ButtonForm';
import TextAndLink from '../Components/TextAndLink';
function SignUp() {
    return (
        <div className='form'>
            <InputForm name={'First name'} placeholder={'First name'} type={'text'} />
            <InputForm name={'Second name'} placeholder={'Second name'} type={'text'} />
            <InputForm name={'email'} placeholder={'Email'} type={'email'} />
            <InputForm name={'password'} placeholder={'Password'} type={'password'} />
            <InputForm name={'re-password'} placeholder={'Confirm password'} type={'password'} />
            <ButtonForm content={'Sign up'} />
            <TextAndLink text='Already have account? ' link={'login '} path='/login' />

        </div>
    )
}

export default SignUp
