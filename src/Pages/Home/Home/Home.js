import React from 'react';
import ExtraSection1 from '../../ExtraSection1/ExtraSection1';
import ExtraSection2 from '../../ExtraSection2/ExtraSection2';
import Banner from '../Banner/Banner';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import Reviews from '../Reviews/Reviews';
import Tools from '../Tools/Tools';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <BusinessSummery></BusinessSummery>
      <Reviews></Reviews>
      <ExtraSection1></ExtraSection1>
      <ExtraSection2></ExtraSection2>
    </div>
  );
};

export default Home;
