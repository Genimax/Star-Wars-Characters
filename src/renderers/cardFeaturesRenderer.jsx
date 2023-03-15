export const featureCheck = (profile) => {
  const features = ["birth_year", "gender"];

  return features.map((feature) => {
    if (
      profile[feature] !== "n/a" &&
      profile[feature] !== "unknown"
    ) {
      return (
        <div
          key={feature}
          className={`card-feature card-preview-${feature} ${profile[feature]}`}
        >
          {profile[feature]}
        </div>
      );
    }
  });
};

export const statsCheck = (profile) => {
  const stats = ["mass", "height"];

  return stats.map((stat) => {
    if (profile[stat] !== "n/a" && profile[stat] !== "unknown") {
      return (
        <div className="card-preview-stat" key={stat}>
          <div className="card-preview-stat-number">
            <p>{profile[stat]}</p>
          </div>
          <p>{stat}</p>
        </div>
      );
    }
  });
};
