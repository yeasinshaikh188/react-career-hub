import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
            <h1 className="text-xl">Ooops!!!</h1>
            <Link className="text-3xl text-red-500" to='/'>Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;