import React, {ChangeEvent, useState} from 'react'


const State = () => {
    const [text, setText] = useState('hooks')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    return (
        <div>
            <p>hook: {text}</p>
            <input type="text" value={text} onChange={handleChange} />
        </div>
    )
}

export default State