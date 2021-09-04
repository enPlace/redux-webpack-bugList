import { combineReducers } from "redux";
import bugReducer from "./bugs"
import projectsReducer from "./projects"
import teamReducer from "./team"

export default combineReducers({
    bugs: bugReducer,
    projects: projectsReducer,
    team: teamReducer
})