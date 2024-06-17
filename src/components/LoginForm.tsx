import { doSocialLogin } from "../app/actions";

const LoginForm = () => {
    return (
        <form action={doSocialLogin} className="flex flex-col justify-center items-center">
            <button 
                className="bg-pink-400 text-white p-1 rounded-md m-1 text-lg w-[385px]" 
                type="submit" 
                name="action" 
                value="google">
                Sign In With Google
            </button>

            <button 
                className="bg-black text-white p-1 rounded-md m-1 text-lg border-pink-400 border-2 w-[385px]" 
                type="submit" 
                name="action" 
                value="github">
                Sign In With GitHub
            </button>

            <div>OR</div>
            <button 
                className="bg-black text-white p-1 rounded-md m-1 text-lg border-pink-400 border-2 w-[385px]" 
                type="submit" 
                name="action" 
                value="github">
                Sign In With Email
            </button>
        </form>
    );
};

export default LoginForm;
