import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import * as temperatureApi from './dataApis/temperatureApi';
import Chart from './components/Chart';
import BurgerMenu from './components/BurgerMenu';
import { Table, TableStyle } from './components/Table';

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

  const [tableData, setTableData] = useState(table);
  const [chartData, setChartData] = useState(chart);

  const clickHandler = async () => {
    //const data = await temperatureApi.getTemperatureChartData();
    const xd = {
      Id: 10,
      date: "today",
      Temperature: 30,
    };
    const hehe = [{
      date:"XD",
      value: 60.0,
    }];

    setChartData(hehe);
  };

  return (
    <div className="App">
      <BurgerMenu></BurgerMenu>
      <header className="App-header">
        <h2 style={{ color: "black" }}>Welcome!</h2>
        <Button onClick={clickHandler} variant="primary">
          ping api
          </Button>
        <Chart meas={chartData} />
        <TableStyle>
          <Table data={tableData}></Table>
        </TableStyle>
      </header>
    </div>
  );
}

export default App;
