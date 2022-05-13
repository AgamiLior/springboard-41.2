import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

function DogList({dogs}) {
  return (
    <div className="DogList">
      <div className="row mt-4">
        <div className="col">
          <h1 className="text-center">
            LOOK AT OUR CUTE DOGS!!!
          </h1>
          <h3> CLICK ON THEM FOR MORE INFO</h3>
        </div>
      </div>
      <div className="row">
        {dogs.map(d => (
          <div className="col-3 text-center" key={d.name}>
            
            <h3 className="mt-3">
              <Link to={`/dogs/${d.name.toLowerCase()}`}>
                <img src={d.src} alt={d.name} />
                <br></br>{d.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
