import React from "react";
import ProfileTop from "../Profile/ProfileTop";
import ProfileBottom from "../Profile/ProfileBottom";

const CreateUserStep4 = () => {
  return (
    <div>
      <ProfileTop
        img={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7lpk_T0p1lQEqmdbzT9DtlytfERJJJUKEqg&usqp=CAU"
        }
      />
      <ProfileBottom
        address={"yangon"}
        gender={"female"}
        DOB={"19/12/2002"}
        phone={"0999999999"}
        email={"jj@gmail.com"}
        position={"Sale Executive"}
      />
    </div>
  );
};

export default CreateUserStep4;
