import "./Wedgets.scss";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import {
  AccountBalanceOutlined,
  MonetizationOnOutlined,
  Money,
  ShoppingCartOutlined,
} from "@mui/icons-material";


const Wedgets = ({ type }) => {
  var data='';

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <Person2RoundedIcon
            className='icon'
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlined
            className='icon'
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "erarning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlined
            className='icon'
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceOutlined
            className='icon'
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className='wedgets'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>
          {data.isMoney && "$"} {amount}
        </span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <ArrowUpwardRoundedIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};
export default Wedgets;