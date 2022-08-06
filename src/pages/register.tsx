import { useState } from "react"
import { useRegisterMutation } from '../redux/api/authApiSlice'

import { useNavigate } from 'react-router-dom'

export default function Register() {

    const [email, setEmail] = useState<string | undefined>(undefined)
    const [password, setPassword] = useState<string | undefined>(undefined)

    const navigate = useNavigate()

    const [runRegistration, { isLoading: isLoginLoading }] = useRegisterMutation()


    const isButtonDisabled = !(email && password)


    async function handleRegistration() {

        if (email && password) {
            try {
                const result = await runRegistration({ email: email, password: password }).unwrap()
                navigate('/login')

            }
            catch (e: any) {
                console.error(e)
            }
        }
    }

    return (
        <div className='flex items-center justify-center h-screen'>
            <form className="p-4 flex  flex-col items-center justify-center border border-black rounded-sm">
                <h1>Registrazione</h1>
                <div className="mt-4 flex flex-col items-start">
                    <label htmlFor='email'>Email</label>
                    <input name='email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="flex flex-col items-start mt-4">
                    <label htmlFor='password'>Password</label>
                    <input name='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='mt-4' disabled={isButtonDisabled} type='button' onClick={() => handleRegistration()} >Registrati</button>
            </form>
        </div>
    )
}