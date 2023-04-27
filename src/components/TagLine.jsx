import css from "../styles/TagLine.module.css"
export default function TagLine()
{
    return(
        <div>
        <div className={css.container}>
             <marquee scrollamount="12" behavior="scroll" direction="left">Discover the natural beauty of Meghalaya - where every corner is a picturesque paradise!</marquee>
        </div>
        <div className={css.container2}>
             <h1>Get lost in the magic of Meghalaya</h1>
             <h4> A place where ancient customs and stunning landscapes coexist in perfect harmony.</h4>
         </div>
        </div>
    )
}