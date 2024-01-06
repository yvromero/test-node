"use strict";
// const getAgePlugin = require('get-age');
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
// export const getAge = ( birthdate: string ) => {
//     // if ( !birthdate ) return new Error('birthdate is required');
//     return getAgePlugin(birthdate);
// }
//const getAgePlugin = require('get-age');
const getAge = (birthdate) => {
    // if ( !birthdate ) return new Error('birthdate is required');
    // Probar SpyOn - Objetct Method
    // console.log({ currentYear: new Date().getFullYear() });
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
};
exports.getAge = getAge;
