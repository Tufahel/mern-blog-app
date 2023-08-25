import { useState } from "react";
function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function register(event){
        event.preventDefault();
        const res = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'},
        });
        if (res.status === 200) {
            alert('Reg successful');
        }
        else {
            alert('Reg failed');
        }
    }
    return (
        <form className="register" onSubmit={register}>
            <h3>Register</h3>
            <input type="text" placeholder="username" value={username} onChange={event => setUsername(event.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={event => setPassword(event.target.value)} />
            <button>Register</button>
        </form>
    );
}

export default RegisterPage;