export const defaultProvinceRegion: Record<string, 'Noord' | 'Midden' | 'Zuid'> = {
  Groningen: 'Noord',
  Drenthe: 'Noord',
  Fryslân: 'Noord',
  Flevoland: 'Noord',
  'Noord-Holland': 'Noord',
  Overijssel: 'Noord',
  Gelderland: 'Midden',
  Utrecht: 'Midden',
  'Zuid-Holland': 'Midden',
  Zeeland: 'Zuid',
  'Noord-Brabant': 'Zuid',
  Limburg: 'Zuid',
};

export const conditionalMunicipalityOverrides: Record<string, Record<string, 'Noord' | 'Midden' | 'Zuid'>> = {
  Flevoland: {
    Zeewolde: 'Midden',
  },
  Gelderland: {
    Hattem: 'Noord',
    Aalten: 'Midden',
    Apeldoorn: 'Midden',
    Barneveld: 'Midden',
    Berkelland: 'Midden',
    Bronckhorst: 'Midden',
    Brummen: 'Midden',
    Buren: 'Midden',
    Culemborg: 'Midden',
    Doetinchem: 'Midden',
    Ede: 'Midden',
    Elburg: 'Midden',
    Epe: 'Midden',
    Ermelo: 'Midden',
    Harderwijk: 'Midden',
    Heerde: 'Midden',
    Lochem: 'Midden',
    Montferland: 'Midden',
    'Neder-Betuwe': 'Midden',
    Nijkerk: 'Midden',
    Nunspeet: 'Midden',
    Oldebroek: 'Midden',
    'Oost-Gelre': 'Midden',
    Putten: 'Midden',
    Scherpenzeel: 'Midden',
    Tiel: 'Midden',
    Voorst: 'Midden',
    Wageningen: 'Midden',
    'West Betuwe': 'Midden',
    Winterswijk: 'Midden',
    Zutphen: 'Midden',
    Arnhem: 'Zuid',
    'Berg en Dal': 'Zuid',
    Beuningen: 'Zuid',
    Doesburg: 'Zuid',
    Druten: 'Zuid',
    Duiven: 'Zuid',
    Heumen: 'Zuid',
    Lingewaard: 'Zuid',
    Maasdriel: 'Zuid',
    Nijmegen: 'Zuid',
    Overbetuwe: 'Zuid',
    Renkum: 'Zuid',
    Rheden: 'Zuid',
    Rozendaal: 'Zuid',
    Rijnwaarden: 'Zuid',
    Westervoort: 'Zuid',
    'West Maas en Waal': 'Zuid',
    Wijchen: 'Zuid',
    Zaltbommel: 'Zuid',
    Zevenaar: 'Zuid',
  },
  Utrecht: {
    Eemnes: 'Noord',
  },
  'Noord-Brabant': {
    Altena: 'Midden',
  },
};

export function determineRegion(
  province: string,
  municipality: string | null
): 'Noord' | 'Midden' | 'Zuid' {
  const normalizedProvince = province.trim();
  const normalizedMunicipality = municipality?.trim();

  const defaultRegion = defaultProvinceRegion[normalizedProvince];

  if (
    conditionalMunicipalityOverrides[normalizedProvince] &&
    normalizedMunicipality &&
    conditionalMunicipalityOverrides[normalizedProvince][normalizedMunicipality]
  ) {
    return conditionalMunicipalityOverrides[normalizedProvince][normalizedMunicipality];
  }

  return defaultRegion || 'Midden';
}