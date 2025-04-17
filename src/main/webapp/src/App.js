import './App.css';
import {useEffect, useState} from 'react';

function App() {
const [data1, setData1] = useState(null);
const [data2, setData2] = useState(null);
const [data3, setData3] = useState(null);


useEffect(() => {
fetch("http://localhost:8080/api/hello").then((response) => response.json())
.then((data1) => setData1(data1))
.catch((error) => console.error("Error fetching data:", error));
}, []);
useEffect(() => {
fetch("http://localhost:8080/api/help").then((response) => response.json())
.then((data2) => setData2(data2))
.catch((error) => console.error("Error fetching data:", error));
}, []);
useEffect(() => {
fetch("http://localhost:8080/api/bye").then((response) => response.json())
.then((data3) => setData3(data3))
.catch((error) => console.error("Error fetching data:", error));
}, []);



  return (
    <div className="App">
           <h1>API Response</h1>
           <pre>{data1 ? JSON.stringify(data1, null, 2) : "Loading..."}</pre>
           <pre>{data2 ? JSON.stringify(data2, null, 2) : "Loading..."}</pre>
           <pre>{data3 ? JSON.stringify(data3, null, 2) : "Loading..."}</pre>
    </div>
  );
}

export default App;
