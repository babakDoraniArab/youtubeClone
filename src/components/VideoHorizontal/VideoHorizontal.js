import React from "react";
import { AiFillEye } from "react-icons/ai";
import moment from "moment";
import numeral from "numeral";
import request from "../../api";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./_videoHorizontal.scss";
import { Col, Row } from "react-bootstrap";

const VideoHorizontal = () => {
  const seconds = moment.duration("100").asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <Row className="videoHorizontal m-1 py-2 align-item-center">
      <Col xs={6} md={4} className="videoHorizontal__left">
        <LazyLoadImage
          effect="blur"
          src="/avatar.png"
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />

        <span className="video__top__duration">{_duration}</span>
      </Col>
      <Col xs={6} md={8} className="videoHorizontal__right p-0">
        <p className="videoHorizontal__title mb-1">
          be a full stack developer in 1 month sdf sdf sdf sdf sdf sdf sdf be a
          full stack developer in 1 month sdf sdf sdf sdf sdf sdf sdf be a full
          stack developer in 1 month sdf sdf sdf sdf sdf sdf sdf be a full stack
          developer in 1 month sdf sdf sdf sdf sdf sdf sdf be a full stack
          developer in 1 month sdf sdf sdf sdf sdf sdf sdf
        </p>
        <div className="videoHorizontal__details">
          <AiFillEye /> {numeral("1000").format("0.a")} Views •
          {moment("2020-06-09").fromNow()}
        </div>
        <div className="videoHorizontal__channel d-flex align-items-center">
          {/* <LazyLoadImage
          effect="blur"
          src="/avatar.png"
          className=""
          wrapperClassName=""
        /> */}
          <p>name of channel </p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
