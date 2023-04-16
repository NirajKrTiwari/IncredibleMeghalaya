import css from "../styles/Info.module.css"
import ReactPlayer from 'react-player'
import { useState } from 'react';
import { useEffect } from 'react';
export default function Info()
{
    const url = window.location.href;
    const value = (url.split("?")[1]).replace(/[0-9]/g,'');
    const value2=value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ' ');
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
            image2:"https://rural.tourism.gov.in/images/attraction/Chandigre-Rural-Tourist-Rersort-1.jpg",
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
            image2:"https://www.awf.org/sites/default/files/styles/default_desktop/public/2021-08/AfricanSavannaElephant_WorldElephantDay_AWF.jpg.webp?itok=JlLQO1bH",
            link: "",
            video:"https://www.youtube.com/watch?v=FcdkgHVDlyI",
            desc:"Let the wildest corners of Meghalaya embrace you at Nokrek, a land of myths and wild beasts. Designated a biosphere reserve in 2009, Nokrek encapsulates the allure of the Garo Hills and The Daribokgre Trek is one of the best ways to soak in this untamed beauty. At the beginning of this 16-km route, you will first traverse through the lush countryside dotted with thick groves, plantations, and tidy villages before entering the pristine forest. Nokrek is also the highest point in the Garo Hills you will be guaranteed some panoramic views of the surrounding ranges as you continue your journey on this vivid trail."
        },
        {
            title: "Dawki",
            image1: "https://nomadicweekends.com/blog/wp-content/uploads/2019/09/66851483_2355591914534526_8824396371357335552_o-1080x720.jpg",
            image2:"https://www.trawell.in/admin/images/upload/201443190Dawki_umngot.jpg",
            link: "",
            video:"https://www.youtube.com/watch?v=4VQJomBVrug",
            desc:"Dawki is a border town in the south of Meghalaya and a great base to explore nearby Shnongpdeng and Darrang – famous riverside camps. You will witness a blend of cultures and changing topography as the hills merge into the plains of Northern Bangladesh. Some of the evening scenery here is stunning as you watch the lights glow above the neighbouring plains over the gentle, dark river. Shnongpdeng Village is 8 km north of Dawki along the winding Umngot. With waters so clear, you can peer into the bottom and count the stones – that is how the Umngot River can be described during the peak pre-monsoon, autumn, and winter seasons. Whether you want to enjoy a gentle boat ride through a stretch flanked by forests or you want to take a dip into the river in scuba gear, the activities in Shnongpdeng will keep you occupied for days."
        },
        {
            title: "Krangshuri Falls",
            image1: "https://www.holidify.com/images/cmsuploads/compressed/Krang_Suri_Falls_20191120120114.jpg",
            image2:"https://i2.wp.com/pixahive.com/wp-content/uploads/2020/10/Blue-water-at-Krangsuri-Waterfall-132278-pixahive.jpg?fit=778%2C586&ssl=1",
            link: "",
            video:"https://www.youtube.com/watch?v=41YhVCQhuhM&pp=ygUaa3Jhbmcgc3VyaSBmYWxscyBtZWdoYWxheWE%3D",
            desc:"The walk down to Krangshuri is a pleasant descent – you begin on an open meadow and slowly climb down into more defined shrub and vegetation. There are railings around the falls where you can get a good view and you can also inquire about the boating facilities there. Upstream is a small space where people can camp, surrounded by lush green vegetation and with the gentle ripple of the river for company. On calm sunny days, you can enjoy a dip in the pool of the waterfall after renting life jackets. Shutterbugs will certainly enjoy strolling around the surrounding hills looking for a vantage point, of which there are many. Just make sure you watch your step and wear footwear with good grip as the rocks around the water can be slippery. Getting there – The 90-km drive to Krangshuri from Shillong via the NH6 and NH206 is a riveting one – highways looping around the gentle hills, punctuated by hamlets and small towns. There are plenty of eating choices for those who are ready to try local food."
        },
        {
            title: "Kudengrim",
            image1: "https://files.yappe.in/place/full/kudengrim-tourism-53738.webp",
            image2:"https://www.thenevibes.com/uploads/images/image_750x_5d23581f76608.jpg",
            link: "",
            video:"https://www.youtube.com/watch?v=7zIvPqnqF64",
            desc:"The highway roads flanked by paddy fields and pine-crested hillocks give way to steep slopes as one descends into Kudengrim, a cosy village perched in the Jaintia Hills. There are some quintessential Meghalayan sights and experiences on offer – with knowledgeable and friendly residents always there to guide you. Kudengrim’s first main attraction is a twenty-minute hike from the main village. Make your way through a tranquil forest and tread under a dense canopy before you reach a magnificent wide-brimmed, segmented waterfall, the scene straight out of an adventure movie. Close to the cascade is a fascinating example of Meghalaya’s famous living architecture – the Kudengrim Living Root Bridge. Admire the two-levelled bridge, created by weaving the roots of the Ficus Elastica trees, the giant guardians of the forests here."
        },
        {
            title: "Nartiang Monoliths",
            image1: "https://images.news18.com/ibnlive/uploads/2022/09/nartiang.jpg?impolicy=website&width=0&height=0",
            image2:"https://cdn.s3waas.gov.in/s384f7e69969dea92a925508f7c1f9579a/uploads/bfi_thumb/2019012992-olw9xayyk9qk6bl5bv4vrqloazc2fpmzda4v5nhj7u.jpeg",
            link: "",
            video:"youtube.com/watch?v=IiSeHOktaMc",
            desc:"The Jaintia districts of Meghalaya have a distinct royal history and Nartiang is one of the best places to see well-preserved remnants from this glorious chapter. The garden of monoliths features a collection of large monoliths that were erected as monuments for the old kings. There is a small winding path that twists through and around the looming monoliths, providing a chance for you to explore and soak in the surreal scenes. You will also get decent views of the town from this heritage site. Some of these stones were erected half a millennia ago and additions were made till the middle of the nineteenth century. The monoliths provide a captivating sight – arguably the largest collection of monoliths in a single place and loaded with so much historical and cultural significance. The standing monoliths or menhirs are dedicated to the male ancestors while the flat ones, the dolmens, are dedicated to the women."
        },
        {
            title: "Umbyrlein Falls",
            image1: "https://www-cdn.time8.in/wp-content/uploads/2019/10/cropped-71895272_2258460487587492_2226805981650616320_n.jpg",
            image2:"",
            link: "",
            video:"https://www.youtube.com/watch?v=ge3kJ3Cb_TY&pp=ygUPVW1ieXJsZWluIEZhbGxz",
            desc:"The iconic Umbyrlein Falls lies in Rangad Village, East Jaintia Hills District at a distance of 36 Km frm Jowai and only 7 Km from the Kongong junction of National Highway NH6. It is located near Mutong Village, the site for the famous Moopun Falls. It is a new tourist spot tucked away from civilization. There is a huge meadow and grassland with swings, park benches and gazebos to to sit and relax. Menhirs, forest and trees and a view as far as the eye can see dot the landscape. A short trek of half a kilometre through stone pathways and we are greeted with the site of the amazing Umbyrlein falls. The falls is quite majestic with a huge natural pool at the bottom. The bottom of the falls can also be accessed through stone steps that go all the way down to the natural pool."
        },
        {
            title: "Nartiang Durga Temple",
            image1: "https://upload.wikimedia.org/wikipedia/commons/6/69/Nartiang_Durga_temple.jpg",
            image2:"https://www.indiadivine.org/wp-content/uploads/2019/02/durga-05.jpg",
            link: "",
            video:"https://www.youtube.com/watch?v=H-zaqYMO2sQ",
            desc:"What today might come across as a sleepy town used to the trail of tourists, Nartiang was once an important cultural and spiritual centre during the peak of the Jaintia kingdom. It is also home to the famous Nartiang Durga Temple. The Durga temple here is built on the site of an older one and fascinating stories emerge as you dig around and learn about the history of the place. This is a site where human sacrifices were made until the advent of British rule. In fact, a tunnel inside the temple ends at the nearby Myntang river and the heads of the sacrificed were rolled down this shaft. The Nartiang Durga temple also contains some relics from the Jaintia kingdoms – old antique canons which show the level of sophistication that the armies of these hills possessed so long ago. Another alluring attraction close to the temple is the garden of monoliths. These heavy and large blocks of stone were erected as monuments for old rulers and provide a surreal sight."
        },
        {
            title: "Golf Links",
            image1: "https://www.trawell.in/admin/images/upload/648495900Shillong_Golf_Course_Main.jpg",
            image2:"https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3490/x_0,y_339,w_5000,h_2812,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/hotel-polo-towers/mk-s-WHf1wtNMMLU-unsplash_prpgln",
            link: "",
            video:"https://www.youtube.com/watch?v=wuOxvUfpCZk",
            desc:"Known as the Glen Eagles of the East, Shillong’s golf course is not just one of the largest and prettiest natural courses in the country. It is also a place where the townspeople love to wander around and relax on the open meadows while admiring the pine groves that encircle the area. Many visitors love to take a stroll around the golf course, crossing over quaint bridges, tucking into some street food, and marvelling at the monoliths placed in one of the sections of the golf course. There are many eateries on the fringes of the golf course, some with outdoor seating so you can feel the breeze and relish the verdant scenes while you munch on your favourite snacks. If you fancy a round or two on the greens you can get in touch with the office of the Shillong Golf Club, located in a charming old building at the top of the hill."
        },
        {
            title: "Umiam Lake",
            image1: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Umiam_Lake_-_by_Vikramjit_Kakati.png",
            image2:"https://www.scrolldroll.com/wp-content/uploads/2018/05/Umiam-Lake-Shillong-Meghalaya-Places-to-Visit-In-North-East.jpg",
            link: "",
            video:"https://www.youtube.com/watch?v=sfzlMSljvrc",
            desc:"Flanked by hills on all sides and lined by striking roadways and bridges, the gentle Umiam Lake is one of the reasons why the Guwahati-Shillong route is considered one of the most scenic in the region. The lake was formed when a dam was built over the Umiam River in the early sixties as part of a hydel power project. Umiam Lake has become a favourite spot for many who come to admire the landscape. The adjoining Orchid Lake Resort is a government-run facility where you can book lodges or grab a bite at the restaurant with fine views. The resort swimming pool, with its dramatic location on the edge of the hill overlooking the lake, is also open to visitors. Umiam Lake is Shillong’s major hub for water sports and boating. Paddle boats, water scooters, and speed boats are some of the plentiful options for those who look to hit the waters. There are many other resorts tucked in the serene lakeside woods where you can spend time amidst the quiet, natural surroundings."
        },
        {
            title: "Cathedral Catholic Church",
            image1: "https://lh5.googleusercontent.com/p/AF1QipOnwvxx0FYIOg1yrbo8QKbhHacyEL7XKl3DVBSc=w1080-k-no",
            image2:"https://nexplore.org/blog/wp-content/uploads/et_temp/3181112909_489170a03f_b-539159_1024x675.jpg",
            link: "",
            video:"https://www.youtube.com/watch?v=pmpDJqEvzg8",
            desc:"At a distance of 3.5 km from Shillong Bus Terminal, the Cathedral of Mary Help of Christians is a Roman Catholic Church located in the Laitumkhrah locality of Shillong. Also known as the Cathedral Catholic Church, it is the principal place of worship in Shillong and among the most famous places to visit in Shillong. Dedicated to mother Mary, the Cathedral Church of Mary Help of Christians was built by the Germans in 1913. According to history, the construction of the present shrine was built after the first church got destroyed due to a fire accident in 1936. It got the status of a shrine in 1980, on completion of the Catholic Church's 100 years in North East India. This church falls under Roman Catholic Archdiocese of Shillong and is the principal place of worship of about 300,000 strong Catholics of Ri Bhoi and East Khasi Hills district of Meghalaya."
        },
        {
            title: "Ward's Lake",
            image1: "https://www.trawell.in/admin/images/upload/648495912Shillong_Ward's_Lake_Main.jpg",
            image2:"https://live-media-cdn.travalour.com/webp/b51462a8-32e1-11ea-a2af-0ec82d6f8976_960x0",
            link: "",
            video:"https://www.youtube.com/watch?v=DVnpDF5x4AE",
            desc:"With its charming wooden bridge and grassy slopes providing a serene lakeside resting place, Ward’s Lake is one of the most endearing attractions in Shillong town. A stone path encircles the small lake and other highlights here include the immaculately maintained flower gardens along with the lofty trees that provide shade to visitors. More than a hundred years old, Ward’s Lake is named after William Ward, a Chief Commissioner from the British era. Paddle boating in the calm lake waters is recommended. Grab a bite and a beverage at the restaurant overlooking the bridge. Ward’s lake is an ideal place to watch the world go by – from young couples to parents with their children, everyone converges here. Standing on the bridge that spans the lake and feeding the fish below is a favourite pastime. You also have the resident ducks to befriend."
        },
        {
            title: "Don Bosco Museum",
            image1: "https://unusualcollections.files.wordpress.com/2016/04/lcs-img-don-bosco.jpg",
            image2:"https://www.youtube.com/watch?v=3Jydvejfl-E",
            link: "",
            video:"https://www.youtube.com/watch?v=3Jydvejfl-E",
            desc:"Seven storeys of fascinating visuals, colours, and treasures – that is one way to describe Don Bosco Museum. You will first be greeted by the traditional wear of all the different North-Eastern communities as you enter the building, including well-researched sections on the neighbouring countries like Bhutan, Myanmar, and Nepal. The photography section is loaded with rare photos – you can spend hours lost exploring these snippets of tribal life taken across the region and spanning many generations. Other highlights of the Museum include the Pre-history Gallery which sheds more light on the origins and migrations of the tribes, and the Land and People Gallery where you can learn more about the beautiful terrain and how it shaped the practices and lifestyles of the indigenous people who call it home. It is adorned with sculptures and portraits. There is a gallery dedicated to the various hunting, gathering, and fishing practices and a gallery dedicated to agriculture. Many visitors find the Traditional Technology exhibits very interesting."
        },
        {
            title: "Air Force Museum",
            image1: "https://www.trawell.in/admin/images/upload/648495569Shillong_Air_Force_Museum_Main.jpg",
            image2:"https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto/the-best-museums-in-shillong00.jpg",
            link: "",
            video:"https://www.youtube.com/watch?v=F_ipFwsr4KY",
            desc:"At a distance of 13 km from Shillong Bus Stand, Air Force Museum is a museum located in Upper-Shillong of Meghalaya. Situated near Elephant Falls, it is one of the popular museums in Meghalaya and among the top places to visit in Shillong. The Air Force Museum forms a part of the Indian Air Force's Eastern Command in Shillong. This museum is a tribute to the glorious past of the defense of our nation. It hosts aircraft models, actual machines and technology demonstrations used by the IAF Eastern Command. The museum displays the uniforms worn by the air force pilots, missiles, rockets, pictures of Indo-China War and Indo-Pakistan War, medals and miniature models of air crafts. The huge MI 4 helicopter, played a central role in the 1971 war, is displayed in the museum lawn and makes for a remarkable sight. Another attraction is the Streak Shadow Microlight that's a part of the famous Microlight series. This splendid aircraft took its first flight in 1988. Caribou DHC 4, the fighter plane used for bombings in eastern Pakistan during the war of 1971, is the highlight of this place. The museum has a special section that houses a collection of several musical instruments. Visitors can also see Python's skin in the museum."
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