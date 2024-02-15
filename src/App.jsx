import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/base.css';

function App() {

  let data = {
    title: "Prix et option à l'achat",
    subtitle:
      "Découvrez l'avenir de la mobilité avec des prix compétitifs et des options d'achat flexibles chez Auto Innovation.",
    prices: [
      {
        title: "Starter Package",
        price: "29 999.99",
        advantages: [
          { included: true, option: "Assurance auto complémentaire" },
          { included: true, option: "Première recharge offerte" },
          { included: true, option: "Assurance contre le vol" },
          { included: true, option: "Service de rappel d'entretien" },
          { included: false, option: "Nettoyage hebdomadaire" },
          { included: false, option: "Service de diagnostic à distance" },
          { included: false, option: "Service de remplissage du réservoir" },
          { included: false, option: "Service de réparation à domicile" },
          { included: false, option: "Entretien régulier" },
          { included: false, option: "Recharge d'hydrogène illimité" },
        ],
      },
      {
        title: "Prenium Package",
        price: "35 999.99",
        advantages: [
          { included: true, option: "Assurance auto complémentaire" },
          { included: true, option: "Première recharge offerte" },
          { included: true, option: "Assurance contre le vol" },
          { included: true, option: "Service de rappel d'entretien" },
          { included: true, option: "Nettoyage hebdomadaire" },
          { included: true, option: "Service de diagnostic à distance" },
          { included: true, option: "Service de remplissage du réservoir" },
          { included: false, option: "Service de réparation à domicile" },
          { included: false, option: "Entretien régulier" },
          { included: false, option: "Recharge d'hydrogène illimité" },
        ],
      },
      {
        title: "Prestige Package",
        price: "49 999.99",
        advantages: [
          { included: true, option: "Assurance auto complémentaire" },
          { included: true, option: "Première recharge offerte" },
          { included: true, option: "Assurance contre le vol" },
          { included: true, option: "Service de rappel d'entretien" },
          { included: true, option: "Nettoyage hebdomadaire" },
          { included: true, option: "Service de diagnostic à distance" },
          { included: true, option: "Service de remplissage du réservoir" },
          { included: true, option: "Service de réparation à domicile" },
          { included: true, option: "Entretien régulier" },
          { included: true, option: "Recharge d'hydrogène illimité" },
        ],
      },
    ],
  };

  return (
    <>
    </>
  )
}

export default App