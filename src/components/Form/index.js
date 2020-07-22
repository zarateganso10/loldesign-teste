import React, { useState } from 'react';

import data from './../../data/DDDList.json';

import './style.css';


export default function Form(){

    const [origin, setOrigin] = useState('011');
    const [destination, setDestination] = useState('016');
    const [time, setTime] = useState('0');
    const [plano, setPlano] = useState(30);
    const [withPlan, setWithPlan] = useState(-1);
    const [withoutPlan, SetWithoutPlan] = useState(-1);

    function searchPricePerMinute(origin, destination){
        for(let i = 0; i < data.length; i++){
            if(data[i].origin === origin && data[i].destination === destination){
                return data[i]["value/min"];
            }
        }
        return null;
    }

    function handleForm(event){
        event.preventDefault();

        const pricePerMinute = searchPricePerMinute(origin, destination);
        //With Plan
        if(parseInt(time) <= plano){
            setWithPlan(0);
        }else{
            const timeExceed = parseInt(time) - plano;
            const priceWithPlan = timeExceed * pricePerMinute * 1.1;
            setWithPlan(priceWithPlan);
        }

        //Whitout Plan
        const priceWithoutPlan = pricePerMinute * parseInt(time);
        SetWithoutPlan(priceWithoutPlan);
    }

    return(
        <div id="form">
            <form onSubmit={handleForm}>
                <div className="row">
                    <div className="col">
                        <label for="origin">Origem</label>
                        <select id="origin" class="form-control" value={origin} onChange={event => setOrigin(event.target.value)}>
                            <option value="011">011</option>
                            <option value="016">016</option>
                            <option value="017">017</option>
                            <option value="018">018</option>
                        </select>
                    </div>
                    <div className="col">
                        <label for="destination">Destino</label>
                        <select id="destination" class="form-control" value={destination} onChange={event => setDestination(event.target.value)}>
                            <option value="011">011</option>
                            <option value="016">016</option>
                            <option value="017">017</option>
                            <option value="018">018</option>
                        </select>
                    </div>
                    <div className="col">
                        <label for="destination">Tempo</label>
                        <input class="form-control" placeholder="10 min" onChange={event => setTime(event.target.value)}></input>
                    </div>
                    <div className="col">
                        <label for="destination">Plano FaleMais</label>
                        <select class="form-control" onChange={event => setPlano(event.target.value)}>
                            <option value={30}>30</option>
                            <option value={60}>60</option>
                            <option value={120}>120</option>
                        </select>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-lg btn-block">Calcular Custo</button>
            </form>
            <div className={withPlan === -1 && withoutPlan === -1 ? "hidden" : "row container-cards"}>
                <div className="col col-lg-3">
                    <div className={withPlan < withoutPlan ? "card text-white bg-success mb-3" : "card text-white bg-danger mb-3" }>
                        <div className="card-header">Com Plano FaleMais</div>
                        <div className="card-body">
                            <h5 className="card-title">R${withPlan.toFixed(2)}</h5>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-3">
                    <div className={withoutPlan < withPlan ? "card text-white bg-success mb-3" : "card text-white bg-danger mb-3" }>
                        <div className="card-header">Sem Plano FaleMais</div>
                        <div className="card-body">
                            <h5 className="card-title">R${withoutPlan.toFixed(2)}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}