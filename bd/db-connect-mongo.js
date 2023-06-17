const mongoose = require("mongoose");

const getConnection = async () => {
  try {
    const url = 'mongodb+srv://antoniotorres:FE6Z0F8Wz5K1mKjb@cluster0.r8cykdk.mongodb.net/'
    
    await mongoose.connect(url);

    console.log("Conexión correcta a Mongo");
  
    } catch (error) {
    console.log(error);
  }
};

module.exports = { getConnection, };
