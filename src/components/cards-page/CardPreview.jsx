const CardPreview = (props) => {
  const featureCheck = () => {
    const features = ["birth_year", "gender"];

    return features.map((feature) => {
      if (
        props.card[feature] !== "n/a" &&
        props.card[feature] !== "unknown"
      ) {
        return (
          <div
            key={feature}
            className={`card-feature card-preview-${feature}`}
          >
            {props.card[feature]}
          </div>
        );
      }
    });
  };

  const statsCheck = () => {
    const stats = ["mass", "height"];

    return stats.map((stat) => {
      if (
        props.card[stat] !== "n/a" &&
        props.card[stat] !== "unknown"
      ) {
        return (
          <div className="card-preview-stat" key={stat}>
            <div className="card-preview-stat-number">
              <p>{props.card[stat]}</p>
            </div>
            <p>{stat}</p>
          </div>
        );
      }
    });
  };

  return (
    <div className="card-preview">
      <h3 className="card-preview-name">{props.card.name}</h3>
      <div className="card-preview-stats">{statsCheck()}</div>
      <div className="card-preview-labels">{featureCheck()}</div>
    </div>
  );
};

export default CardPreview;
