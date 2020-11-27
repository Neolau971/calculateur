let trancheIntervalle = {
  onzePourcent: [10065, 25659],
  trentePourcent: [25660, 73369],
  quaranteEtUnPourcent: [73370, 157806],
  quaranteCinqPourcent: [157807]
}

let maxaPayerParTranche = {
  maxOnze: 1715.34,
  maxTrentePourcent: 14312.7,
  maxQuaranteEtUnPourcent: 34618.76,
  maxQuaranteCinqPourcent: 71013015
}

export function getRevenuNetGlobal(revenuBrutGlobal: number, chargesDéductibles: number) {
  return revenuBrutGlobal - chargesDéductibles
}

export function getQuotientFamilial(revenuNetGlobal: number, nbPartsFiscal: number) {
  return revenuNetGlobal / nbPartsFiscal
}

export function getImpotSurRevenu(QuotientFamilial: number, nbPartsFiscal: number = 1) {

  let quotientFamilial = QuotientFamilial / nbPartsFiscal

  let tranche = 0
  let aPayerPourTranche = 0
  let impots = 0

  if (quotientFamilial >= trancheIntervalle.onzePourcent[0] &&
    quotientFamilial <= trancheIntervalle.onzePourcent[1]) {
    tranche = 11
    aPayerPourTranche = ((quotientFamilial - trancheIntervalle.onzePourcent[0]) * 11) / 100
  } else if (quotientFamilial >= trancheIntervalle.trentePourcent[0] &&
    quotientFamilial <= trancheIntervalle.trentePourcent[1]) {
    tranche = 30
    aPayerPourTranche = ((quotientFamilial - trancheIntervalle.trentePourcent[0]) * 30) / 100
  } else if (quotientFamilial >= trancheIntervalle.quaranteEtUnPourcent[0] &&
    quotientFamilial <= trancheIntervalle.quaranteEtUnPourcent[1]) {
    tranche = 41
    aPayerPourTranche = ((quotientFamilial - trancheIntervalle.quaranteEtUnPourcent[0]) * 41) / 100
  } else {
    tranche = 45
    aPayerPourTranche = ((quotientFamilial - trancheIntervalle.quaranteCinqPourcent[0]) * 45) / 100
  }

  if (tranche === 11) {
    impots = aPayerPourTranche
  } else if (tranche === 30) {
    impots = maxaPayerParTranche.maxOnze + aPayerPourTranche
  } else if (tranche === 41) {
    impots = maxaPayerParTranche.maxTrentePourcent + maxaPayerParTranche.maxOnze + aPayerPourTranche
  } else {
    impots = maxaPayerParTranche.maxQuaranteEtUnPourcent + maxaPayerParTranche.maxTrentePourcent + maxaPayerParTranche.maxOnze + aPayerPourTranche
  }

  return impots * nbPartsFiscal

}