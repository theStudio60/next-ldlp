import Section from '../../../components/Section';

const topSectionBody = {minHeight:"100vh",backgroundColor:"#222",color:"#eee",paddingTop:"25vh",paddingBottom:"25vh"};

const Homepage_Section_Top = (props) => (<>
<Section className="section m-0 p-0" >
  <div className="container-fluid m-0" style={topSectionBody}>
    <div className="row" >
      {props.children}
    </div>
  </div>
</Section>  
</>);

export default Homepage_Section_Top;