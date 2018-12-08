import MaxWidthContainer from 'components/MaxWidthContainer'
import { 
    CLIENTS_TITLE,
    CLIENTS_LOGOS,
 } from 'constants/clients'
 import * as media from 'styles/media'

const Clients = () => (
    <section>
        <MaxWidthContainer>
            <h4>{CLIENTS_TITLE}</h4>
            <ul>
                {CLIENTS_LOGOS.map(client => (
                    <li key={client.name}>
                        <img src={`/static/img/clients/${client.imgUrl}`} alt={client.name} />
                    </li>
                ))}
            </ul>
        </MaxWidthContainer>
        <style jsx>{`
            section {
                padding-top: 20rem;
                padding-bottom: 17rem;
                background-color: #FFFFFF;
            }

            h4 {
                text-align: center;
            }

            img {
                transform: scale(.4);
            }

            ul {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                margin-top: 8rem;
            }

            ul li {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 25%;
                height: 14rem;
            }

            @media ${media.smallOnly} {
                section {
                    padding-top: 6rem;
                }

                ul li {
                    width: 50%;
                }
            }

            @media ${media.xsmallOnly} {
                ul li {
                    width: 100%;
                    height: 10rem;
                }
            }
        `}</style>
    </section>
);

export default Clients;
