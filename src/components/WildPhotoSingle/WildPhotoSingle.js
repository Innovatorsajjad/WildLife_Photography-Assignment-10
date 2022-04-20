import React from 'react';
import Slider from '../Slider/Slider';

const WildPhotoSingle = ({ value }) => {
    const { name, img,price} = value;
    <Slider/>
    return (
        <div className="col-md-4 g-md-4 my-2">
            <div className="card">
                <h5 className='text-center'>{name}</h5>
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Price Of a day : ${price}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default WildPhotoSingle;