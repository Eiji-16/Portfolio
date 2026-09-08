import '../styles/portfolio.css';
import profileImage from '../assets/icons/ME.png';
import facebookIcon from '../assets/icons/FB.png';
import githubIcon from '../assets/icons/GH.png';
import instagramIcon from '../assets/icons/IG.png';
import xIcon from '../assets/icons/X.png';
import discordIcon from '../assets/icons/DC.png';
import telephoneIcon from '../assets/icons/TEL.png';

const navigationItems = [
  ['Home', '#HomeBG'],
  ['About', '#AboutBG'],
  ['Resume', '#ResumeBG'],
  ['Portfolio', '#PortfolioBG'],
];

const socialLinks = [
  ['Facebook', 'https://www.facebook.com/wrenzaj.aquino.733', facebookIcon],
  ['GitHub', 'https://github.com/Eiji-16', githubIcon],
  ['Instagram', 'https://www.instagram.com/_eiji16/', instagramIcon],
  ['X', 'https://x.com/AjWrenz', xIcon],
  ['Discord', 'https://discordapp.com/users/622735942746112014', discordIcon],
];

function App() {
  return (
    <>
      <header>
        <nav className="navbar" aria-label="Primary navigation">
          <ul>
            {navigationItems.map(([label, href]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="HomeBG">
          <div className="Home-container">
            <div className="Home-LeftContainer">
              <h1>EIJI</h1>
              <h2>WRENZ AJ AQUINO</h2>
              <h4>Information Technology</h4>
              <a className="LeftContBtn" href="#ResumeBG">Resume</a>
              <a className="LeftContBtn" href="#PortfolioBG">Portfolio</a>
            </div>
          </div>
        </section>

        <section id="AboutBG">
          <div className="About-container">
            <div className="About-LeftContainer">
              <h2>ABOUT ME</h2>
              <h4>aquinowrenzajcastillo@gmail.com</h4>
              <p>
                I&apos;m a third-year Bachelor of Science in Information Technology student,
                passionate about 3D Blendering, digital design, and technology. I have
                experience in 3D modeling, Photoshop, video editing, HTML and CSS basics,
                PC hardware assembly/disassembly, OS installation, and basic networking.
                I learn quickly, adapt easily, and enjoy taking on new projects where I
                can apply my skills and grow.
              </p>
              <h3>Cavite, General Trias<br />─ Tejero ─</h3>
            </div>
            <div className="About-Profile-Pic-RightContainer">
              <img src={profileImage} alt="Wrenz Aquino" />
            </div>
          </div>
        </section>

        <section id="ResumeBG">
          <div className="container">
            <div className="LeftContainer" />
            <div className="RightContainer" />
          </div>
        </section>

        <section id="PortfolioBG">
          <div className="container">
            <div className="LeftContainer" />
            <div className="RightContainer" />
          </div>
        </section>
      </main>

      <footer>
        <div className="contacts">
          {socialLinks.map(([label, href, icon]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <img src={icon} alt="" />
            </a>
          ))}
        </div>
        <div className="phoneNum">
          <img src={telephoneIcon} alt="" />
          <p>0965-388-6486</p>
        </div>
      </footer>
    </>
  );
}

export default App;
