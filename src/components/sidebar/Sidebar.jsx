import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">gabadmin</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li><DashboardIcon className="icon" /><span>Dashboard</span></li>
                <p className="title">LISTS</p>
                <li><PersonOutlineOutlinedIcon className="icon" /><span>Users</span></li>
                <li><FitnessCenterOutlinedIcon className="icon" /><span>Products</span></li>
                <li><ShoppingCartOutlinedIcon className="icon" /><span>Orders</span></li>
                <li><LocalShippingRoundedIcon className="icon" /><span>Delivery</span></li>
                <p className="title">USEFUL</p>
                <li><InsertChartOutlinedRoundedIcon className="icon" /><span>Stats</span></li>
                <li><NotificationsNoneOutlinedIcon className="icon" /><span>Notifications</span></li>
                <p className="title">SERVICE</p>
                <li><MonitorHeartOutlinedIcon className="icon" /><span>System health</span></li>
                <li><PsychologyOutlinedIcon className="icon" /><span>Logs</span></li>
                <li><SettingsOutlinedIcon className="icon" /><span>Settings</span></li>
                <p className="title">USER</p>
                <li><AccountCircleOutlinedIcon className="icon" /><span>Profile</span></li>
                <li><LogoutOutlinedIcon className="icon" /><span>Logout</span></li>
            </ul>
        </div>
        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar