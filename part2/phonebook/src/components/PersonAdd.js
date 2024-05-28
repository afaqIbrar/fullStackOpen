import React from 'react'

const PersonAdd = ({ api, name, number, handleNumber, handleName }) => {
    return (
        <form onSubmit={api}>
            <div>
                name: <input value={name} onChange={handleName} />
            </div>
            <div>
                number: <input value={number} onChange={handleNumber} /></div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonAdd