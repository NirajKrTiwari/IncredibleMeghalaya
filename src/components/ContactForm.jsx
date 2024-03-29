import css from "../styles/ContactForm.module.css"
import { MDBIcon } from 'mdb-react-ui-kit';
import ReactCountryFlag from "react-country-flag"
export default function ContactForm()
{
    return(
        <div className={css.main}>
        <div className={css.container}>
            <h2 className={css.head}>
                <ReactCountryFlag countryCode="IN" svg style={{borderRadius:'100%'}} />
                &nbsp;Contact Form&nbsp;
                <ReactCountryFlag countryCode="IN" svg style={{borderRadius:'100%'}} />
            </h2>
                    <form className={css.form} id="contactForm" action="https://formsubmit.co/nirajtiwari199731@gmail.com" method="POST">
                            <input className={css.contactFormField} type="hidden" name="_captcha" value="false"/>
                            <input type="hidden" name="_subject" value="Hey there, I have visited your Portfolio!"/>
                            <input className={css.contactFormField} type="text" name="name" placeholder="Your name" required/><br/>
                            <input className={css.contactFormField} type="email" name="email" placeholder="Your email" required/><br/>
                            <textarea className={css.contactFormField} name="message" placeholder="Details of your message" required></textarea><br/>
                            <button className={css.submitButton} type="submit">Send</button>
                    </form>
        </div>
        </div>
    )
}

