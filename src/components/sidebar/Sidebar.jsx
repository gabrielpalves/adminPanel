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
                <li><span><PersonOutlineOutlinedIcon className="icon" />Users</span></li>
                <li><span><FitnessCenterOutlinedIcon className="icon" />Products</span></li>
                <li><span><ShoppingCartOutlinedIcon className="icon" />Orders</span></li>
                <li><span><LocalShippingRoundedIcon className="icon" />Delivery</span></li>
                <p className="title">USEFUL</p>
                <li><span><InsertChartOutlinedRoundedIcon className="icon" />Stats</span></li>
                <li><span><NotificationsNoneOutlinedIcon className="icon" />Notifications</span></li>
                <p className="title">SERVICE</p>
                <li><span><MonitorHeartOutlinedIcon className="icon" />System health</span></li>
                <li><span><PsychologyOutlinedIcon className="icon" />Logs</span></li>
                <li><span><SettingsOutlinedIcon className="icon" />Settings</span></li>
                <p className="title">USER</p>
                <li><span><AccountCircleOutlinedIcon className="icon" />Profile</span></li>
                <li><span><LogoutOutlinedIcon className="icon" />Logout</span></li>
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