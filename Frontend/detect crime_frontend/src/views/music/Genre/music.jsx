import General from 'views/general/Dashboard/General.jsx';
import Hospital from 'views/hospital/Dashboard/Hospital.jsx';
import Music from 'views/music/Dashboard/Music.jsx';

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


/*
import AlbumCalendar from 'views/music/Appointment/AlbumCalendar.jsx';
import BookSlot from 'views/music/Appointment/BookSlot.jsx';

import Staff from 'views/music/Staff/Staff.jsx';
import AddStaff from 'views/music/Staff/AddStaff.jsx';
import EditStaff from 'views/music/Staff/EditStaff.jsx';
import StaffProfile from 'views/music/Staff/StaffProfile.jsx';

import MusicPayments from 'views/music/Billing/MusicPayments.jsx';
import MusicInvoice from 'views/music/Billing/MusicInvoice.jsx';
import MusicAddPayment from 'views/music/Billing/MusicAddPayment.jsx';
import MusicLocations from 'views/music/Locations/MusicLocations.jsx';

import MusicReportsMusic from 'views/music/Reports/ReportMusic.jsx'; 
import MusicReportsArtist from 'views/music/Reports/ReportArtists.jsx'; 
import MusicReportsSales from 'views/music/Reports/ReportSales.jsx'; 
import MusicReportsStats from 'views/music/Reports/ReportStats.jsx'; 
*/

var dashRoutes = [ 

    //{ path: "#", name: "Main", type: "navgroup"},
    { path: "/music/dashboard", name: "Dashboard", icon: "dashboard", badge: "4", component: Music },


    { 
        path: "#", name: "Albums", icon: "envelope", type: "dropdown",
            child: [
                { path: "/music/albums", name: "Albums"},
                { path: "/music/add-album", name: "Add Album"},
                { path: "/music/edit-album", name: "Edit Album"},
                { path: "/music/album-view", name: "View Album"},
            ]
    },
        { path: "/music/albums", component: Album, type: "child"},
        { path: "/music/add-album", component: AddAlbum, type: "child"},
        { path: "/music/edit-album", component: EditAlbum, type: "child"},
        { path: "/music/album-view", component: AlbumView, type: "child"},

    { 
        path: "#", name: "Artists", icon: "envelope", type: "dropdown",
            child: [
                { path: "/music/artists", name: "Artists"},
                { path: "/music/add-artist", name: "Add Artist"},
                { path: "/music/edit-artist", name: "Edit Artist"},
                { path: "/music/artist-profile", name: "Artist Profile"},
            ]
    },
        { path: "/music/artists", component: Artist, type: "child"},
        { path: "/music/add-artist", component: AddArtist, type: "child"},
        { path: "/music/edit-artist", component: EditArtist, type: "child"},
        { path: "/music/artist-profile", component: ArtistProfile, type: "child"},


    { 
        path: "#", name: "Events", icon: "envelope", type: "dropdown",
            child: [
                { path: "/music/events", name: "Events"},
                { path: "/music/addevent", name: "Add Event"},
            ]
    },
        { path: "/music/events", component: MusicEvents, type: "child"},
        { path: "/music/addevent", component: AddEvent, type: "child"},

    { path: "/music/uploader", name: "Song Uploader", icon: "dashboard", component: Uploader },


    { 
        path: "#", name: "Mail Box", icon: "envelope", type: "dropdown",
        child: [
            { path: "/music/mail-inbox", name: "Inbox"},
            { path: "/music/mail-compose", name: "Compose"},
            { path: "/music/mail-view", name: "View"},
        ]
    },
    { path: "/music/mail-inbox", component: MusicMailinbox, type: "child"},
    { path: "/music/mail-compose", component: MusicMailcompose, type: "child"},
    { path: "/music/mail-view", component: MusicMailview, type: "child"},

{ 
        path: "#", name: "Genres", icon: "envelope", type: "dropdown",
            child: [
                { path: "/music/genres", name: "Genres"},
                { path: "/music/add-genre", name: "Add Genre"},
                { path: "/music/edit-genre", name: "Edit Genre"},
            ]
    },
        { path: "/music/genres", component: Genre, type: "child"},
        { path: "/music/add-genre", component: AddGenre, type: "child"},
        { path: "/music/edit-genre", component: EditGenre, type: "child"},


/*
    
    { 
        path: "#", name: "Appointments", icon: "envelope", type: "dropdown",
            child: [
                { path: "/music/album-schedule", name: "Album Schedule"},
                { path: "/music/book-slot", name: "Book a slot"},
            ]
    },
        { path: "/music/album-schedule", component: AlbumCalendar, type: "child"},
        { path: "/music/book-slot", component: BookSlot, type: "child"},
 
 { 
        path: "#", name: "Reports", icon: "line-chart", type: "dropdown",
        child: [
                    { path: "/music/reports-music", name: "Music"},
                    { path: "/music/reports-artist", name: "Artists"},
                    { path: "/music/reports-sales", name: "Sales"},
                    { path: "/music/reports-stats", name: "Statistics"},
        ]
    },
    { path: "/music/reports-music", component: MusicReportsMusic, type: "child"},
    { path: "/music/reports-artist", component: MusicReportsArtist, type: "child"},
    { path: "/music/reports-sales", component: MusicReportsSales, type: "child"},
    { path: "/music/reports-stats", component: MusicReportsStats, type: "child"},

 { 
        path: "#", name: "Billing", icon: "envelope", type: "dropdown",
            child: [
                { path: "/music/payments", name: "Payments"},
                { path: "/music/addpayment", name: "Add Payment"},
                { path: "/music/invoice", name: "Invoice"},
            ]
    },
        { path: "/music/payments", component: MusicPayments, type: "child"},
        { path: "/music/addpayment", component: MusicAddPayment, type: "child"},
        { path: "/music/invoice", component: MusicInvoice, type: "child"},

    { 
        path: "#", name: "Staffs", icon: "envelope", type: "dropdown",
            child: [
                { path: "/music/staffs", name: "Staffs"},
                { path: "/music/add-staff", name: "Add Staff"},
                { path: "/music/edit-staff", name: "Edit Staff"},
                { path: "/music/staff-profile", name: "Staff Profile"},
            ]
    },
        { path: "/music/staffs", component: Staff, type: "child"},
        { path: "/music/add-staff", component: AddStaff, type: "child"},
        { path: "/music/edit-staff", component: EditStaff, type: "child"},
        { path: "/music/staff-profile", component: StaffProfile, type: "child"},

   
    { path: "/music/locations", name: "Locations", icon: "dashboard", component: MusicLocations },


   */  

    { 
        path: "#", name: "Multi Purpose", icon: "envelope", type: "dropdown",
            child: [
                { path: "/dashboard", name: "General"},
                { path: "/hospital/dashboard", name: "Hospital"},
                { path: "/music/dashboard", name: "Music"},
            ]
    },

        { path: "/dashboard", component: General, type: "child"},
        { path: "/hospital/dashboard", component: Hospital, type: "child"},
        { path: "/music/dashboard", component: Music, type: "child"},

    //{ redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }

];
export default dashRoutes;
