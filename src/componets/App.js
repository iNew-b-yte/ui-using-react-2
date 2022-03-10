import React from "react";
import Heading from "./utilities/Heading";
import Paragraph from "./utilities/Paragraph";
import Button from "./utilities/Button";
import { text8M, text7M, text33M, text867, text373, footPrintp1,footPrintp2,footPrintp3 } from "../data";
import {BtnText} from "../BtnText";


function App() {
  return (
    <div className="App bg-light ">

    <div className="d-flex vr-wrapper " >
      <div className="vr"></div>
     
      <div className="vstack gap-1 ms-2 ">
      <div className="tFP mb-3">THE FIRE PURCHASE</div>
     {BtnText.map((item)=>{
       return <Button className="cBtn bg-light" btnText={item} />
     })}

      </div>
    </div>


      <div className="container  ">
        <div className="row ">

        {/* 8.4M heading and text */}
          <div className="col col-5">
            <Heading className="d-inline-block _head8M  " heading="8.4M" />
            <Paragraph className="d-block _text8M " paraText={text8M} />
          </div>

          {/* 7.9M heading and text */}
          <div className="col  col-5">
            <Heading className="d-inline-block  _head7M me-5" heading="7.9M" />
            <Paragraph className="d-block _text7M" paraText={text7M} />
          </div>
        </div>


        {/* 33.6M heading and text */}
        <div className="row" >
          <div className="col col-10">
            <Heading className=" _head33M d-inline-block " heading="33.6M" />
            <Paragraph className="_text33M d-block" paraText={text33M} />
          </div>
        </div>


        <div className="row justify-content-center mt-5">

        {/* "Our Footprint" heading and text */}
          <div className="col col-lg-5 ms-5" >
            <Heading className="footPrint mb-3" heading="Our Footprint" />
            <Paragraph className="_footPrintText mb-3" paraText={footPrintp1} />
            <Paragraph className="_footPrintText mb-3" paraText={footPrintp2} />
            <Paragraph className="_footPrintText mb-3" paraText={footPrintp3} />
          </div>

            <div className="col col-lg-5">

            {/* 8,679 heading and text */}
            <Heading className="_head8679 ms-2 mt-3" heading="8,679"/>
            <Paragraph className="_text8679 ms-2 " paraText={text867}  />

            {/* 373.73 heading and text */}
            <Heading className="_head373 mt-0 " heading="373.73"/>
            <Paragraph className="_text373 mt-1 ms-4" paraText={text373}  />
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
