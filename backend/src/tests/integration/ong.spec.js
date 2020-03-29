const request = require('supertest');

const app = require('../../app');
const connection = require('../../database/connection');

describe('ONG',()=>{
    beforeEach(async ()=>{
        await connection.migrate.latest();
    });
    afterAll(async ()=>{
        await connection.rollback();
        await connection.destroy();
    });
    it('It should be able to create a new ONG',async()=>{
        const response = await request(app)
            .post('/ongs')
            .send({
                name:"TestOng",
                email:"test@test.com",
                whatsapp:"1291231234",
                city:"City Test",
                uf:"SC"
        });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});