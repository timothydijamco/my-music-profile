const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
   code: String,
   name: String,
   favoriteArtist: String,
   favoriteAlbumEp: String,
   favoriteTrack: String,
   firstShow: String,
   mostRecentShow: String,
   favoriteShow: String
});

const Profile = mongoose.model("profile", ProfileSchema);

module.exports = Profile;
