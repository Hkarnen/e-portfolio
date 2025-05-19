import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    layout("./routes/navbar.tsx", [
        index("routes/home.tsx"),
        route("/about", "routes/about.tsx"),
    ]),
    
    
] satisfies RouteConfig;
