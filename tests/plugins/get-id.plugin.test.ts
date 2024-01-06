import { getUUID } from '../../src/plugins/get-id.plugin';



describe('plugins/get-id.plugin',() => {

    test('getUUID() should return a UUID', () => {

        const uuid = getUUID();

        expect( typeof uuid ).toBe('string');
        expect( uuid.length).toBe( 36 );

        // Comprobar si el UUID contiene 4 guiones
        expect([...uuid.matchAll(/-/g)]).toHaveLength(4);


    });
});