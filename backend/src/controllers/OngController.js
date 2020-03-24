const connection = require('../database/connection');
const crypto = require('crypto');


module.exports = {
    async create(request,response){
        const {name,email,whatsapp,city,uf} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        try{
            await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf
            });
        }catch(error){
            console.log(error);
        }
        return response.json({id});
    },
    async index(request,response){
        const ongs = await connection('ongs').select('*');
    
        return response.json({ongs});
    },
    async delete(request,response){
        const {id} = request.params;
        const ong_id = request.headers.authorization;
        try{
            const ong = await connection('ongs').select('id').where('id',id).first();
            if(ong.id !== ong_id){
                return response.status(401).json({
                    error:'Operation not permitted'
                });
            }else{
                await connection('ongs').delete().where('id',id);
                return response.status(204).send();
            }
        }catch(error){
            return response.send(error);
        }
        
        
    }
}