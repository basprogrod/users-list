import { useParams, Link } from "react-router-dom";

export const Person = ({ person }) => {

    const {id} = useParams()

    console.log(person);

    return (
        <div>
            <h1>Person</h1>
            <div>
                {
                    <>
                        {person.map((user) => <p>Welcome to <b>{user.name} {user.lastname}</b>!</p>)}
                        <br />
                        <Link to={`/${id}/edit`} >Edit person</Link>
                    </>
                }
            </div>
        </div>
    )
}