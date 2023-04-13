import css from "../styles/Info.module.css"
import ReactPlayer from 'react-player'
import { useState } from 'react';
import { useEffect } from 'react';
export default function Info()
{
    const url = window.location.href;
    const value = (url.split("?")[1]).replace("%20"," ");
    const value2=value.replace("%20"," ");
    console.log(value2);

    const data=[
        {
            title: "Shillong",
            image1: "https://i0.wp.com/onedayitinerary.com/wp-content/uploads/2021/09/One-day-in-Shillong-Itinerary.jpg?w=800&ssl=1",
            image2:"https://www.connectingtraveller.com/images/localtip/1632833445images%20(17).jpeg",
            link: "",
            video:"https://www.youtube.com/watch?v=eT3loP_vM68",
            desc:"Founded in the second half of the nineteenth century by the British, Shillong town has enjoyed a cosmopolitan core since its beginnings. This reflects in the unique culture of Meghalaya’s scenic capital – a place where every festival is celebrated with zest and travellers will stumble across cuisines from across the country and the world. Shillong’s modern reputation is built on its love for music and there have been many legendary musicians who call this home. There are many faces to Shillong – the quiet neighbourhoods with whistling pine still thrive but there is also a vibrant downtown area. Shillong is also known for its emerging café culture. Attractions here include the pleasant, tree-lined Ward’s Lake and the sprawling Golf Links – a favourite outdoor recreational space for the residents. Shillong has plenty of hotels, guesthouses and homestays spread across the landscape especially in the centrally located Police Bazaar. If you want to chart the colonial history of the place, we would recommend the Shillong Heritage Walk."
        },
        {
            title: "Mawsynram",
            image1: "https://mybudgettour.com/wp-content/uploads/2021/05/mawsynram-meghalaya-mybudgettour-8.jpg",
            image2:"https://tourism.webindia123.com/tourism/hillstations/Mawsynram/main1.jpg",
            link: "",
            video:"https://www.youtube.com/watch?v=_9Ghrppvv5o",
            desc:"Ever thought of a place where waterfalls are so plentiful that they become a nuisance? That can be the scene on the highway to the famed town of Mawsynram when your vehicle might just have to drive right through a monsoon cascade falling from the mountainside. The Mawsynram plateau region has received enough attention for its world-record rainfall but there are many more unique sights here. Krem Puri is the longest sandstone cave in the world. Getting to the entry requires a steep descent down one of the valley slopes. The labyrinth has just been recently mapped and visitors need to go in with proper caving gear and with a local guide."
        },
        {
            title: "Laitlum",
            image1: "https://i.redd.it/wi270xengre31.jpg",
            image2:"https://www.emeghalaya.com/uploads/articles/2021/09/laitlum-canyons.jpg",
            link: "",
            video:"https://www.youtube.com/watch?v=JlR3EnPyk6E",
            desc:"Smit is known for its countryside scenery – a place famous for its horticultural wealth and also of major cultural significance. The ‘iing-sad’ is a residence of the traditional royals of the region and is host to the famous Nongkrem Dance every year around November. Smit is also adjacent to one of Meghalaya’s natural wonders – our very own grand canyon – Laitlum. Stroll through the pine-flanked country paths and stand on the edge of the grassy plateau and the mountains open up into a deep chasm. There are treks you can enjoy down to the valley settlements below or you can stay where you are and try to spot waterfalls and streams at the distance. Laitlum is around 22 kms from Shillong. Smit and the larger Nongkrem region is also filled with many nature trails and cycling enthusiasts can connect with local cycling groups to enjoy some exhilarating off-road perspectives."
        },
        {
            title: "Mawlynnong",
            image1: "https://i0.wp.com/nenow.in/wp-content/uploads/2018/04/the-spotless-streets-of-mawlynnong.jpg?w=676&ssl=1",
            image2:"https://nomadicweekends.com/blog/wp-content/uploads/2019/10/m-3.jpg",
            link: "",
            video:"https://www.youtube.com/watch?v=2hsP4bjvmso",
            desc:"Mawlynnong has earned a reputation for being one of the cleanest villages in Asia, but a sobriquet that does more justice is that of God’s Own Garden. The fruit orchards, the rushing streams, the evergreen surroundings, the swaying palms, and the well-preserved traditions of the Khasis provide a picture-perfect stage on the edge of Meghalaya’s southern ranges. Arguably the most famous icon of Meghalaya is found here – the Nohwet Living Root Bridge. The bridge was created by weaving the roots of the Ficus Elastica tree around a framework and continuing this process for generations. These living root bridges are a staple of Khasi traditional architecture and were important for the villages in the steep valleys and mountains, helping the people connect with each other and travel to the plains to trade. These fascinating bridges are built in harmony with nature and get stronger as they grow older. After admiring the bridge, you can also take a dip in the gushing, cool waters of the river."
        },
        {
            title: "Elephant Falls",
            image1: "https://upload.wikimedia.org/wikipedia/commons/f/f1/The_Prime_Minister%2C_Shri_Narendra_Modi_at_the_Elephant_Falls%2C_in_Meghalaya_on_May_28%2C_2016.jpg",
            image2:"http://cdn.narendramodi.in/cmsuploads/0.91304200-1464429261-shv-1465.JPG",
            link: "",
            video:"https://www.youtube.com/watch?v=0iViTFcGI3Y",
            desc:"The waterfall is the result of a mountain stream that drops over multiple levels, scything through the forested slope. The railed walkways begin at the head of the falls and continue to the bottom, ensuring that you not only see the magnificence of the falls from a close distance but also feel the spray of the cool water and the thunderous sound of the flow. The pool at the bottom of the falls is a tranquil spot where you can wade into the clear water at knee-level and get a nice picture with the giant cascade in the background. The Khasi name for Elephant Falls is Kshaid-Lai-Pateng, which roughly refers to the three levels over which the water plunges. The name is rather misleading today – the elephant-shaped rock after which it was named by the British was destroyed in an earthquake more than a hundred years ago. At the entrance to Elephant Falls, there is a collection of stalls selling snacks and souvenirs."
        },
        {
            title: "Seven Sisters Waterfall",
            image1: "https://media.gettyimages.com/id/600961108/photo/daily-life-in-the-wettest-place-on-earth.webp?s=2048x2048&w=gi&k=20&c=XDU2AOobPDXiawLNEzjjLln2Jw3QxHbPAtU-pPUn8dc=",
            image2:"https://assets.traveltriangle.com/blog/wp-content/uploads/2018/01/Seven-Sisters-Falls-kb6529tdf.jpg",
            link: "",
            video:"https://www.youtube.com/watch?v=iEW-BMTeRPc",
            desc:"At a distance of 4 km from Cherrapunjee Bus Stop, Nohsngithiang Falls is a picturesque waterfall located at Mawsmai village in East Khasi Hills district of Meghalaya. Also known as Seven Sister Falls and Mawsmai Falls, it is one of the tallest waterfalls in India and among the major places to visit in Cherrapunjee. Located in the wettest place on Earth, Cherrapunjee, Nohsngithiang Falls is a seven segmented waterfall that cascades down from a height of 315 m (1,033 feet) and has an average width of 70 m (230 feet). The falls plunges over the top of limestone cliffs of the Khasi Hills only during the rainy season. The seven segments of the waterfalls symbolize the seven sister states in northeast namely Assam, Arunachal Pradesh, Manipur, Nagaland, Tripura, Mizoram and Meghalaya. The best time to visit this place is during the monsoon, when the streams are flooded with water and flow down rapidly forming a perennial rainbow, which gives the spectacular views for the tourists. One can get the magnificent view of the falls from the viewpoint situated at Mawsmai village as there is no possibility to get into the water. Tourist can also view the falls from the Eco Park which has been constructed on a plateau on top of the falls."
        },
        {
            title: "Sohra",
            image1: "https://cherrapunjee.com/wp-content/uploads/2019/09/Deep_Valleys_Sohra.jpg",
            image2:"https://i2.wp.com/lifeisavacation.in/wp-content/uploads/2017/05/Sohra-Nohkalikhai-1.jpg?resize=768%2C494",
            link: "",
            video:"https://www.youtube.com/watch?v=XDekExsJjjY&pp=ygUFc29ocmE%3D",
            desc:"Sohra has stories hidden all over – in its rivers, cascades, and mist-shrouded hill-tops. It is also the place where civilizations met, the cultural capital of the Khasis and the gateway of the colonial age. The terrain comes alive during the monsoons while the drier months are all about blue skies and scenic hikes and treks. The region around Sohra is synonymous with waterfalls – the plunging Nohkalikai and the thunderous Dainthlen are settings for immortal Khasi folktales while the three-tiered Wei Saw Dong is tucked away in a verdant forest. Sohra provides layers of sights and adventures – the more time you spend here, the more surprises you will encounter. You have a wide range of stay options in Sohra, from the luxurious Jiva and Polo Orchid resorts to cosy homestays that allow you to soak in the local vibes. Destinations around Sohra include Nongriat and Khat-ar-shnong."
        },
        {
            title: "Chandigre Rural Resort",
            image1: "https://www.meghalayatourism.in/wp-content/uploads/2020/06/chandigre-rural-tourist-resort.jpg",
            image2:"http://eastgarohills.gov.in/img/core/tourism/daribokgre.gif",
            link: "",
            video:"https://www.youtube.com/watch?v=zoHSr2a0l5Q&pp=ygUXQ0hBTkRJR1JFIFJVUkFMIFZJTExBR0U%3D",
            desc:"Chandigre embraces you with its orchards and plantations – offering visitors a glimpse into the lives of the Garos. It is a place where you can spend all day strolling around on paths lined by lush vegetation, vivid flower beds, and fruit trees. The resort village is located in the foothills of the Nokrek Reserve, one of the biggest biodiversity hotspots in the sub-continent. Chandigre serves as a base for many who trek to the forest reserve. A major highlight here is the local architecture, where visitors get to stay. The Garos build their living spaces using natural fibres and materials. Wander around Chandigre and explore the details of the traditional houses, known as Nok Achik in the local language. The Nok Pante is a dormitory and staying here is an essential rite of passage for young Garo males."
        },
        {
            title: "Memo Lake",
            image1: "https://www.trawell.in/admin/images/upload/424918519Guwahati_Chandubi_Lake_Main.jpg",
            image2:"https://cdn.s3waas.gov.in/s31efa39bcaec6f3900149160693694536/uploads/bfi_thumb/2019011641-olw75qwcozg8h677obwf6d138s1i5tegoimg9l3o96.jpg",
            link: "",
            video:"https://www.youtube.com/watch?v=p1Wxeu0DI9A",
            desc:"The tall hardwoods and tropical scenery of Garo Hills accompany you on your trip to Memo Lake, a charming getaway located close to Williamnagar town. The region is known for its rugged hilly terrain carved by the powerful Simsang River as it flows into the flatlands – and Memo Lake is a spot where one can relax and admire the placid waters and gentle, lush scenery. The lake is a convergence point of the Memo and Asa rivulets that flow from the surrounding forests. The bridge that spans the lake is a reminder to visitors of the resilience of traditional architecture. It is a platform of wooden planks propped up by thick branches on the shallowest part of the lake – akin to a spiky wooden spine across the water. The surrounding trees break the late afternoon sunlight and create a special glow over the lake – a postcard moment waiting to be immortalized by photography enthusiasts. You can spend a good forty minutes to an hour at this spot just admiring the serenity of it all."
        },
        {
            title: "Rongbangdare Waterfalls",
            image1: "https://www.travelholicq.com/wp-content/uploads/2021/07/Rongbangdare-Waterfalls-Meghalaya.jpg",
            image2:"https://www.travelholicq.com/wp-content/uploads/2021/07/Tura-Peak-Meghalaya.jpg",
            link: "",
            video:"https://www.youtube.com/watch?v=n4SO_QJ27LE",
            desc:"Cutting across the rugged and forested terrain, the Simsang and its tributaries have created many waterfalls in the Garo Hills region. Rongbangdare Waterfalls is one of the more popular and visually stunning landmarks of this naturally rich region. You will need to negotiate a cool and fresh mountain stream to get a clear view – there is an attractive and sturdy hanging bridge for those who want to avoid getting wet. The bridge also gives you a unique vantage point if you want to take some pictures of the gushing stream and the lush vegetation that cradles the waterfalls."
        },
        {
            title: "Aminda Rangsa Art Village",
            image1: "http://www.ohmeghalaya.com/wp-content/uploads/2016/06/garo.jpg",
            image2:"https://meghalayamonitor.com/wp-content/uploads/2022/11/Nov-6-aminda1-780x470.jpeg",
            link: "",
            video:"https://www.youtube.com/watch?v=ra7YIv-2tFQ",
            desc:"The Garo Hills of Meghalaya are synonymous with expansive wilderness areas and lush, green scenery. Tucked in the western part of these immense forests, Aminda Rangsare is making a name for itself amongst art and sculpture enthusiasts. The village is famous for it’s wood and stone carvings, the work of its most famous artist Handum Marak. Marak’s installations celebrate the rich motifs and practices of Garo culture. Everywhere you wander in this village, you will run into a special piece of intricate design, created out of locally-sourced and abundantly available materials. From abstract representations and detailed statues to the celebration of local wildlife, there is a lot to witness in this artistic journey. You will also get to marvel at the Garo huts, made from cane and timber – known for their simple and endearing aesthetics."
        },
        {
            title: "Chibragre Picnic Spot",
            image1: "https://www.meghalayatourism.in/wp-content/uploads/2020/08/53.-Chibragre-Picnic-spot-1-1-2048x1536.jpg",
            image2:"https://www.meghalayatourism.in/wp-content/uploads/2020/08/57.-Chibragre-Picnic-spot-5-1.jpg",
            link: "",
            video:"https://www.youtube.com/watch?v=0Z0Rg1nFQIk",
            desc:"The people of Meghalaya love their picnics and spending a day out in nature with friends and loved ones. If you are in Tura, a visit to Chibragre is a nice way to get a dose of this favourite activity. The gentle river-side setting here provides a stage for some fun and recreation. Chibragre is located at the point where two rivers (the Rongram and Gangol) meet and flow on towards the west where they join the Brahmaputra. During the drier months, it is safe to swim in these cool, clear waters (with lifejackets) and you can also catch a breather on the vast river beach, a sandy stretch that can accommodate plenty of revelers."
        },
        {
            title: "Nokrek Biosphere Reserve",
            image1: "https://www.india-tours.com/wildlife/images/wildlife/national-parks/nokrek-national-park.jpg",
            image2:"http://www.eastgarohills.gov.in/img/core/tourism/nokrek-01.png",
            link: "",
            video:"https://www.youtube.com/watch?v=FcdkgHVDlyI",
            desc:"Let the wildest corners of Meghalaya embrace you at Nokrek, a land of myths and wild beasts. Designated a biosphere reserve in 2009, Nokrek encapsulates the allure of the Garo Hills and The Daribokgre Trek is one of the best ways to soak in this untamed beauty. At the beginning of this 16-km route, you will first traverse through the lush countryside dotted with thick groves, plantations, and tidy villages before entering the pristine forest. Nokrek is also the highest point in the Garo Hills you will be guaranteed some panoramic views of the surrounding ranges as you continue your journey on this vivid trail."
        },
        {
            title: "",
            image1: "",
            image2:"",
            link: "",
            video:"",
            desc:""
        },
        {
            title: "",
            image1: "",
            image2:"",
            link: "",
            video:"",
            desc:""
        },
        {
            title: "",
            image1: "",
            image2:"",
            link: "",
            video:"",
            desc:""
        },
        {
            title: "",
            image1: "",
            image2:"",
            link: "",
            video:"",
            desc:""
        },
        {
            title: "",
            image1: "",
            image2:"",
            link: "",
            video:"",
            desc:""
        },
    ]
    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])
    return(
        <>
            {/* <h1>{value2}</h1> */}
            {
                data.map(val=>(
            val.title===value2 && (
            <div className={css.Container}>
                <div className={css.Image}>
                    <img src={val.image1} alt=""></img>
                    <img src={val.image2} alt="" ></img>
                </div>
                <div className={css.Body}>
                <h2>{val.title}</h2>
                    <p>
                    {val.desc}
                    </p>
                    {/* <button className={css.button}>Video</button> */}
                    {/* Video Player design to play youtube video */}
                    <div className={css.Player}>
                    <ReactPlayer url={val.video} 
                     width="100%"
                        // height="100%" 
                     controls
                     muted
                     config={{
                       youtube: {
                         playerVars: { showinfo: 1 }
                       }
                     }}
                    />
                    </div>
                </div>
            </div>
            )
                )
                )
            }   
        </>
    )
}