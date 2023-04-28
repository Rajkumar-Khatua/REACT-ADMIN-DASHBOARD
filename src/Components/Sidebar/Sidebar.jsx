import "./sidebar.scss";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import Person3RoundedIcon from "@mui/icons-material/Person3Rounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import DeliveryDiningRoundedIcon from "@mui/icons-material/DeliveryDiningRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import SystemSecurityUpdateGoodRoundedIcon from "@mui/icons-material/SystemSecurityUpdateGoodRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import Avatar from '@mui/material/Avatar';
import { AvatarGroup } from '@mui/material';
import { Badge } from '@mui/base';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>Raj_Admin</span>
      </div>
      <hr />
      <div className='center'>
        <ul>
            <p>MAIN</p>
          <li>
            <SpaceDashboardRoundedIcon className="icon" />
            <span>DashBoard</span>
          </li>
          <p>LISTS</p>
          <li>
            <Person3RoundedIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <StorefrontRoundedIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <DescriptionRoundedIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <DeliveryDiningRoundedIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p>USEFUL</p>
          <li>
            <BarChartRoundedIcon className="icon" />
            <span>Status</span>
          </li>
          <li>
            <NotificationsActiveRoundedIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p>SERVICE</p>
          <li>
            <SystemSecurityUpdateGoodRoundedIcon className="icon" />
            <span>Helth of system</span>
          </li>
          <li>
            <PsychologyRoundedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <TuneRoundedIcon className="icon" />
            <span>Settings</span>
          </li>
          <p>PERSONAL</p>
          <li>
            <div className="avater" style={{display:'flex', alignItems:'center'}}>

          <Avatar sx={{ bgcolor:'red' }} className="avatar">R</Avatar>
            <span>Profile</span>
            </div>
          </li>
          <li>
            <LogoutRoundedIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
        <p className="theme"> THEHES</p>
      <div className='bottom'>
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
};
export default Sidebar;
