import React from "react";
import { useLocation } from 'react-router-dom';

const DetailTodo = () => {
    
    const { state } = useLocation();
    

    return (
        <div>
            <h2 className="Title-post" style={{margin :'0'}}>Detail</h2>
            <p className="Content" style={{fontSize : '30px', margin :'0'}}>{state?.content.description}</p>
        </div>
    );
}

export default DetailTodo;