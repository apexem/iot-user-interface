import React from 'react';
import refresh from '../../assets/refresh.svg';
import './Refresh.css';
import * as temperatureApi from '../../dataApis/temperatureApi';

const Refresh = ({clickHandler}) => {      
    return (
        <div className="container">
            <img onClick={clickHandler} src={refresh} className="refresh"/>
        </div>
    );
}

export default Refresh;
