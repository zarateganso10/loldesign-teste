import React from 'react';


// import components
import Header from './../../components/Header';
import Form from './../../components/Form';
import Table from './../../components/Table'

//import data
import data from './../../data/DDDList.json';

//import css ,icons and images
import { FaPhone } from 'react-icons/fa';
import Img from './../../assets/foto1.jpg';
import './style.css';


export default function Home(){
    return(
        <div id="home">
            <Header />
            <div className="container-fluid">
                <div className="container-text">
                    <div className="row">
                        <div className="col">
                            <h1>Não se preocupe com o tempo das <br/><span>ligacões com os cartões FaleMais</span></h1>
                            <p>Salve seu dinheiro com os cartões FaleMais, venha conhecer!</p>
                        </div>
                        <div className="col">
                            <div className="container-icon">
                                <FaPhone size={100} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="container-cards">
                    <h2>Conheca os nossos Planos</h2>
                    <div className="row">
                        <div className="col">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Plano 30</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">FaleMais 30 minutos</h6>
                                    <p class="card-text">Fale durante 30 minutos comprando o cartão, e pague so por minuto adicional 10% a mais da tarifa fixa</p>
                                    <a href="#" class="card-link">Comprar</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Plano 60</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">FaleMais 60 minutos</h6>
                                    <p class="card-text">Fale durante 60 minutos comprando o cartão, e pague so por minuto adicional 10% a mais da tarifa fixa.</p>
                                    <a href="#" class="card-link">Comprar</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Plano 120</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">FaleMais 120 minutos</h6>
                                    <p class="card-text">Fale durante 120 minutos comprando o cartão, e pague so por minuto adicional 10% a mais da tarifa fixa.</p>
                                    <a href="#" class="card-link">Comprar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-table">
                    <h2>Tabela de Tarifas Fixas</h2>
                    <Table />
                </div> 
                <div className="container-form">
                    <h2>Calcule o melhor beneficio</h2>
                    <Form />
                </div>
            </div>
        </div>
        
    )
}