// ##############################
// // // playlists
// #############################
var IMGDIR = process.env.REACT_APP_IMGDIR;

const playlists = [
    {avatar: IMGDIR+"/images/music/playlists/playlist-1.jpg", name: "Rock", position: "Latest", songs: "35"},
    {avatar: IMGDIR+"/images/music/playlists/playlist-2.jpg", name: "Hip Hop", position: "Rock n Roll", songs: "35"},
    {avatar: IMGDIR+"/images/music/playlists/playlist-3.jpg", name: "Country", position: "90s list", songs: "35"},
    {avatar: IMGDIR+"/images/music/playlists/playlist-6.jpg", name: "Classical", position: "80s", songs: "35"},
    {avatar: IMGDIR+"/images/music/playlists/playlist-7.jpg", name: "Regional", position: "Misc", songs: "35"},
    {avatar: IMGDIR+"/images/music/playlists/playlist-8.jpg", name: "Refreshing", position: "Classic", songs: "35"},
    {avatar: IMGDIR+"/images/music/playlists/playlist-11.jpg", name: "Trending", position: "Jazz", songs: "35"},
    {avatar: IMGDIR+"/images/music/playlists/playlist-12.jpg", name: "Latest", position: "Misc", songs: "35"},
]; 

export {
    playlists, 
};
