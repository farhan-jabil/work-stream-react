import React from "react";
import Overview from "../../components/features/Overview";
import UseCases from "../../components/features/UseCases";
import Integration from "../../components/features/Integration";
import Customization from "../../components/features/Customization";
import UserFeedback from "../../components/features/UserFeedback";
import Support from "../../components/features/Support";

const Features = () => {
  return (
    <>
      <div id="overview">
        <Overview></Overview>
      </div>
      <div id="use-case">
        <UseCases></UseCases>
      </div>
      <div id="integration">
        <Integration></Integration>
      </div>
      <div id="customization">
        <Customization></Customization>
      </div>
      <div id="user-feedback">
        <UserFeedback></UserFeedback>
      </div>
      <div id="support">
        <Support></Support>
      </div>
    </>
  );
};

export default Features;
