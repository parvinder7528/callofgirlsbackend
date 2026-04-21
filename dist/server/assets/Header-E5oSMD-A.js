import { T as jsxRuntimeExports } from "./worker-entry-BMfFwxLV.js";
import { j as useSelector, L as Link } from "./router-D9IWjkiy.js";
import { c as createLucideIcon } from "./createLucideIcon-CeHspMVV.js";
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
function Logo({ size = 40 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "rounded-full gradient-primary flex items-center justify-center shadow-glow",
      style: { width: size, height: size },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "white", className: "w-1/2 h-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 21s-7-4.5-7-10a4 4 0 017-2.65A4 4 0 0119 11c0 5.5-7 10-7 10z" }) })
    }
  );
}
const useAppSelector = useSelector;
function Header() {
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 py-4 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { size: 44 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-xl tracking-tight hidden sm:inline", children: "LuxeCompanions" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", activeOptions: { exact: true }, activeProps: { className: "text-primary" }, className: "text-sm font-semibold hover:text-primary transition", children: "Home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/explore", activeProps: { className: "text-primary" }, className: "text-sm font-semibold hover:text-primary transition", children: "Explore" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/categories", activeProps: { className: "text-primary" }, className: "text-sm font-semibold hover:text-primary transition", children: "Categories" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: isAuthenticated ? (
      /* 🟢 Logged In State: Show Profile Image/Icon */
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/myprofile",
          className: "flex items-center gap-3 group p-1 pr-3 rounded-full hover:bg-accent transition",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full border-2 border-primary overflow-hidden shadow-glow group-hover:scale-105 transition", children: user?.gallery && user.gallery.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: user.gallery[0],
                alt: user.name,
                className: "w-full h-full object-cover"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-5 h-5 text-muted-foreground" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left hidden sm:block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold capitalize leading-none", children: user?.name || "Profile" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-primary font-medium mt-1", children: "Online" })
            ] })
          ]
        }
      )
    ) : (
      /* 🔴 Logged Out State: Show Login/Register */
      /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-sm font-semibold text-primary hover:opacity-80 transition px-3 py-2", children: "Login" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", className: "gradient-primary text-primary-foreground text-sm font-bold px-5 py-2.5 rounded-full shadow-glow hover:scale-105 transition", children: "Join as Provider" })
      ] })
    ) })
  ] }) });
}
export {
  Header as H,
  Logo as L,
  User as U
};
