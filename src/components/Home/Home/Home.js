import React, { useEffect, useState } from 'react';
import Slider from '../../Slider/Slider';
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
        <div className='row container mx-auto'>
            <Slider/>
            <h2 className='text-info text-center mb-3'>..... SERVICES .....</h2>
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