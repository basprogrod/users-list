import { Link } from 'react-router-dom';
import './styles.scss';


export const Userspage = ({ users }) => {
    return (
        <div className='users'>
            <h1 className='users__title'>Users List</h1>
            <ol className='users__list'>
                {
                    users.map(user => (
                        <li className='users__item' key={user.id}>
                            <Link to={`/${user.id}`}>{user.name} {user.lastname}</Link>
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}
