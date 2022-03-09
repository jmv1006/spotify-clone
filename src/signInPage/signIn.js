import './signIn.css'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { saveUserToDb, auth, provider } from '../firebase'
import blackLogo from '../assets/images/spotifyblack.png';


const SignInPage = (props) => {
    

    async function signIn() {
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            saveUserToDb(user);
            props.logUserIn();
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    };

    const logInGuest = () => {
        props.logInGuest();
    }


    return(
        <div className="signInPageContainer">
            <div className='signInPageHead'>
                <img id='signInPageLogo' src={blackLogo}></img>
            </div>
            <div className='googleSignInContainer'>
                Sign In Below
                <button onClick={signIn} className='signInButton'>Sign In With Google</button>
                <button onClick={logInGuest} className='signInButton'>Sign In As Guest</button>
            </div>
        </div>
    );
};

export default SignInPage;