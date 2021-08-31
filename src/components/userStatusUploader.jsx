import React, { Component } from 'react';
import { SmileFilled, VideoCameraFilled, PictureFilled} from '@ant-design/icons';

class UserStatusUploader extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='userThoughtBox individualBox'>
            <div className='userTypingBox'>
                <img src="http://dummyimage.com/168x100.png/dddddd/000000" alt="img"/>
                <input type="text" placeholder="What's on your mind?" />
                <hr/>
            </div>
            
            <ul className='userUploadButton'>
                <li><VideoCameraFilled className='videoIcon'/> Live Video</li>
                <li><PictureFilled className='pictureIcon' /> Photo/Video</li>
                <li className='feelingactivity' ><SmileFilled className='smileIcon'/> Feeling/Activity</li>
            </ul>
        </div>
         );
    }
}
 
export default UserStatusUploader;