import "./newUserProduct.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { Camera, FileUpload } from "@mui/icons-material";
import { useState } from "react";
const NewUserProduct = ({ inputs, title }) => {
  // create file upload state
  const [file, setFile] = useState("")

  return (
    <div className='newUserProduct'>
      <Sidebar />

      <div className='newuserProductContainer'>
        <Navbar />
        <div className='top'>
          <h1 className='title'>{title}</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img
            // check first is there any inage is already exits ? if not just pass the second one 
              src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-available-icon/no-image-available-icon-10.jpg"}
              alt=''
              className='image'
            />
          </div>
          <div className='right'>
            <form>
              <div className='formInput'>
                <label htmlFor='file'>
                  Image <FileUpload className='icon' />
                </label>
                <input
                  type='file'
                  id='file'
                  // set a file that will be uploaded
                  onChange ={e=>setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input)=>(
                
              <div className='formInput'>
                <label>{input.label}</label>
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                />
              </div>
              ))}

              <button className='sendBtn'>SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewUserProduct;
