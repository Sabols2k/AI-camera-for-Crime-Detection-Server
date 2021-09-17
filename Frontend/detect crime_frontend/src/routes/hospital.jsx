import General from 'views/general/Dashboard/General.jsx';
import Hospital from 'views/hospital/Dashboard/Hospital.jsx';
import Music from 'views/music/Dashboard/Music.jsx';
import Crm from 'views/crm/Dashboard/Crm.jsx';
import Social from 'views/social/Dashboard/Social.jsx';
import Freelance from 'views/freelance/Dashboard/Freelance.jsx';
import University from 'views/university/Dashboard/University.jsx';
import Ecommerce from 'views/ecommerce/Dashboard/Ecommerce.jsx';
import Blog from 'views/blog/Dashboard/Blog.jsx';

import Doctor from 'views/hospital/Doctor/Doctor.jsx';
import AddDoctor from 'views/hospital/Doctor/AddDoctor.jsx';
import EditDoctor from 'views/hospital/Doctor/EditDoctor.jsx';
import DoctorProfile from 'views/hospital/Doctor/DoctorProfile.jsx';

import Patient from 'views/hospital/Patient/Patient.jsx';
import AddPatient from 'views/hospital/Patient/AddPatient.jsx';
import EditPatient from 'views/hospital/Patient/EditPatient.jsx';
import PatientProfile from 'views/hospital/Patient/PatientProfile.jsx';

import DoctorCalendar from 'views/hospital/Appointment/DoctorCalendar.jsx';
import BookSlot from 'views/hospital/Appointment/BookSlot.jsx';

import Staff from 'views/hospital/Staff/Staff.jsx';
import AddStaff from 'views/hospital/Staff/AddStaff.jsx';
import EditStaff from 'views/hospital/Staff/EditStaff.jsx';
import StaffProfile from 'views/hospital/Staff/StaffProfile.jsx';

import HospitalEvents from 'views/hospital/Events/HospitalEvents.jsx';
import AddEvent from 'views/hospital/Events/AddEvent.jsx';

import HospitalPayments from 'views/hospital/Billing/HospitalPayments.jsx';
import HospitalInvoice from 'views/hospital/Billing/HospitalInvoice.jsx';
import HospitalAddPayment from 'views/hospital/Billing/HospitalAddPayment.jsx';
import HospitalLocations from 'views/hospital/Locations/HospitalLocations.jsx';

import HospitalMailinbox from 'views/hospital/Mail/Inbox.jsx';
import HospitalMailcompose from 'views/hospital/Mail/Compose.jsx';
import HospitalMailview from 'views/hospital/Mail/View.jsx';

import HospitalReportsHospital from 'views/hospital/Reports/ReportHospital.jsx'; 
import HospitalReportsPatient from 'views/hospital/Reports/ReportPatients.jsx'; 
import HospitalReportsSales from 'views/hospital/Reports/ReportSales.jsx'; 
import HospitalReportsStats from 'views/hospital/Reports/ReportStats.jsx'; 

var BASEDIR = process.env.REACT_APP_BASEDIR;

var dashRoutes = [ 

    //{ path: "#", name: "Main", type: "navgroup"},
    { path: BASEDIR+"/hospital/dashboard", name: "Dashboard", icon: "speedometer", badge: "", component: Hospital },


    { 
        path: "#", name: "Doctors", icon: "user", type: "dropdown", parentid:"doctors",
            child: [
                { path: BASEDIR+"/hospital/doctors", name: "Doctors"},
                { path: BASEDIR+"/hospital/add-doctor", name: "Add Doctor"},
                { path: BASEDIR+"/hospital/edit-doctor", name: "Edit Doctor"},
                { path: BASEDIR+"/hospital/doctor-profile", name: "Doctor Profile"},
            ]
    },
        { path: BASEDIR+"/hospital/doctors", component: Doctor, type: "child"},
        { path: BASEDIR+"/hospital/add-doctor", component: AddDoctor, type: "child"},
        { path: BASEDIR+"/hospital/edit-doctor", component: EditDoctor, type: "child"},
        { path: BASEDIR+"/hospital/doctor-profile", component: DoctorProfile, type: "child"},

    { 
        path: "#", name: "Patients", icon: "people", type: "dropdown", parentid:"partients",
            child: [
                { path: BASEDIR+"/hospital/patients", name: "Patients"},
                { path: BASEDIR+"/hospital/add-patient", name: "Add Patient"},
                { path: BASEDIR+"/hospital/edit-patient", name: "Edit Patient"},
                { path: BASEDIR+"/hospital/patient-profile", name: "Patient Profile"},
            ]
    },
        { path: BASEDIR+"/hospital/patients", component: Patient, type: "child"},
        { path: BASEDIR+"/hospital/add-patient", component: AddPatient, type: "child"},
        { path: BASEDIR+"/hospital/edit-patient", component: EditPatient, type: "child"},
        { path: BASEDIR+"/hospital/patient-profile", component: PatientProfile, type: "child"},

    { 
        path: "#", name: "Appointments", icon: "calendar", type: "dropdown", parentid:"appointments",
            child: [
                { path: BASEDIR+"/hospital/doctor-schedule", name: "Doctor Schedule"},
                { path: BASEDIR+"/hospital/book-slot", name: "Book a slot"},
            ]
    },
        { path: BASEDIR+"/hospital/doctor-schedule", component: DoctorCalendar, type: "child"},
        { path: BASEDIR+"/hospital/book-slot", component: BookSlot, type: "child"},
 
    { 
        path: "#", name: "Reports", icon: "pie-chart", type: "dropdown", parentid:"reports",
        child: [
                    { path: BASEDIR+"/hospital/reports-hospital", name: "Hospital"},
                    { path: BASEDIR+"/hospital/reports-patient", name: "Patients"},
                    { path: BASEDIR+"/hospital/reports-sales", name: "Sales"},
                    { path: BASEDIR+"/hospital/reports-stats", name: "Statistics"},
        ]
    },
    { path: BASEDIR+"/hospital/reports-hospital", component: HospitalReportsHospital, type: "child"},
    { path: BASEDIR+"/hospital/reports-patient", component: HospitalReportsPatient, type: "child"},
    { path: BASEDIR+"/hospital/reports-sales", component: HospitalReportsSales, type: "child"},
    { path: BASEDIR+"/hospital/reports-stats", component: HospitalReportsStats, type: "child"},

 { 
        path: "#", name: "Billing", icon: "wallet", type: "dropdown", parentid:"billing",
            child: [
                { path: BASEDIR+"/hospital/payments", name: "Payments"},
                { path: BASEDIR+"/hospital/addpayment", name: "Add Payment"},
                { path: BASEDIR+"/hospital/invoice", name: "Invoice"},
            ]
    },
        { path: BASEDIR+"/hospital/payments", component: HospitalPayments, type: "child"},
        { path: BASEDIR+"/hospital/addpayment", component: HospitalAddPayment, type: "child"},
        { path: BASEDIR+"/hospital/invoice", component: HospitalInvoice, type: "child"},

    { 
        path: "#", name: "Staffs", icon: "user-female", type: "dropdown", parentid:"staffs",
            child: [
                { path: BASEDIR+"/hospital/staffs", name: "Staffs"},
                { path: BASEDIR+"/hospital/add-staff", name: "Add Staff"},
                { path: BASEDIR+"/hospital/edit-staff", name: "Edit Staff"},
                { path: BASEDIR+"/hospital/staff-profile", name: "Staff Profile"},
            ]
    },
        { path: BASEDIR+"/hospital/staffs", component: Staff, type: "child"},
        { path: BASEDIR+"/hospital/add-staff", component: AddStaff, type: "child"},
        { path: BASEDIR+"/hospital/edit-staff", component: EditStaff, type: "child"},
        { path: BASEDIR+"/hospital/staff-profile", component: StaffProfile, type: "child"},

    { 
        path: "#", name: "Events", icon: "event", type: "dropdown", parentid:"events",
            child: [
                { path: BASEDIR+"/hospital/events", name: "Events"},
                { path: BASEDIR+"/hospital/addevent", name: "Add Event"},
            ]
    },
        { path: BASEDIR+"/hospital/events", component: HospitalEvents, type: "child"},
        { path: BASEDIR+"/hospital/addevent", component: AddEvent, type: "child"},

   
    { path: BASEDIR+"/hospital/locations", name: "Locations", icon: "directions", component: HospitalLocations },


    { 
        path: "#", name: "Mail Box", icon: "envelope", type: "dropdown", parentid:"mailbox",
        child: [
            { path: BASEDIR+"/hospital/mail-inbox", name: "Inbox"},
            { path: BASEDIR+"/hospital/mail-compose", name: "Compose"},
            { path: BASEDIR+"/hospital/mail-view", name: "View"},
        ]
    },
    { path: BASEDIR+"/hospital/mail-inbox", component: HospitalMailinbox, type: "child"},
    { path: BASEDIR+"/hospital/mail-compose", component: HospitalMailcompose, type: "child"},
    { path: BASEDIR+"/hospital/mail-view", component: HospitalMailview, type: "child"},

    { 
        path: "#", name: "Multi Purpose", icon: "layers", type: "dropdown", parentid:"multipurpose",
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
