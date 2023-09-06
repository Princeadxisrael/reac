import React from "react";

const Avatar = (props) => {
  return (
    <div>
      <img
        className="avatar"
        src={props.imgSrc}
        alt={props.imgAlt}
        width={100}
        height={100}
      />
      <h2> name: {props.profileName}</h2>
    </div>
  );
};

export default Avatar;
