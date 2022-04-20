import React from 'react';
import ProfilePic from "../../images/ProfilePic.jpg"

const AboutMe = () => {
    return (
        <div className='text-center'>
          <img className='w-25 rounded pt-5 img-fluid' src={ProfilePic} alt="" />
            <div className="Bio">
            <h3 className='pt-2'>Khandaker Sajjad Hossen</h3>
                <p>about me</p>
            </div>
        </div>
    );
};

export default AboutMe;