import React from 'react'

const AllProducts = () => {
    const Products = [
        { id: 'P1', name: 'T-shirt' },
        { id: 'P2', name: 'Jeans' },
        { id: 'P3', name: 'Formal' }
    ]
    return (
        <div>
            <ul>
                {Products.map(prdt => (
                    <li style={{ background: ' red', color: 'white', margin: '10px' }} key={prdt.id}>{prdt.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllProducts
