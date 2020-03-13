import Section from '../../../components/Section';

const sectionBody = {
  minHeight:"50vh",
  backgroundColor:"#222",
  paddingTop:"25%",
  paddingBottom:"25%"
};

const Homepage_Section_01 = (props) => (<>
  <Section className="section m-0 p-0 " >
    <div className="container-fluid m-0 p-4" style={sectionBody}>
      <div className="row" >
        {props.children}
      </div>
    </div>
  </Section>  
</>); 

export default Homepage_Section_01;