import React, { useEffect, useState } from 'react';
import WildPhotoSingle from '../../WildPhotoSingle/WildPhotoSingle';



const Home = () => {
    const[values,setValues]=useState([])
    ;
    useEffect(()=>{
        fetch('Photography.json')
        .then(res=>res.json())
        .then(data=>setValues(data))
    },[])
    return (
        <div>
                   <h2>length; {values.length}</h2>
            {
                values.map(value=><WildPhotoSingle
                    key={value.id}
                    value={value}
                />)
            }
        </div>
    );
};


export default Home;