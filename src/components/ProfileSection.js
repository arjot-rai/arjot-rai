import Pdf from '../assets/arjot_rai_resume.pdf';

export const ProfileSection = () => {
    return (
        <section id="profile">
            <div className="section__pic-container">
                <img className="section__profile-pic" src={require('../assets/my_pic.jpeg')} alt="Arjot Rai profile" />
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">Arjot Singh Rai</h1>
                <p className="section__text__p2">Software Developer</p>
                <div className="btn-container">
                    <button
                        className="btn btn-color-2"
                        onClick={() => window.open(Pdf)}
                    >
                        Download Resume
                    </button>
                    <button className="btn btn-color-1" onclick="location.href='./#contact'">
                        Contact Info
                    </button>
                </div>
                <div id="socials-container">
                    <img
                        src={require('../assets/linkedin-white.png')}
                        alt="My LinkedIn profile"
                        className="icon"
                        onClick={() => window.open('https://www.linkedin.com/in/arjot-rai/')}
                        // onclick="location.href=''"
                    />
                    <img
                        src={require('../assets/github-white.png')}
                        alt="My Github profile"
                        className="icon"
                        onClick={() => window.open('https://github.com/arjot-rai/')}
                    />
                </div>
            </div>
        </section> 
    );
}