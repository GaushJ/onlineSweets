import React from "react";


const AboutUs = () => {
  return (
    <div>
      <div className="font-medium text-5xl font-Pop block my-6">{props.heading}</div>
      <div>
        <p className="break-words text-md text-gray-500 font-medium">
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
