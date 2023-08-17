import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import Banner from "../Banner/Banner";
import ProfileTop from "../Profile/ProfileTop";
import ProfileBottom from "../Profile/ProfileBottom";

const Detail = () => {
  return (
    <MainLayout>
      <div className=" w-full flex justify-center">
        <div className="w-[95%] my-6 flex flex-col gap-8">
          <Banner
            title={"User"}
            path1={"Overview"}
            btn={"Update User"}
            button={true}
            route={"/profile/edit"}
          />
          <div className="w-[65%]">
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
        </div>
      </div>
    </MainLayout>
  );
};

export default Detail;
