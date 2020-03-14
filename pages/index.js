//const imgURL = "https://source.unsplash.com/random";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import SoundcloudPlayer from '../components/SoundcloudPlayer';
import Homepage_Section_Top from './homepage/sections/top';
import Homepage_Section_01 from  './homepage/sections/01';
import Homepage_Section_02 from  './homepage/sections/02';
import Homepage_Section_03 from  './homepage/sections/03';
import { attributes, html } from '../content/index.md';

const introStyle = {fontSize: 32};
 
const Index = () => (<>
  <Header/>
  <Main>
    <Homepage_Section_Top>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-8 ml-auto mr-auto text-center">
            <h1 className="text-uppercase">{attributes.title}</h1>
            <p style={introStyle}>
              {attributes.introduction}
            </p> 
             <SoundcloudPlayer/>
          </div>

    </Homepage_Section_Top>
    <Homepage_Section_01>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 ml-auto mr-auto text-center">
        <a href={attributes.link_url_01} >
         {attributes.link_name_01}
        </a>
      </div>
    </Homepage_Section_01>
    <Homepage_Section_02>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-8 ml-auto mr-auto text-center">
        <a href={attributes.link_url_01} >
         {attributes.link_name_01}
        </a>
      </div>
    </Homepage_Section_02>  
    <Homepage_Section_03>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-8 ml-auto mr-auto text-center">
        <SoundcloudPlayer/>      
      </div>
    </Homepage_Section_03>        
  </Main>
  <Footer/>
</>);
export default Index;