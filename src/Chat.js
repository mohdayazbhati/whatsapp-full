import React from 'react';
import "./Chat.css";
import { Avatar, IconButton } from '@mui/material';
import { AttachFile, MoreVert, InsertEmoticon as InsertEmoticonIcon, SearchOutlined } from '@mui/icons-material';

function Chat() {
  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar />
        <div className='chat__headerInfo'>
          <h3>Room Name</h3>
          <p>Last Seen at...</p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className='chat__body'>
        <p className='chat__message'>
          <span className='chat__name'>Ayaz</span>
          This is a message
          <span className='chat__timestamp'>
            {new Date().toGMTString()}
          </span>
        </p>
        <p className='chat__message chat__reciever'>
          <span className='chat__name'>Ayaz</span>
          This is a message
          <span className='chat__timestamp'>
            {new Date().toGMTString()}
          </span>
        </p>
      </div>

      <div className='chat__footer'>
        <InsertEmoticonIcon />
      </div>
    </div>
  );
}

export default Chat;
