import useAuth from "../CastomHooks/useAuth";


const Login = () => {
    const { signInWithGoogle } = useAuth();

    return (
        <div className="login-container">
            <h2>Welcome to Task Manager</h2>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    );
};

export default Login;
