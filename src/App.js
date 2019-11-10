import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import * as temperatureApi from './dataApis/temperatureApi';
import Chart from './components/Chart';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import { Table, TableStyle } from './components/Table';
import Input from './components/Input/Input';
import Refresh from './components/Refresh/Refresh';

const App = () => {
  const table = [
    {
      Id: 1,
      Date: "12:55",
      Temperature: 30,
    },
    {
      Id: 1,
      Date: "12:55",
      Temperature: 30,
    },
    {
      Id: 1,
      Date: "12:55",
      Temperature: 30,
    },
    {
      Id: 1,
      Date: "12:55",
      Temperature: 30,
    },
    {
      Id: 1,
      Date: "12:55",
      Temperature: 30,
    },
    {
      Id: 1,
      Date: "12:55",
      Temperature: 30,
    },
  ];
  const chart = [
    {
      date: "12:55",
      value: 30,
    },
    {
      date: "13:45",
      value: 29,
    },
    {
      date: "14:25",
      value: 28,
    },
    {
      date: "15:55",
      value: 17,
    },
    {
      date: "16:55",
      value: 15,
    },
    {
      date: "13:55",
      value: 16,
    },
    {
      date: "18:55",
      value: 31,
    },
  ];

  const [dataType, setDataType] = useState("temperature");
  const [tableData, setTableData] = useState(table);
  const [chartData, setChartData] = useState(chart);

  const refreshHandler = async () => {
    const allMeas = await temperatureApi.getAllMeas(dataType);
    const chartData = dataType == "temperature" ? temperatureApi.reformatTemperature(allMeas) : temperatureApi.reformatAnalog(allMeas);
    setTableData(allMeas);
    setChartData(chartData);
  };

  const handleBurgerMenuClick = () => {
    if(dataType === "temperature")
      setDataType("analog");
    else
      setDataType("temperature");
  }

  const clickHandler = async () => {
    await temperatureApi.collectMea(dataType);
    await refreshHandler();
  }

  return (
    <div className="App">
      <Refresh clickHandler={refreshHandler}></Refresh>
      <BurgerMenu changeDataType={handleBurgerMenuClick}></BurgerMenu>
      <header className="App-header">
        <div className="top">
          <h2 style={{ color: "black" }}>Welcome!</h2>
          <Button id="buton" onClick={clickHandler} variant="primary">Collect measurement</Button>
          {/* <Input inputName="Set IP"></Input> */}
        </div>
        <Chart meas={chartData} />
        <TableStyle>
          <Table data={tableData}></Table>
        </TableStyle>
      </header>
    </div>
  );
}

export default App;
