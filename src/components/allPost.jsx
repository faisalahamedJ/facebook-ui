import React, { Component } from 'react';
import {  GlobalOutlined } from '@ant-design/icons';
import data from './data/data.json';

class AllPost extends Component {
    state = {  }
    render() { 
        const newdata = data.map(data =>{            
            return ( 
                <div key={data.id} className="postContainer individualBox">
                                <div className='userAbout'>
                                    <div className='userProfile'><img src={data.profile_photo} alt="user_profile"/></div>
                                    <div className='userProfileName'>{data.first_name}
                                    <br/>
                                    <span>Sponsored.<GlobalOutlined /></span></div>
                                    <div className='more'>...</div>
                                </div>
                                <div className='userCaption'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nesciunt aspernatur consectetur cumque labore natus?
                                </div>
                                <div className='userImg'>
                                    <img src={data.uploaded_img} alt={data.first_name + '-uploaded'} />
                                </div>
                            </div>
             );
        })

        return newdata;
    }
}
 
export default AllPost;