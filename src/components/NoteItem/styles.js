import {FiPlus, Fix} from 'react-icons/fi'

import {Container} from './styles'

export function NoteItem({isNew, value, onClick, ...rest}){
    return(
        <Container isNew={isNew}>
            <input
                type='text'
                value={value}
                readOnly={!isNew}
                {...rest}
            />

            <button
             onClick={onClick}
             type='button'
            >
                {isNew ? <FiPlus/> : <Fix/>}
            </button>
        </Container>
    )
}