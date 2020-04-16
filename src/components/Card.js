import React from "react";

function Card({id, name, email}) {
        return (
          <div className="tc bg-light-green dib ma2 pa3 br3 grow bw2 shadow-5">
              <img alt="RoboPhoto" src={`https://robohash.org/${id}?200x200`}/>
              <div>
                  <h2>{name}</h2>
                  <p>{email}</p>
              </div>
          </div>
        );
}

export default Card;