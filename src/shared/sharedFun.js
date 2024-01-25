// import store from "../redux/store";

export const getCurrentTimeFormatted = () => {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert 24-hour time to 12-hour time
    const formattedHours = hours % 12 || 12;
  
    // Add leading zero to minutes if necessary
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
    const formattedTime = `${month} ${day}, ${year} ${formattedHours}:${formattedMinutes} ${ampm}`;
  
    return formattedTime;
}

export const formatDateFROMQLRet = (dateString) => { // takes from  2023-11-17T09:13:32.000Z to 2023-11-17
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

export const formatDateFROMQLRetSlash = (dateString) => { // takes from  2023-11-17T09:13:32.000Z to 2023/11/17
	const date = new Date(dateString);
	const day = date.getDate().toString().padStart(2, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const year = date.getFullYear().toString();
	const hours = date.getHours().toString().padStart(2, '0');
	const minutes = date.getMinutes().toString().padStart(2, '0');
	const seconds = date.getSeconds().toString().padStart(2, '0');
	
	return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}
export const formatDateCool = (startDate,) => { // takes  2013-11-17, 2023-09-30 SEP 30, 2023
  const months = [
      'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
  ];

  const start = new Date(startDate);

  const startMonth = months[start.getMonth()];

  const formattedStartDate = `${startMonth} ${start.getDate().toString().padStart(2, '0')}, ${start.getFullYear()}`;

  return formattedStartDate;
}

export const formatDateRange = (startDate, endDate) => { // takes range of 2013-11-17, 2023-09-30 and returns NOV 17 - SEP 30, 2023
  const months = [
      'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
  ];

  const start = new Date(startDate);
  const end = new Date(endDate);

  const startMonth = months[start.getMonth()];
  const endMonth = months[end.getMonth()];

  const formattedStartDate = `${startMonth} ${start.getDate().toString().padStart(2, '0')}, ${start.getFullYear()}`;
  const formattedEndDate = `${endMonth} ${end.getDate().toString().padStart(2, '0')}, ${end.getFullYear()}`;

  return `${formattedStartDate} - ${formattedEndDate}`;
}

export const formatDateRangeDayMON = (startDate, endDate) => { // takes range of 2013-11-17, 2023-09-30 and returns NOV 17 - SEP 30
  const months = [
      'JN', 'FB', 'MR', 'AP', 'MY', 'JN',
      'JL', 'AG', 'SP', 'OT', 'NV', 'DC'
  ];

  const start = new Date(startDate);
  const end = new Date(endDate);

  const startMonth = months[start.getMonth()];
  const endMonth = months[end.getMonth()];

  const formattedStartDate = `${startMonth} ${start.getDate().toString().padStart(2, '0')}`;
  const formattedEndDate = `${endMonth} ${end.getDate().toString().padStart(2, '0')}`;

  return `${formattedStartDate} - ${formattedEndDate}`;
}


export const isURL = (str) => {
    // Regular expression to match URLs (starting with http://, https://, or www.)
    var urlPattern = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d{1,5})?(\/[\w.-]*)*(\?[^\s]*)?$/i;
    return urlPattern.test(str);
}

export const addDaysToDate = (dateString, addNub) => {
  const date = new Date(dateString);
  date.setDate(date.getDate() + addNub);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
export const formatMoney = (number) => {
    if (number > 1000000000) {
      // Convert numbers greater than 1 billion to billion (bn) with 2 decimal places
      return (number / 1000000000).toFixed(2) + 'bn';
    } else if (number > 1000000) {
      // Convert numbers greater than 1 million to million (ml) with 2 decimal places
      return (number / 1000000).toFixed(2) + 'ml';
    } else if (number > 50000) {
      // Convert numbers greater than 50000 to thousand (k) with 2 decimal places
      return (number / 1000).toFixed(2) + 'k';
    } else {
      // Format numbers less than or equal to 50000 with commas for thousands separator
      return number.toLocaleString();
    }
}

export const formatDateForSQL = (date) => {
    // Ensure the input is a Date object
    if (!(date instanceof Date)) {
      throw new Error('Input must be a Date object');
    }
  
    // Get the components of the date
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are zero-based
    const day = ('0' + date.getDate()).slice(-2);
  
    // Construct the SQL date format
    const sqlDateFormat = `${year}-${month}-${day}`;
  
    return sqlDateFormat;
}

export const isValidDate = (dateString) => {
  // Attempt to create a Date object from the dateString
  const date = new Date(dateString);

  // Check if the date is valid and the input dateString format is correct
  return !isNaN(date.getTime()) && dateString.trim().length === 10;
}

export const appDateRangeGen = (range) => {
    if (typeof (range.startDate) !== 'string' || !isValidDate(range.startDate)) {
      const genRange = formatDateRange('2001-10-05', '2023-10-05');
      return genRange;
    } else if (isValidDate(range.startDate) && !isValidDate(range.endDate)) {
      const ccv = new Date();
      const genRange = formatDateRange(range.startDate, formatDateForSQL(ccv));
      return genRange;
    } else if (isValidDate(range.startDate) && isValidDate(range.endDate)) {
      const genRange = formatDateRange(range.startDate, range.endDate);
      return genRange;
    } else {
      const genRange = "APR 16 - OCT 05, 2023";
      return genRange;
    }
}

export const generateDatesRanges = (startDate, endDate) => {
	const datesArray = [];
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const timeDiff = Math.abs(end - start);
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Difference in days
    
    if (diffDays >= 12) {
        const interval = Math.floor((diffDays - 2) / 10); // Number of intervals between the middle dates
        datesArray.push(startDate); // Push the first date
        for (let i = 1; i <= 10; i++) {
            const newDate = new Date(start.getTime() + (interval * i) * (1000 * 3600 * 24));
            const year = newDate.getFullYear();
            const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
            const day = newDate.getDate().toString().padStart(2, '0');
            datesArray.push(`${year}-${month}-${day}`);
        }
        datesArray.push(endDate); // Push the last date
    } else {
        for (let i = 0; i <= diffDays; i++) {
            const newDate = new Date(start.getTime() + i * (1000 * 3600 * 24));
            const year = newDate.getFullYear();
            const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
            const day = newDate.getDate().toString().padStart(2, '0');
            datesArray.push(`${year}-${month}-${day}`);
        }
    }
    
    return datesArray;
}

export const compDateSize = (dateOne, dateTwo) => {
  const [yearOne, monthOne, dayOne] = dateOne.split('-').map(Number);
  const [yearTwo, monthTwo, dayTwo] = dateTwo.split('-').map(Number);

  if (yearTwo > yearOne) {
      return true;
  } else if (yearTwo === yearOne) {
      if (monthTwo > monthOne) {
          return true;
      } else if (monthTwo === monthOne) {
          return dayTwo >= dayOne;
      }
  }

  return false;
}

export const formatDateFromUTCToNormal = (dateString) => {
	const options = { 
	  year: 'numeric', 
	  month: 'long', 
	  day: 'numeric', 
	  hour: 'numeric', 
	  minute: 'numeric', 
	  second: 'numeric' 
	};
	
	const date = new Date(dateString);
	return new Intl.DateTimeFormat('en-US', options).format(date);
}

export const commaSeparateNumber = (number) => {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const capitalizeWords = (str) => {
	return str.replace(/\b\w/g, function(char) {
	  return char.toUpperCase();
	});
}


export const createImageLink = (imgID) => {
  // const rdLog = store.getState().loginReducer;
  const key = '0EbtDNhe5i8y_LOGKEY';
  const sess = '8EucQCPwYTdU_LOGSES';
  const linkx = 'https://media.shirikisho.co.tz/get/image/'+imgID+'/'+key+'/'+sess+'/drivers';
  return linkx;
}