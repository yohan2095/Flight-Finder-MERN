import { useHistory } from 'react-router-dom';

function FtypeComp() {

    const history = useHistory();

    const gotoOW = () =>
    {
        history.push('/oneway')
    }

    const gotoRT = () =>
    {
        history.push('/roundtrip')
    }
    return (
      <div className="App">
          <h2>Step 1 - Select an Option</h2>


          <button onClick={gotoOW}>One Way</button>
          <button onClick={gotoRT}>RoundTrip</button>
          

      </div>
    );
  }
  
  export default FtypeComp;