//const imgURL = "https://source.unsplash.com/random";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import SoundcloudPlayer from '../components/SoundcloudPlayer';
import Section from '../components/Section';
import { attributes, html } from '../content/index.md';

const introStyle = {fontSize: 32};
const topSectionStyle = {paddingTop: "25vh"};

const Index = () => (
  <div>
    <Header/>
    <Main  >
      <Section   >
      <div className="container-fluid"  style={topSectionStyle}   >
        <div  className = "row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-8 ml-auto mr-auto">
            <h1 className="text-uppercase">{attributes.title}</h1>
            <p style={introStyle}>
              {attributes.introduction}
            </p>
           
              <SoundcloudPlayer/>
          
          <a href={attributes.link_url_01} >{attributes.link_name_01}</a>

          </div>
        </div>
      </div>
      </Section>

    </Main>

    
    <Footer/>
  </div>
);
export default Index;