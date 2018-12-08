import Page from 'components/Page'
import Header from 'components/Header'
import Project from 'components/Project'
import FlinderImages from 'components/projects/FlinderImages'
import BeatswitchImages from 'components/projects/BeatswitchImages'
import InnovationWallImages from 'components/projects/InnovationWallImages'
import Contact from 'components/Contact'
import Clients from 'components/Clients'
import Footer from 'components/Footer'
import {
    FLINDER_TITLE,
    FLINDER_ICON,
    FLINDER_SUBTITLE,
    FLINDER_DESCRIPTION,
    FLINDER_LINKS,
    BEATSWITCH_TITLE,
    BEATSWITCH_ICON,
    BEATSWITCH_SUBTITLE,
    BEATSWITCH_DESCRIPTION,
    BEATSWITCH_LINKS,
    INNOVATIONWALL_TITLE,
    INNOVATIONWALL_ICON,
    INNOVATIONWALL_SUBTITLE,
    INNOVATIONWALL_DESCRIPTION,
    INNOVATIONWALL_LINKS,
} from 'constants/projects'

class HomePage extends React.Component {
    render() {
        return (
            <Page>
                <Header />
                <div className="projectsContainer">
                    <Project
                        renderImages={FlinderImages}
                        title={FLINDER_TITLE}
                        iconUrl={`/static/img/projects/flinder/${FLINDER_ICON}`}
                        subtitle={FLINDER_SUBTITLE}
                        description={FLINDER_DESCRIPTION}
                        links={FLINDER_LINKS}
                    />
                    <Project
                        renderImages={BeatswitchImages}
                        title={BEATSWITCH_TITLE}
                        iconUrl={`/static/img/projects/beatswitch/${BEATSWITCH_ICON}`}
                        subtitle={BEATSWITCH_SUBTITLE}
                        description={BEATSWITCH_DESCRIPTION}
                        links={BEATSWITCH_LINKS}
                    />
                    <Project
                        renderImages={InnovationWallImages}
                        title={INNOVATIONWALL_TITLE}
                        iconUrl={`/static/img/projects/innovationwall/${INNOVATIONWALL_ICON}`}
                        subtitle={INNOVATIONWALL_SUBTITLE}
                        description={INNOVATIONWALL_DESCRIPTION}
                        links={INNOVATIONWALL_LINKS}
                    />
                </div>
                <Clients />
                <Contact />
                <Footer />
                <style jsx>{`
                    .projectsContainer {
                        background-color: #fff;
                        padding-bottom: 1.5rem;
                    }
                `}</style>
            </Page>
        )
    }
};

export default HomePage;
