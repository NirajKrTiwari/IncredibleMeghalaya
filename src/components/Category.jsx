import css from "../styles/Category.module.css";
import Shillong from "../Assets/ShillongCategory.jpg"
import Garo from "../Assets/GaroHills.jpg"
import Jaintia from "../Assets/JaintiaHills.jpg"
import East from "../Assets/EastKhasiHills.jpg"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Category() {
    const data = [
        {
            title: "Garo Hills",
            image: Garo,
            link: ""
        },
        {
            title: "Jaintia Hills",
            image: Jaintia,
            link: ""
        },
        {
            title: "East Khasi Hills",
            image: East,
            link: ""
        },
        {
            title: "Shillong",
            image: Shillong,
            link: ""
        }
    ]
    const [value, setvalue] = useState("")
    console.log(value);

    //send value to other component List using Navigatin query
    const navigate = useNavigate();
    if(value !== ""){
        navigate(`/District?${value}`)
    }
    
    return (
        <div id="category" className={css.categoryContainer} style={{paddingBottom:"1rem"}}>
            <h1 className={css.title}>Meghalaya District</h1>
            <div className={css.mainContiner}>
            {
                data.map((value) => (
                    <div className={css.container}>
                    <div className={css.content} onClick={()=>{setvalue(value.title)}} >
                        <a > 
                            <div className={css.contentOverlay}></div>
                            <img className={css.contentImage} src={value.image}  alt=""/>
                                <div className={`${css.contentDetails} ${css.fadeInBottom}`}>
                                    <h3 className={css.contentTitle}>{value.title}</h3>
                                </div>
                        </a>
                    </div>
                </div>
                )
                )
            }
            </div>
        </div>
    )
}