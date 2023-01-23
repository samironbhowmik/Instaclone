import Header from "./Header";
import "../assets/postview.css"
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import heart from "../images/heart.png"
import send from "../images/send.png"
const Postview = () => {
    useEffect(() => {
        getData()
    }, [])

    const [postData, setPostData] = useState()
    // console.log(postData);
    const getData = async () => {
        const postData = await axios.get("https://insta-backend-jtps.onrender.com/api/get")
        setPostData(postData.data.allPost)
    }
    return (
        <>
            <Header />

            <div className="post-content">
                {postData?.map((posts, id) => {

                    return (

                        <div className="box margin-top" key={id}>
                            <div className="box-header padding">
                                <p style={{ "fontSize": "1rem", "fontWeight": "700" }}>{posts.author}
                                    <br />
                                    <span className="location" style={{ "fontSize": "0.7rem", "fontWeight": "300"}}>{posts.location}</span>
                                </p>
                                <h3>...</h3>
                            </div>

                            <div className="box-mid">
                                <img src={posts.image} alt="" />
                            </div>

                            <div className="box-footer">
                                <div className="box-footer-left padding">
                                    <div className="icons">
                                        <img src={heart} alt="" />
                                        <img src={send} alt="" style={{ "padding-left": "10px" }} />
                                    </div>

                                    <p className="like">64likes</p>
                                    <p className="desc">{posts.description}</p>
                                </div>

                                <div className="box-footer-right">
                                    <p className="date">26/02/2023</p>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Postview;