import React from "react";
import numeral from "numeral";
import moment from "moment";
import "./_videoMetaData.scss";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";

const VideoMetaData = () => {
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>Video Titles</h5>
        <div className="d-flex justify-content-between align-items-center py-1  ">
          <span>
            {numeral(10000).format("0.a")} Views •
            {moment("2020-06-6").fromNow()}
          </span>

          <div>
            <span className="videoMetaData__top__likebtns">
              <MdThumbUp size={26} /> {numeral(40000).format("0.a")}
            </span>

            <span className="videoMetaData__top__likebtns">
              <MdThumbDown size={26} /> {numeral(10000).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-2">
        <div className="d-flex">
          <img src="/avatar.png" alt="" className="rounder-circle mr-3" />
          <div className="d-flex flex-column">
            <span>BackbenCoder </span>
            <span>{numeral(10000).format("0.a")} subscriber</span>
          </div>
        </div>
        <button className="btn border-0 p-2 m-2 ">Subscribe</button>
      </div>
      <div className="videoMetaData__description">
        <ShowMoreText
          line={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          pariatur placeat, nobis maxime nemo eum voluptas sit incidunt, minus
          ea fugiat non dolorem quis corrupti cum nisi quo doloribus obcaecati
          saepe facilis exercitationem. Temporibus quia perferendis suscipit
          commodi iste facilis, eaque fugit nemo est ad. Quam a laudantium sint
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          pariatur placeat, nobis maxime nemo eum voluptas sit incidunt, minus
          ea fugiat non dolorem quis corrupti cum nisi quo doloribus obcaecati
          saepe facilis exercitationem. Temporibus quia perferendis suscipit
          commodi iste facilis, eaque fugit nemo est ad. Quam a laudantium sint
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          pariatur placeat, nobis maxime nemo eum voluptas sit incidunt, minus
          ea fugiat non dolorem quis corrupti cum nisi quo doloribus obcaecati
          saepe facilis exercitationem. Temporibus quia perferendis suscipit
          commodi iste facilis, eaque fugit nemo est ad. Quam a laudantium sint
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          pariatur placeat, nobis maxime nemo eum voluptas sit incidunt, minus
          ea fugiat non dolorem quis corrupti cum nisi quo doloribus obcaecati
          saepe facilis exercitationem. Temporibus quia perferendis suscipit
          commodi iste facilis, eaque fugit nemo est ad. Quam a laudantium sint
          nam?
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
