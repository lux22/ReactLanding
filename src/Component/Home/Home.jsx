import React from "react";
import { SAMPLE_DATA } from "../../SampleData/home";
import { DATACONSTANT } from "../../constants";
import Banner from "./PageBlock/Banner";
import FeaturedContent from "./PageBlock/FeaturedContent";
import FeaturedStories from "./PageBlock/FeaturedStories";
import DownloadApp from "./PageBlock/DownloadApp";
import FeaturedVideo from "./PageBlock/FeaturedVideo";
import SignUp from "./PageBlock/SignUp";
import LearnMore from "./PageBlock/LearnMore";
import Inspiration from "./PageBlock/Inspiration";
const BlockType = ({ data, index }) => {
  // render pageblock depending upon blockTypes.
  switch (data.blockType) {
    case DATACONSTANT.BANNER:
      return <Banner {...data.content} index={index} />;
    case DATACONSTANT.FEATURED_CONTENT:
      return <FeaturedContent {...data.content} index={index} />;
    case DATACONSTANT.FEATURED_STORIES:
      return <FeaturedStories {...data.content} index={index} />;
    case DATACONSTANT.DOWNLOAD_APP:
      return <DownloadApp {...data.content} index={index} />;
    case DATACONSTANT.FEATURED_VIDEO:
      return <FeaturedVideo data={data.content} index={index} />;
    case DATACONSTANT.SIGNUP_NEWS:
      return <SignUp {...data.content} index={index} />;
    case DATACONSTANT.INSPIRATION:
      return <Inspiration {...data.content} index={index} />;
    case DATACONSTANT.LEARN_MORE:
      return <LearnMore {...data.content} index={index} />;
    default:
      return null;
  }
};

const Home = () => {
  return SAMPLE_DATA.map((item, key) => <BlockType key={key} data={item} />);
};

export default Home;
