import General from 'views/general/Dashboard/General.jsx';
import Hospital from 'views/hospital/Dashboard/Hospital.jsx';
import Music from 'views/music/Dashboard/Music.jsx';
import Crm from 'views/crm/Dashboard/Crm.jsx';
import Social from 'views/social/Dashboard/Social.jsx';
import Freelance from 'views/freelance/Dashboard/Freelance.jsx';
import University from 'views/university/Dashboard/University.jsx';
import Ecommerce from 'views/ecommerce/Dashboard/Ecommerce.jsx';
import Blog from 'views/blog/Dashboard/Blog.jsx';

import Product from 'views/ecommerce/Product/Product.jsx';
import AddProduct from 'views/ecommerce/Product/AddProduct.jsx';
import EditProduct from 'views/ecommerce/Product/EditProduct.jsx';

import Customer from 'views/ecommerce/Customer/Customer.jsx';
import AddCustomer from 'views/ecommerce/Customer/AddCustomer.jsx';
import EditCustomer from 'views/ecommerce/Customer/EditCustomer.jsx';

import Vendor from 'views/ecommerce/Vendor/Vendor.jsx';
import AddVendor from 'views/ecommerce/Vendor/AddVendor.jsx';
import EditVendor from 'views/ecommerce/Vendor/EditVendor.jsx';

import User from 'views/ecommerce/User/User.jsx';
import AddUser from 'views/ecommerce/User/AddUser.jsx';
import EditUser from 'views/ecommerce/User/EditUser.jsx';

import EcommerceMailinbox from 'views/ecommerce/Mail/Inbox.jsx';
import EcommerceMailcompose from 'views/ecommerce/Mail/Compose.jsx';
import EcommerceMailview from 'views/ecommerce/Mail/View.jsx';


import Invoice from 'views/ecommerce/Invoice/Invoice.jsx';
import AddInvoice from 'views/ecommerce/Invoice/AddInvoice.jsx';
import EditInvoice from 'views/ecommerce/Invoice/EditInvoice.jsx';
import EcommerceInvoice from 'views/ecommerce/Invoice/EcommerceInvoice.jsx';

import Order from 'views/ecommerce/Order/Order.jsx';
import AddOrder from 'views/ecommerce/Order/AddOrder.jsx';
import EditOrder from 'views/ecommerce/Order/EditOrder.jsx';

import Tag from 'views/ecommerce/Tag/Tag.jsx';
import AddTag from 'views/ecommerce/Tag/AddTag.jsx';
import EditTag from 'views/ecommerce/Tag/EditTag.jsx';

import Category from 'views/ecommerce/Category/Category.jsx';
import AddCategory from 'views/ecommerce/Category/AddCategory.jsx';
import EditCategory from 'views/ecommerce/Category/EditCategory.jsx';

import EcommerceSettings from 'views/ecommerce/Settings/Settings.jsx';


import EcommerceReportsSales from 'views/ecommerce/Reports/ReportsSales.jsx'; 
import EcommerceReportsVisitors from 'views/ecommerce/Reports/ReportsVisitors.jsx'; 
import EcommerceReportsTargets from 'views/ecommerce/Reports/ReportsTargets.jsx'; 


var BASEDIR = process.env.REACT_APP_BASEDIR;

var dashRoutes = [ 

    //{ path: "#", name: "Main", type: "navgroup"},
    { path: BASEDIR+"/ecommerce/dashboard", name: "Dashboard", icon: "speedometer", badge: "", component: Ecommerce },


    { 
        path: "#", name: "Products", icon: "energy", type: "dropdown", parentid: "products",
            child: [
                { path: BASEDIR+"/ecommerce/products", name: "Products"},
                { path: BASEDIR+"/ecommerce/add-product", name: "Add Product"},
                { path: BASEDIR+"/ecommerce/edit-product", name: "Edit Product"},
            ]
    },
        { path: BASEDIR+"/ecommerce/products", component: Product, type: "child"},
        { path: BASEDIR+"/ecommerce/add-product", component: AddProduct, type: "child"},
        { path: BASEDIR+"/ecommerce/edit-product", component: EditProduct, type: "child"},


    { 
        path: "#", name: "Customers", icon: "people", type: "dropdown", parentid: "customers",
            child: [
                { path: BASEDIR+"/ecommerce/customers", name: "Customers"},
                { path: BASEDIR+"/ecommerce/add-customer", name: "Add Customer"},
                { path: BASEDIR+"/ecommerce/edit-customer", name: "Edit Customer"},
            ]
    },
        { path: BASEDIR+"/ecommerce/customers", component: Customer, type: "child"},
        { path: BASEDIR+"/ecommerce/add-customer", component: AddCustomer, type: "child"},
        { path: BASEDIR+"/ecommerce/edit-customer", component: EditCustomer, type: "child"},



    { 
        path: "#", name: "Vendors", icon: "user", type: "dropdown", parentid: "vendors",
            child: [
                { path: BASEDIR+"/ecommerce/vendors", name: "Vendors"},
                { path: BASEDIR+"/ecommerce/add-vendor", name: "Add Vendor"},
                { path: BASEDIR+"/ecommerce/edit-vendor", name: "Edit Vendor"},
            ]
    },
        { path: BASEDIR+"/ecommerce/vendors", component: Vendor, type: "child"},
        { path: BASEDIR+"/ecommerce/add-vendor", component: AddVendor, type: "child"},
        { path: BASEDIR+"/ecommerce/edit-vendor", component: EditVendor, type: "child"},



    { 
        path: "#", name: "Billing", icon: "wallet", type: "dropdown", parentid: "billing",
            child: [
                { path: BASEDIR+"/ecommerce/invoices", name: "Invoices"},
                { path: BASEDIR+"/ecommerce/add-invoice", name: "Add Invoice"},
                { path: BASEDIR+"/ecommerce/edit-invoice", name: "Edit Invoice"},
                { path: BASEDIR+"/ecommerce/invoice", name: "View Invoice"},
            ]
    },
        { path: BASEDIR+"/ecommerce/invoices", component: Invoice, type: "child"},
        { path: BASEDIR+"/ecommerce/add-invoice", component: AddInvoice, type: "child"},
        { path: BASEDIR+"/ecommerce/edit-invoice", component: EditInvoice, type: "child"},
        { path: BASEDIR+"/ecommerce/invoice", component: EcommerceInvoice, type: "child"},

    { 
        path: "#", name: "Orders", icon: "credit-card", type: "dropdown", parentid: "orders",
            child: [
                { path: BASEDIR+"/ecommerce/orders", name: "Orders"},
                { path: BASEDIR+"/ecommerce/add-order", name: "Add Order"},
                { path: BASEDIR+"/ecommerce/edit-order", name: "Edit Order"},
            ]
    },
        { path: BASEDIR+"/ecommerce/orders", component: Order, type: "child"},
        { path: BASEDIR+"/ecommerce/add-order", component: AddOrder, type: "child"},
        { path: BASEDIR+"/ecommerce/edit-order", component: EditOrder, type: "child"},

    { 
        path: "#", name: "Reports", icon: "chart", type: "dropdown", parentid: "reports",
        child: [
                    { path: BASEDIR+"/ecommerce/reports-sales", name: "Sales"},
                    { path: BASEDIR+"/ecommerce/reports-visitors", name: "Visitors"},
                    { path: BASEDIR+"/ecommerce/reports-targets", name: "Targets"},
        ]
    },
    { path: BASEDIR+"/ecommerce/reports-sales", component: EcommerceReportsSales, type: "child"},
    { path: BASEDIR+"/ecommerce/reports-visitors", component: EcommerceReportsVisitors, type: "child"},
    { path: BASEDIR+"/ecommerce/reports-targets", component: EcommerceReportsTargets, type: "child"},


    { 
        path: "#", name: "Users", icon: "user-female", type: "dropdown", parentid: "users",
            child: [
                { path: BASEDIR+"/ecommerce/users", name: "Users"},
                { path: BASEDIR+"/ecommerce/add-user", name: "Add User"},
                { path: BASEDIR+"/ecommerce/edit-user", name: "Edit User"},
            ]
    },
        { path: BASEDIR+"/ecommerce/users", component: User, type: "child"},
        { path: BASEDIR+"/ecommerce/add-user", component: AddUser, type: "child"},
        { path: BASEDIR+"/ecommerce/edit-user", component: EditUser, type: "child"},

    { 
        path: "#", name: "Product Tags", icon: "tag", type: "dropdown", parentid: "tags",
            child: [
                { path: BASEDIR+"/ecommerce/tag", name: "Tags"},
                { path: BASEDIR+"/ecommerce/add-tag", name: "Add Tag"},
                { path: BASEDIR+"/ecommerce/edit-tag", name: "Edit Tag"},
            ]
    },
        { path: BASEDIR+"/ecommerce/tag", component: Tag, type: "child"},
        { path: BASEDIR+"/ecommerce/add-tag", component: AddTag, type: "child"},
        { path: BASEDIR+"/ecommerce/edit-tag", component: EditTag, type: "child"},

    { 
        path: "#", name: "Product Categories", icon: "folder-alt", type: "dropdown", parentid: "categories",
            child: [
                { path: BASEDIR+"/ecommerce/category", name: "Categories"},
                { path: BASEDIR+"/ecommerce/add-category", name: "Add Category"},
                { path: BASEDIR+"/ecommerce/edit-category", name: "Edit Category"},
            ]
    },
        { path: BASEDIR+"/ecommerce/category", component: Category, type: "child"},
        { path: BASEDIR+"/ecommerce/add-category", component: AddCategory, type: "child"},
        { path: BASEDIR+"/ecommerce/edit-category", component: EditCategory, type: "child"},



    { 
        path: "#", name: "Mail Box", icon: "envelope", type: "dropdown", parentid: "mailbox",
        child: [
            { path: BASEDIR+"/ecommerce/mail-inbox", name: "Inbox"},
            { path: BASEDIR+"/ecommerce/mail-compose", name: "Compose"},
            { path: BASEDIR+"/ecommerce/mail-view", name: "View"},
        ]
    },
    { path: BASEDIR+"/ecommerce/mail-inbox", component: EcommerceMailinbox, type: "child"},
    { path: BASEDIR+"/ecommerce/mail-compose", component: EcommerceMailcompose, type: "child"},
    { path: BASEDIR+"/ecommerce/mail-view", component: EcommerceMailview, type: "child"},
    

    { path: BASEDIR+"/ecommerce/settings", name: "Settings", icon: "settings",component: EcommerceSettings },



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
