/*--------------- Common Components ------------------*/
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import Sidebar from './common/Sidebar/Sidebar';
import ChatSidebar from './common/ChatSidebar/ChatSidebar';
import Stylebar from './common/Stylebar/Stylebar';
import StyleSettings from './common/StyleSettings/StyleSettings';
import Favcontacts from './common/Chatbar/Favcontacts';
import Allcontacts from './common/Chatbar/Allcontacts';
import Chatgroups from './common/Chatbar/Chatgroups';
import Notifications from './common/Notifications/Notifications';
import Messages from './common/Messages/Messages';
import Mailbox from './common/Mailbox/Mailbox';

/*--------------- General Admin Components ------------------*/
import CardAuthor from './general/CardElements/CardAuthor';
import CardCategory from './general/CardElements/CardCategory';
import CardSocials from './general/CardElements/CardSocials';
import Button from './general/CustomButton/CustomButton';
import Checkbox from './general/CustomCheckbox/SimpleCheckbox';
import Radio from './general/CustomRadio/CustomRadio';
import FormInputs from './general/FormInputs/FormInputs';
import Navmenudropdown from './general/Navmenudropdown/Navmenudropdown';
import Navmenugroup from './general/Navmenudropdown/Navmenugroup';
import BlogPosts from './general/BlogPosts/BlogPosts';
import SearchPosts from './general/SearchPosts/SearchPosts';
import Memberslist from './general/Memberslist/Memberslist';
import Messagewidget from './general/Messagewidget/Messagewidget';

/*--------------- Hospital Admin Components ------------------*/
import Doctorslist from './hospital/Doctorslist/Doctorslist';
import Patientslist from './hospital/Patientslist/Patientslist';
import Staffslist from './hospital/Staffslist/Staffslist';

/*--------------- Music Admin Components ------------------*/
import Albumslist from './music/Albumslist/Albumslist';
import Artistslist from './music/Artistslist/Artistslist';
import GenreList from './music/GenreList/GenreList';
import Playlistslist from './music/Playlistslist/Playlistslist';

/*--------------- Social media Admin Components ------------------*/
import SocMemberslist from './social/SocMemberslist/SocMemberslist';
import Groupslist from './social/Groupslist/Groupslist';
import Friendslist from './social/Friendslist/Friendslist';
import Medialist from './social/Medialist/Medialist';

/*--------------- University Admin Components ------------------*/
import Professorslist from './university/Professorslist/Professorslist';
import Studentslist from './university/Studentslist/Studentslist';
import UniStaffslist from './university/UniStaffslist/UniStaffslist';
import Courseslist from './university/Courseslist/Courseslist';
import Customerlist from './university/Courseslist/Customerlist';

/*--------------- Ecommerce Admin Components ------------------*/
import ProductList from './ecommerce/ProductList/ProductList';

/*--------------- Blog Admin Components ------------------*/
import PagePosts from './blog/PagePosts/PagePosts';
import BlogBlogPosts from './blog/BlogBlogPosts/BlogBlogPosts';
import BlogSearchPosts from './blog/BlogSearchPosts/BlogSearchPosts';
import BlogUserslist from './blog/BlogUserslist/BlogUserslist';
import BlogMedialist from './blog/BlogMedialist/BlogMedialist';


/*--------------- Unused Components ------------------*/
//import PanelHeader from './general/PanelHeader/PanelHeader';
//import Stats from './general/Stats/Stats';
//import Tasks from './general/Tasks/Tasks';

export {
    // CardElements
    CardAuthor,   
    CardCategory,
    CardSocials,
    // CustomButton
    Button,
    // CustomCheckbox
    Checkbox,
    // CustomRadio
    Radio,
    // Footer
    Footer,
    // FormInputs
    FormInputs,
    // Header
    Header,
    // PanelHeader
    //PanelHeader,
    // Sidebar
    Sidebar,
    // ChatSidebar
    ChatSidebar,
    Stylebar,
    // Stats
    //Stats,
    // Tasks
    //Tasks,
    // topbar messages
    Messages,
    // topbar notifications
    Notifications,
    // chatbar Favourite contacts
    Favcontacts,
    // chatbar All contacts
    Allcontacts,
    // chatbar Groups
    Chatgroups,
    // dropdown links in navigation side menu
    Navmenudropdown,
    Navmenugroup,
    Mailbox,
    Messagewidget,
    BlogPosts,
    SearchPosts,
    Memberslist,
    StyleSettings,

    Doctorslist,
    Patientslist,
    Staffslist,

    Albumslist,
    Artistslist,
    GenreList,
    Playlistslist,

    SocMemberslist,
    Groupslist,
    Friendslist,
    Medialist,


    Professorslist,
    Studentslist,
    UniStaffslist,
    Courseslist,
    Customerlist,

    ProductList,

    PagePosts,
    BlogBlogPosts,
    BlogSearchPosts,
    BlogUserslist,
    BlogMedialist,
};
