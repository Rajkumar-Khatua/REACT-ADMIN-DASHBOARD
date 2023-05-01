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
import Avatar from "@mui/material/Avatar";
import { AvatarGroup } from "@mui/material";
import { Badge } from "@mui/base";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { darkModeContext } from "../../Context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(darkModeContext);

  return (
    <div className='sidebar'>
      <div className='top'>
        <Link
          to='/'
          style={{ color: "inherit", textDecoration: "none" }}>
          <span className='logo'>
            Raj{" "}
            <span
              style={{ color: "#032e47" }}
              className='inner'>
              Admin
            </span>
          </span>
        </Link>
      </div>
      <hr className='line' />
      <div className='center'>
        <ul>
          <p>MAIN</p>
          <li>
            <SpaceDashboardRoundedIcon className='icon' />
            <span>DashBoard</span>
          </li>
          <p>LISTS</p>
          <Link
            to='/users'
            style={{ color: "inherit", textDecoration: "none" }}>
            <li>
              <Person3RoundedIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>
          <Link
            to='/products'
            style={{ color: "inherit", textDecoration: "none" }}>
            <li>
              <StorefrontRoundedIcon className='icon' />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <DescriptionRoundedIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <DeliveryDiningRoundedIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p>USEFUL</p>
          <li>
            <BarChartRoundedIcon className='icon' />
            <span>Status</span>
          </li>
          <li>
            <NotificationsActiveRoundedIcon className='icon' />
            <span>Notifications</span>
          </li>
          <p>SERVICE</p>
          <li>
            <SystemSecurityUpdateGoodRoundedIcon className='icon' />
            <span>Helth of system</span>
          </li>
          <li>
            <PsychologyRoundedIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <TuneRoundedIcon className='icon' />
            <span>Settings</span>
          </li>
          <p>PERSONAL</p>
          <li>
            <div
              className='avater'
              style={{ display: "flex", alignItems: "center" }}>
              <Avatar
                sx={{ bgcolor: "red" }}
                className='avatar'>
                R
              </Avatar>
              <span>Profile</span>
            </div>
          </li>
          <li>
            <LogoutRoundedIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <p className='theme'> THEHES</p>
      <div className='bottom'>
        <div className='colorOptions' onClick={()=> dispatch({type:"LIGHT_MODE"})}></div>
        <div className='colorOptions' onClick={()=> dispatch({type:"DARK_MODE"})}></div>
        {/* <div className='colorOptions'></div> */}
      </div>
    </div>
  );
};
export default Sidebar;
