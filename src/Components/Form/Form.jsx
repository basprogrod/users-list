import { useState } from 'react';
import './styles.scss';


export const Form = ({ addUser }) => {

    const [ name, setName] = useState('')
    const [ lastname, setLastname] = useState('')

    const handlers = {
        name(value) {
            setName(value)
        },
        lastname(value) {
            setLastname(value)
        },
    }
    
    const handleChange = (e) => {
        const propName = e.target.name;
        
        if (propName) {
            handlers[propName](e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser({ name, lastname });
        setName('');
        setLastname('');
    }
    
    const handleClick = (e) => {
        handleSubmit(e)
    }

    const handlePressEnter = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }

    return (
        <form className='form' onSubmit={handleSubmit} >
            <h3 className='form__title'>Create Person</h3>
            <div className='form__group'>
                <input className='form__input' type="text" placeholder=" " name='name' value={name} onChange={handleChange} />
                <label className='form__label'>Name*</label>
            </div>
            <div className='form__group'>
                <input className='form__input' type="text" placeholder=" " name='lastname' value={lastname} onChange={handleChange} />
                <label className='form__label'>Lastname*</label>
            </div>
            <button className='form__button' onKeyDown={handlePressEnter} onClick={handleClick} >Create</button>
        </form>
    )
}
