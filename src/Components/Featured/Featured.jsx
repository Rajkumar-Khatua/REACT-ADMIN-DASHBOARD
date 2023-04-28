import { ArrowDownwardOutlined, ArrowUpwardOutlined, KeyboardArrowDownOutlined, MoreVertRounded, PieChart } from "@mui/icons-material"
import "./featured.scss"
import { CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Toatal Collection</h1>
        <MoreVertRounded fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$999</p>
        <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi amet.</p>

        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive" >
              <ArrowUpwardOutlined fontSize="small"/>
              <div className="resultAmount">$65.56k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <ArrowDownwardOutlined fontSize="small"/>
              <div className="resultAmount">$55.56k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <ArrowUpwardOutlined fontSize="small"/>
              <div className="resultAmount">$75.56k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Featured