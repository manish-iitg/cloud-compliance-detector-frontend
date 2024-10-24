import styled from "styled-components";
import BarChart from "../components/Graph";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useMemo } from "react";

const Title = styled.div`
  font-size: 36px;
  font-family: Montserrat;
  font-weight: bold;
  padding: 50px;
`;
const Container = styled.div`
  &.center {
    display: flex;
    justify-content: center;
  }
`;
const HomePage = () => {
  const url = "http://127.0.0.1:5000/report/0";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {!loading && (
        <div>
          <Container className="center">
            <Title>Cloud Compliance Detector</Title>
          </Container>
          {/* Other components or content */}
          {/* <BarChart /> */}
          {console.log(data['In-active_Resorce'].length)}
        </div>
      )}
    </div>
  );
};

export default HomePage;
