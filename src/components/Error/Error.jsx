import './Error.scss'
import { memo } from 'react';

export const ErrorSection = memo(({ error }) => {
    const errorMessage = error instanceof Error ? error.message : 'Произошла неизвестная ошибка'

    // console.log('RENDER ERROR')
    return (
        <div className='error container'>
            <h1 className="error__message">{errorMessage}</h1>
        </div>
    )
})