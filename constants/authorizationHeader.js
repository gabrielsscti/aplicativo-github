import base64 from 'react-native-base64';

const username = 'gabrielsscti';
const password = '5369d7abb495ae2c2ff6b77ca143b04fc43b5a09'

const authHeader = 'Basic ' + base64.encode(`${username}:${password}`);
export default {headers: { 'Authorization': authHeader }}