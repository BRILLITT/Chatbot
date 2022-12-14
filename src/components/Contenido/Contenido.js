import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import GobPeru from '../GobPeru/GobPeru'

const theme = {
    background: '#f5f8fb',
    headerBgColor: '#eb9bda',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#eb9bda',
    botFontColor: '#fff',
    userBubbleColor: '#0cb3c9',
    userFontColor: '#fff',
}

export default class Contenido extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <ChatBot 
                    steps={[
                        {
                            id: "1",
                            message: "Hola, Qué tal? soy Nacionalito, tu asistente virtual. Cuál es tu nombre?",
                            trigger: "2"
                        },
                        {
                            id: "2",
                            user: true,
                            validator: (value) => {
                                if (/^[A-Z]{1}[a-z]{2,15}$/.test(value)) {
                                    return true;
                                }
                                else {
                                    return 'Solo letras y la primera en mayúscula.';
                                }
                            },
                            trigger: "3"
                        },
                        {
                            id: "3",
                            message: "Hola {previousValue}, es un gusto saludarte!",
                            trigger: "4"
                        },
                        {
                            id: "4",
                            message: "Hay algo que quisieras consultarme?",
                            trigger: "5"
                        },
                        {
                            id: "5",
                            options: [
                                {value: "y", label: "SI", trigger: "6A"},
                                {value: "n", label: "NO", trigger: "6B"},
                            ]
                        },
                        {
                            id: "6A",
                            message: "Perfecto! sobre qué tema necesitas ayuda?",
                            trigger: "seleccion"
                        },
                        {
                            id: "6B",
                            message: "Perfecto, en caso tengas alguna duda, no dudes en venir de nuevo a consultarme. Pasa un lindo día",
                            end: true
                        },
                        {
                            id: "seleccion",
                            options: [
                                {value: "f", label: "Bono Alimentario", trigger: "7A"},
                                {value: "b", label: "FertiABONO", trigger: "7B"},
                            ]
                        },
                        {
                            id: "7A",
                            message: "Así que necesitas información del Bono Alimentario, exactamente en qué te interesa saber?",
                            trigger: "seleccionFront"
                        },
                        {
                            id: "7B",
                            message: "Veo que necesita ayuda con información del FertiABONO, exactamente cuál es tu consulta?",
                            trigger: "seleccionBack"
                        },
                        {
                            id: "seleccionFront",
                            options: [
                                {value: "30727-consultar-si-te-corresponde-el-bono-alimentario", label: "Me corresponde?", trigger: "9"},
                                {value: "30728-modalidades-de-pago-del-bono-alimentario", label: "Modalidades de pago", trigger: "9"},
                                {value: "30739-solicitar-ayuda-con-tu-bono-alimentario", label: "Solicitar ayuda", trigger: "9"},
                            ]
                        },
                        {
                            id: "seleccionBack",
                            options: [
                                {value: "27327-que-es-fertiabono", label: "Qué es?", trigger: "9"},
                                {value: "27593-consultar-si-te-corresponde-el-apoyo-economico-fertiabono", label: "Me corresponde?", trigger: "9"},
                                {value: "27596-cobrar-tu-apoyo-economico-fertiabono", label: "Cómo lo cobro?", trigger: "9"},
                            ]
                        },
                        {
                            id: "9",
                            component: <GobPeru />,
                            asMessage: true,
                            trigger: "preguntaVuelta"
                        },
                        {
                            id: "preguntaVuelta",
                            message: "Necesitas algo más?",
                            trigger: "respuestaVuelta",
                        }, 
                        {
                            id: "respuestaVuelta",
                            options: [
                                {value: "y", label: "SI", trigger: "6A"},
                                {value: "n", label: "NO", trigger: "6B"},
                            ],
                        }
                    ]}
                />
            </ThemeProvider>
        )
    }
}
