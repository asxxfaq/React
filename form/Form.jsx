import React, { useState } from 'react'
import './form.css'

const Form = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target; //called every time a user types or changes a form field

        setFormData(prev => ({
            ...prev, //uses the spread operater to keep other values unchanged
            [name]: value  //update formdata using the inputs name as key and the value changes as the new value
        }))
    }

    const validation = () => {
        const newError = {};
        const { name, email, age, password, confirmPassword, gender } = formData;

        if (!name.trim()) newError.name = "name is required!";
        else if (!/^[a-zA-Z]+$/.test(name))
            newError.name = "Name should contain only alphabets"

        if (!email)
            newError.email = "Email is required!!"
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
            newError.email = "Email is invalid"

        if (!age) newError.age = "Age is required!";
        else if (isNaN(age) || age < 1 || age > 120) newError.age = "Age must be between 1 and 120"

        if (!password) newError.password = "Password is required";
        else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@.#$!%*?&])[A-Za-z\\d@.#$!%*?&]{8,15}$/.test(password)) newError.password = "Invalid password"

        if (!confirmPassword) newError.confirmPassword = "Please confirm your password"
        else if (password !== confirmPassword) newError.confirmPassword = "Password do not match"

        if (!gender) newError.gender = "Gender is required";

        return newError;

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validateErrror = validation();

        if (Object.keys(validateErrror).length > 0) {
            setErrors(validateErrror);
        } else {
            setErrors({});
            alert("Form submitted succcesfully");
            console.log('form data', formData); //to show in the console

            //Empty input fields
            setFormData({
                name: '',
                email: '',
                age: '',
                password: '',
                confirmPassword: '',
                gender: ''
            })

        }
    }


    return (

        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    name='name'
                    value={formData.name}
                    placeholder='Name'
                    onChange={handleChange}
                     />
                     {errors.name && <p style={{color : 'red'}} > {errors.name}</p>}
            </div>
            <div>
                <input
                    type="email"
                    name='email'
                    value={formData.email}
                    placeholder='Email'
                    onChange={handleChange} />
                     {errors.email && <p style={{color : 'red'}} > {errors.email}</p>}
            </div>
            <div>
                <input
                    type="text"
                    name='age'
                    value={formData.age}
                    placeholder='Age'
                    onChange={handleChange} />
                     {errors.age && <p style={{color : 'red'}} > {errors.age}</p>}
            </div>
            <div>
                <input
                    type="password"
                    name='password'
                    value={formData.password}
                    placeholder='Password'
                    onChange={handleChange} />
                    {errors.password && <p style={{color : 'red'}} > {errors.password}</p>}
            </div>
            <div>
                <input
                    type="password"
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    placeholder='Confirm Password'
                    onChange={handleChange} />
                     {errors.confirmPassword && <p style={{color : 'red'}} > {errors.confirmPassword}</p>}
            </div>
            {/* male  */}
            <div>
                <label>
                    <input
                        type="radio"
                        name='gender'
                        value="male"
                        onChange={handleChange}
                        checked={formData.gender === 'male'}
                    />
                    male
                </label>
                {/* female  */}
                <label>
                    <input
                        type="radio"
                        name='gender'
                        value="female"
                        onChange={handleChange}
                        checked={formData.gender === 'female'}
                    />
                    female
                </label>
                {errors.gender && <p style={{color : 'red'}} > {errors.gender}</p>}
            </div>
            <button type='submit'>Submit</button>
        </form>

    )
}

export default Form
