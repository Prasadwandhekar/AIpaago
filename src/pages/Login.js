import React from 'react'
import Template from '../components/Template'

const Login = ({setIsLoggedIn}) => {
  return (
     <Template
            // title="Welcome Back"
            // desc1="Build skills for today, tomorrow,and beyond."
            image="https://img.freepik.com/free-vector/my-password-concept-illustration_114360-4294.jpg?w=740&t=st=1703874734~exp=1703875334~hmac=199a6203867d8d1dc084703ddf85c4164fefea3bb21a0e8eb0aea46e54ca844d"
            formtype="login"
            setIsLoggedIn={setIsLoggedIn}
     />
  )
}

export default Login
