import "./single.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { Edit, EditAttributes, ListAltOutlined } from "@mui/icons-material";
import Chart from "../../Components/Chart/Chart";
import List from "../../Components/Table/Table";


const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className='singleConatiner'>
        <Navbar />
        <div className='top'>
          <div className='left'>
            <div className='editBtn'>
              <Edit fontSize='small' />
            </div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img
                src='https://images.pexels.com/photos/1860344/pexels-photo-1860344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
                className='itemImg'
              />
              <div className='deatils'>
                <h1 className='itemTitle'>Athlarane</h1>

                <div className='detailItem'>
                  <span className='itemKey'>Email: </span>
                  <span className='itemVal'>rajkhatua2020@gmail.com</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Phone: </span>
                  <span className='itemVal'>+1 5654 45 89 </span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Address: </span>
                  <span className='itemVal'>
                    Mr John Smith. 132, My Street, Kingston, New York 12401.
                  </span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country: </span>
                  <span className='itemVal'>USA </span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={3 / 1}  title={"LAST 6 MONTHS (COLLECTIONS)"}/>
          </div>
        </div>

        <div className='bottom'>
        <h1 className='title'>Last Transactions</h1>
          <List/>        
        </div>
      </div>
    </div>
  );
};
export default Single;
