import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';

const WildPhotoSingle = ({ value }) => {
    const { name, img,price,shortDescription} = value;
    <Slider/>
    return (
        <div className="col-md-4 g-md-4 my-2">
            <div className="card">
                <h5 className='text-center'>{name}</h5>
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-text">Price Of a day : ${price}</h5>
                        <p>Short Description :{shortDescription}</p> 
                        <button type="button" as={Link}  to="/login" class="btn btn-primary">More info</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default WildPhotoSingle;