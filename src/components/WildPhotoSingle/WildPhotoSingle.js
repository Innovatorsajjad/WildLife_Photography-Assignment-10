import React from 'react';

const WildPhotoSingle = ({ value }) => {
    console.log(value);
    const { name, img } = value;
    return (
        <div className="col-md-4">
            <div className="card">
                <h1>name :{name}</h1>
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default WildPhotoSingle;