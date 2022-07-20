import { useParams } from "react-router-dom"


export const Editperson = () => {
    const {id} = useParams();

    return (
        <div>
            <h1>Editpost post {id}</h1>
            <button>remove person</button>
        </div>
    )
}