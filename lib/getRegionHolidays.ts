import jsonData from '../assets/holidays/schoolvakanties2024-2025.json';
const vacations = jsonData.content[0].vacations;

export function getRegionHolidays(region: string | null) {
    if (!region) {
        console.warn('Region is not set');
        return null;
    }

    const regionHolidays = vacations.flatMap(vacation => {
        return vacation.regions
            .filter(r => r.region === region.toLowerCase() || r.region === 'heel Nederland')
            .map(r => ({
                type: vacation.type.trim(),
                region: r.region,
                start: new Date(r.startdate),
                end: new Date(r.enddate),
                imageKey: vacation.type.trim().toLowerCase(),
            }));
    });
    
    return regionHolidays;
}
