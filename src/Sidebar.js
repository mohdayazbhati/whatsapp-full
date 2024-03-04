import React from 'react'
import "./Sidebar.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';

function Sidebar ()  {
  return (
    <div className='sidebar'>
         <div className='sidebar__header'>
                <Avatar src='https://images.unsplash.com/photo-1584847642060-a46e239155a8?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
               <div className='sidebar__headerRight'>
                <IconButton>
                   <DonutLargeIcon />
                </IconButton>
                <IconButton>
                   <ChatIcon />
                </IconButton>
                <IconButton>
                   <MoreVertIcon />
                </IconButton>
               </div>
         </div>
         <div className='sidebar__search'>
                 <div className='sidebar__searchContainer'>
                     <SearchOutlined />
                     <input placeholder='Search or start new chat' type='text'/>
                 </div>
         </div>

      <div className='sidebar__chats'>
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
      </div>

    </div>
  )
}

export default Sidebar
