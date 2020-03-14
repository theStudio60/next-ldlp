import Section from '../../../components/Section';
// THis is NOT the TOP section,
// it is the section that follow the top-section
const sectionBody = {
  minHeight:"100vh",
  backgroundColor:"#333",
  paddingTop:"64px",
  paddingBottom:"64px"
};

const Homepage_Section_02 = (props) => (<>
  <Section className="section m-0 p-0 " id="s_02">
    <div className="container-fluid m-0 " style={sectionBody}>
      <div className="row" >
        {props.children}
      </div>
    </div>
  </Section>  
</>); 

export default Homepage_Section_02;