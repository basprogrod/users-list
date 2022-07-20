import { Link, useMatch } from "react-router-dom";

export const CustomLink = ({children, to, ...props}) => {
    const match = useMatch(to);

    return (
        <Link to={to}
            style={{ color: match ? 'deeppink' : 'white'}}
            {...props}
            >
            {children}
        </Link>
    )
}
