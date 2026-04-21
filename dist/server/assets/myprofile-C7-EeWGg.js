import { T as jsxRuntimeExports } from "./worker-entry-BMfFwxLV.js";
import { f as useGetProfileQuery, u as useNavigate } from "./router-D9IWjkiy.js";
import { H as Header } from "./Header-E5oSMD-A.js";
import { L as LoaderCircle } from "./loader-circle-B2Uz0pTG.js";
import { C as ChevronLeft, a as Clock } from "./clock-Du1LET8G.js";
import { c as createLucideIcon } from "./createLucideIcon-CeHspMVV.js";
import { M as MessageCircle, P as Phone } from "./phone-OOmLLlr0.js";
import { C as Calendar } from "./calendar-BCkErYKM.js";
import { M as MapPin, S as Star } from "./star-DTyg4ge-.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
];
const LogOut = createLucideIcon("log-out", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode);
function ProfilePage() {
  const { data: response, isLoading: meIsLoading, isError } = useGetProfileQuery();
  const userData = response?.userData;
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("call_accessToken");
    window.location.href = "/";
  };
  if (meIsLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-10 h-10 animate-spin text-primary" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background pb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-64 md:h-80 w-full gradient-hero relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => navigate({ to: "/" }),
            className: "absolute top-6 left-6 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleLogout,
            className: "absolute top-6 right-6 px-4 py-2 bg-red-500/20 backdrop-blur-md border border-red-500/50 rounded-full text-red-100 font-bold flex items-center gap-2 hover:bg-red-500 transition",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" }),
              " Logout"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative -mt-24 md:-mt-32 flex flex-col md:flex-row gap-8 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-80 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: userData?.gallery[0],
                alt: userData?.name,
                className: "w-full aspect-[3/4] object-cover rounded-[2rem] shadow-2xl border-4 border-card"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4 bg-green-500 w-4 h-4 rounded-full border-2 border-white shadow-glow animate-pulse" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-3xl p-6 shadow-card border border-border space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full gradient-primary text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-glow hover:scale-[1.02] transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5" }),
              " Chat on WhatsApp"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full bg-accent text-foreground font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-accent/80 transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
              " Call Now"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-8 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-black capitalize", children: userData.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-8 h-8 text-primary shadow-glow" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 text-muted-foreground font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 bg-accent px-3 py-1 rounded-full text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
                " ",
                userData.age,
                " Years"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 bg-accent px-3 py-1 rounded-full text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4" }),
                " Mumbai"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-yellow-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-current" }),
                " 4.9 (Verified)"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            { label: "1 Hour", price: userData.pricing.oneHour, icon: Clock },
            { label: "3 Hours", price: userData.pricing.threeHours, icon: Award },
            { label: "Full Night", price: userData.pricing.fullNight, icon: Star }
          ].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border p-5 rounded-3xl shadow-sm hover:border-primary/50 transition cursor-default", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "w-3 h-3" }),
              " ",
              p.label
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-primary", children: [
              "₹",
              p.price.toLocaleString()
            ] })
          ] }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-8 gradient-primary rounded-full" }),
              "About Me"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed text-lg italic", children: [
              '"',
              userData.bio,
              '"'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-8 gradient-primary rounded-full" }),
              "Gallery"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: userData.gallery.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: img,
                className: "w-full aspect-square object-cover rounded-3xl border border-border hover:opacity-90 transition cursor-zoom-in"
              },
              i
            )) })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
function RouteComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProfilePage, {});
}
export {
  RouteComponent as component
};
