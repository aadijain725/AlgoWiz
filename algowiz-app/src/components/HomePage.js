import React from "react";
import HomePageTopicsTabs from "./HomePageTopicsTabs";
import {HomePageIntroduction} from "./HomePageIntroduction";
export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <HomePageIntroduction></HomePageIntroduction>
        <HomePageTopicsTabs></HomePageTopicsTabs>
      </div>
    );
  }
}

export default HomePage;
