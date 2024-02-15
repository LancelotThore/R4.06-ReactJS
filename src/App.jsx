import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/base.css';
import Pricing from "./component/Pricing";


function App() {

  let data = {
    title: "Prix et option à l'achat",
    description:
      "Découvrez l'avenir de la mobilité avec des prix compétitifs et des options d'achat flexibles chez Auto Innovation.",
    plans: [
      {
        title: "Starter Package", price: "29 999.99",
        advantages: [
          { text: "Assurance auto complémentaire", check: true},
          { text: "Première recharge offerte",  check: true},
          { text: "Assurance contre le vol", check: true},
          { text: "Service de rappel d'entretien", check: true},
          { text: "Nettoyage hebdomadaire", check: false },
          { text: "Service de diagnostic à distance", check: false},
          { text: "Service de remplissage du réservoir", check: false},
          { text: "Service de réparation à domicile", check: false},
          { text: "Entretien régulier", check: false},
          { text: "Recharge d'hydrogène illimité", check: false},
        ],
      },
      {
        title: "Prenium Package",
        price: "35 999.99",
        advantages: [
          { text: "Assurance auto complémentaire", check: true},
          { text: "Première recharge offerte",  check: true},
          { text: "Assurance contre le vol", check: true},
          { text: "Service de rappel d'entretien", check: true},
          { text: "Nettoyage hebdomadaire", check: false },
          { text: "Service de diagnostic à distance", check: true},
          { text: "Service de remplissage du réservoir", check: true},
          { text: "Service de réparation à domicile", check: false},
          { text: "Entretien régulier", check: false},
          { text: "Recharge d'hydrogène illimité", check: false},
        ],
      },
      {
        title: "Prestige Package",
        price: "49 999.99",
        advantages: [
          { text: "Assurance auto complémentaire", check: true},
          { text: "Première recharge offerte",  check: true},
          { text: "Assurance contre le vol", check: true},
          { text: "Service de rappel d'entretien", check: true},
          { text: "Nettoyage hebdomadaire", check: true },
          { text: "Service de diagnostic à distance", check: true},
          { text: "Service de remplissage du réservoir", check: true},
          { text: "Service de réparation à domicile", check: true},
          { text: "Entretien régulier", check: true},
          { text: "Recharge d'hydrogène illimité", check: true},
        ],
      },
    ],
  };

  return (
    <>
      <Pricing {...data}/>
    </>
  )
}

export default App
