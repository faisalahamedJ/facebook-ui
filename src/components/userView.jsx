import React, { Component } from 'react';
import StatusBar from './statusBar';
import {CloseSquareOutlined, VideoCameraFilled, SearchOutlined, GiftTwoTone} from '@ant-design/icons';
import UserStatusUploader from './userStatusUploader';
import AllPost from './allPost';
import OnlineContacts from './onlineContacts';


class UserView extends Component {
    render() { 
        return ( 
           <div className='homeContainer'>
                <div className='userViewContainer'>
                    <div className='userViewStretch'>
                        <StatusBar />
                        <UserStatusUploader />

                        <div className="postHiddenContainer individualBox">
                            <div className="closeIcon"><CloseSquareOutlined /></div>
                            <div className='postHidden'><h3>Post hidden</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div>
                                <button className="undoBtn">Undo</button>
                            </div>
                        </div>


                        <AllPost />

                    </div>


                </div>

                <div className="nmContainer">
                    <div>Birthday</div>
                    <div><GiftTwoTone twoToneColor="#eb2f96"  /> Dhanish's Birthday Today</div>
                    <hr/>
                    <div >
                        <div className='onlineContainer'>
                            <div>Contacts</div>
                            <div className='contactIcon'>
                                <div><VideoCameraFilled /></div>
                                <div><SearchOutlined /></div>
                                <div>...</div>
                            </div>
                        </div>
                        <div>
                            <OnlineContacts />
                            <hr/>
                        </div>
                    </div>
                </div>




            </div>
         );
    }
}
 
export default UserView ;