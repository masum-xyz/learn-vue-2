import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import NoteDetail from "./pages/NoteDetail.vue";
import NoteEdit from "./pages/NoteEdit.vue";

export default [
    {path: "/", component: Home, name: "home"},
    {path: "/about", component: About, name: "about"},
    {path: "/note/:id", component: NoteDetail, name: "note-detail"},
    {path: "/note/:id/edit", component: NoteEdit, name: "note-edit"}
]