import {
  featureCheck,
  statsCheck,
} from "../../renderers/cardFeaturesRenderer";

const CardPreview = (props) => {
  return (
    <div className="card-preview" onClick={props.onClick}>
      <h3 className="card-preview-name">{props.card.name}</h3>
      <div className="card-preview-stats">
        {statsCheck(props.card)}
      </div>
      <div className="card-preview-labels">
        {featureCheck(props.card)}
      </div>
    </div>
  );
};

export default CardPreview;
