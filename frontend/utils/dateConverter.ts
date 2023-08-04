export default function dateConverter(epochDate: string): string {
    const utcDateTime = new Date(epochDate);
    const eatOffset = 3 * 60; // East Africa Time offset in minutes (3 hours)
    const eatDateTime = new Date(utcDateTime.getTime() + eatOffset * 60 * 1000);
  
    const day = eatDateTime.getDate();
    const month = getMonthName(eatDateTime.getMonth());
    const year = eatDateTime.getFullYear();
  
    const suffix = getDaySuffix(day);
  
    return `${day}${suffix} ${month} ${year}`;
  }
  
  function getMonthName(monthIndex: number): string {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    return months[monthIndex];
  }
  
  function getDaySuffix(day: number): string {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
  