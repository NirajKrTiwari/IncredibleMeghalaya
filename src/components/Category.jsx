import css from "../Category.module.css";
import Shillong from "../Assets/ShillongCategory.jpg"
import Garo from "../Assets/GaroHills.jpg"
import Jaintia from "../Assets/JaintiaHills.jpg"
import East from "../Assets/EastKhasiHills.jpg"

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
    return (
        <div className={css.categoryContainer} style={{paddingBottom:"1rem"}}>
            <h1 className={css.title}>Meghalaya District</h1>
            <div className={css.mainContiner}>
            {
                data.map((value) => (
                    <div className={css.container}>
                    <div className={css.content}>
                        <a href={value.link} target="_blank">
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