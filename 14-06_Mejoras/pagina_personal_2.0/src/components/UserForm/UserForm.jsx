import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
    let userData = JSON.parse(localStorage.getItem('info')) || [];
    
    const saveUserData = () => {
        userData.push(data)
        localStorage.setItem('info', JSON.stringify(userData))
    };

    const [data, setData] = useState({
        username: "",
        email: "",
        message: ""
    });

    const [btnDisabled,setBtnDisabled] = useState(true);

    const [message,setMessage] = useState("");

    let navigate = useNavigate();

    const initialState = {
        username: "",
        email: "",
        message: ""
    };
    
    const clearState = () => {
        setData({ ...initialState })
    };
    
    const handleInputChange = (event) => {
        if (data.username.length + 1 < 3){
            setMessage('The name must have at least 3 characters');
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
        setMessage("Your message was successfully sent!");
        setTimeout(() => {
            navigate("/");
        }, 3000)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Write here your name"
                value={data.username}
                onChange={handleInputChange}
                name="username"
            />
            <input
                type="email"
                placeholder="Write here your email"
                value={data.email}
                onChange={handleInputChange}
                name="email"
            />
            <input
                type="text"
                placeholder="Write here your message"
                value={data.message}
                onChange={handleInputChange}
                name="message"
            />
            <button type="submit" disabled={btnDisabled}>Send</button>
            {message}
        </form>
    )
}

export default UserForm