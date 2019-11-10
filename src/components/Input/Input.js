import * as temperatureApi from '../../dataApis/temperatureApi';
import './Input.css'
import React, {useState} from 'react';

const Input = ({inputName}) => {
    const [espInput, setEspInput] = useState("");

    const handleChange = (event) => {
        setEspInput(event.target.value);
      }
    
      const handleSubmit = async (event) => {
        event.preventDefault(true);
        const dhtAddress = { dhtAddress: espInput };
        const response = await temperatureApi.setEspAddress(dhtAddress);
      }

    return (
        <form onSubmit={handleSubmit} onChange={handleChange}>
        <input type="text" value={espInput} />
        <input type="submit" value={inputName} />
      </form>
    );
}

export default Input;