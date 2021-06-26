import Map from "./component/Map";
import Header from "./component/Header";

import { useState, useEffect } from "react";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEventsFromNasa = async () => {
      setLoading(true);
      const response = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await response.json();
      setEventData(events);
      setLoading(false);
    };
    fetchEventsFromNasa();
  }, []);

  return (
    <div>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <h1>Loading...</h1>}
    </div>
  );
}

export default App;
