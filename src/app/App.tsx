import { useEffect, useRef, useState } from "react";
import "../styles/App.css";
import { instrumentsListRequest } from "@/backendApi/instrumentsService";

const App = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>();
  const [instrumentsList, setInstrumentsList] = useState<InstrumentRowDto[]>();
  const socketRef = useRef<WebSocket>(null);
  const wsurl = process.env.VITE_BACKEND_API_BASEURL.split("://")[1];

  const sendMessage = () => {
    console.log("socket", socketRef.current?.readyState);
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      const list: InstrumentRowDto[] = [
        {
          id: 1,
          code: "ABC",
          lastPrice: 100,
          accumulatedVolume: 2000,
          variation: 0.5,
        },
      ];

      const data = {
        event: "updateStatus",
        payload: list,
      };
      socketRef.current.send(JSON.stringify(data));
    }
  };

  const requestInstruments = async () => {
    instrumentsListRequest()
      .then((response) => {
        setInstrumentsList(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    socketRef.current = new WebSocket(`ws://${wsurl}/ws/prices`);

    socketRef.current.onopen = () => {
      console.log("WebSocket Connected");
      requestInstruments();
    };

    socketRef.current.onmessage = (event) => {
      console.log("message", JSON.parse(event.data));
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    socketRef.current.onclose = () => {
      console.log("WebSocket Disconnected");
    };

    socketRef.current.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };
    return () => {
      console.log("Closing WebSocket connection");
      if (
        socketRef.current &&
        socketRef.current.readyState === WebSocket.OPEN
      ) {
        socketRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    sendMessage();
  }, [socketRef, instrumentsList]);

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
