import { Form } from "../../Components/Form/Form"
import './styles.scss'

export const Adduserpage = ({ addUser }) => {
    return (
        <div className="wrapper">
            <Form addUser={addUser} />
        </div>
    )
}