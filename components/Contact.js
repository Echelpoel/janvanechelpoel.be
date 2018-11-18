import MaxWidthContainer from 'components/MaxWidthContainer'
import Button from 'components/Button'
import {
    CONTACT_TITLE,
    CONTACT_TEXT,
    CONTACT_BUTTON_TEXT,
    CONTACT_BUTTON_URL,
} from 'constants/contact'

const Contact = () => (
    <section>
        <MaxWidthContainer>
            <h2>{CONTACT_TITLE}</h2>
            <div className="contactText">{CONTACT_TEXT}</div>
            <Button url={CONTACT_BUTTON_URL} text={CONTACT_BUTTON_TEXT} />
        </MaxWidthContainer>
        <style jsx>{`
            section {
                background-color: #FFFFFF;
                padding-top: 20rem;
                padding-bottom: 10rem;
                text-align: center;
            }

            h2 {
                margin-bottom: 1rem;
            }

            .contactText {
                font-size: 2.1rem;
                margin-bottom: 5rem;
            }
        `}</style>
    </section>
)

export default Contact;
