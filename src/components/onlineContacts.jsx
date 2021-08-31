import React, { Component} from 'react';
import data from './data/data.json';

class OnlineContacts extends Component {


    render() { 
        const newdata = data.map(data => {
            return (
                <div key={data.id} className="onlineContacts">
                    <div>
                        <img src={data.profile_photo} alt=""/>
                        <span className="onlineIndicator"></span>
                    </div>
            <div className='contactName'>{data.first_name}</div>
                </div>
            );
        })
    return newdata ;
    }
}
 
export default OnlineContacts;
