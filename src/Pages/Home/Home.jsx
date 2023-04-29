import Sidebar from "../../Components/Sidebar/Sidebar";
import "./home.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Wedgets from "../../Components/Widgets/Wedgets";
import Featured from "../../Components/Featured/Featured";
import Chart from "../../Components/Chart/Chart";
import Table from "../../Components/Table/Table";
const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Wedgets type='user' />
          <Wedgets type='order' />
          <Wedgets type='erarning' />
          <Wedgets type='balance' />
        </div>

        <div className='charts'>
          <Featured />
          <Chart title={"LAST 6 MONTHS (COLLECTIONS)"} aspect={3/1}/>
        </div>

        <div className='listContainer'>
          <div className='listTitle'>Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};
export default Home;
