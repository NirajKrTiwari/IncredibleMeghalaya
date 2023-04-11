import AboultImage from "../Assets/AboutImage.png"
import css from "../styles/About.module.css"

export default function About()
{
    return(
        <div className={css.container}>
            <h1>About</h1>
            <div className={css.contain}>
                <div className={css.info}>
                    <p>
                    Welcome to the About Us page of our tourism website, where we are pleased to introduce you to the magical and diverse state of Meghalaya in India.<br></br><br></br>

At Meghalaya Tourism, we are passionate about promoting and showcasing the natural beauty, cultural richness, and adventure experiences that Meghalaya has to offer. Our goal is to help you discover the hidden gems of this charming state and make your trip unforgettable.<br></br><br></br>

Meghalaya is a state located in the Northeastern region of India and is known as the 'Abode of Clouds' due to its year-round misty weather. With its lush green hills, pristine rivers, stunning waterfalls, and unique living root bridges, Meghalaya offers a range of breathtaking sights and experiences that you won't find anywhere else in India.<br></br><br></br>

Our team is made up of experienced travel experts and passionate locals who are committed to making your visit to Meghalaya a truly memorable one. We offer a wide range of services to help you plan your trip, including personalized itineraries, local tours, transportation, and accommodation options.<br></br><br></br>

Whether you're looking for a relaxing escape, an adventure-packed trip, or a cultural exploration, Meghalaya has something for everyone. From exploring the natural wonders of Cherrapunjee and Mawsynram to experiencing the local culture and cuisine in Shillong, we have got you covered.<br></br><br></br>

We invite you to explore our website and discover the magic of Meghalaya. Please feel free to reach out to us if you have any questions or need assistance in planning your trip. We are always happy to help!
 
                    </p>
                </div>
                <div className={css.img}>
                    <img src={AboultImage} alt="" ></img>
                </div>
            </div>
        </div>
    )
}