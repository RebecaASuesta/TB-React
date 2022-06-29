import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.scss'

const Form = () => {
    let userData = JSON.parse(localStorage.getItem('info')) || [];
    
    const saveUserData = () => {
        userData.push(data)
        localStorage.setItem('info', JSON.stringify(userData))
    };
    
    const [btnDisabled, setBtnDisabled] = useState(true);

    const [message, setMessage] = useState("");
    
    const navigate = useNavigate();

    const initialState = {
        username: "",
        email: "",
        message: ""
    };
    
    const [data, setData] = useState(initialState);
    
    const clearState = () => {
        setData({ ...initialState })
    };
    
    const handleInputChange = (event) => {
        if (data.username.length + 1 < 3){
            setMessage('El nombre debe tener al menos 3 caracteres');
            setBtnDisabled(true)
          } else {
            setMessage(null);
            setBtnDisabled(false)
          }
          setData({ ...data, [event.target.name]: event.target.value })
    };      
    
    const handleSubmit = (event) => {
        event.preventDefault();
        saveUserData();
        clearState();
        setMessage("¡Tu noticia fue enviada con éxito!");
        setTimeout(() => {
            navigate("/list");
        }, 2000)
    };

    return (
        <div className='form'>
            <h3>¡A redactar!</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Introduce tu nombre"
                    value={data.username}
                    onChange={handleInputChange}
                    name="username"
                />
                <input
                    type="email"
                    placeholder="Introduce tu email"
                    value={data.email}
                    onChange={handleInputChange}
                    name="email"
                />
                <textarea className='input3'
                    type="text"
                    placeholder="Escribe aquí tu noticia"
                    value={data.message}
                    onChange={handleInputChange}
                    name="message"
                />
                <button type="submit" disabled={btnDisabled}>Enviar</button>
                {message}
            </form>
        </div>
    )
}

export default Form