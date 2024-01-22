import './ButtonForm.scss'

function ButtonForm({ content, color = { background: '#0788FF', color: '#FEFEFE' } }: { content: string, color: { background: string, color: string } }) {
    return (
        <button style={{ backgroundColor: color.background, color: color.color }} className={'ButtonForm'}>
            {content}
        </button>
    )
}

export default ButtonForm