const connection = require('../database/connection');

module.exports = {
    async create(request,response){
        const {ong_id} = request.body;

        const ong = await connection('ongs')
            .select('name')
            .where('id',ong_id)
            .first();
        if(!ong){
            return response.status(400).json({
                error:"No ONG found with this ID"
            })
        }else{
            return response.json(ong);
        }
    }
}