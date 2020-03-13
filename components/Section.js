


const sectionStyle = {minHeight:"96vh"};

const Section = (props) => (
  <section  style={sectionStyle} className="section w-100 h-100">
    <div className="container-fluid p-4 text-center">
      {props.children}
    </div>    
  </section>
);

export default Section;