interface User{
    id: number;
    name: string;
}
    
    
    const users:User[] = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id:2,
        name: 'Jane Doe',
    }
];

export const getUsers = ( id: number, callback: (err?:string, user?:User) => void ) => {

    const user = users.find( (user) => {
        return user.id === id;
    });

    if( !user ){
        return callback(`User not found with id, ${id}`);
    }

    return callback( undefined, user );

}

