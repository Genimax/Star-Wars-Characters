import { useState, useEffect } from "react";

import swapi from "../../api/swapi";
import CardPreview from "./CardPreview";

const CardsList = (props) => {
  const [profiles, setProfiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      profiles.length < totalCount
    )
      setFetching(true);
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  });

  useEffect(() => {
    if (fetching) {
      swapi
        .get(`/people/?page=${currentPage}`)
        .then((response) => {
          setProfiles([...profiles, ...response.data.results]);
          setCurrentPage((prevState) => prevState + 1);
          setTotalCount(response.data.count);
          props.setSearchCount(response.data.count);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    if (profiles.length < 12) {
      setFetching(true);
    }
  }, [profiles]);

  const cardsRender = () => {
    return profiles.map((card) => {
      for (let filter in props.filters) {
        if (
          props.filters[filter] !== "All" &&
          props.filters[filter].toLowerCase() !== card[filter]
        ) {
          return null;
        }
      }

      return <CardPreview key={card.name} card={card} />;
    });
  };

  return (
    <>
      <div className="cards-container">{cardsRender()}</div>
      {fetching && profiles.length > 8 ? (
        <div className="scroll-loader">
          <svg
            className="loader"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 340 340"
          >
            <circle cx="170" cy="170" r="160" stroke="#E2007C" />
            <circle cx="170" cy="170" r="135" stroke="#404041" />
            <circle cx="170" cy="170" r="110" stroke="#E2007C" />
            <circle cx="170" cy="170" r="85" stroke="#404041" />
          </svg>
        </div>
      ) : null}
    </>
  );
};

export default CardsList;
