import React, { useState } from "react";
import Avatar from "../Avatar";
import { avatarData } from "../assets/data";
import { users } from "../assets/data";
import Header from "../Header";
import Form from "./Form";

import "./Profilepage.css";

const Profilepage = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  let containPrev = index > 0;
  let containNext = index < avatarData.length - 1;

  function handlePrevClick() {
    if (containPrev) {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (containNext) {
      setIndex(index + 1);
    }
    if (index === avatarData.length - 1) {
      setIndex(0);
    }
  }

  let avatar = avatarData[index];

  return (
    <>
      <Header message="Hello, this is vite" />
      <Header message="Welcome to Users Profiles" />
      <div className="profilepage">
        <button onClick={handleNextClick}>Next</button>
        <button onClick={handlePrevClick} disabled={!containPrev}>
          Prev
        </button>

        <h2>
          <i>{avatar.bestWork} </i>
          by {avatar.profileName}
        </h2>
        <h3>
          ({index + 1} of {avatarData.length})
        </h3>
        <img src={avatar.imgSrc} alt={avatar.imgAlt} />
      </div>
      <Form />
    </>
  );
};

export default Profilepage;

{
  // disabled={!containNext}
  //   const userList = users.map((user) => <li key={user.id}>{user.name}</li>);
  /* <div>
        {avatarData.map((avatar) => (
          <Avatar
            key={avatar.tracker}
            imgSrc={avatar.imgSrc}
            imgAlt={avatar.imgAlt}
            profileName={avatar.profileName}
          />
        ))}
      </div>
      <div>
        <ul>{userList}</ul>
      </div> */
}
