import './InputForm.scss'

function InputForm({ type, name, placeholder }: { type: string, name: string, placeholder: string }) {
    return (
        <div className='inputForm'>
            <input type={type} name={name} placeholder={placeholder} />
        </div>
    )
}

export default InputForm