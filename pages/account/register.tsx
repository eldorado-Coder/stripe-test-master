import React, { useState, SyntheticEvent, useContext, ReactElement } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

import { UserContext } from "../../context";
import toast from "react-hot-toast";



interface Props {

  user: string,
  
}

export default function register({}: Props): ReactElement {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [redirect, setRedirect] = useState(false);
  const router = useRouter();

  const [ state, setState ] = useContext(UserContext)

  // form validation rules
  //   const validationSchema = Yup.object().shape({
  //     name: Yup.string()
  //         .required('First Name is required'),
  //     last_name: Yup.string()
  //         .required('Last Name is required'),
  //     email: Yup.string()
  //         .required('Username is required'),
  //     password: Yup.string()
  //         .required('Password is required')
  //         .min(6, 'Password must be at least 6 characters'),
  //         password_confirm: Yup.string()
  //         .required('Password is required')
  //         .min(6, 'Password must be at least 6 characters')

  // });
  // const formOptions = { resolver: yupResolver(validationSchema) };

  // const baseURL = process.env.NEXT_PUBLIC_API_URL;

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const data = await axios.post("register", {
        name,

        email,
        password,
      });

      if(data) 
       {
        setName ('')
        setPassword('')
        setEmail('')
        // toast.success(`Hi ${data.user.name} Welcome`)
        setState(data)
        localStorage.setItem('auth', JSON.stringify(data))
      }
    } catch (err: any) {
      alert(err.message);
    }

    if (redirect) {
      router.push("/account/dashboard");
    }

    setRedirect(true);
  };

  return (
    <>
      <div className="flex justify-center pt-40">
        <div>
          <form onSubmit={submit}>
            <div className="flex justify-center">
              <h1 className="h3  fw-normal">Log In</h1>
            </div>
            <div className="flex justify-center -mt-6 pb-20">
              <p>Already have an account? </p>
              <p className="ml-2 font-semibold hover:underline">
                <Link href="/dashboard">
                  <a>Login</a>
                </Link>
              </p>
            </div>

            <input
              placeholder="First Name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};



