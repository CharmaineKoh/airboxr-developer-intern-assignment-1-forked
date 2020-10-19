import React from "react";

import Alert from "@material-ui/lab/Alert";
import { Typography } from "@material-ui/core";

import {
  PageContainer,
  FixedTopBar,
  FixedMiddleBodyWithVerticalScroll,
  FixedBottomPominentButton,
  TopbarBackButton,
} from "./layout-components";

import { TitlebarGridList } from "./components/DataSourcesGridList";
import { Loading } from "./components/Loading";

import "./styles.css";

interface DataSource {
  id: number;
  name: string;
  uuid: string;
  isFavorited: boolean;
}

export const SelectSourcePage = () => {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [dataSources, setDataSources] = React.useState<DataSource[]>([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImludGVybkBhaXJib3hyLmNvbSIsImlhdCI6MTYwMzA3NDQzMCwiZXhwIjoxNjAzMDc2MjMwfQ.V8UJWRpXDkhb0ELPfVvhZR-42ivn4iF9HybwUS7cyCs";

  const fetchApis = () => {
    setIsLoading(true);
    fetch("https://api.airboxr.com/data/dataSources", {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    })
      .then((res) => res.json())
      .then(
        (res) => {
          setIsLoaded(true);
          setIsLoading(false);
          if (res.statusCode) {        
            setError(res.message);
          } else {
            res.push({ id: 5, name: "Google Sheets" });
            res.forEach((d: DataSource) => (d.isFavorited = false));
            setDataSources(res);
          }
        },
      );
  };

  const topbarLeftButton: TopbarBackButton = {
    type: "back",
    onClick: () => console.log("Clicked back"),
  };

  return (
    <PageContainer>
      <FixedTopBar title="Select source." leftButton={topbarLeftButton} />
      <FixedMiddleBodyWithVerticalScroll>
        <Typography className="header" variant="h3">
          Below is a list of the sources you have connected. Please choose the
          data source you would like to import data from.
        </Typography>
        {isLoading ? (
          <Loading />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <TitlebarGridList datasource={dataSources} isLoaded={isLoaded} />
        )}
      </FixedMiddleBodyWithVerticalScroll>
      <FixedBottomPominentButton
        title="Test / Debug"
        onClick={() => fetchApis()}
      />
    </PageContainer>
  );
};
