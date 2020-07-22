import React from 'react';


import data from '../../data/DDDList.json'

export default function Tabela(){
    return(
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Origem</th>
                    <th scope="col">Destino</th>
                    <th scope="col">$/min</th>
                </tr>
            </thead>
        <tbody>
            {
                data.map((item, index) => (
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{item.origin}</td>
                        <td>{item.destination}</td>
                        <td>R${item["value/min"].toFixed(2)}</td>
                    </tr>
                ))
            }
        </tbody>
        </table>
    )
}