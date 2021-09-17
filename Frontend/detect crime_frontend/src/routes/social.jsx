import General from 'views/general/Dashboard/General.jsx';
import Hospital from 'views/hospital/Dashboard/Hospital.jsx';
import Music from 'views/music/Dashboard/Music.jsx';
import Crm from 'views/crm/Dashboard/Crm.jsx';
import Social from 'views/social/Dashboard/Social.jsx';
import Freelance from 'views/freelance/Dashboard/Freelance.jsx';
import University from 'views/university/Dashboard/University.jsx';
import Ecommerce from 'views/ecommerce/Dashboard/Ecommerce.jsx';
import Blog from 'views/blog/Dashboard/Blog.jsx';


import Member from 'views/social/Member/Member.jsx';
import AddMember from 'views/social/Member/AddMember.jsx';
import EditMember from 'views/social/Member/EditMember.jsx';
import MemberProfile from 'views/social/Member/MemberProfile.jsx';

import Activity from 'views/social/Activity/Activity.jsx';

import Group from 'views/social/Group/Group.jsx';
import AddGroup from 'views/social/Group/AddGroup.jsx';
import EditGroup from 'views/social/Group/EditGroup.jsx';
import GroupView from 'views/social/Group/GroupView.jsx';

import Friend from 'views/social/Friend/Friend.jsx';
import FriendProfile from 'views/social/Friend/FriendProfile.jsx';

import SocialMailinbox from 'views/social/Mail/Inbox.jsx';
import SocialMailcompose from 'views/social/Mail/Compose.jsx';
import SocialMailview from 'views/social/Mail/View.jsx';

import Media from 'views/social/Media/Media.jsx';
import UploadMedia from 'views/social/Media/UploadMedia.jsx';

import Settings from 'views/social/Settings/Settings.jsx';

import Login from 'views/social/Pages/Login.jsx';
import Register from 'views/social/Pages/Register.jsx';
import LockScreen from 'views/social/Pages/LockScreen.jsx';
import Offline from 'views/social/Pages/Offline.jsx'; 

import SocialReportsSite from 'views/social/Reports/ReportsSite.jsx'; 
import SocialReportsStats from 'views/social/Reports/ReportsStats.jsx'; 
import SocialReportsVisitors from 'views/social/Reports/ReportsVisitors.jsx'; 

var BASEDIR = process.env.REACT_APP_BASEDIR;

var dashRoutes = [ 

    //{ path: "#", name: "Main", type: "navgroup"},
    { path: BASEDIR+"/social/dashboard", name: "Dashboard", icon: "speedometer", badge: "", component: Social },


    { 
        path: "#", name: "Members", icon: "user", type: "dropdown", parentid: "members",
            child: [
                { path: BASEDIR+"/social/members", name: "Members"},
                { path: BASEDIR+"/social/add-member", name: "Add Member"},
                { path: BASEDIR+"/social/edit-member", name: "Edit Member"},
                { path: BASEDIR+"/social/member-profile", name: "Member Profile"},
            ]
    },
        { path: BASEDIR+"/social/members", component: Member, type: "child"},
        { path: BASEDIR+"/social/add-member", component: AddMember, type: "child"},
        { path: BASEDIR+"/social/edit-member", component: EditMember, type: "child"},
        { path: BASEDIR+"/social/member-profile", component: MemberProfile, type: "child"},

    { 
        path: "#", name: "Groups", icon: "people", type: "dropdown", parentid: "groups",
            child: [
                { path: BASEDIR+"/social/groups", name: "Groups"},
                { path: BASEDIR+"/social/add-group", name: "Add Group"},
                { path: BASEDIR+"/social/edit-group", name: "Edit Group"},
                { path: BASEDIR+"/social/group-view", name: "View Group"},
            ]
    },
        { path: BASEDIR+"/social/groups", component: Group, type: "child"},
        { path: BASEDIR+"/social/add-group", component: AddGroup, type: "child"},
        { path: BASEDIR+"/social/edit-group", component: EditGroup, type: "child"},
        { path: BASEDIR+"/social/group-view", component: GroupView, type: "child"},

    { path: BASEDIR+"/social/activity", name: "Activity", icon: "energy", component: Activity },



    { 
        path: "#", name: "Friends", icon: "emotsmile", type: "dropdown", parentid: "friends",
            child: [
                { path: BASEDIR+"/social/friends", name: "Friends"},
                { path: BASEDIR+"/social/friend-profile", name: "Friend Profile"},
            ]
    },
        { path: BASEDIR+"/social/friends", component: Friend, type: "child"},
        { path: BASEDIR+"/social/friend-profile", component: FriendProfile, type: "child"},

    { 
        path: "#", name: "Messages", icon: "envelope", type: "dropdown", parentid: "messages",
        child: [
            { path: BASEDIR+"/social/mail-inbox", name: "Inbox"},
            { path: BASEDIR+"/social/mail-compose", name: "Compose"},
            { path: BASEDIR+"/social/mail-view", name: "View"},
        ]
    },
    { path: BASEDIR+"/social/mail-inbox", component: SocialMailinbox, type: "child"},
    { path: BASEDIR+"/social/mail-compose", component: SocialMailcompose, type: "child"},
    { path: BASEDIR+"/social/mail-view", component: SocialMailview, type: "child"},
    
  { 
        path: "#", name: "Reports", icon: "pie-chart", type: "dropdown", parentid: "reports",
        child: [
                    { path: BASEDIR+"/social/reports-site", name: "Site"},
                    { path: BASEDIR+"/social/reports-stats", name: "Statistics"},
                    { path: BASEDIR+"/social/reports-visitors", name: "Visitors"},
        ]
    },
    { path: BASEDIR+"/social/reports-site", component: SocialReportsSite, type: "child"},
    { path: BASEDIR+"/social/reports-stats", component: SocialReportsStats, type: "child"},
    { path: BASEDIR+"/social/reports-visitors", component: SocialReportsVisitors, type: "child"},

    { 
        path: "#", name: "Media", icon: "picture", type: "dropdown", parentid: "mediauploads",
            child: [
                { path: BASEDIR+"/social/media", name: "Media"},
                { path: BASEDIR+"/social/upload-media", name: "Upload Media"},
            ]
    },
        { path: BASEDIR+"/social/media", component: Media, type: "child"},
        { path: BASEDIR+"/social/upload-media", component: UploadMedia, type: "child"},

    { path: BASEDIR+"/social/settings", name: "Settings", icon: "settings",component: Settings },



                        { 
                            path: "#", name: "Access Pages", icon: "key", type: "dropdown", parentid: "accesspages",
                            child: [
                        
                            { path: BASEDIR+"/login", name: "Login"},
                            { path: BASEDIR+"/lockscreen", name: "Lock Screen"},
                            { path: BASEDIR+"/register", name: "Registration"},
                            { path: BASEDIR+"/offline", name: "Offline"},

                            ]
                        },
                            { path: BASEDIR+"/login", component: Login, type: "child"},
                            { path: BASEDIR+"/lockscreen", component: LockScreen, type: "child"},
                            { path: BASEDIR+"/register", component: Register, type: "child"},
                            { path: BASEDIR+"/offline", component: Offline, type: "child"},

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
