import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const pirates = [
            { id: 11, name: 'White Beard' },
            { id: 12, name: 'Crocodile' },
            { id: 13, name: 'Shanks' },
            { id: 14, name: 'Sanji' },
            { id: 15, name: 'Chopper' },
            { id: 16, name: 'Nami' },
            { id: 17, name: 'Trafalgar Law' },
            { id: 18, name: 'Black Beard' },
            { id: 19, name: 'Luffy' },
            { id: 20, name: 'Zoro' }
        ];
        return { pirates };
    }
}
