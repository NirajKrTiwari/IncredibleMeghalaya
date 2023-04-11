import css from "../styles/Places.module.css"
import Shillong from "../Assets/Shillong.jpg"
import Elephant from "../Assets/ElephantFalls.jpg"
import SSister from "../Assets/SevenSister.jpg"
import CleanestVillage from "../Assets/CleanestVillage.jpg"
import Mawsynram from "../Assets/Mawsynram.png"
import Laitlum from "../Assets/Laitlum.jpg"

export default function Places() {
    const data = [
        {
            title: "Shillong",
            description: "Shillong is the capital of Meghalaya which is known for its beauty, vibrant culture and rich history.",
            image: Shillong,
            link: "https://www.meghalayatourism.in/destinations/shillong/"
        },
        {
            title: "Mawsynram",
            description: "The Mawsynram plateau region has received enough attention for its world-record rainfall.",
            image: Mawsynram,
            link: "https://www.meghalayatourism.in/destinations/mawsynram/"
        },
        {
            title: "Laitlum",
            description: "Laitlum, which means 'end of hills'. The canyons offering an adrenaline-pumping experience.",
            image: Laitlum,
            link: "https://www.tourism-of-india.com/laitlum-canyons.html"
        },
        {
            title: "Mawlynnong",
            description: "The cleanest village in India, Mawlynnong Village is also known as God's Own Garden and for all the right reasons.",
            image: CleanestVillage,
            link: "https://traveltriangle.com/blog/mawlynnong-cleanest-village-in-asia/"
        },
        {
            title: "Elephant Falls",
            description: "The Elephant Falls are a two-tier waterfall in Shillong, Meghalaya, India.",
            image: Elephant,
            link: "https://www.meghalayatourism.in/destinations/elephant-falls/"
        },
        {
            title: "Seven Sisters Waterfall",
            description: "The Seven Sister Falls derives its name from the seven streams that flow down the plateau-like feature.",
            image: SSister,
            link: "https://www.meghalayatourism.in/destinations/elephant-falls/"
        },
    ]
    return (
        <div className={css.placeContainer}>
            <h1 className={css.title}>Amazing Places to Visit</h1>
            {data.map((value) => (
                <div className={css.container}>
                
                <div className={css.content}>
                    <a href={value.link} target="_blank">
                        <div className={css.contentOverlay}></div>
                        <img className={css.contentImage} src={value.image}  alt=""/>
                            <div className={`${css.contentDetails} ${css.fadeInBottom}`}>
                                <h3 className={css.contentTitle}>{value.title}</h3>
                                <p className={css.contentText}>{value.description}</p>
                            </div>
                    </a>
                </div>
                <h3>{value.title}</h3>
            </div>
            ))}
        </div>
    )

}
