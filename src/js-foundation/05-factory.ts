// import { getUUID } from '../plugins/get-id.plugin';
// import { getAge } from '../plugins/get-age.plugin';


interface BuildMakePersonOptions {
    getUUID: () => string;
    getAge: (birthdate:string) => number;
}

interface PersonOptions {
    name: string;
    birthdate: string;
}
export const buildMakePerson = ({ getUUID, getAge }: BuildMakePersonOptions) => {

    return ({ name, birthdate }: PersonOptions) => {

        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }
    
    }
}
