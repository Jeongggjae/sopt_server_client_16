const { Song } = require('../models');


module.exports = {
    getSong: async (req, res) => {
        try {
            const rank = req.query.rank;
            if (rank === 'most') {
                const getSongs = await Song.findAll({
                    order: [
                        ['most', 'DESC']
                    ],
                    attributes: ['id', 'title', 'subtitle', 'songimageUri', 'most']
                })
                const songs = getSongs.map(data => data.get({ plain: true }));
                return res.status(200).send({ success: 200, songs });
            }
            if (rank === 'twentys') {
                const getSongs = await Song.findAll({
                    order: [
                        ['twentys', 'DESC']
                    ],
                    attributes: ['id', 'title', 'subtitle', 'songimageUri', 'twentys']
                })
                const songs = getSongs.map(data => data.get({ plain: true }));
                return res.status(200).send({ success: 200, songs });
            }
            if (rank === 'foreign') {
                const getSongs = await Song.findAll({
                    order: [
                        ['foreign', 'DESC']
                    ],
                    attributes: ['id', 'title', 'subtitle', 'songimageUri', 'foreign']
                })
                const songs = getSongs.map(data => data.get({ plain: true }));
                return res.status(200).send({ success: 200, songs });
            }
            if (rank === 'now') {
                const getSongs = await Song.findAll({
                    order: [
                        ['now', 'DESC']
                    ],
                    attributes: ['id', 'title', 'subtitle', 'songimageUri', 'now']
                })
                const songs = getSongs.map(data => data.get({ plain: true }));
                return res.status(200).send({ success: 200, songs });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send('서버에러 입니다');
        }
    }
}