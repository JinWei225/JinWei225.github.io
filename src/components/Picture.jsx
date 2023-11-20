import React from "react";
import bc from "./img/Birthdaycard.png";

function Picture() {
    return <div className="picture1">
    <p>这个是我为你设计的生日贺卡哦！</p>
    <img className="bc" src={bc} alt="Birthday card"/>
    </div>
}

export default Picture;
