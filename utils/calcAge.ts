const birthday = new Date('2003-01-25');

type AgeParts = {
    years: number;
    months: number;
    days: number;
};

function calculateAgeParts(birthDate: Date, now: Date = new Date()): AgeParts {
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;

        const prevMonth = (now.getMonth() + 11) % 12;
        const prevYear = prevMonth === 11 ? now.getFullYear() - 1 : now.getFullYear();
        const daysInPrevMonth = new Date(prevYear, prevMonth + 1, 0).getDate();

        days += daysInPrevMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

export function getAgeText() : string {
    const {years, months, days} = calculateAgeParts(birthday);
    return `${years} years, ${months} months, ${days} days`;
}