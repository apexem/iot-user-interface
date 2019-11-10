const getTemperature = async () => {
  const response = await fetch("https://localhost:5001/api/temperature");
  const allMeas = await response.json();
  return allMeas;
}

const reformatTemperature = (meas) => {
  const formattedData = meas.map((m) => {
    const mea = {
      date: m.date,
      value: m.temperature,
    };
    return mea;
  });
  return formattedData;
}

const getTemperatureChartData = async () => {
  const allMeas = await getTemperature();
  const formatted = reformatTemperature(allMeas);
  return formatted;
}

export {getTemperature, reformatTemperature, getTemperatureChartData};