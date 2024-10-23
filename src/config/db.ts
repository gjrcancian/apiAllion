
const connectDB = async (): Promise<void> => {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://127.0.0.1:27017/allion');
    
    
    

};



export default connectDB;
