import React, { Component } from 'react'
import Aside from '../../components/aside/aside'
import Logo from '../../assets/img/logo/logo-greenthumb.svg'
import './Plant.css'

export default class Plant extends Component {
    render() {
        return (
            <section className="all row">
                <Aside />
                <img className="logo_responsive logo" src={Logo} alt="Logo da empresa"/>
                <main className="container col-md-10 my-5">
                    <section className="row my-3">
                        <div className="d-flex flex-column align-items-center col-md-4">
                            <div className="container d-flex flex-column align-items-center col-md-10 ">
                                <div className="col-md-10 d-flex flex-column">


                                    <div className="row d-flex flex-column">
                                        <h1 className="name_plant"><span>Succulent bowl</span></h1>
                                    </div>

                                    <div className="row d-flex flex-column">
                                        <p className="preco">$30</p>
                                    </div>
                                    <div className="row d-flex flex-column my-4">
                                        <img src={require("../../assets/img/plantpictures/bunny-ears-cacti.jpg")} />
                                    </div>
                                    <div className="icone row d-flex">
                                        <img src={require("../../assets/icons/grey/no.svg")} />
                                        <p>sdfsdsdf</p>
                                    </div>
                                    <div className="icone row d-flex">
                                        <img src={require("../../assets/icons/grey/false.svg")} />
                                        <p>sdsdfsd</p>
                                    </div>
                                    <div className="icone row d-flex ">
                                        <img src={require("../../assets/icons/grey/daily.svg")} />
                                        <p>sdsdfsd</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-1"></div>

                        <div className="d-flex flex-column align-items-center col-md-5">
                            <div className="card_form d-flex flex-column align-items-center col-md-10 ">
                                <div className="div_form col-md-10 d-flex flex-column ">

                                    <div className="div_form row d-flex flex-column">
                                        <h2 className="name_plant mt-5"><span>Nice pick! </span></h2>
                                        <p>Tell us your name and e-mail and we will get in touch regarding your order ;)</p>
                                    </div>

                                    <form>

                                        <div className="div_form row d-flex flex-column my-4">
                                            <label for="name"><span>Name</span></label>
                                            <input required id="name" type="name" className="input_form" placeholder="Crazy Plant Person"></input>
                                        </div>
                                        <div className="div_formas row d-flex flex-column my-4">
                                            <label for="email"><span>E-mail</span></label>
                                            <input required id="email" type="email" className="input_form" placeholder="plantperson@email.com"></input>
                                        </div>
                                        <div className="div_form row d-flex align-items-end flex-column mb-5">
                                            <button className="button_submit">Send</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </section>
                </main>
            </section>

        )
    }
}
