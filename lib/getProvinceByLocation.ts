import { booleanPointInPolygon, point } from '@turf/turf';
import * as Location from 'expo-location';
import type { FeatureCollection } from 'geojson';
import municipalityData from '../assets/maps/gemeente_2025.json';
import provinceGeoJSON from '../assets/maps/provincie_2025.json';
import { determineRegion } from '../lib/regionConfig';

export async function getRegion(): Promise<string> {
    let province = await getProvinceByLocation();
    let region: string;
    if (
        province === 'Flevoland' || 
        province === 'Gelderland' || 
        province === 'Utrecht' || 
        province === 'Noord-Brabant'
    ) {
        let municipality = await getMunicipalityByLocation();
        region = determineRegion(province, municipality);
    } else {
        region = determineRegion(province, null);
    }
    return region;
}

export async function getProvinceByLocation(): Promise<string> {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    throw new Error('Location permission not granted');
  }

  const userLocation = await Location.getCurrentPositionAsync({});
  const userPoint = point([userLocation.coords.longitude, userLocation.coords.latitude]);

  const features = (provinceGeoJSON as FeatureCollection).features;

  for (const feature of features) {
    const geomType = feature.geometry?.type;
    if (geomType === 'Polygon' || geomType === 'MultiPolygon') {
      if (booleanPointInPolygon(userPoint, feature as any)) {
        return feature.properties?.statnaam || 'Unknown province';
      }
    }
  }

  return 'Not in any known province';
}

export async function getMunicipalityByLocation(): Promise<string | null> {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    throw new Error('Location permission not granted');
  }

  const { coords } = await Location.getCurrentPositionAsync({});
  const userPoint = point([coords.longitude, coords.latitude]);

  const features = (municipalityData as FeatureCollection).features;

  for (const feature of features) {
    const geomType = feature.geometry?.type;
    if (geomType === 'Polygon' || geomType === 'MultiPolygon') {
      const polygon = feature as any;
      if (booleanPointInPolygon(userPoint, polygon)) {
        return feature.properties?.statnaam || null;
      }
    }
  }

  return null;
}