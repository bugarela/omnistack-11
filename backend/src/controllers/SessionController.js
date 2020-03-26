const crypto = require('crypto');

const connection = require('../database/connection.js');

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('Name')
            .first();

        if (!ong) {
            response.status(400).json({ error: 'ONG not found'});
        }

        return response.json(ong);
    },

    async index(request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    }
};
