const _ = require('lodash/core');
const users = [{
  "id": 1,
  "first_name": "Konstantin",
  "last_name": "Ellerker",
  "email": "kellerker0@nationalgeographic.com",
  "gender": "Male",
  "ip_address": "68.207.239.110"
}, {
  "id": 2,
  "first_name": "Jorrie",
  "last_name": "Barens",
  "email": "jbarens1@mozilla.org",
  "gender": "Female",
  "ip_address": "173.155.94.11"
}, {
  "id": 3,
  "first_name": "Berne",
  "last_name": "Gleadhall",
  "email": "bgleadhall2@toplist.cz",
  "gender": "Male",
  "ip_address": "103.21.101.33"
}, {
  "id": 4,
  "first_name": "Cher",
  "last_name": "Frome",
  "email": "cfrome3@chron.com",
  "gender": "Female",
  "ip_address": "52.111.196.61"
}, {
  "id": 5,
  "first_name": "Lindi",
  "last_name": "Penniell",
  "email": "lpenniell4@de.vu",
  "gender": "Female",
  "ip_address": "230.65.115.11"
}, {
  "id": 6,
  "first_name": "Ddene",
  "last_name": "Butchers",
  "email": "dbutchers5@shutterfly.com",
  "gender": "Female",
  "ip_address": "54.50.222.224"
}, {
  "id": 7,
  "first_name": "Marcos",
  "last_name": "Barlee",
  "email": "mbarlee6@intel.com",
  "gender": "Male",
  "ip_address": "159.140.38.184"
}, {
  "id": 8,
  "first_name": "Salome",
  "last_name": "Glanvill",
  "email": "sglanvill7@vinaora.com",
  "gender": "Female",
  "ip_address": "214.7.172.220"
}, {
  "id": 9,
  "first_name": "Moyra",
  "last_name": "Ladon",
  "email": "mladon8@weebly.com",
  "gender": "Female",
  "ip_address": "141.13.107.3"
}, {
  "id": 10,
  "first_name": "Gayla",
  "last_name": "Pariso",
  "email": "gpariso9@google.it",
  "gender": "Female",
  "ip_address": "5.216.154.92"
}, {
  "id": 11,
  "first_name": "Randall",
  "last_name": "Penny",
  "email": "rpennya@mozilla.org",
  "gender": "Male",
  "ip_address": "255.33.247.100"
}, {
  "id": 12,
  "first_name": "Jule",
  "last_name": "Holdron",
  "email": "jholdronb@fema.gov",
  "gender": "Male",
  "ip_address": "222.109.247.113"
}, {
  "id": 13,
  "first_name": "Fredi",
  "last_name": "Grimbaldeston",
  "email": "fgrimbaldestonc@howstuffworks.com",
  "gender": "Female",
  "ip_address": "244.204.160.194"
}, {
  "id": 14,
  "first_name": "Stanford",
  "last_name": "Birts",
  "email": "sbirtsd@netvibes.com",
  "gender": "Male",
  "ip_address": "164.80.246.141"
}, {
  "id": 15,
  "first_name": "Travus",
  "last_name": "Dowgill",
  "email": "tdowgille@weibo.com",
  "gender": "Male",
  "ip_address": "155.242.238.46"
}, {
  "id": 16,
  "first_name": "Niki",
  "last_name": "Waistall",
  "email": "nwaistallf@unesco.org",
  "gender": "Male",
  "ip_address": "75.1.254.225"
}, {
  "id": 17,
  "first_name": "Wilden",
  "last_name": "Esposita",
  "email": "wespositag@mashable.com",
  "gender": "Male",
  "ip_address": "49.11.181.179"
}, {
  "id": 18,
  "first_name": "Ilsa",
  "last_name": "Toomey",
  "email": "itoomeyh@kickstarter.com",
  "gender": "Female",
  "ip_address": "163.53.120.157"
}, {
  "id": 19,
  "first_name": "Otis",
  "last_name": "Paxeford",
  "email": "opaxefordi@amazon.com",
  "gender": "Male",
  "ip_address": "244.245.61.5"
}, {
  "id": 20,
  "first_name": "Pansie",
  "last_name": "Gosalvez",
  "email": "pgosalvezj@usgs.gov",
  "gender": "Female",
  "ip_address": "118.237.67.22"
}];

const femaleCount = _.filter(users, {
  "gender": "Female"
}).length;

console.log(femaleCount);

if (femaleCount > 0) {
  let wrapperNode = document.getElementsByClassName("wrapper")[0];
  var p = document.createElement('p');
  p.innerHTML = `There are ${femaleCount} females in your data object`;
  wrapperNode.appendChild(p);
}
