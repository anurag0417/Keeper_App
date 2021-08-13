import React from "react";

const CurTime=new Date();
const Year = CurTime.getFullYear();

function Footer(){
     return (
          <footer>
               <p>Copyright ⓒ {Year}</p>
          </footer>
     );
}

export default Footer;