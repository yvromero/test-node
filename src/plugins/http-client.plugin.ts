// const axios = require('axios');
import axios from 'axios';

// Con token de autenticacion
// const buildHttpClient = (headers) => {
//     return {
//         get: async(url) => {
//             const {data} = await axios.get( url );
//             return data;
//             // const resp = await fetch ( url );
//             // const data = await resp.json();
//             //return data;
//         },
    
//         post: async(url, body) => {},
//         put: async(url, body) => {},
//         delete: async(url) => {},
//     };
// }


export const httpClientPlugin = {
    
    get: async( url: string ) => {
        const {data} = await axios.get( url );
        return data;
        // const resp = await fetch ( url );
        // const data = await resp.json();
        //return data;
    },

    post: async( url: string, body:any ) => {
        throw new Error ('Not implemend');
    },
    put: async( url: string, body: any ) => {
        throw new Error ('Not implemend');
    },
    delete: async( url: string ) => {
        throw new Error ('Not implemend');
    },
};

