import { useContext } from "react";
import AuthContext from "./Authcontext";


const SignInGoogle = () => {
    const {googlesignin } = useContext(AuthContext)

    const handlesignin = () =>{
        googlesignin()
        .then(result => {
            console.log(result.user);
        }).catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div className="m-4">
            <div className="divider">OR</div>
            <button onClick={handlesignin} className="btn">Google</button>
        </div>
    );
};

export default SignInGoogle;