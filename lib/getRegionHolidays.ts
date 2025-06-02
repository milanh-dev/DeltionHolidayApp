import AsyncStorage from "@react-native-async-storage/async-storage";

const API_BASE = 'https://opendata.rijksoverheid.nl/v1/sources/rijksoverheid/infotypes/schoolholidays';

export async function setSelectedSchoolYear(schoolYear: string) {
    await AsyncStorage.setItem('selectedSchoolYear', schoolYear);
}

export async function getSelectedSchoolYear(): Promise<string> {
    const storedYear = await AsyncStorage.getItem('selectedSchoolYear');
    return storedYear || '2024-2025';
}

const today = new Date();
const schoolYearStart = today.getMonth() >= 7
    ? new Date(today.getFullYear(), 7, 1)
    : new Date(today.getFullYear() - 1, 7, 1);

const schoolYearEnd = new Date(schoolYearStart.getFullYear() + 1, 6, 31);

export async function getRegionHolidays(region: string | null, useCurrentYear: boolean = false) {
    if (!region) {
        console.warn('Region is not set');
        return null;
    }

    try {
        const schoolYear = useCurrentYear
            ? schoolYearStart.getFullYear() + '-' + schoolYearEnd.getFullYear()
            : await getSelectedSchoolYear();

        const url = `${API_BASE}/schoolyear/${schoolYear}?output=json`;
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        const vacations = jsonData.content[0].vacations;

        const regionHolidays = vacations.flatMap((vacation: any) => {
            return vacation.regions
                .filter((r: any) => r.region === region.toLowerCase() || r.region === 'heel Nederland')
                .map((r: any) => ({
                    type: vacation.type.trim(),
                    region: r.region,
                    start: new Date(r.startdate),
                    end: new Date(r.enddate),
                    imageKey: vacation.type.trim().toLowerCase(),
                }));
        });
        
        return regionHolidays;
    } catch (error) {
        console.error('Error fetching school year:', error);
        return null;
    }
}