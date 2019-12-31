import React from 'react';
import { 
        Header, BestCard, CardOrder, FixedHeader,
        CalculatorCashback, HelpYou, AdditionalInfo,
        Footer, Benefits, CardConditions, MobileBanking } from './components';

import { YMInitializer } from 'react-yandex-metrika';
import SnackBarBottom from "./components/SnackBar";

function App() {

  const orderRef: any = React.useRef(null);

  const scrollToOrderRef = () => window.scrollTo(0, orderRef.current.offsetTop);

  const [isSend, setSend] = React.useState<boolean>(false);

  return (
    <div>
      <YMInitializer accounts={[56824144]} />
      <Header />
      <FixedHeader />
      <BestCard />
      <Benefits />
      <CardConditions />
      <CalculatorCashback />
      <CardOrder refProp={orderRef} send={() => setSend(true)} />
      <MobileBanking />
      <AdditionalInfo />
      <HelpYou />
      <Footer />
      <SnackBarBottom open={isSend} close={() => setSend(false)} />
    </div>
  );
}

export default App;
