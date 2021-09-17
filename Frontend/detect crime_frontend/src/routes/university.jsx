import General from 'views/general/Dashboard/General.jsx';
import Hospital from 'views/hospital/Dashboard/Hospital.jsx';
import Music from 'views/music/Dashboard/Music.jsx';
import Crm from 'views/crm/Dashboard/Crm.jsx';
import Social from 'views/social/Dashboard/Social.jsx';
import Freelance from 'views/freelance/Dashboard/Freelance.jsx';
import University from 'views/university/Dashboard/University.jsx';
import Ecommerce from 'views/ecommerce/Dashboard/Ecommerce.jsx';
import Blog from 'views/blog/Dashboard/Blog.jsx';

import User from 'views/university/User/User.jsx';
import AddUser from 'views/university/User/AddUser.jsx';
import EditUser from 'views/university/User/EditUser.jsx';
import UserProfile from 'views/university/User/UserProfile.jsx';

import Student from 'views/university/Student/Student.jsx';
import AddStudent from 'views/university/Student/AddStudent.jsx';
import EditStudent from 'views/university/Student/EditStudent.jsx';
import StudentProfile from 'views/university/Student/StudentProfile.jsx';

import Staff from 'views/university/Staff/Staff.jsx';
import AddStaff from 'views/university/Staff/AddStaff.jsx';
import EditStaff from 'views/university/Staff/EditStaff.jsx';
import StaffProfile from 'views/university/Staff/StaffProfile.jsx';

import UniversityCentres from 'views/university/Centres/UniversityCentres.jsx';


import Device from 'views/university/Devices/Device.jsx';
import AddDevice from 'views/university/Devices/AddDevice.jsx';
import EditDevice from 'views/university/Devices/EditDevice.jsx';
import DeviceView from 'views/university/Devices/DeviceView.jsx';

import Library from 'views/university/Library/Library.jsx';
import AddLibrary from 'views/university/Library/AddLibrary.jsx';
import EditLibrary from 'views/university/Library/EditLibrary.jsx';


import Department from 'views/university/Department/Department.jsx';
import AddDepartment from 'views/university/Department/AddDepartment.jsx';
import EditDepartment from 'views/university/Department/EditDepartment.jsx';

import UniversityEvents from 'views/university/Events/UniversityEvents.jsx';
import AddEvent from 'views/university/Events/AddEvent.jsx';

import UniversityMailinbox from 'views/university/Mail/Inbox.jsx';
import UniversityMailcompose from 'views/university/Mail/Compose.jsx';
import UniversityMailview from 'views/university/Mail/View.jsx';

import UniversityReportsDepartment from 'views/university/Reports/ReportsDepartment.jsx'; 
import UniversityReportsStudents from 'views/university/Reports/ReportsStudent.jsx'; 
import UniversityReportsUniversity from 'views/university/Reports/ReportsUniversity.jsx'; 

var BASEDIR = process.env.REACT_APP_BASEDIR;

var dashRoutes = [ 

    //{ path: "#", name: "Main", type: "navgroup"},
    { path: BASEDIR+"/admin/dashboard", name: "Dashboard", icon: "speedometer", badge: "", component: University },

    { 
        path: "#", name: "Users", icon: "user", type: "dropdown", parentid: "users",
            child: [
                { path: BASEDIR+"/admin/users", name: "User"},
                { path: BASEDIR+"/admin/add-user", name: "Add User"},
                { path: BASEDIR+"/admin/edit-user", name: "Edit User"},
                { path: BASEDIR+"/admin/user-profile", name: "User Profile"},
            ]
    },
        { path: BASEDIR+"/admin/users", component: User, type: "child"},
        { path: BASEDIR+"/admin/add-user", component: AddUser, type: "child"},
        { path: BASEDIR+"/admin/edit-user", component: EditUser, type: "child"},
        { path: BASEDIR+"/admin/user-profile", component: UserProfile, type: "child"},

    // { 
    //     path: "#", name: "Clients", icon: "people", type: "dropdown", parentid: "students",
    //         child: [
    //             { path: BASEDIR+"/admin/clients", name: "Clients"},
    //             { path: BASEDIR+"/admin/add-client", name: "Add Client"},
    //             { path: BASEDIR+"/admin/edit-client", name: "Edit Client"},
    //             { path: BASEDIR+"/admin/client-profile", name: "Client Profile"},
    //         ]
    // },
    //     { path: BASEDIR+"/admin/clients", component: Student, type: "child"},
    //     { path: BASEDIR+"/admin/add-client", component: AddStudent, type: "child"},
    //     { path: BASEDIR+"/admin/edit-client", component: EditStudent, type: "child"},
    //     { path: BASEDIR+"/admin/client-profile", component: StudentProfile, type: "child"},

    // { 
    //     path: "#", name: "Staffs", icon: "user-female", type: "dropdown", parentid: "staffs",
    //         child: [
    //             { path: BASEDIR+"/admin/staffs", name: "Staffs"},
    //             { path: BASEDIR+"/admin/add-staff", name: "Add Staff"},
    //             { path: BASEDIR+"/admin/edit-staff", name: "Edit Staff"},
    //             { path: BASEDIR+"/admin/staff-profile", name: "Staff Profile"},
    //         ]
    // },
    //     { path: BASEDIR+"/admin/staffs", component: Staff, type: "child"},
    //     { path: BASEDIR+"/admin/add-staff", component: AddStaff, type: "child"},
    //     { path: BASEDIR+"/admin/edit-staff", component: EditStaff, type: "child"},
    //     { path: BASEDIR+"/admin/staff-profile", component: StaffProfile, type: "child"},


//   { 
//         path: "#", name: "Reports", icon: "chart", type: "dropdown", parentid: "reports",
//         child: [
//                     { path: BASEDIR+"/admin/reports-department", name: "Department"},
//                     { path: BASEDIR+"/admin/reports-students", name: "Students"},
//                     { path: BASEDIR+"/admin/reports-university", name: "University"},
//         ]
//     },
//     { path: BASEDIR+"/admin/reports-department", component: UniversityReportsDepartment, type: "child"},
//     { path: BASEDIR+"/admin/reports-students", component: UniversityReportsStudents, type: "child"},
//     { path: BASEDIR+"/admin/reports-university", component: UniversityReportsUniversity, type: "child"},

//     { path: BASEDIR+"/admin/centres", name: "University Centres", icon: "map", component: UniversityCentres },


    { 
        path: "#", name: "Devices", icon: "folder-alt", type: "dropdown", parentid: "courses",
            child: [
                { path: BASEDIR+"/admin/devices", name: "Devices"},
                { path: BASEDIR+"/admin/add-device", name: "Add Device"},
                { path: BASEDIR+"/admin/edit-device", name: "Edit Device"},
                { path: BASEDIR+"/admin/device-view", name: "View Device"},
            ]
    },
        { path: BASEDIR+"/admin/devices", component: Device, type: "child"},
        { path: BASEDIR+"/admin/add-device", component: AddDevice, type: "child"},
        { path: BASEDIR+"/admin/edit-device", component: EditDevice, type: "child"},
        { path: BASEDIR+"/admin/device-view", component: DeviceView, type: "child"},


    // { 
    //     path: "#", name: "Library", icon: "notebook", type: "dropdown", parentid: "library",
    //         child: [
    //             { path: BASEDIR+"/admin/library", name: "Library Assets"},
    //             { path: BASEDIR+"/admin/add-library", name: "Add Library"},
    //             { path: BASEDIR+"/admin/edit-library", name: "Edit Library"},
    //         ]
    // },
    //     { path: BASEDIR+"/admin/library", component: Library, type: "child"},
    //     { path: BASEDIR+"/admin/add-library", component: AddLibrary, type: "child"},
    //     { path: BASEDIR+"/admin/edit-library", component: EditLibrary, type: "child"},


    // { 
    //     path: "#", name: "Departments", icon: "organization", type: "dropdown", parentid: "departments",
    //         child: [
    //             { path: BASEDIR+"/admin/department", name: "Departments"},
    //             { path: BASEDIR+"/admin/add-department", name: "Add Department"},
    //             { path: BASEDIR+"/admin/edit-department", name: "Edit Department"},
    //         ]
    // },
    //     { path: BASEDIR+"/admin/department", component: Department, type: "child"},
    //     { path: BASEDIR+"/admin/add-department", component: AddDepartment, type: "child"},
    //     { path: BASEDIR+"/admin/edit-department", component: EditDepartment, type: "child"},



    // { 
    //     path: "#", name: "Events", icon: "event", type: "dropdown", parentid: "events",
    //         child: [
    //             { path: BASEDIR+"/admin/events", name: "Events"},
    //             { path: BASEDIR+"/admin/addevent", name: "Add Event"},
    //         ]
    // },
    //     { path: BASEDIR+"/admin/events", component: UniversityEvents, type: "child"},
    //     { path: BASEDIR+"/admin/addevent", component: AddEvent, type: "child"},

    // { 
    //     path: "#", name: "Mail Box", icon: "envelope", type: "dropdown", parentid: "mailbox",
    //     child: [
    //         { path: BASEDIR+"/admin/mail-inbox", name: "Inbox"},
    //         { path: BASEDIR+"/admin/mail-compose", name: "Compose"},
    //         { path: BASEDIR+"/admin/mail-view", name: "View"},
    //     ]
    // },
    // { path: BASEDIR+"/admin/mail-inbox", component: UniversityMailinbox, type: "child"},
    // { path: BASEDIR+"/admin/mail-compose", component: UniversityMailcompose, type: "child"},
    // { path: BASEDIR+"/admin/mail-view", component: UniversityMailview, type: "child"},
    

    // { 
    //     path: "#", name: "Multi Purpose", icon: "layers", type: "dropdown", parentid: "multipurpose",
    //         child: [
    //             { path: BASEDIR+"/dashboard", name: "General"},
    //             { path: BASEDIR+"/hospital/dashboard", name: "Hospital"},
    //             { path: BASEDIR+"/music/dashboard", name: "Music"},
    //             { path: BASEDIR+"/crm/dashboard", name: "CRM"},
    //             { path: BASEDIR+"/social/dashboard", name: "Social Media"},
    //             { path: BASEDIR+"/freelance/dashboard", name: "Freelance"},
    //             { path: BASEDIR+"/admin/dashboard", name: "University"},
    //             { path: BASEDIR+"/ecommerce/dashboard", name: "Ecommerce"},
    //             { path: BASEDIR+"/blog/dashboard", name: "Blog"},
    //         ]
    // },

    //     { path: BASEDIR+"/dashboard", component: General, type: "child"},
    //     { path: BASEDIR+"/hospital/dashboard", component: Hospital, type: "child"},
    //     { path: BASEDIR+"/music/dashboard", component: Music, type: "child"},
    //     { path: BASEDIR+"/crm/dashboard", component: Crm, type: "child"},
    //     { path: BASEDIR+"/social/dashboard", component: Social, type: "child"},
    //     { path: BASEDIR+"/freelance/dashboard", component: Freelance, type: "child"},
    //     { path: BASEDIR+"/admin/dashboard", component: University, type: "child"},
    //     { path: BASEDIR+"/ecommerce/dashboard", component: Ecommerce, type: "child"},
    //     { path: BASEDIR+"/blog/dashboard", component: Blog, type: "child"},

    //{ redirect: true, path: BASEDIR+"/", pathTo: "/dashboard", name: "Dashboard" }

];
export default dashRoutes;
