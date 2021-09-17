import General from 'views/general/Dashboard/General.jsx';
import Hospital from 'views/hospital/Dashboard/Hospital.jsx';
import Music from 'views/music/Dashboard/Music.jsx';
import Crm from 'views/crm/Dashboard/Crm.jsx';
import Social from 'views/social/Dashboard/Social.jsx';
import Freelance from 'views/freelance/Dashboard/Freelance.jsx';
import University from 'views/university/Dashboard/University.jsx';
import Ecommerce from 'views/ecommerce/Dashboard/Ecommerce.jsx';
import Blog from 'views/blog/Dashboard/Blog.jsx';



import Buyer from 'views/freelance/Buyer/Buyer.jsx';
import AddBuyer from 'views/freelance/Buyer/AddBuyer.jsx';
import EditBuyer from 'views/freelance/Buyer/EditBuyer.jsx';


import Seller from 'views/freelance/Seller/Seller.jsx';
import AddSeller from 'views/freelance/Seller/AddSeller.jsx';
import EditSeller from 'views/freelance/Seller/EditSeller.jsx';

import User from 'views/freelance/User/User.jsx';
import AddUser from 'views/freelance/User/AddUser.jsx';
import EditUser from 'views/freelance/User/EditUser.jsx';

import Invoice from 'views/freelance/Invoice/Invoice.jsx';
import AddInvoice from 'views/freelance/Invoice/AddInvoice.jsx';
import EditInvoice from 'views/freelance/Invoice/EditInvoice.jsx';


import Ticket from 'views/freelance/Ticket/Ticket.jsx';
import AddTicket from 'views/freelance/Ticket/AddTicket.jsx';
import EditTicket from 'views/freelance/Ticket/EditTicket.jsx';

import FreelanceMailinbox from 'views/freelance/Mail/Inbox.jsx';
import FreelanceMailcompose from 'views/freelance/Mail/Compose.jsx';
import FreelanceMailview from 'views/freelance/Mail/View.jsx';

import Bid from 'views/freelance/Bid/Bid.jsx';
import AddBid from 'views/freelance/Bid/AddBid.jsx';
import EditBid from 'views/freelance/Bid/EditBid.jsx';

import FreelanceReportsProjects from 'views/freelance/Reports/ReportsProjects.jsx'; 
import FreelanceReportsBuyers from 'views/freelance/Reports/ReportsBuyers.jsx'; 
import FreelanceReportsTargets from 'views/freelance/Reports/ReportsTargets.jsx'; 


var BASEDIR = process.env.REACT_APP_BASEDIR;

var dashRoutes = [ 

    //{ path: "#", name: "Main", type: "navgroup"},
    { path: BASEDIR+"/freelance/dashboard", name: "Dashboard", icon: "speedometer", badge: "", component: Freelance },

    { 
        path: "#", name: "Buyers", icon: "people", type: "dropdown", parentid: "buyers",
            child: [
                { path: BASEDIR+"/freelance/buyers", name: "Buyers"},
                { path: BASEDIR+"/freelance/add-buyer", name: "Add Buyer"},
                { path: BASEDIR+"/freelance/edit-buyer", name: "Edit Buyer"},
            ]
    },
        { path: BASEDIR+"/freelance/buyers", component: Buyer, type: "child"},
        { path: BASEDIR+"/freelance/add-buyer", component: AddBuyer, type: "child"},
        { path: BASEDIR+"/freelance/edit-buyer", component: EditBuyer, type: "child"},

    { 
        path: "#", name: "Sellers", icon: "user", type: "dropdown", parentid: "sellers",
            child: [
                { path: BASEDIR+"/freelance/sellers", name: "Sellers"},
                { path: BASEDIR+"/freelance/add-seller", name: "Add Seller"},
                { path: BASEDIR+"/freelance/edit-seller", name: "Edit Seller"},
            ]
    },
        { path: BASEDIR+"/freelance/sellers", component: Seller, type: "child"},
        { path: BASEDIR+"/freelance/add-seller", component: AddSeller, type: "child"},
        { path: BASEDIR+"/freelance/edit-seller", component: EditSeller, type: "child"},

    { 
        path: "#", name: "Billing", icon: "wallet", type: "dropdown", parentid: "billing",
            child: [
                { path: BASEDIR+"/freelance/invoices", name: "Invoices"},
                { path: BASEDIR+"/freelance/add-invoice", name: "Add Invoice"},
                { path: BASEDIR+"/freelance/edit-invoice", name: "Edit Invoice"},
            ]
    },
        { path: BASEDIR+"/freelance/invoices", component: Invoice, type: "child"},
        { path: BASEDIR+"/freelance/add-invoice", component: AddInvoice, type: "child"},
        { path: BASEDIR+"/freelance/edit-invoice", component: EditInvoice, type: "child"},

    { 
        path: "#", name: "Project Bids", icon: "note", type: "dropdown", parentid: "projectbids",
            child: [
                { path: BASEDIR+"/freelance/bids", name: "Bids"},
                { path: BASEDIR+"/freelance/add-bid", name: "Add Bid"},
                { path: BASEDIR+"/freelance/edit-bid", name: "Edit Bid"},
            ]
    },
        { path: BASEDIR+"/freelance/bids", component: Bid, type: "child"},
        { path: BASEDIR+"/freelance/add-bid", component: AddBid, type: "child"},
        { path: BASEDIR+"/freelance/edit-bid", component: EditBid, type: "child"},


    { 
        path: "#", name: "Reports", icon: "graph", type: "dropdown", parentid: "reports",
        child: [
                    { path: BASEDIR+"/freelance/reports-projects", name: "Projects"},
                    { path: BASEDIR+"/freelance/reports-buyers", name: "Buyers"},
                    { path: BASEDIR+"/freelance/reports-targets", name: "Targets"},
        ]
    },
    { path: BASEDIR+"/freelance/reports-projects", component: FreelanceReportsProjects, type: "child"},
    { path: BASEDIR+"/freelance/reports-buyers", component: FreelanceReportsBuyers, type: "child"},
    { path: BASEDIR+"/freelance/reports-targets", component: FreelanceReportsTargets, type: "child"},


    { 
        path: "#", name: "Tickets", icon: "question", type: "dropdown", parentid: "tickets",
            child: [
                { path: BASEDIR+"/freelance/tickets", name: "Tickets"},
                { path: BASEDIR+"/freelance/add-ticket", name: "Add Ticket"},
                { path: BASEDIR+"/freelance/edit-ticket", name: "Edit Ticket"},
            ]
    },
        { path: BASEDIR+"/freelance/tickets", component: Ticket, type: "child"},
        { path: BASEDIR+"/freelance/add-ticket", component: AddTicket, type: "child"},
        { path: BASEDIR+"/freelance/edit-ticket", component: EditTicket, type: "child"},

    { 
        path: "#", name: "Users", icon: "user-female", type: "dropdown", parentid: "users",
            child: [
                { path: BASEDIR+"/freelance/users", name: "Users"},
                { path: BASEDIR+"/freelance/add-user", name: "Add User"},
                { path: BASEDIR+"/freelance/edit-user", name: "Edit User"},
            ]
    },
        { path: BASEDIR+"/freelance/users", component: User, type: "child"},
        { path: BASEDIR+"/freelance/add-user", component: AddUser, type: "child"},
        { path: BASEDIR+"/freelance/edit-user", component: EditUser, type: "child"},

    { 
        path: "#", name: "Mail Box", icon: "envelope", type: "dropdown", parentid: "mailbox",
        child: [
            { path: BASEDIR+"/freelance/mail-inbox", name: "Inbox"},
            { path: BASEDIR+"/freelance/mail-compose", name: "Compose"},
            { path: BASEDIR+"/freelance/mail-view", name: "View"},
        ]
    },
    { path: BASEDIR+"/freelance/mail-inbox", component: FreelanceMailinbox, type: "child"},
    { path: BASEDIR+"/freelance/mail-compose", component: FreelanceMailcompose, type: "child"},
    { path: BASEDIR+"/freelance/mail-view", component: FreelanceMailview, type: "child"},
   

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
