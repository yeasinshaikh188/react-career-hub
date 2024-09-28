import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Ooops!!!</h1>
            <Link className="text-3xl text-red-500" to='/'>Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;