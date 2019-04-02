import UserProfile from "views/UserProfile/UserProfile";
import TableList from "views/TableList/TableList";


const dashboardRoutes = [

  {
    path: "/user",
    name: "Novo usuário",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/table",
    name: "Usuários",
    icon: "pe-7s-note2",
    component: TableList
  },

  { redirect: true, path: "/", to: "/table", name: "Usuários" }
];

export default dashboardRoutes;
