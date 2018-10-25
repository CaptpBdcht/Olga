import { should } from 'chai';

import { Olga } from '../olga/olga';

should();

describe('Olga should', () => {

    it('be instantiable', () => {
        Olga.prototype.should.exist;
        let olgaTool = new Olga();
        olgaTool.should.exist;
    });
});
