// const getAgePlugin = require('get-age');

// export const getAge = ( birthdate: string ) => {
//     // if ( !birthdate ) return new Error('birthdate is required');

//     return getAgePlugin(birthdate);
// }

//const getAgePlugin = require('get-age');

export const getAge = ( birthdate: string ) => {
    // if ( !birthdate ) return new Error('birthdate is required');

    
    // Probar SpyOn - Objetct Method
    // console.log({ currentYear: new Date().getFullYear() });

    return new Date().getFullYear() - new Date(birthdate).getFullYear();
}
