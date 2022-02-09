import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    userName: {type: String, required: true},
    password: {type: String},
});

const Users = mongoose.model('user', userSchema)

export default Users;