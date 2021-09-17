import General from 'views/general/Dashboard/General.jsx';
import Hospital from 'views/hospital/Dashboard/Hospital.jsx';
import Music from 'views/music/Dashboard/Music.jsx';
import Crm from 'views/crm/Dashboard/Crm.jsx';
import Social from 'views/social/Dashboard/Social.jsx';
import Freelance from 'views/freelance/Dashboard/Freelance.jsx';
import University from 'views/university/Dashboard/University.jsx';
import Ecommerce from 'views/ecommerce/Dashboard/Ecommerce.jsx';
import Blog from 'views/blog/Dashboard/Blog.jsx';

import MusicEvents from 'views/music/Events/MusicEvents.jsx';
import AddEvent from 'views/music/Events/AddEvent.jsx';

import MusicMailinbox from 'views/music/Mail/Inbox.jsx';
import MusicMailcompose from 'views/music/Mail/Compose.jsx';
import MusicMailview from 'views/music/Mail/View.jsx';

import Album from 'views/music/Album/Album.jsx';
import AddAlbum from 'views/music/Album/AddAlbum.jsx';
import EditAlbum from 'views/music/Album/EditAlbum.jsx';
import AlbumView from 'views/music/Album/AlbumView.jsx';

import Artist from 'views/music/Artist/Artist.jsx';
import AddArtist from 'views/music/Artist/AddArtist.jsx';
import EditArtist from 'views/music/Artist/EditArtist.jsx';
import ArtistProfile from 'views/music/Artist/ArtistProfile.jsx';

import Uploader from 'views/music/Uploader/Uploader.jsx';

import Genre from 'views/music/Genre/Genre.jsx';
import AddGenre from 'views/music/Genre/AddGenre.jsx';
import EditGenre from 'views/music/Genre/EditGenre.jsx';

import AddSong from 'views/music/Song/AddSong.jsx';
import EditSong from 'views/music/Song/EditSong.jsx';
import SongView from 'views/music/Song/SongView.jsx';

import Playlist from 'views/music/Playlist/Playlist.jsx';
import AddPlaylist from 'views/music/Playlist/AddPlaylist.jsx';
import EditPlaylist from 'views/music/Playlist/EditPlaylist.jsx';
import PlaylistView from 'views/music/Playlist/PlaylistView.jsx';

import MusicReportsSongs from 'views/music/Reports/ReportsSongs.jsx'; 
import MusicReportsStatistics from 'views/music/Reports/ReportsStatistics.jsx'; 
import MusicReportsTrending from 'views/music/Reports/ReportsTrending.jsx'; 
import MusicReportsVisitors from 'views/music/Reports/ReportsVisitors.jsx'; 

var BASEDIR = process.env.REACT_APP_BASEDIR;

var dashRoutes = [ 

    //{ path: "#", name: "Main", type: "navgroup"},
    { path: BASEDIR+"/music/dashboard", name: "Dashboard", icon: "speedometer", badge: "", component: Music },


    { 
        path: "#", name: "Albums", icon: "folder-alt", type: "dropdown", parentid: "albums",
            child: [
                { path: BASEDIR+"/music/albums", name: "Albums"},
                { path: BASEDIR+"/music/add-album", name: "Add Album"},
                { path: BASEDIR+"/music/edit-album", name: "Edit Album"},
                { path: BASEDIR+"/music/album-view", name: "View Album"},
            ]
    },
        { path: BASEDIR+"/music/albums", component: Album, type: "child"},
        { path: BASEDIR+"/music/add-album", component: AddAlbum, type: "child"},
        { path: BASEDIR+"/music/edit-album", component: EditAlbum, type: "child"},
        { path: BASEDIR+"/music/album-view", component: AlbumView, type: "child"},

    { 
        path: "#", name: "Artists", icon: "user", type: "dropdown", parentid: "artists",
            child: [
                { path: BASEDIR+"/music/artists", name: "Artists"},
                { path: BASEDIR+"/music/add-artist", name: "Add Artist"},
                { path: BASEDIR+"/music/edit-artist", name: "Edit Artist"},
                { path: BASEDIR+"/music/artist-profile", name: "Artist Profile"},
            ]
    },
        { path: BASEDIR+"/music/artists", component: Artist, type: "child"},
        { path: BASEDIR+"/music/add-artist", component: AddArtist, type: "child"},
        { path: BASEDIR+"/music/edit-artist", component: EditArtist, type: "child"},
        { path: BASEDIR+"/music/artist-profile", component: ArtistProfile, type: "child"},


    { 
        path: "#", name: "Events", icon: "event", type: "dropdown", parentid: "events",
            child: [
                { path: BASEDIR+"/music/events", name: "Events"},
                { path: BASEDIR+"/music/addevent", name: "Add Event"},
            ]
    },
        { path: BASEDIR+"/music/events", component: MusicEvents, type: "child"},
        { path: BASEDIR+"/music/addevent", component: AddEvent, type: "child"},

    { path: BASEDIR+"/music/uploader", name: "Song Uploader", icon: "cloud-upload", component: Uploader },


    { 
        path: "#", name: "Mail Box", icon: "envelope", type: "dropdown", parentid: "mailbox",
        child: [
            { path: BASEDIR+"/music/mail-inbox", name: "Inbox"},
            { path: BASEDIR+"/music/mail-compose", name: "Compose"},
            { path: BASEDIR+"/music/mail-view", name: "View"},
        ]
    },
    { path: BASEDIR+"/music/mail-inbox", component: MusicMailinbox, type: "child"},
    { path: BASEDIR+"/music/mail-compose", component: MusicMailcompose, type: "child"},
    { path: BASEDIR+"/music/mail-view", component: MusicMailview, type: "child"},
    
    { 
        path: "#", name: "Reports", icon: "graph", type: "dropdown", parentid: "reports",
        child: [
                    { path: BASEDIR+"/music/reports-songs", name: "Songs"},
                    { path: BASEDIR+"/music/reports-statistics", name: "Statistics"},
                    { path: BASEDIR+"/music/reports-trending", name: "Trending"},
                    { path: BASEDIR+"/music/reports-visitors", name: "Visitors"},
        ]
    },
    { path: BASEDIR+"/music/reports-songs", component: MusicReportsSongs, type: "child"},
    { path: BASEDIR+"/music/reports-statistics", component: MusicReportsStatistics, type: "child"},
    { path: BASEDIR+"/music/reports-trending", component: MusicReportsTrending, type: "child"},
    { path: BASEDIR+"/music/reports-visitors", component: MusicReportsVisitors, type: "child"},


    { 
        path: "#", name: "Genres", icon: "earphones", type: "dropdown", parentid: "genres",
            child: [
                { path: BASEDIR+"/music/genres", name: "Genres"},
                { path: BASEDIR+"/music/add-genre", name: "Add Genre"},
                { path: BASEDIR+"/music/edit-genre", name: "Edit Genre"},
            ]
    },
        { path: BASEDIR+"/music/genres", component: Genre, type: "child"},
        { path: BASEDIR+"/music/add-genre", component: AddGenre, type: "child"},
        { path: BASEDIR+"/music/edit-genre", component: EditGenre, type: "child"},

    { 
        path: "#", name: "Songs", icon: "music-tone-alt", type: "dropdown", parentid: "songs",
            child: [
                { path: BASEDIR+"/music/add-song", name: "Add Song"},
                { path: BASEDIR+"/music/edit-song", name: "Edit Song"},
                { path: BASEDIR+"/music/song-view", name: "Song Details"},
            ]
    },
        { path: BASEDIR+"/music/add-song", component: AddSong, type: "child"},
        { path: BASEDIR+"/music/edit-song", component: EditSong, type: "child"},
        { path: BASEDIR+"/music/song-view", component: SongView, type: "child"},

    { 
        path: "#", name: "Playlists", icon: "playlist", type: "dropdown", parentid: "playlists",
            child: [
                { path: BASEDIR+"/music/playlists", name: "Playlists"},
                { path: BASEDIR+"/music/add-playlist", name: "Add Playlist"},
                { path: BASEDIR+"/music/edit-playlist", name: "Edit Playlist"},
                { path: BASEDIR+"/music/playlist-view", name: "View Playlist"},
            ]
    },
        { path: BASEDIR+"/music/playlists", component: Playlist, type: "child"},
        { path: BASEDIR+"/music/add-playlist", component: AddPlaylist, type: "child"},
        { path: BASEDIR+"/music/edit-playlist", component: EditPlaylist, type: "child"},
        { path: BASEDIR+"/music/playlist-view", component: PlaylistView, type: "child"},

    { 
        path: "#", name: "Multi Purpose", icon: "layers", type: "dropdown", parentid: "multipurpose",
            child: [
                { path: BASEDIR+"/dashboard", name: "General"},
                { path: BASEDIR+"/hospital/dashboard", name: "Hospital"},
                { path: BASEDIR+"/music/dashboard", name: "Music"},
                { path: BASEDIR+"/crm/dashboard", name: "CRM"},
                { path: BASEDIR+"/social/dashboard", name: "Social Media"},
                { path: BASEDIR+"/freelance/dashboard", name: "Freelance"},
                { path: BASEDIR+"/university/dashboard", name: "University"},
                { path: BASEDIR+"/ecommerce/dashboard", name: "Ecommerce"},
                { path: BASEDIR+"/blog/dashboard", name: "Blog"},
            ]
    },

        { path: BASEDIR+"/dashboard", component: General, type: "child"},
        { path: BASEDIR+"/hospital/dashboard", component: Hospital, type: "child"},
        { path: BASEDIR+"/music/dashboard", component: Music, type: "child"},
        { path: BASEDIR+"/crm/dashboard", component: Crm, type: "child"},
        { path: BASEDIR+"/social/dashboard", component: Social, type: "child"},
        { path: BASEDIR+"/freelance/dashboard", component: Freelance, type: "child"},
        { path: BASEDIR+"/university/dashboard", component: University, type: "child"},
        { path: BASEDIR+"/ecommerce/dashboard", component: Ecommerce, type: "child"},
        { path: BASEDIR+"/blog/dashboard", component: Blog, type: "child"},

    //{ redirect: true, path: BASEDIR+"/", pathTo: "/dashboard", name: "Dashboard" }

];
export default dashRoutes;
