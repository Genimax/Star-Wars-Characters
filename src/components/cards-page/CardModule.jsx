import { useEffect } from "react";

import {
  featureCheck,
  statsCheck,
} from "../../renderers/cardFeaturesRenderer";

const CardModule = (props) => {
  const profile = props.profile;

  if (!profile) return null;

  const imageRender = (profile) => {
    let fileName = "";

    if (profile.gender === "n/a") {
      fileName = "droid";
    } else if (profile.gender === "unknown") {
      fileName = null;
    } else fileName = profile.gender;

    return (
      <img
        src={`./images/${fileName}.png`}
        alt="profile image"
        className="profile-image"
      />
    );
  };

  const descriptionRenderer = (profile) => {
    const options = ["eye_color", "hair_color", "skin_color"];

    const result = options.map((option) => {
      if (profile[option] === "n/a" || profile[option] === "unknown")
        return null;

      return (
        <p key={option}>
          {option.replace("_", " ")}: {profile[option]}
        </p>
      );
    });

    return result;
  };

  return (
    <div className="module-container" onClick={props.onReset}>
      <div className="module-window-container">
        <img
          src="./images/closeIcon.svg"
          alt=""
          className="close-module-button"
          onClick={props.onReset}
        />
        <div
          className="module-window"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="left-module-container">
            {imageRender(profile)}
            <div className="features-container">
              {featureCheck(profile)}
            </div>
          </div>
          <div className="right-module-container">
            <h2 className="module-title">{profile.name}</h2>
            <div className="description-container">
              {descriptionRenderer(profile)}
            </div>
            <div className="module-stats-container">
              {statsCheck(profile)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModule;
