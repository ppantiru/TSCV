import '../stylesheets/AuthForms.css'
import '../stylesheets/Cyber.css'
import { useNavigate } from 'react-router-dom'


function RegisterForm(){
    const navigate = useNavigate()

    return (
        <>
        <div className="overlay" onClick={() => navigate(-1)}/>
        <div className='loginForm centered col-sm-3'>
            <form action="#">
                <input type="text" placeholder='username'/>
                <input type="password" placeholder='password'/>
                <input type="password" placeholder='confirm password'/>
                <button className='cybr-btn cybr-btn-smaller'>  
                <span aria-hidden className='loginText'>Create Account_</span>
                <span aria-hidden className="cybr-btn__glitch">root_</span>
                <span aria-hidden className="cybr-btn__tag">R25</span>
                </button>
            </form>
        </div>   
        </>
    )
}

export default RegisterForm