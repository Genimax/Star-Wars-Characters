import { useState, useEffect } from "react";

import swapi from "../../api/swapi";
import CardPreview from "./CardPreview";
import CardModule from "./CardModule";

const CardsList = (props) => {
  const [profiles, setProfiles] = useState([]);
  const [errorDuringFetching, setErrorDuringFetching] =
    useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [moduleWindow, setModuleWindow] = useState(null);

  useEffect(() => {
    const scrollHandler = (e) => {
      if (
        e.target.documentElement.scrollHeight -
          (e.target.documentElement.scrollTop + window.innerHeight) <
          100 &&
        profiles.length < totalCount
      )
        setFetching(true);
    };

    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  });

  useEffect(() => {
    if (fetching) {
      try {
        swapi
          .get(`/people/?page=${currentPage}`)
          .then((response) => {
            setProfiles([...profiles, ...response.data.results]);
            setCurrentPage((prevState) => prevState + 1);
            setTotalCount(response.data.count);
            props.setSearchCount(response.data.count);
          })
          .finally(() => {
            setFetching(false);
            setErrorDuringFetching(false);
          });
      } catch (e) {
        setErrorDuringFetching(true);
        setFetching(false);
      }
    }
  }, [fetching]);

  useEffect(() => {
    if (profiles.length < 12) {
      setFetching(true);
    }
  }, [profiles]);

  const cardsRender = () => {
    const renderedCards = profiles.map((card) => {
      for (let filter in props.filters) {
        if (
          props.filters[filter] !== "All" &&
          props.filters[filter].toLowerCase() !== card[filter]
        ) {
          return null;
        }
      }

      return (
        <CardPreview
          key={card.name}
          card={card}
          onClick={() => setModuleWindow(card)}
        />
      );
    });

    if (errorDuringFetching)
      return <h2 className="fetch-error-message">ERROR</h2>;
    return renderedCards;
  };

  const loadingRender = () => {
    const className = `scroll-loader ${
      profiles.length === 0 ? "main-loader" : ""
    }`;

    return fetching ? (
      <div className={className}>
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
    ) : null;
  };

  return (
    <>
      <CardModule
        profile={moduleWindow}
        onReset={() => setModuleWindow(null)}
      />
      <div className="cards-container">{cardsRender()}</div>

      {loadingRender()}
    </>
  );
};

export default CardsList;
