const webApiAddress = "http://localhost:3500";

const collectMea = async (meaName) => {
  const response = await fetch(webApiAddress + "/api/" + meaName + "/GetCurrent" + meaName);
  return response.status;
}

const getAllMeas = async (meaName) => {
  const response = await fetch(webApiAddress + "/api/" + meaName);
  const allMeas = await response.json();
  return allMeas;
}

const getMeaChartData = async (meaName) => {
  const allMeas = await getAllMeas(meaName);
  const formatted = meaName == "temperature" ? reformatTemperature(allMeas) : reformatAnalog(allMeas);
  return formatted;
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

const reformatAnalog = (meas) => {
  const formattedData = meas.map((m) => {
    const mea = {
      date: m.date,
      value: m.analogInput,
    };
    return mea;
  });
  return formattedData;
}

const setEspAddress = async (address) => {
  const response = await fetch(webApiAddress + "/api/temperature/espAddress", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(address),
    });
  return response.status;
}

export {collectMea, setEspAddress, getAllMeas, reformatTemperature, reformatAnalog, getMeaChartData};