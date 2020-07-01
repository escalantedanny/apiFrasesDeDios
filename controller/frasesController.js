const Frases = require('../models/Frases.js');

//obtiene todos los proyectos del usuario actual
exports.obtenerFrases = async (req, res) => {

    try {
            let element;
            let i = Math.floor(Math.random() * 54) + 1;
            //console.log(i);
            
            const frases = await Frases.find();
                for ( i; i <= frases.length; i++) {
                        element = frases[i];
                        break;
                } 

        res.json({ element });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hubo un error al obtener las frases'})
    }
}