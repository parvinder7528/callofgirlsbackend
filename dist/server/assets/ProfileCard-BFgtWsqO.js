import { T as jsxRuntimeExports } from "./worker-entry-BMfFwxLV.js";
import { L as Link } from "./router-D9IWjkiy.js";
import { S as Star, M as MapPin } from "./star-DTyg4ge-.js";
import { C as Crown } from "./crown-Dh4A_cwJ.js";
import { c as createLucideIcon } from "./createLucideIcon-CeHspMVV.js";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
      key: "1slcih"
    }
  ]
];
const Flame = createLucideIcon("flame", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode);
function ProfileCard({ profile }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[3/4] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: profile.gallery?.[0],
          alt: profile.name,
          className: "w-full h-full object-cover group-hover:scale-105 transition duration-500",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 flex flex-col gap-1.5", children: [
        (profile.featured || profile.isVerifiedAge) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "gradient-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 w-fit", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 fill-current" }),
          " Featured"
        ] }),
        !profile.vip && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 w-fit", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-3 h-3 fill-current" }),
          " VIP"
        ] }),
        !profile.trending && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 w-fit", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3 h-3 fill-current" }),
          " Trending"
        ] })
      ] }),
      (!profile.online || true) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-3 right-3 bg-black/60 backdrop-blur text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-green-400 animate-pulse" }),
        " Online"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute top-12 right-3 w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-4 h-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 p-4 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-extrabold text-lg leading-tight capitalize", children: [
            profile.name,
            ", ",
            profile.age
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs opacity-90 mt-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3" }),
            profile.city?.name || "Premium City"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 bg-black/40 backdrop-blur px-2 py-1 rounded-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 fill-yellow-400 text-yellow-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: profile.rating || "4.9" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 flex-1", children: profile.services?.slice(0, 2).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full", children: s.name }, s._id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/profile/$id",
          params: { id: profile._id },
          className: "gradient-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-full hover:scale-105 transition shrink-0",
          children: "View Profile"
        }
      )
    ] })
  ] });
}
export {
  ProfileCard as P
};
