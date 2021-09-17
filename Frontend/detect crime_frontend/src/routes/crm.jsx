import General from 'views/general/Dashboard/General.jsx';
import Hospital from 'views/hospital/Dashboard/Hospital.jsx';
import Music from 'views/music/Dashboard/Music.jsx';
import Crm from 'views/crm/Dashboard/Crm.jsx';
import Social from 'views/social/Dashboard/Social.jsx';
import Freelance from 'views/freelance/Dashboard/Freelance.jsx';
import University from 'views/university/Dashboard/University.jsx';
import Ecommerce from 'views/ecommerce/Dashboard/Ecommerce.jsx';
import Blog from 'views/blog/Dashboard/Blog.jsx';

import Lead from 'views/crm/Lead/Lead.jsx';
import AddLead from 'views/crm/Lead/AddLead.jsx';
import EditLead from 'views/crm/Lead/EditLead.jsx';

import Vendor from 'views/crm/Vendor/Vendor.jsx';
import AddVendor from 'views/crm/Vendor/AddVendor.jsx';
import EditVendor from 'views/crm/Vendor/EditVendor.jsx';

import Contact from 'views/crm/Contact/Contact.jsx';
import AddContact from 'views/crm/Contact/AddContact.jsx';
import EditContact from 'views/crm/Contact/EditContact.jsx';

import User from 'views/crm/User/User.jsx';
import AddUser from 'views/crm/User/AddUser.jsx';
import EditUser from 'views/crm/User/EditUser.jsx';

import Customer from 'views/crm/Customer/Customer.jsx';
import AddCustomer from 'views/crm/Customer/AddCustomer.jsx';
import EditCustomer from 'views/crm/Customer/EditCustomer.jsx';


import Quote from 'views/crm/Quote/Quote.jsx';
import AddQuote from 'views/crm/Quote/AddQuote.jsx';
import EditQuote from 'views/crm/Quote/EditQuote.jsx';

import Invoice from 'views/crm/Invoice/Invoice.jsx';
import AddInvoice from 'views/crm/Invoice/AddInvoice.jsx';
import EditInvoice from 'views/crm/Invoice/EditInvoice.jsx';


import Ticket from 'views/crm/Ticket/Ticket.jsx';
import AddTicket from 'views/crm/Ticket/AddTicket.jsx';
import EditTicket from 'views/crm/Ticket/EditTicket.jsx';

import CrmMailinbox from 'views/crm/Mail/Inbox.jsx';
import CrmMailcompose from 'views/crm/Mail/Compose.jsx';
import CrmMailview from 'views/crm/Mail/View.jsx';

import CrmEvents from 'views/crm/Events/CrmEvents.jsx';
import AddEvent from 'views/crm/Events/AddEvent.jsx';

import CrmReportsSales from 'views/crm/Reports/ReportsSales.jsx'; 
import CrmReportsCustomers from 'views/crm/Reports/ReportsCustomers.jsx'; 
import CrmReportsTargets from 'views/crm/Reports/ReportsTargets.jsx'; 
import CrmReportsVendors from 'views/crm/Reports/ReportsVendors.jsx'; 

var BASEDIR = process.env.REACT_APP_BASEDIR;

var dashRoutes = [ 

    //{ path: "#", name: "Main", type: "navgroup"},
    { path: BASEDIR+"/crm/dashboard", name: "Dashboard", icon: "speedometer", badge: "", component: Crm },

    { 
        path: "#", name: "Customers", icon: "people", type: "dropdown", parentid: "customers",
            child: [
                { path: BASEDIR+"/crm/customers", name: "Customers"},
                { path: BASEDIR+"/crm/add-customer", name: "Add Customer"},
                { path: BASEDIR+"/crm/edit-customer", name: "Edit Customer"},
            ]
    },
        { path: BASEDIR+"/crm/customers", component: Customer, type: "child"},
        { path: BASEDIR+"/crm/add-customer", component: AddCustomer, type: "child"},
        { path: BASEDIR+"/crm/edit-customer", component: EditCustomer, type: "child"},


    { 
        path: "#", name: "Leads", icon: "eyeglass", type: "dropdown", parentid: "leads",
            child: [
                { path: BASEDIR+"/crm/leads", name: "Leads"},
                { path: BASEDIR+"/crm/add-lead", name: "Add Lead"},
                { path: BASEDIR+"/crm/edit-lead", name: "Edit Lead"},
            ]
    },
        { path: BASEDIR+"/crm/leads", component: Lead, type: "child"},
        { path: BASEDIR+"/crm/add-lead", component: AddLead, type: "child"},
        { path: BASEDIR+"/crm/edit-lead", component: EditLead, type: "child"},


    { 
        path: "#", name: "Vendors", icon: "user", type: "dropdown", parentid: "vendors",
            child: [
                { path: BASEDIR+"/crm/vendors", name: "Vendors"},
                { path: BASEDIR+"/crm/add-vendor", name: "Add Vendor"},
                { path: BASEDIR+"/crm/edit-vendor", name: "Edit Vendor"},
            ]
    },
        { path: BASEDIR+"/crm/vendors", component: Vendor, type: "child"},
        { path: BASEDIR+"/crm/add-vendor", component: AddVendor, type: "child"},
        { path: BASEDIR+"/crm/edit-vendor", component: EditVendor, type: "child"},


    { 
        path: "#", name: "Reports", icon: "chart", type: "dropdown", parentid: "reports",
        child: [
                    { path: BASEDIR+"/crm/reports-sales", name: "Sales"},
                    { path: BASEDIR+"/crm/reports-customers", name: "Customers"},
                    { path: BASEDIR+"/crm/reports-targets", name: "Targets"},
                    { path: BASEDIR+"/crm/reports-vendors", name: "Vendors"},
        ]
    },
    { path: BASEDIR+"/crm/reports-sales", component: CrmReportsSales, type: "child"},
    { path: BASEDIR+"/crm/reports-customers", component: CrmReportsCustomers, type: "child"},
    { path: BASEDIR+"/crm/reports-targets", component: CrmReportsTargets, type: "child"},
    { path: BASEDIR+"/crm/reports-vendors", component: CrmReportsVendors, type: "child"},




    { 
        path: "#", name: "Quotes", icon: "note", type: "dropdown", parentid: "quotes",
            child: [
                { path: BASEDIR+"/crm/quotes", name: "Quotes"},
                { path: BASEDIR+"/crm/add-quote", name: "Add Quote"},
                { path: BASEDIR+"/crm/edit-quote", name: "Edit Quote"},
            ]
    },
        { path: BASEDIR+"/crm/quotes", component: Quote, type: "child"},
        { path: BASEDIR+"/crm/add-quote", component: AddQuote, type: "child"},
        { path: BASEDIR+"/crm/edit-quote", component: EditQuote, type: "child"},

    { 
        path: "#", name: "Invoices", icon: "wallet", type: "dropdown", parentid: "invoices",
            child: [
                { path: BASEDIR+"/crm/invoices", name: "Invoices"},
                { path: BASEDIR+"/crm/add-invoice", name: "Add Invoice"},
                { path: BASEDIR+"/crm/edit-invoice", name: "Edit Invoice"},
            ]
    },
        { path: BASEDIR+"/crm/invoices", component: Invoice, type: "child"},
        { path: BASEDIR+"/crm/add-invoice", component: AddInvoice, type: "child"},
        { path: BASEDIR+"/crm/edit-invoice", component: EditInvoice, type: "child"},


    { 
        path: "#", name: "Tickets", icon: "question", type: "dropdown", parentid: "tickets",
            child: [
                { path: BASEDIR+"/crm/tickets", name: "Tickets"},
                { path: BASEDIR+"/crm/add-ticket", name: "Add Ticket"},
                { path: BASEDIR+"/crm/edit-ticket", name: "Edit Ticket"},
            ]
    },
        { path: BASEDIR+"/crm/tickets", component: Ticket, type: "child"},
        { path: BASEDIR+"/crm/add-ticket", component: AddTicket, type: "child"},
        { path: BASEDIR+"/crm/edit-ticket", component: EditTicket, type: "child"},


    { 
        path: "#", name: "Contacts", icon: "phone", type: "dropdown", parentid: "contacts",
            child: [
                { path: BASEDIR+"/crm/contacts", name: "Contacts"},
                { path: BASEDIR+"/crm/add-contact", name: "Add Contact"},
                { path: BASEDIR+"/crm/edit-contact", name: "Edit Contact"},
            ]
    },
        { path: BASEDIR+"/crm/contacts", component: Contact, type: "child"},
        { path: BASEDIR+"/crm/add-contact", component: AddContact, type: "child"},
        { path: BASEDIR+"/crm/edit-contact", component: EditContact, type: "child"},

    { 
        path: "#", name: "Users", icon: "user-female", type: "dropdown", parentid: "users",
            child: [
                { path: BASEDIR+"/crm/users", name: "Users"},
                { path: BASEDIR+"/crm/add-user", name: "Add User"},
                { path: BASEDIR+"/crm/edit-user", name: "Edit User"},
            ]
    },
        { path: BASEDIR+"/crm/users", component: User, type: "child"},
        { path: BASEDIR+"/crm/add-user", component: AddUser, type: "child"},
        { path: BASEDIR+"/crm/edit-user", component: EditUser, type: "child"},


    { 
        path: "#", name: "Events", icon: "event", type: "dropdown", parentid: "events",
            child: [
                { path: BASEDIR+"/crm/events", name: "Events"},
                { path: BASEDIR+"/crm/addevent", name: "Add Event"},
            ]
    },
        { path: BASEDIR+"/crm/events", component: CrmEvents, type: "child"},
        { path: BASEDIR+"/crm/addevent", component: AddEvent, type: "child"},

    { 
        path: "#", name: "Mail Box", icon: "envelope", type: "dropdown", parentid: "mailbox",
        child: [
            { path: BASEDIR+"/crm/mail-inbox", name: "Inbox"},
            { path: BASEDIR+"/crm/mail-compose", name: "Compose"},
            { path: BASEDIR+"/crm/mail-view", name: "View"},
        ]
    },
    { path: BASEDIR+"/crm/mail-inbox", component: CrmMailinbox, type: "child"},
    { path: BASEDIR+"/crm/mail-compose", component: CrmMailcompose, type: "child"},
    { path: BASEDIR+"/crm/mail-view", component: CrmMailview, type: "child"},
    
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
