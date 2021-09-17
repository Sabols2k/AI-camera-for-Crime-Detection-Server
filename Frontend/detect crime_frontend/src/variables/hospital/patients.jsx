// ##############################
// // // patients
// #############################
var IMGDIR = process.env.REACT_APP_IMGDIR;

const patients = [
    {avatar: IMGDIR+"/images/hospital/patients/patient-1.jpg", name: "Fiona Vance", position: "Journalist", age: "42"},
    {avatar: IMGDIR+"/images/hospital/patients/patient-2.jpg", name: "Grace Turner", position: "Editor", age: "26"},
    {avatar: IMGDIR+"/images/hospital/patients/patient-7.jpg", name: "Irene Smith", position: "Painter", age: "31"},
    {avatar: IMGDIR+"/images/hospital/patients/patient-8.jpg", name: "Julia Vasar", position: "Housewife", age: "32"},
    {avatar: IMGDIR+"/images/hospital/patients/patient-11.jpg", name: "Evan Short", position: "Web Developer", age: "37"},
    {avatar: IMGDIR+"/images/hospital/patients/patient-13.jpg", name: "Lily White", position: "Designer", age: "33"},
    {avatar: IMGDIR+"/images/hospital/patients/patient-14.jpg", name: "Leah Young", position: "Photographer", age: "25"},
    {avatar: IMGDIR+"/images/hospital/patients/patient-15.jpg", name: "Colin Taylor", position: "Developer", age: "35"},
]; 

export {
    patients, 
};
