import { useState } from "react"
import { useDispatch } from "react-redux"
import { useLoginMutation } from '../redux/api/authApiSlice'
import { setCredentials } from "../redux/slice/authSlice"
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState<string | undefined>(undefined)
    const [password, setPassword] = useState<string | undefined>(undefined)

    const [runLogin, { isLoading: isLoginLoading }] = useLoginMutation()


    const isButtonDisabled = !(email && password)


    async function handleLogin() {

        if (email && password) {
            try {
                const result = await runLogin({ email: email, password: password }).unwrap()
                dispatch(setCredentials({ user: result.user, accessToken: result.accessToken }))
                navigate('/menu')
            }
            catch (e: any) {
                console.error(e)
            }
        }
    }

    return (
        <div className='flex items-center justify-center h-screen'>

            <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="p-4 flex  flex-col items-center justify-center border border-black rounded-sm">
                <h1 className="font-bold text-lg">Login</h1>
                <div className="mt-4 flex flex-col items-start">
                    <label htmlFor='email'>Email</label>
                    <input name='email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="flex flex-col items-start mt-4">
                    <label htmlFor='password'>Password</label>
                    <input name='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='mt-4' disabled={isButtonDisabled} type='submit'  >Login</button>
            </form>
        </div>
    )
}