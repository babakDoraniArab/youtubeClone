import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import Comments from "../../components/comments/Comments";
import VideoHorizontal from "../../components/VideoHorizontal/VideoHorizontal";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import "./_watchScreen.scss";
import { getVideoById } from "../../redux/actions/videos.action";

const WatchScreen = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));
  }, [dispatch, id]);

  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title="my_video"
            allowFullScreen
          ></iframe>
        </div>

        <VideoMetaData />
        <Comments />
      </Col>
      <Col lg={4}>
        {[...Array(10)].map(() => (
          <VideoHorizontal />
        ))}
      </Col>
    </Row>
  );
};

export default WatchScreen;
