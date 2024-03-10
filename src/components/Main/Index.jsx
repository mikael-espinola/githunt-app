import React, { useEffect, useState } from "react";

import { Container } from "./style";
import Menu from "./Menu/Index";
import Content from "./Content/Index";
import Loader from "../Loader/Index";
import Err from "../Error/Index";

function Main({ userSearch }) {
  const [profile, setProfile] = useState();
  const [repositories, setRepositories] = useState();
  const [statusApi, setStatusApi] = useState(false);
  const [loaderStatus, setLoaderStatus] = useState(false);
  const [ErrScreen, setErrScreen] = useState(false);

  const sortRepo = (data) => {
    return data.sort((a, b) => {
      const createAtA = new Date(a.created_at);
      const createAtB = new Date(b.created_at);

      const currentDate = new Date();

      const differenceDateA = currentDate - createAtA;
      const differenceDateB = currentDate - createAtB;

      return differenceDateA - differenceDateB;
    });
  };

  useEffect(() => {
    setErrScreen(false);
    setStatusApi(false);
    if (!userSearch) {
      return;
    }
    setLoaderStatus(true);
    fetch(`https://api.github.com/users/${userSearch}`, {
      method: "GET",
    })
      .then((resp) => {
        if (!resp.ok) {
          setStatusApi(false);
          setLoaderStatus(false);
          setErrScreen(true);
          throw new Error("Not found");
        }
        return resp.json();
      })
      .then((data) => {
        fetch(data.repos_url, {
          method: "GET",
        })
          .then((resp) => resp.json())
          .then((repo) => {
            const arrSorted = sortRepo(repo);
            console.log(data);
            const arr = arrSorted.slice(0, 4);
            setRepositories(arr);
            setProfile(data);
            setStatusApi(true);
            setLoaderStatus(false);
          });
      })
      .catch((err) => {
        setErrScreen(true);
      });
  }, [userSearch]);

  return (
    <>
      {ErrScreen && <Err userSearch={userSearch} />}
      {loaderStatus && <Loader />}
      {statusApi && (
        <Container>
          <Menu profile={profile} />
          <Content repositories={repositories} />
        </Container>
      )}
    </>
  );
}

export default Main;
