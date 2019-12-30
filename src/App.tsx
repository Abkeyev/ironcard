import React from 'react';
import { 
        Header, BestCard, CardOrder, FixedHeader,
        CalculatorCashback, HelpYou, AdditionalInfo,
        Footer, Benefits, CardConditions, MobileBanking } from './components';

import { YMInitializer } from 'react-yandex-metrika';

function App() {


  return (
    <div>
      <YMInitializer accounts={[56638654]} />
      <Header />
      <FixedHeader />
      <BestCard />
      <Benefits />
      <CardConditions />
      <CalculatorCashback />
      <CardOrder />
      <MobileBanking />
      <AdditionalInfo />
      <HelpYou />
      <Footer />
    </div>
  );
}

export default App;
