import React from "react";
import "./AddDog.scss";
import arrow from "../../images/arrow.png";
import addPhotoIcon from "../../images/addPhotoIcon.png"

function AddDog() {
  return (
    <div className="addDogContainer">
      <button className="goBackButton">
        <div className="goBackButtonContainer">
          <img src={arrow} alt="" />
          Повернутись
        </div>
      </button>

      <div className="mainInfoContainer">
        <button className="addPhotoButton"> <img src={addPhotoIcon} alt="" /></button>
        <div >
            <p>Кличка</p>
            <div className="inputContainer"><input type="text" /></div>

        </div>
      </div>
    </div>
  );
}

export default AddDog;
