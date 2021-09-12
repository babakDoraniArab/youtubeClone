import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import Video from "../../components/Video/Video";
import InfiniteScroll from "react-infinite-scroll-component";

import SkeletonVideo from "../../components/skeleton/SkeletonVideo";

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
          loader={[...Array(20)].map(() => (
            <Col lg={3} md={3} className="mx-1">
              <SkeletonVideo />
            </Col>
          ))}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {!loading
            ? videos.map((video) => (
                <Col lg={3} md={4}>
                  <Video key={video.id} video={video} />
                </Col>
              ))
            : [...Array(20)].map(() => (
                <Col lg={3} md={4}>
                  <SkeletonVideo />
                </Col>
              ))}
        </InfiniteScroll>
      </Row>
    </Container>
  );
}

export default HomeScreen;
