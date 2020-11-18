import React from "react";
import { useEffect, useState, useParams } from "react";
import { Link } from "react-router-dom";
import { serverRequest } from "../../helpers/urlBack";
import { DecodeToken } from "../../util/DecodeToken";
import { getToken } from "../../util/LocalStorage.utils";
import { PodcastCard } from "../../Components/PodcastCard/PodcastCard";
import "./PodcastInformation.css";

export const PodcastInformation = () => {
  const [user, setUser] = useState({});
  const [podcast, setPodcast] = useState({});
  const [listaPodcastsUser, setListaPodcastsUser] = useState([]);

  let { podcastId } = useParams();

  useEffect(() => {
    serverRequest(`data/podcast/5fb2cb931cb42b40b4e375c9`, "GET")
      .then((response) => {
        setPodcast(response)
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <div className="PodcastsUser-wrap">
        {listaPodcastsUser.map(podcast =>
          (
            <PodcastCard
              id={podcast._id}
              title={podcast.title}
              categories={podcast.categories}
              author={podcast.author}
              description={podcast.description}
              img={"https://images.unsplash.com/photo-1604160450925-0eecf551fa86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80"}
            />
          ))}
      </div>
      <div>
        <Link
          to={{
            pathname: "/",
            state: { user },
          }}
        >
          <button>Editar podcast</button>
        </Link>
      </div>
    </>
  );
};
