import { IMG_ECDA } from "../common";
import {
  renderLogoWSQ,
  renderIssuingDate,
  renderAwardTextQUAL,
  renderSignatureQual
} from "../common/functions";
import fonts from "../common/fonts";

/* eslint-disable */
// Disabled eslint as there's no way to add proptypes to an anonymous function like this
export default ({ logo }) => ({ certificate }) => (
  <div>
    <div
      className="container"
      style={{ border: 5, borderColor: "#AAA", borderStyle: "solid",paddingLeft:"6%",paddingRight:"6%",paddingBottom:"100px",paddingTop:"100px", width:"100%", fontFamily:"Arial" }}
    >
      {fonts()}
      
      {renderLogoWSQ(certificate)}
      {renderAwardTextQUAL(certificate)}
      {renderIssuingDate(certificate)}
      {certificate.additionalData.certSignatories
        ? renderSignatureQual(certificate,IMG_ECDA)
        : ""}
    </div>
  </div>
);
