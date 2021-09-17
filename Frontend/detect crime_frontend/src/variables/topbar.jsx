// ##############################
// // // top bar dropdown data
// #############################

var IMGDIR = process.env.REACT_APP_IMGDIR;
const messages = [
    {avatar: IMGDIR+"/images/profile/avatar-1.jpg", name: "John Doug", time: "15 mins ago", status: "available", type: "read", msg: 'Sometimes it takes a lifetime to win a battle!'},
    {avatar: IMGDIR+"/images/profile/avatar-2.jpg", name: "Ben Shaw", time: "35 mins ago", status: "busy", type: "read", msg: 'We are having a get together today. See you soon'},
    {avatar: IMGDIR+"/images/profile/avatar-3.jpg", name: "Harley Stokes", time: "45 mins ago", status: "away", type: "unread", msg: 'In times like this, it makes true sense to chill'},
    {avatar: IMGDIR+"/images/profile/avatar-4.jpg", name: "Kate Pollard", time: "50 mins ago", status: "offline", type: "read", msg: 'Making something happen beyond imagination'},
];

const notifications = [
    {icon: "check", title: "Email subscriptions done", time: "10 mins ago", status: "available", type: "read"},
    {icon: "envelope", title: "Server Maintainance time", time: "33 mins ago", status: "busy", type: "read"},
    {icon: "paper-plane", title: "New users integrated", time: "25 mins ago", status: "away", type: "unread"},
    {icon: "user", title: "Messages sent to all members", time: "40 mins ago", status: "offline", type: "read"},
];

// chat bar data
const chatgroups = [
    {name: "Family", color: "available"},
    {name: "Friends", color: "away"},
    {name: "Work", color: "busy"},
];

const favcontacts = [
    {avatar: IMGDIR+"/images/profile/avatar-5.jpg", name: "Jane King", status: "available" },
    {avatar: IMGDIR+"/images/profile/avatar-9.jpg", name: "Brooks Larson", status: "busy" },
    {avatar: IMGDIR+"/images/profile/avatar-2.jpg", name: "Neil Parker", status: "away"},
    {avatar: IMGDIR+"/images/profile/avatar-4.jpg", name: "Denwer Jean", status: "offline" },
];

const allcontacts = [
    {avatar: IMGDIR+"/images/profile/avatar-2.jpg", name: "Karl Butler", status: "busy" },
    {avatar: IMGDIR+"/images/profile/avatar-1.jpg", name: "Mark Warne", status: "available" },
    {avatar: IMGDIR+"/images/profile/avatar-6.jpg", name: "Jean Denwer", status: "offline" },
    {avatar: IMGDIR+"/images/profile/avatar-4.jpg", name: "Shaun Busey", status: "away"},
    {avatar: IMGDIR+"/images/profile/avatar-7.jpg", name: "Brooks Shaw", status: "busy" },
    {avatar: IMGDIR+"/images/profile/avatar-8.jpg", name: "John Nelson", status: "available" },
    {avatar: IMGDIR+"/images/profile/avatar-9.jpg", name: "Peter Anderson", status: "offline" },
    {avatar: IMGDIR+"/images/profile/avatar-11.jpg", name: "Carol Blake", status: "away"},
    {avatar: IMGDIR+"/images/profile/avatar-12.jpg", name: "Diana Bailey", status: "busy" },
    {avatar: IMGDIR+"/images/profile/avatar-10.jpg", name: "Ella Arnold", status: "available" },
    {avatar: IMGDIR+"/images/profile/avatar-1.jpg", name: "Harry Bower", status: "offline" },
    {avatar: IMGDIR+"/images/profile/avatar-3.jpg", name: "David Bond", status: "away"},
];

export {
    chatgroups, // chat groups for chat area in right sidebar
    favcontacts, // favourite contacts for chat area in right sidebar
    allcontacts, // all contacts for chat area in right sidebar
    messages, // messages list for top bar messages drop down
    notifications, // data for <thead> of table in TableList view
};
