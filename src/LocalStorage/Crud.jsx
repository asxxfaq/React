import React, { useEffect, useState } from 'react'
import './crud.css'
import { data } from 'react-router-dom';

const Crud = () => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        age: ''

    })
    const [users, setUsers] = useState([]);
    const [editMode, setEditMode] = useState(true);
    const [errors, setErrors] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() =>{
        const stored = localStorage.getItem("users");
        if(stored){
            try {
                const parsedUser =JSON.parse(stored);
                setUsers(parsedUser)
            } catch (error) {
                console.log('Error parsing Data',error);
                localStorage.removeItem("users") //clear corrupted data
                
            }
        }
        setIsLoaded(true);

    },[]);

    //save user to LocalStorage (Whenever user changes only after initial load)
    useEffect(() => {
        if (isLoaded) { //only save after initial Load is Completed
            localStorage.setItem("users", JSON.stringify(users))
        }
    }, [users, isLoaded])

    const handleChange = (e) => {
        const { name, value } = e.target; //called every time a user types or changes a form field

        setFormData(prev => ({
            ...prev, //uses the spread operater to keep other values unchanged
            [name]: value  //update formdata using the inputs name as key and the value changes as the new value
        }))
    }


    const validation = () => {
        const newError = {};
        const { name, email, age } = formData;

        if (!name.trim()) newError.name = "name is required!";
        else if (!/^[a-zA-Z]+$/.test(name))
            newError.name = "Name should contain only alphabets"

        if (!email)
            newError.email = "Email is required!!"
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
            newError.email = "Email is invalid"

        if (!age) newError.age = "Age is required!";
        else if (isNaN(age) || age < 1 || age > 120) newError.age = "Age must be between 1 and 120"

        return newError;

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationError = validation();
        if (Object.keys(validationError).length > 0) {
            setErrors(validationError);
            return;
        }
        if (editMode) {
            setUsers(users.map(user => user.id === formData.id ? formData : user))
            setEditMode(false);
        } else {
            const newUser = {...formData , id:Date.now().toString()}
            setUsers([...users,newUser])
        }
        setFormData({
            id:'',
            name:'',
            email:'',
            age:''
        });
        setErrors({});
    }

    return (
        <div className="form">
            <h1>React-Crud</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input

                        type="text"
                        name='name'
                        value={formData.name}
                        placeholder='Name'
                        onChange={handleChange}
                    />
                    {errors.name && <p style={{ color: 'red' }} > {errors.name}</p>}
                </div>
                <div>
                    <input
                        type="email"
                        name='email'
                        value={formData.email}
                        placeholder='Email'
                        onChange={handleChange} />
                    {errors.email && <p style={{ color: 'red' }} > {errors.email}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        name='age'
                        value={formData.age}
                        placeholder='Age'
                        onChange={handleChange} />
                    {errors.age && <p style={{ color: 'red' }} > {errors.age}</p>}
                </div>

                <button type='submit'>{editMode ? 'update User' : 'Add user'}</button>
                {
                    editMode && (
                        <button
                            type='button'
                            style={{ marginLeft: '10px' }}
                        >Cancel</button>
                    )}
            </form>
        </div>

    )

}
export default Crud
