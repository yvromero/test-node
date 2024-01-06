import { buildLogger, logger as winstonLogger } from '../../src/plugins/logger.plugin';


describe('plugins/logger.plugins.ts', () => {
    
    test('buildLogger should return a function logger', () => {

        const logger = buildLogger('test');

        expect( typeof logger.log ).toBe('function');
        expect( typeof logger.error ).toBe('function');

    });

    test('logger.log should be called', () => {

        // console.log(logger);
        const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');
        const message = 'test message';
        const service = 'test service';

        const logger = buildLogger(service);

        logger.log(message);

        expect( winstonLoggerMock ).toHaveBeenCalledWith(
            'info',
            expect.objectContaining({
                level: 'info',
                message,
                service,
            }),
        );
    });
});