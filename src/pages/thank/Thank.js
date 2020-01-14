import React, { Component } from 'react'
import Aside from '../../components/aside/aside'
import Logo from '../../assets/img/logo/logo-greenthumb.svg'
import illustration from '../../assets/img/illustrations/envelop.png'
import './Thank.css'

export default class Home extends Component {
    render() {
        return (
            <section className="all row">
                <Aside />
                <img className="logo_responsive logo" src={Logo} alt="Logo da empresa" />
                <main className="container col-md-10 my-5">
                    <section className="row my-3">
                        <div className="d-flex flex-column align-items-center col-md-4">
                            <div className="d-flex flex-column align-items-center col-md-10 ">
                                <div className="col-md-10 d-flex flex-column">


                                    <div className="row d-flex flex-column">
                                        <h1 className="name_plant" ><span>Succulent bowl</span></h1>
                                    </div>

                                    <div className="row d-flex flex-column">
                                        <p className="preco">$30</p>
                                    </div>
                                    <div className="row d-flex flex-column my-4">
                                        <img src={require("../../assets/img/plantpictures/bunny-ears-cacti.jpg")} />
                                    </div>
                                    <div className="icone row d-flex">
                                        <img className="mr-2" src={require("../../assets/icons/grey/low.svg")} />
                                        <p>sdfsdsdf</p>
                                    </div>
                                    <div className="icone row d-flex">
                                        <img className="mr-2" src={require("../../assets/icons/grey/no.svg")} />
                                        <p>sdsdfsd</p>
                                    </div>
                                    <div className="icone row d-flex ">
                                        <img className="mr-2" src={require("../../assets/icons/grey/high.svg")} />
                                        <p>sdsdfsd</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-1"></div>

                        <div className="d-flex flex-column align-items-center col-md-5">
                            <div className="card_form d-flex flex-column align-items-center col-md-10 ">
                                <h2 className="name_plant mt-5"><span>Thank you!</span></h2>

                                <div className="thank col-md-10 d-flex flex-column align-items-center mt-3 mb-5">
                                    <p>You will hear from us soon. Please check your e-mail!</p>
                                    <img className="img-fluid rounded mx-auto d-block" src={illustration} alt="Imagem de um sol usando oculos escuro" />
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
