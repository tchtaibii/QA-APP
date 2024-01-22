import './ButtonForm.scss'

function ButtonForm({content} : {content :string}) {
  return (
    <button className={'ButtonForm'}>
        {content}
    </button>
  )
}

export default ButtonForm