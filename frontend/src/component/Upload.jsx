import Header from "./Header";
import "../assets/upload.css"
import axios from 'axios'
import FileBase64 from 'react-file-base64'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Upload = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({author:"",location:"",description:""})
    const [file, setFile] = useState("")
    console.log(file);
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const result = await axios.post("http://localhost:8080/api/post", {data,file})
        // console.log(result);
        navigate("/postview")
    }
    return (
        <>
            <Header />
            <div className="form-container">
                <form action="" method="post" encType="multipart/form-data">
                <FileBase64 multiple={false} id="file" onDone={(image)=>{setFile({...file,image:image.base64})}}/>
                    {/* <input type="file" className="file"/> */}
                    <input type="text" placeholder="Author" onChange={(e)=>{setData({...data,author:e.target.value})}}/>
                    <input type="text" placeholder="Location" onChange={(e)=>{setData({...data,location:e.target.value})}}/>
                    <input type="text" placeholder="Description" onChange={(e)=>{setData({...data,description:e.target.value})}}/>
                    <button type="submit" onClick={handleSubmit}>Post</button>
                </form>
            </div>
        </>
    )
}
export default Upload;