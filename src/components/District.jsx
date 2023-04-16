import React from 'react';
import css from "../styles/District.module.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function District()
{
    const data=[
        {
            title:"Elephant Falls",
            image:"https://bonnieguesthouse.co.in/wp-content/uploads/2021/02/Elephant_Falls_shillong-scaled1-930x620.jpg",
            category:"East Khasi Hills"
        },
        {
            title:"Laitlum",
            image:"https://i.redd.it/wi270xengre31.jpg",
            category:"East Khasi Hills"
        },
        {
            title:"Seven Sisters Waterfall",
            image:"https://media.gettyimages.com/id/600961108/photo/daily-life-in-the-wettest-place-on-earth.webp?s=2048x2048&w=gi&k=20&c=XDU2AOobPDXiawLNEzjjLln2Jw3QxHbPAtU-pPUn8dc=",
            category:"East Khasi Hills"
        },
        {
            title:"Mawlynnong",
            image:"https://nomadicweekends.com/blog/wp-content/uploads/2019/10/m-3.jpg",
            category:"East Khasi Hills"
        },
        {
            title:"Mawsynram",
            image:"https://mybudgettour.com/wp-content/uploads/2021/05/mawsynram-meghalaya-mybudgettour-8.jpg",
            category:"East Khasi Hills"
        },
        {
            title:"Sohra",
            image:"https://cherrapunjee.com/wp-content/uploads/2019/09/Deep_Valleys_Sohra.jpg",
            category:"East Khasi Hills"
        },
        {
            title:"Chandigre Rural Resort",
            image:"https://www.meghalayatourism.in/wp-content/uploads/2020/06/chandigre-rural-tourist-resort.jpg",
            category:"Garo Hills"
        },
        {
            title:"Memo Lake",
            image:"https://www.trawell.in/admin/images/upload/424918519Guwahati_Chandubi_Lake_Main.jpg",
            category:"Garo Hills"
        },
        {
            title:"Rongbangdare Waterfalls",
            image:"https://www.travelholicq.com/wp-content/uploads/2021/07/Rongbangdare-Waterfalls-Meghalaya.jpg",
            category:"Garo Hills"
        },
        {
            title:"Aminda Rangsa Art Village",
            image:"http://www.ohmeghalaya.com/wp-content/uploads/2016/06/garo.jpg",
            category:"Garo Hills"
        },
        {
            title:"Chibragre Picnic Spot",
            image:"https://www.meghalayatourism.in/wp-content/uploads/2020/08/53.-Chibragre-Picnic-spot-1-1-2048x1536.jpg",
            category:"Garo Hills"
        },
        {
            title:"Nokrek Biosphere Reserve",
            image:"https://www.india-tours.com/wildlife/images/wildlife/national-parks/nokrek-national-park.jpg",
            category:"Garo Hills"
        },
        {
            title:"Dawki",
            image:"https://nomadicweekends.com/blog/wp-content/uploads/2019/09/66851483_2355591914534526_8824396371357335552_o-1080x720.jpg",
            category:"Jaintia Hills"
        },
        {
            title:"Krangshuri Falls",
            image:"https://www.holidify.com/images/cmsuploads/compressed/Krang_Suri_Falls_20191120120114.jpg",
            category:"Jaintia Hills"
        },
        {
            title:"Kudengrim",
            image:"https://files.yappe.in/place/full/kudengrim-tourism-53738.webp",
            category:"Jaintia Hills"
        },
        {
            title:"Nartiang Monoliths",
            image:"https://images.news18.com/ibnlive/uploads/2022/09/nartiang.jpg?impolicy=website&width=0&height=0",
            category:"Jaintia Hills"
        },
        {
            title:"Umbyrlein Falls",
            image:"https://www-cdn.time8.in/wp-content/uploads/2019/10/cropped-71895272_2258460487587492_2226805981650616320_n.jpg",
            category:"Jaintia Hills"
        },
        {
            title:"Nartiang Durga Temple",
            image:"https://upload.wikimedia.org/wikipedia/commons/6/69/Nartiang_Durga_temple.jpg",
            category:"Jaintia Hills"
        },
        {
            title:"Umiam Lake",
            image:"https://upload.wikimedia.org/wikipedia/commons/6/6a/Umiam_Lake_-_by_Vikramjit_Kakati.png",
            category:"Shillong"
        },
        {
            title:"Cathedral Catholic Church",
            image:"https://lh5.googleusercontent.com/p/AF1QipOnwvxx0FYIOg1yrbo8QKbhHacyEL7XKl3DVBSc=w1080-k-no",
            category:"Shillong"
        },
        {
            title:"Wards Lake",
            image:"https://www.trawell.in/admin/images/upload/648495912Shillong_Ward's_Lake_Main.jpg",
            category:"Shillong"
        },
        {
            title:"Golf Links",
            image:"https://www.trawell.in/admin/images/upload/648495900Shillong_Golf_Course_Main.jpg",
            category:"Shillong"
        },
        {
            title:"Don Bosco Museum",
            image:"https://unusualcollections.files.wordpress.com/2016/04/lcs-img-don-bosco.jpg",
            category:"Shillong"
        },
        {
            title:"Air Force Museum",
            image:"https://www.trawell.in/admin/images/upload/648495569Shillong_Air_Force_Museum_Main.jpg",
            category:"Shillong"
        },
    ]
    const url = window.location.href;
    const value = (url.split("?")[1]).replace("%20"," ");
    const value2=value.replace("%20"," ");

    console.log(value2);
    const [navigation, setNavigation] = useState("")
    const navigate = useNavigate();
    if(value !== ""){
        navigate(`/Info?${navigation}`)
    }
    console.log(navigation);
    //navigate to the top of the screen when render page
    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])
 
    return(
        <div className={css.MainContainer}>
            <h2>{value2}</h2>
            <div className={css.container}>
          {
                data.map((value)=>(
                    value.category===value2 && (
                    <div className={css.content} onClick={()=>{setNavigation(value.title)}} >
                        <a >
                            <div className={css.contentOverlay}></div>
                            <img className={css.contentImage} src={value.image}  alt=""/>
                                <div className={`${css.contentDetails} ${css.fadeInBottom}`}>
                                    <h3 className={css.contentTitle}>{value.title}</h3>
                                </div>
                        </a>
                    </div>
                    )
                )
                )
          }
          </div>
        </div>
    )
}