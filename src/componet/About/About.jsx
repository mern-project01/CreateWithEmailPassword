import React, { useContext } from "react";
import { UserContex } from "../contexApi/AuthContex";

const About = () => {
  const { user } = useContext(UserContex);
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Hi!{user?.displayName || user?.email}{" "}
            </h1>
            <p className="py-6">
              <span className="block">
                {" "}
                and your email name is :{user?.email}
              </span>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
