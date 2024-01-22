import { Link } from 'react-router-dom';
import './TextAndLink.scss'


function TextAndLink({ text, link, path, position = 'flex-end' }: { text: string, link: string, path: string, position: string }) {
    return (
        <div style={{ justifyContent: position }} className={'TextAndLink'}>
            <Link to={path}>
                {text}
                <span>{link}</span>
            </Link>
        </div>
    )
}

export default TextAndLink