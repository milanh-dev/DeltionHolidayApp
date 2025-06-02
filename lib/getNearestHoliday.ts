import { getRegionHolidays } from './getRegionHolidays';

const today = new Date(); // Zomervakantie
// const today = new Date('2024-09-01'); // Herfstvakantie
// const today = new Date('2024-12-01'); // Kerstvakantie
// const today = new Date('2025-01-01'); // Voorjaarsvakantie
// const today = new Date('2025-03-01'); // Meivakantie

export function getNearestHoliday(region: string | null) {
    const regionHolidays = getRegionHolidays(region);

    if (!regionHolidays || regionHolidays.length === 0) {
        console.warn('No holidays found for the specified region');
        return null;
    }

    const upcomingHolidays = regionHolidays.filter(holiday => holiday.start >= today);

    if (upcomingHolidays.length === 0) {
        console.warn('No upcoming holidays found');
        return null;
    }

    const nearestHoliday = upcomingHolidays.reduce((nearest, current) => {
        return current.start < nearest.start ? current : nearest;
    });

    return {
        type: nearestHoliday.type,
        start: nearestHoliday.start,
        end: nearestHoliday.end,
        daysRemaining: Math.ceil((nearestHoliday.start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)),
        imageKey: nearestHoliday.imageKey,
    };
}