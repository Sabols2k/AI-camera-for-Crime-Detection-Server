import General from 'views/general/Dashboard/General.jsx';
import Hospital from 'views/hospital/Dashboard/Hospital.jsx';
import Music from 'views/music/Dashboard/Music.jsx';
import Crm from 'views/crm/Dashboard/Crm.jsx';
import Social from 'views/social/Dashboard/Social.jsx';
import Freelance from 'views/freelance/Dashboard/Freelance.jsx';
import University from 'views/university/Dashboard/University.jsx';
import Ecommerce from 'views/ecommerce/Dashboard/Ecommerce.jsx';
import Blog from 'views/blog/Dashboard/Blog.jsx';

import Blogs from 'views/blog/Blog/Blogs.jsx';
import SingleBlog from 'views/blog/Blog/SingleBlog.jsx';
import AddBlog from 'views/blog/Blog/AddBlog.jsx';
import EditBlog from 'views/blog/Blog/EditBlog.jsx';

import BlogSearch from 'views/blog/Blog/Search.jsx';

import Pages from 'views/blog/Page/Pages.jsx';
import SinglePage from 'views/blog/Page/SinglePage.jsx';
import AddPage from 'views/blog/Page/AddPage.jsx';
import EditPage from 'views/blog/Page/EditPage.jsx';

import User from 'views/blog/User/User.jsx';
import AddUser from 'views/blog/User/AddUser.jsx';
import EditUser from 'views/blog/User/EditUser.jsx';
import UserProfile from 'views/blog/User/UserProfile.jsx';

import Media from 'views/blog/Media/Media.jsx';
import UploadMedia from 'views/blog/Media/UploadMedia.jsx';

import BlogMailinbox from 'views/blog/Mail/Inbox.jsx';
import BlogMailcompose from 'views/blog/Mail/Compose.jsx';
import BlogMailview from 'views/blog/Mail/View.jsx';

import Tag from 'views/blog/Tag/Tag.jsx';
import AddTag from 'views/blog/Tag/AddTag.jsx';
import EditTag from 'views/blog/Tag/EditTag.jsx';

import Category from 'views/blog/Category/Category.jsx';
import AddCategory from 'views/blog/Category/AddCategory.jsx';
import EditCategory from 'views/blog/Category/EditCategory.jsx';

import BlogReportsSite from 'views/blog/Reports/ReportsSite.jsx'; 
import BlogReportsVisitors from 'views/blog/Reports/ReportsVisitors.jsx'; 
import BlogReportsSocial from 'views/blog/Reports/ReportsSocial.jsx'; 

var BASEDIR = process.env.REACT_APP_BASEDIR;

var dashRoutes = [ 

    //{ path: "#", name: "Main", type: "navgroup"},
    { path: BASEDIR+"/blog/dashboard", name: "Dashboard", icon: "speedometer", badge: "", component: Blog },

                        { 
                            path: "#", name: "Blogs", icon: "note", type: "dropdown", parentid: "blogs",
                            child: [
                        
                            { path: BASEDIR+"/blog/blogs", name: "Blogs"},
                            { path: BASEDIR+"/blog/add-blog", name: "Add Blog"},
                            { path: BASEDIR+"/blog/edit-blog", name: "Edit Blog"},
                            { path: BASEDIR+"/blog/blog-view", name: "Blog View"},
                            ]
                        },
                            { path: BASEDIR+"/blog/blogs", component: Blogs, type: "child"},
                            { path: BASEDIR+"/blog/add-blog", component: AddBlog, type: "child"},
                            { path: BASEDIR+"/blog/edit-blog", component: EditBlog, type: "child"},
                            { path: BASEDIR+"/blog/blog-view", component: SingleBlog, type: "child"},

    { path: BASEDIR+"/blog/search", name: "Search", icon: "magnifier", component: BlogSearch },



                        { 
                            path: "#", name: "Pages", icon: "notebook", type: "dropdown", parentid: "pages",
                            child: [
                        
                            { path: BASEDIR+"/blog/pages", name: "Pages"},
                            { path: BASEDIR+"/blog/add-page", name: "Add Page"},
                            { path: BASEDIR+"/blog/edit-page", name: "Edit Page"},
                            { path: BASEDIR+"/blog/page-view", name: "Page View"},
                            ]
                        },
                            { path: BASEDIR+"/blog/pages", component: Pages, type: "child"},
                            { path: BASEDIR+"/blog/add-page", component: AddPage, type: "child"},
                            { path: BASEDIR+"/blog/edit-page", component: EditPage, type: "child"},
                            { path: BASEDIR+"/blog/page-view", component: SinglePage, type: "child"},


    { 
        path: "#", name: "Users", icon: "user", type: "dropdown", parentid: "users",
            child: [
                { path: BASEDIR+"/blog/users", name: "Users"},
                { path: BASEDIR+"/blog/add-user", name: "Add User"},
                { path: BASEDIR+"/blog/edit-user", name: "Edit User"},
                { path: BASEDIR+"/blog/user-profile", name: "User Profile"},
            ]
    },
        { path: BASEDIR+"/blog/users", component: User, type: "child"},
        { path: BASEDIR+"/blog/add-user", component: AddUser, type: "child"},
        { path: BASEDIR+"/blog/edit-user", component: EditUser, type: "child"},
        { path: BASEDIR+"/blog/user-profile", component: UserProfile, type: "child"},


    { 
        path: "#", name: "Media", icon: "picture", type: "dropdown", parentid: "blogmedia",
            child: [
                { path: BASEDIR+"/blog/media", name: "Media"},
                { path: BASEDIR+"/blog/upload-media", name: "Upload Media"},
            ]
    },
        { path: BASEDIR+"/blog/media", component: Media, type: "child"},
        { path: BASEDIR+"/blog/upload-media", component: UploadMedia, type: "child"},


    { 
        path: "#", name: "Reports", icon: "pie-chart", type: "dropdown", parentid: "reports",
        child: [
                    { path: BASEDIR+"/blog/reports-site", name: "Site"},
                    { path: BASEDIR+"/blog/reports-visitors", name: "Visitors"},
                    { path: BASEDIR+"/blog/reports-social", name: "Social"},
        ]
    },
    { path: BASEDIR+"/blog/reports-site", component: BlogReportsSite, type: "child"},
    { path: BASEDIR+"/blog/reports-visitors", component: BlogReportsVisitors, type: "child"},
    { path: BASEDIR+"/blog/reports-social", component: BlogReportsSocial, type: "child"},

    { 
        path: "#", name: "Messages", icon: "envelope", type: "dropdown", parentid: "messages",
        child: [
            { path: BASEDIR+"/blog/mail-inbox", name: "Inbox"},
            { path: BASEDIR+"/blog/mail-compose", name: "Compose"},
            { path: BASEDIR+"/blog/mail-view", name: "View"},
        ]
    },
    { path: BASEDIR+"/blog/mail-inbox", component: BlogMailinbox, type: "child"},
    { path: BASEDIR+"/blog/mail-compose", component: BlogMailcompose, type: "child"},
    { path: BASEDIR+"/blog/mail-view", component: BlogMailview, type: "child"},
    

    { 
        path: "#", name: "Categories", icon: "folder-alt", type: "dropdown", parentid: "categories",
            child: [
                { path: BASEDIR+"/blog/category", name: "Categories"},
                { path: BASEDIR+"/blog/add-category", name: "Add Category"},
                { path: BASEDIR+"/blog/edit-category", name: "Edit Category"},
            ]
    },
        { path: BASEDIR+"/blog/category", component: Category, type: "child"},
        { path: BASEDIR+"/blog/add-category", component: AddCategory, type: "child"},
        { path: BASEDIR+"/blog/edit-category", component: EditCategory, type: "child"},

    { 
        path: "#", name: "Tags", icon: "tag", type: "dropdown", parentid: "tags",
            child: [
                { path: BASEDIR+"/blog/tag", name: "Tags"},
                { path: BASEDIR+"/blog/add-tag", name: "Add Tag"},
                { path: BASEDIR+"/blog/edit-tag", name: "Edit Tag"},
            ]
    },
        { path: BASEDIR+"/blog/tag", component: Tag, type: "child"},
        { path: BASEDIR+"/blog/add-tag", component: AddTag, type: "child"},
        { path: BASEDIR+"/blog/edit-tag", component: EditTag, type: "child"},


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
