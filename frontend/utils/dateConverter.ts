
export function dateConverter(inputNumber: number): string {
  // Convert the number to a string
  const dateString = inputNumber.toString();

  // Extract year, month, and day from the string
  const year = dateString.slice(0, 4);
  const month = dateString.slice(4, 6);
  const day = dateString.slice(6, 8);

  // Create a JavaScript Date object
  const date = new Date(`${year}-${month}-${day}`);

  // Define an array of month names
  const monthNames = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  // Get the month name
  const monthName = monthNames[date.getMonth()];

  // Get the day with a suffix (e.g., "3rd")
  const dayWithSuffix = day + getDaySuffix(parseInt(day));

  // Construct the formatted date string
  const formattedDate = `${dayWithSuffix} ${monthName} ${year}`;

  return formattedDate;
}

function getDaySuffix(day: number): string {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}
