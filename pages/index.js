import Page from 'components/Page'
import Header from 'components/Header'
import Project from 'components/Project'
import FlinderImages from 'components/projects/FlinderImages'
import BeatswitchImages from 'components/projects/BeatswitchImages'
import Contact from 'components/Contact'
import Footer from 'components/Footer'
import {
    FLINDER_TITLE,
    FLINDER_SUBTITLE,
    FLINDER_DESCRIPTION,
    FLINDER_LINKS,
    BEATSWITCH_TITLE,
    BEATSWITCH_SUBTITLE,
    BEATSWITCH_DESCRIPTION,
    BEATSWITCH_LINKS,
} from 'constants/projects'

class HomePage extends React.Component {
    render() {
        return (
            <Page>
                <Header />
                <Project
                    renderImages={FlinderImages}
                    title={FLINDER_TITLE}
                    subtitle={FLINDER_SUBTITLE}
                    description={FLINDER_DESCRIPTION}
                    links={FLINDER_LINKS}
                />
                <Project
                    renderImages={BeatswitchImages}
                    title={BEATSWITCH_TITLE}
                    subtitle={BEATSWITCH_SUBTITLE}
                    description={BEATSWITCH_DESCRIPTION}
                    links={BEATSWITCH_LINKS}
                />
                <Contact />
                <Footer />
            </Page>
        )
    }
};

export default HomePage;

