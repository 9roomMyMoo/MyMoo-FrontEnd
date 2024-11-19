import { React, useState } from "react";
import QrScanner from "react-qr-scanner";
const QrScan = () => {
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");

  const handleScan = (scanData) => {
    if (scanData) {
      console.log(`Loaded >>>`, scanData.text);
      setData(scanData.text);
      setStartScan(false);
      setLoadingScan(false);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div>
      <div className="App">
        <h1>Hello QR Scanner</h1>
        <h2>Last Scan: {data || "None"}</h2>

        <button
          onClick={() => {
            setStartScan(!startScan);
            setData(""); // Reset scanned data on new scan start
          }}
        >
          {startScan ? "Stop Scan" : "Start Scan"}
        </button>
        {startScan && (
          <>
            <select
              onChange={(e) => setSelected(e.target.value)}
              value={selected}
            >
              <option value={"environment"}>Back Camera</option>
              <option value={"user"}>Front Camera</option>
            </select>
            <QrScanner
              facingMode={selected}
              delay={500}
              onError={handleError}
              onScan={handleScan}
              style={{ width: "300px" }}
            />
          </>
        )}
        {loadingScan && <p>Loading...</p>}
        {data !== "" && <p>Scanned Data: {data}</p>}
      </div>
    </div>
  );
};

export default QrScan;
