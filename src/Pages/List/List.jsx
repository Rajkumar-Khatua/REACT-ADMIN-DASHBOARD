import "./list.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Datatable from "../../Components/DataTable/Datatable";

//  FOR FUTURE NOTE THIS COMPONENT IS IN THE USERS http://localhost:5173/users/ || in the PAGES LIST PAGE
  // where we can see all the users...
const List = () => {
  return (
    <div className='List'>
      <Sidebar />
      <div className='listContainer'>
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};
export default List;
