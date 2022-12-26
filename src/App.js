import './App.css';
import Soccer from './Components/Soccer/Soccer';
import Tennis from './Components/Tennis/Tennis';
import Default from './Components/Default/Default';
import { Helmet } from "react-helmet";
import config from './Configuration/config';


function App({ widget }) {
  // debugger
  console.log({ widget });
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href={`${config.rootURL}index.css`} />
      </Helmet>
      <div>
        {Number(widget.id) === 1 ? <Soccer /> : Number(widget.id) === 2 ? <Tennis /> : <Default />}
      </div>
    </>
  );
}

export default App;
