import React from 'react'

const Items = () => {

    const Fruititems = ['Apple', 'Banana', 'Orange']

    return (
        <div>
            <ul>
                {Fruititems.map((fs,index) => (
                    <li  key={index}>{fs}</li>
                 ))}
            </ul>
        </div>
    )
}

export default Items