// ##############################
// // // mailbox
// #############################
var IMGDIR = process.env.REACT_APP_IMGDIR;

const mailbox = [
    {avatar: IMGDIR+"/images/profile/avatar-1.jpg", name: "Michael Harris", time: "15 mins ago", tag: "Family", star: "1", msg: 'Sometimes it takes a lifetime to win a battle!'},
    {avatar: IMGDIR+"/images/profile/avatar-2.jpg", name: "Luke Shaw", time: "35 mins ago", tag: "Work", star: "0", msg: 'Open this message for great offers'},
    {avatar: IMGDIR+"/images/profile/avatar-3.jpg", name: "Nathan Graham", time: "45 mins ago", tag: "Friends", star: "0", msg: 'Board meeting today evening for all'},
    {avatar: IMGDIR+"/images/profile/avatar-4.jpg", name: "James Fisher", time: "50 mins ago", tag: "Other", star: "0", msg: 'Making of new product brochure'},
    {avatar: IMGDIR+"/images/profile/avatar-5.jpg", name: "Eric Ellison", time: "54 mins ago", tag: "Family", star: "1", msg: 'The new portfolio of products is out'},
    {avatar: IMGDIR+"/images/profile/avatar-6.jpg", name: "Evan Shaw", time: "58 mins ago", tag: "Work", star: "0", msg: 'Taking some rest today evening'},
    {avatar: IMGDIR+"/images/profile/avatar-7.jpg", name: "Colin Dyer", time: "1 hour ago", tag: "Friends", star: "0", msg: 'Please do the needful'},
    {avatar: IMGDIR+"/images/profile/avatar-8.jpg", name: "Kate Denwer", time: "1 hour ago", tag: "Other", star: "0", msg: 'Attached some files for new project'},
    {avatar: IMGDIR+"/images/profile/avatar-9.jpg", name: "Austin Kerr", time: "2 hours ago", tag: "Family", star: "1", msg: 'Take cafe and meet soon this weekend'},
    {avatar: IMGDIR+"/images/profile/avatar-10.jpg", name: "Boris King", time: "3 hours ago", tag: "Work", star: "0", msg: 'Let us meet to check out this new game'},
    {avatar: IMGDIR+"/images/profile/avatar-11.jpg", name: "Charles Lewis", time: "4 hours ago", tag: "Friends", star: "0", msg: 'What a player this new kid is'},
    {avatar: IMGDIR+"/images/profile/avatar-12.jpg", name: "Jason Lyman", time: "4 hours ago", tag: "Other", star: "0", msg: 'Hello, we have sent the required documents'},
];

export {
    mailbox, // mail inbox
};
