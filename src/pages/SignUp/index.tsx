import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../services/firebase';

export const SignUp = () => {

    const { email, password, keyURL } = useParams();
    const [key] = useState('2904');
    const [success, setSuccess] = useState<boolean>(false);

    const handleSignUp = () => {
        if (keyURL === key) {
            createUserWithEmailAndPassword(auth, email as string, password as string)
                .then((userCredential) => {
                    setSuccess(true);
                })
                .catch((error) => {
                    setSuccess(false);
                });
        }
    }

    useEffect(() => {
        handleSignUp();
    }, [])

    return (
        <>
            <p>{success.toString()}</p>
        </>
    );
}

export default SignUp;