import "./newUserProduct.scss"
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import { Camera, FileUpload } from "@mui/icons-material";
const NewUserProduct = () => {
  return (
    <div className="newUserProduct">
      <Sidebar/>

      <div className="newuserProductContainer">
        <Navbar/>
        <div className="top">
          <h1 className="title">Add new User</h1>
        </div>
        <div className="bottom">
          <div className="left">
           <img src="https://icon-library.com/images/no-image-available-icon/no-image-available-icon-10.jpg" alt="" className="image" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">Image <FileUpload className="icon"/> </label>
                <input type="file" id="file" style={{display:'none'}}/>
              </div>
              <div className="formInput">
                <label >Username</label>
                <input type="text" placeholder="Kathalren"/>
              </div>
              <div className="formInput">
                <label >Name and surname</label>
                <input type="text" placeholder="landford"/>
              </div>
              <div className="formInput">
                <label >Email</label>
                <input type="email" placeholder="rajkhatua2020@gmail.com"/>
              </div>
              <div className="formInput">
                <label >Phone </label>
                <input type="text" placeholder="+1 8956 809 12"/>
              </div>
              <div className="formInput">
                <label >Password </label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label >Address </label>
                <input type="password" placeholder="106 DOYERS ST. 8 ARLINGTON DR. 599 NW BAY BLVD."/>
              </div>
              <div className="formInput">
                <label >Country </label>
                <input type="password" placeholder="USA"/>
              </div>
              <button className="sendBtn">SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NewUserProduct