//console.log( process.env );

const { OneDrive, npm_package_version, PROCESSOR_ARCHITECTURE } = process.env;
//console.table({ OneDrive, npm_package_version, PROCESSOR_ARCHITECTURE });

export const characters = ['Flash', 'Superman', 'Green Lantern', 'Batman'];
//const batman = characters[2];
const [ , , batman ] =  characters;
console.log(batman);