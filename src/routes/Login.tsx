import { useState } from "react"
import Logo from "../assets/logo.png"
import { FormInput } from "../components"

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className="container border-2 h-auto w-96">
            <div className="w-full">
                <div className='border-b flex flex-col my-5 pb-4 items-center w-full justify-center'>
                    <img src={Logo} alt="" />
                    <h1>One Login</h1>
                    <p>All Government Services</p>
                </div>

                <form action="" className="flex flex-col items-center my-10 px-2">
                <div className="flex flex-col my-5 justify-center mx-auto items-center w-full">
                    <FormInput name="email" placeholder="john.doe@gmail.com or 111111111" value={email} onChange={() => setEmail(email)} label="Email Address or ID Number" />
                    <FormInput name="password" placeholder="....." value={password} onChange={() => setPassword(password)} label="Password" />
                </div>
                <button className="w-full bg-green-500 py-2 rounded-md text-white font-semibold text-lg">Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login