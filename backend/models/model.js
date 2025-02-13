const mongoose=require('mongoose')
const db = new mongoose.Schema({
    nom: {
        type: String,
        required: true,  
      },
      email: {
        type: String,
        required: true,
        unique: true,  
        lowercase: true,  
      phone: {
        type: Number,
        required: true, 
        match: [/^\d{10}$/, 'Numéro de téléphone invalide'] 
      },
      message: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
      }
    }
})
const ConNect=mongoose.model('contact',db)
module.exports = ConNect
