import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    layout("./routes/navbar.tsx", [
        index("routes/home.tsx"),
        route("/experience", "routes/experience.tsx"),
        route("/projects", "routes/projects.tsx")
    ]),
    
    
] satisfies RouteConfig;
