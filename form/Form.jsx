import React, { useState } from 'react'
import './form.css' 

const Form = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
        gender:''
    })
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
       const {name , value} = e.target; //called every time a user types or changes a form field

       setFormData(prev => ({
        ...prev, //uses the spread operater to keep other values unchanged
        [name]:value  //update formdata using the inputs name as key and the value changes as the new value
       }))
    }

    return (

        <form>
            <div>
                <input
                    type="text"
                    name='name'
                    value={formData.name}
                    placeholder='Name'
                    onChange={handleChange} />
            </div>
            <div>
                <input
                    type="email"
                    name='email'
                    value={formData.email}
                    placeholder='Email'
                    onChange={handleChange} />
            </div>
            <div>
                <input
                    type="text"
                    name='age'
                    value={formData.age}
                    placeholder='Age'
                    onChange={handleChange} />
            </div>
            <div>
                <input
                    type="password"
                    name='password'
                    value={formData.password}
                    placeholder='Password'
                    onChange={handleChange} />
            </div>
            <div>
                <input
                    type="password"
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    placeholder='Confirm Password'
                    onChange={handleChange} />
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
            </div>
            <button type='submit'>Submit</button>
        </form>

    )
}

export default Form
