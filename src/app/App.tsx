import { useEffect, useState } from "react";
import "../styles/App.css";
import { instrumentsListRequest } from "@/backendApi/instrumentsService";

const App = () => {
  const [instrumentsList, setInstrumentsList] = useState<InstrumentRowDto[]>();

  const requestInstruments = async () => {
    instrumentsListRequest()
      .then((response) => {
        //setInstrumentsList(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    requestInstruments();
  }, []);
  return (
    <>
      <div className="card">Inicio</div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
