import './App.css';
import Map from './Map';

function App() {
  return (
    <div class='App'>
      {/* <ErrorBoundary fallback={<div>Error rendering map</div>}> */}
        <Map />
      {/* <!-- </ErrorBoundary> */}
    </div>
  );
}

export default App;
