import "./navbar.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";

import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import { Avatar } from "@mui/material";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='serach'>
          <input
            type='text'
            className='searcInput'
            placeholder='Search '
          />
          <SearchRoundedIcon className='icon' />
        </div>
        <div className='items'>
          <div className='item'>
            <PublicRoundedIcon className='icon' />
            <span>ENGISH</span>
          </div>
          <div className='item'>
            <NightlightRoundOutlinedIcon className='icon' />
          </div>
          <div className='item'>
            <FullscreenExitOutlinedIcon className='icon' />
          </div>
          <div className='item'>
            <NotificationsRoundedIcon className='icon' />
            <div className="batch">1</div>
          </div>
          <div className='item'>
            <ChatBubbleRoundedIcon className='icon' />
            <div className="batch">1</div>
          </div>
          <div className='item'>
            <WidgetsRoundedIcon className='icon' />
          </div>
          <Avatar
            alt='avater'
            src='https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
