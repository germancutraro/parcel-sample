import { number, name } from './data';

document.getElementById('data').innerHTML = `
  <li><strong>Name:</strong> ${name}</li>
  <li><strong>Number:</strong> ${number}</li>
`;