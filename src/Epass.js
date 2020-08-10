import React from "react";
import { Link } from "react-router-dom";

const redirectPage = () => {
  window.open("https://covid19.mhpolice.in/", "_blank");
};
const points = [
  "Essential service providers do not require travel pass for inter-state or intra-state travel",
  "The authority of approval or rejection of passes is exclusively with the respective collector office in districts",
  "All other individuals/group can apply for Travel Pass through this platform",
  "Fill all the details correctly and click on submit",
  "Combine all the relevant documents in a single file while uploading",
  "After submitting the application, you will receive a token ID. Save it, and use it to check the status of your application",
  "After the verification and approval by the concerned departments, you can download the e-pass using the token ID",
  "The e-pass will contain your details, vehicle number, validity and a QR code.",
  "Keep a soft / hard copy with you while traveling and show it to the police when asked",
  "It is a punishable offense to copy, misuse or use it after the valid date or without authorization",
  "The size of the photo should not exceed 200 KB and the size of the relevant document should not exceed 1 MB.",
  "The application form should be filled in English only",
];
class Epass extends React.Component {
  render() {
    return (
      <div style={{ margin: "20px", display: "flex" }}>
        <h4 style={{marginTop:"15px"}}>Apply for Travel E-Pass</h4>
        <div style={{ margin: "20px" }}>
          <Link onClick={redirectPage}>Click Here</Link>
          <ul className="ulList">
          <h5 style={{marginTop:"15px",backgroundColor:"LightGray"}}>Government guidelines</h5>
            {points.map((list) => (
               <li>{list}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Epass;
