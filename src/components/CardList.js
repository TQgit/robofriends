import React from "react";
import Card from "./Card";

function CardList({navbarHeight, robots}) {
    const CardArray = robots.map((robot) => {
        return <Card key={robot.id} id={robot.id} name={robot.name} username={robot.username} email={robot.email}/>
    })

    return (
        <div style={{marginTop: navbarHeight}}>
            {CardArray}
        </div>
    )
}

export default CardList;