/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';

class GobPeru extends Component {
 
    constructor(props) {
        super(props);
        const { steps } = this.props;
        const { seleccion, seleccionFront, seleccionBack } = steps;
        this.state = {
            seleccion,
            seleccionFront,
            seleccionBack,
            busqueda: "",
            nombreCurado: ""
        }
    }

    componentDidMount() {
        if (this.state.seleccion.value === "f") {
            this.setState({
                busqueda: this.state.seleccionFront.value,
            });
            if (this.state.seleccionFront.value.includes("_")) {
                var texto = this.state.seleccionFront.value;
                texto = texto.substring(0, texto.indexOf("_"));
                this.setState({
                    nombreCurado: texto,
                });
            } else {
                this.setState({
                    nombreCurado: this.state.seleccionFront.value,
                });
            }
        } else if (this.state.seleccion.value === "b") {
            this.setState({
                busqueda: this.state.seleccionBack.value,
            });
            if (this.state.seleccionBack.value.includes("_")) {
                texto = this.state.seleccionBack.value;
                texto = texto.substring(0, texto.indexOf("_"));
                this.setState({
                    nombreCurado: texto,
                });
            } else {
                this.setState({
                    nombreCurado: this.state.seleccionBack.value,
                });
            }
        }
    }

    render() {
        return (
            <div>
                <p>Tengo lo que buscas! Ingresa aquí para darte una información detallada. </p>
                <a href={"https://www.gob.pe/" + this.state.busqueda} target="_blank">{this.state.nombreCurado}</a>
            </div>
        )
    }

    

}
export default GobPeru;