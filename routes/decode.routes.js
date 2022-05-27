const {Router} = require('express');
const router = Router();

// /api/decode/rsa
router.post('/rsa', async (req, res) => {
    try {
        const {e, n} = req.body;
        const message = 19;
        console.log('e:', e, 'n:', n);
        const rsa = Math.pow(message, e) % n;
        console.log('rsa message:',rsa);
        res.json({rsa: rsa});
    } catch (e) {
        res.status(500).json({ message: 'Опа, вот и ошибка'})
    }
})

module.exports = router;