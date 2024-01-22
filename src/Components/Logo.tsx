import './Logo.scss'

const MessageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={'4.56956rem'} height={'4.3125rem'} viewBox="0 0 79 75" fill="none">
        <path d="M2.98535 15.9024V8.73438C2.98535 5.56737 5.55272 3 8.71973 3H70.3643C73.5313 3 76.0987 5.56737 76.0987 8.73438V48.8751C76.0987 52.0421 73.5313 54.6094 70.3643 54.6094H60.3292L63.6829 70.2603C63.9761 71.6282 62.3368 72.563 61.3088 71.6141L45.9932 57.4766H8.71973C5.55272 57.4766 2.98535 54.9093 2.98535 51.7422V48.8751" stroke="url(#paint0_linear_0_574)" strokeWidth="4.30079" />
        <defs>
            <linearGradient id="paint0_linear_0_574" x1="2.98535" y1={3} x2="63.1964" y2="77.547" gradientUnits="userSpaceOnUse">
                <stop stopColor="#485BFF" />
                <stop offset={1} stopColor="#59CDFF" />
            </linearGradient>
        </defs>
    </svg>

)


function Logo() {
    return (
        <div id='Logo'>
            <h3>{'Q&A'}</h3>
            <span>app</span>
            <MessageIcon />
        </div>
    )
}

export default Logo
