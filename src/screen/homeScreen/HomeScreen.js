import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import Video from "../../components/Video/Video";
import { getPopularVideos } from "../../redux/actions/videos.action";
import "./_homeScreen.scss";
function HomeScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, loading } = useSelector((state) => state.homeVideos);

  return (
    <Container>
      <CategoriesBar />
      <Row>
        {videos.map((video) => (
          <Col lg={3} md={4}>
            <Video key={video.id} video={video} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomeScreen;
