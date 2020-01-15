import React from "react";
import {
  Header,
  BestCard,
  CardOrder,
  FixedHeader,
  CalculatorCashback,
  HelpYou,
  AdditionalInfo,
  Footer,
  Benefits,
  CardConditions,
  MobileBanking
} from "./components";
import { animateScroll } from "react-scroll";
import { YMInitializer } from "react-yandex-metrika";
import SnackBarBottom from "./components/SnackBar";

function App() {
  const orderRef: any = React.useRef(null);

  const scrollToOrderRef = () =>
    animateScroll.scrollTo(orderRef.current.offsetTop - 72);

  const [isSend, setSend] = React.useState<boolean>(false);

  return (
    <div>
      <YMInitializer
        accounts={[56874502]}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
          trackHash: true
        }}
      />
      <Header scrollToOrder={scrollToOrderRef} />
      <FixedHeader scrollToOrder={scrollToOrderRef} />
      <BestCard />
      <Benefits />
      <CardConditions scrollToOrder={scrollToOrderRef} />
      <CalculatorCashback scrollToOrder={scrollToOrderRef} />
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
