import React from "react";
import { PodcastCard } from "../PodcastCard/PodcastCard";
import "./PodcastsUser.css";
import { useEffect, useState } from "react";
import { serverRequest } from "../../helpers/urlBack";
import { DecodeToken } from "../../util/DecodeToken";
import { getToken } from "../../util/LocalStorage.utils";

export const PodcastsUser = () => {
  const [user, setUser] = useState({});
  const [listaPodcastsUser, setListaPodcastsUser] = useState([]);
  useEffect(() => {
    const token = getToken();
    const decodedToken = DecodeToken(token);
    const userId = decodedToken.id;

    serverRequest(`data/podcast/?id_author=${userId}`, "GET")
      .then((response) => {
        setListaPodcastsUser(response)
      })
      .catch(console.log);
  }, []);

  return (
    <div className="PodcastsUser-wrap">
      {listaPodcastsUser.map(podcast =>
        (
          <PodcastCard
            id={podcast._id}
            title={podcast.title}
            categories={podcast.categories}
            description={podcast.description}
            author={podcast.author}
            img={"https://images.unsplash.com/photo-1604160450925-0eecf551fa86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80"}
          />
        ))}
    </div>
  );
};
