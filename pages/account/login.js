import React, { useState, useContext } from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import axios from 'axios'
import { UserContext } from '../../context'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'


;
import toast from "react-hot-toast";


const Login = () => {
  const [ email, setEmail ] = useState ('')
  const [ password, setPassword ] = useState ('')
  const router = useRouter()

  const [state, setState] = useContext(UserContext)

  const handleClick = async (e) => {
   
   
    // console.log(email, password)

    try {
      e.preventDefault()

      const { data } = await axios.post('login', {
      email,
      password,
    })
    console.log(data)

    if (data.error) {
      toast.error(data.error)
    } else {
      setPassword('')
      setEmail('')
      setState(data)
      // state(data)
      localStorage.setItem('auth', JSON.stringify(data))
      router.push('/account/dashboard')

    }
  

      
    } catch (error) {
      console.log(error)
      toast.error('something went wrong')
      
    }

  }
  return(
    <Layout>
    <div className="d-flex justify-content-center" style={{ height: "80vh" }}>
    <div className="container align-items-center d-flex">
      <div className="row col-md-6 offset-md-3 text-center">
        <h1 className="pt-5 fw-bold">Login</h1>
        <Input 
          label='Email'
          value={email}
          setValue={setEmail}
          />
       <Input 
          label='Password'
          value={password}
          setValue={setPassword}
          type="password"
          />
          <div className="d-grid">
          <Button 
          handleClick={handleClick}  text="Login"
          size="sm"
          />
          </div>
         

        </div>
        </div>
        </div>
        </Layout>
  )
};

export default Login;
