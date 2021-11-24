const talkingCalendar = function(date) {
  let darray = date.split("/");
  switch (darray[1]) {
  case "01":
    darray[1] = "January";
    break;
  case "02":
    darray[1] = "February";
    break;
  case "03":
    darray[1] = "March";
    break;
  case "04":
    darray[1] = "April";
    break;
  case "05":
    darray[1] = "May";
    break;
  case "06":
    darray[1] = "June";
    break;
  case "07":
    darray[1] = "July";
    break;
  case "08":
    darray[1] = "August";
    break;
  case "09":
    darray[1] = "September";
    break;
  case "10":
    darray[1] = "October";
    break;
  case "11":
    darray[1] = "November";
    break;
  case "12":
    darray[1] = "December";
  }
  
  switch (darray[2]) {
  case "01":
    darray[2] = "1st";
    break;
  case "21":
  case "31":
    darray[2] += "st";
    break;
  case "02":
    darray[2] = "2nd";
    break;
  case "22":
    darray[2] += "nd";
    break;
  case "03":
    darray[2] = "3rd";
    break;
  case "33":
    darray[2] += "rd";
    break;
  default:
    darray[2] += "th";
  }
  
  return darray[1] + " " + darray[2] + ", " + darray[0];
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1987/05/21"));