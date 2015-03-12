angular.module('data',[]).constant('Data', {
        products: [
            {
                id: 1,
                name: 'Chevilles + vis à visser RED HEAD, 12 x 30mm',
                price: 0.75,
                type: 'visser',
                wall: ['platre'],
                load: ['leger'],
                image: '4-chevilles-vis-a-visser-red-head-12-x-30mm.jpg'
            },
            {
                id: 2,
                name: 'Chevilles + vis à frapper STANDERS, 5 x 30mm',
                price: 0.15,
                type: 'frapper',
                wall: ['plein'],
                load: ['lourd'],
                image: '4-chevilles-vis-a-visser-red-head-12-x-30mm.jpg'
            },
            {
                id: 3,
                name: 'Chevilles à clouer OUTIFIX 6x40mm pour tous types de matériaux',
                price: 0.20,
                type: 'clouer',
                wall: ['platre','plein'],
                load: ['leger'],
                image: '25-chevilles-a-clouer-outifix-6x40mm-pour-tous-types-de-materiaux.jpg'
            },
        ],
        criteriaById: {
            'wall': {
                id: 'wall',
                description: 'Type de mur',
                segment: [
                    {
                        description: 'plein',
                        image: 'http://ser36.ovh.wikeo.webadeo.net/images/49/9d/poncage.jpg'
                    },
                    {
                        description: 'platre',
                        image: 'http://ser36.ovh.wikeo.webadeo.net/images/49/9d/poncage.jpg'
                    }
                ]
            },
            'load': {
                id: 'load',
                description: 'poids',
                segment: [
                    {
                        description: 'lourd',
                        image: 'http://ser36.ovh.wikeo.webadeo.net/images/49/9d/poncage.jpg'
                    },
                    {
                        description: 'leger',
                        image: 'http://ser36.ovh.wikeo.webadeo.net/images/49/9d/poncage.jpg'
                    }
                ]
            }
        }
    }
);