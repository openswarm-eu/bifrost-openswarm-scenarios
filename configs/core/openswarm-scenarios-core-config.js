export const userConfig = {
    plugins: {
        poweredElementsStructDynMap: {
            'POWERGRID-CONNECTOR' : 'VOLTAGE-3P',
            'LV-TRANSFORMER'      : 'TRAFO-VOLTAGE',
        },
        poweredDetailsStructDynMap: {
                    'CHARGING-POLE': {
                        'SLOT-VISIBLE-ARRAY' : 'EV-STATION-SOC',
                        'SLOT-COLOR-ARRAY'   : 'EV-STATION-SLOT-COLOR'
                    }
                },
        additionalPlugins: ['PoweredDetailsPlugin.js']
    }
}
