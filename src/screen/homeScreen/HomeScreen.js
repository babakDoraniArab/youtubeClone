import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import Video from "../../components/Video/Video";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "react-loading-skeleton";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";
import "./_homeScreen.scss";

function HomeScreen() {
  const dispatch = useDispatch();
  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);
  const fetchData = () => {
    if (activeCategory === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };

  return (
    <Container>
      <CategoriesBar />
      <Row>
        <InfiniteScroll
          dataLength={videos.length} //This is important field to render the next data
          next={fetchData}
          hasMore={true}
          loader={
            <div className="spinner-border text-danger d-block mx-auto"></div>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {loading
            ? videos.map((video) => (
                <Col lg={3} md={4}>
                  <Video key={video.id} video={video} />
                </Col>
              ))
            : [...Array(20)].map(() => {
                <Col lg={3} md={4}>
                  <Skeleton height={180} width="100%" />;
                </Col>;
              })}
        </InfiniteScroll>
      </Row>
    </Container>
  );
}

export default HomeScreen;
