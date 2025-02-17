import React, { useContext } from 'react'
import { AppContext } from '../App'

const Context = () => {
    const details = useContext(AppContext)

    return ( 
        details && 
            <div>
                <p>Language: {details?.language}</p>
                <p>Framework: {details?.framework}</p>
                <p>Projects: {details?.projects}</p>
            </div> 
        )
}

export default Context