import './Error.scss'

export const Error = ({ errorMessage }) => {
    return (
        <div className='error container'>
            <h1 className="error__message">{`Произошла ошибка. ${errorMessage}`}</h1>
        </div>
    )
}