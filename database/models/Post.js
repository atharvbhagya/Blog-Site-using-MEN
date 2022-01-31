const mongoose= require('mongoose');

const PostSchema= new mongoose.Schema({
    'title': String,
    'description': String,
    'content': String,
    'username': String,
    'image': String,
    'createdAt' : {
        type: Date,
        default: new Date()
    },
    'Like':{
        'count':{'type': Number, 'default': 0} ,
        'Likeable': {'type': Boolean, 'default': true}
    }
});

const Post= mongoose.model('Post', PostSchema);

module.exports= Post;