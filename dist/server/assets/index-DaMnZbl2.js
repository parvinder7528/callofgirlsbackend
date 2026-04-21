import { T as jsxRuntimeExports } from "./worker-entry-BMfFwxLV.js";
import { L as Link } from "./router-D9IWjkiy.js";
import { H as Header } from "./Header-E5oSMD-A.js";
import { F as Footer } from "./Footer-UTsEDd7N.js";
import { P as ProfileCard } from "./ProfileCard-BFgtWsqO.js";
import { u as useGetAllProfilesQuery, b as useGetAllCategoriesQuery } from "./providerApiSlice-CHhqj7eY.js";
import { L as LoaderCircle } from "./loader-circle-B2Uz0pTG.js";
import { c as createLucideIcon } from "./createLucideIcon-CeHspMVV.js";
import { S as Star } from "./star-DTyg4ge-.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./crown-Dh4A_cwJ.js";
const __iconNode$3 = [
  [
    "path",
    {
      d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
      key: "169xi5"
    }
  ],
  ["path", { d: "M15 5.764v15", key: "1pn4in" }],
  ["path", { d: "M9 3.236v15", key: "1uimfh" }]
];
const Map = createLucideIcon("map", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
function Home() {
  const { data: profileRes, isLoading: isAllProfileLoading } = useGetAllProfilesQuery();
  const { data: catRes, isLoading: isCatLoading } = useGetAllCategoriesQuery();
  const allProfiles = profileRes?.data || [];
  const categories = catRes?.data || [];
  const featured = allProfiles.slice(0, 5);
  const trending = [...allProfiles].reverse().slice(0, 5);
  if (isAllProfileLoading || isCatLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-12 h-12 animate-spin text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-medium animate-pulse", children: "Loading Premium Experience..." })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative gradient-hero overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_50%,white,transparent_50%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 py-16 lg:py-24 relative grid lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-black/20 backdrop-blur px-4 py-2 rounded-full text-sm mb-6 border border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-green-400 animate-pulse" }),
            "558 Companions Online Now"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight", children: [
            "Find Premium ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-white/70", children: "Companions" }),
            " Near You"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-white/90 max-w-md", children: "Discover verified, elite companions for any occasion. Discreet, elegant, and always available." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-wrap gap-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-extrabold tracking-tighter", children: "10K+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-white/70", children: "Verified" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-extrabold tracking-tighter", children: "50+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-white/70", children: "Cities" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-extrabold tracking-tighter", children: "4.8★" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-white/70", children: "Rating" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex flex-col gap-4 items-end", children: allProfiles.slice(0, 3).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 flex items-center gap-4 w-80 hover:bg-white/20 transition-all cursor-default shadow-xl",
            style: { marginRight: `${i * 40}px` },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.gallery[0], alt: p?.name, className: "w-16 h-16 rounded-xl object-cover shadow-lg" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-lg leading-tight capitalize", children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs opacity-80 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Map, { className: "w-3 h-3" }),
                  " ",
                  p.city?.name || "Premium City"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs mt-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 fill-yellow-400 text-yellow-400" }),
                  " 4.9",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" })
                ] })
              ] })
            ]
          },
          p._id
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-12 flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary font-bold text-xs tracking-[0.2em] mb-2 uppercase", children: "Top Rated Selection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-black", children: [
            "Featured ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "Companions" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-xl text-lg", children: "Hand-picked, verified profiles with high professionalism." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/explore", className: "text-primary font-bold flex items-center gap-2 group transition-all", children: [
          "View All ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "group-hover:translate-x-1 transition-transform", children: "→" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6", children: featured.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileCard, { profile: p })) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary font-bold text-sm tracking-widest mb-2", children: "BROWSE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl", children: [
          "Browse by ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "Category" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-xl mx-auto", children: "Find exactly what you're looking for across our curated service categories." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-5", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/categories?catId=${c?._id}`, className: "group relative aspect-square rounded-3xl overflow-hidden shadow-card hover:shadow-glow transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.image, alt: c.name, className: "w-full h-full object-cover group-hover:scale-110 transition duration-500", loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-5 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-extrabold", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm opacity-90", children: [
            c.count,
            " profiles"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-5 right-5 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white group-hover:bg-primary transition", children: "→" })
      ] }, c.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-12 flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-orange-500 font-bold text-xs tracking-[0.2em] mb-2 uppercase flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 fill-current" }),
            " HOT RIGHT Now"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-black", children: [
            "Trending ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "Profiles" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/explore", className: "text-primary font-bold flex items-center gap-2 group transition-all", children: [
          "See All ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "group-hover:translate-x-1 transition-transform", children: "→" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6", children: trending.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileCard, { profile: p }, p._id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 container mx-auto px-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [
      { icon: Shield, title: "Verified Profiles", desc: "Every companion goes through a multi-step verification process to ensure authenticity." },
      { icon: Users, title: "Total Privacy", desc: "Your personal data is never stored or shared. We prioritize discretion above all else." },
      { icon: Zap, title: "Instant Access", desc: "Connect directly via WhatsApp or Phone. No middlemen, no waiting, no commission." }
    ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-10 rounded-[3rem] border border-border hover:border-primary/30 transition-all group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "w-8 h-8 text-primary group-hover:text-white" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black mb-3", children: f.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed italic", children: [
        '"',
        f.desc,
        '"'
      ] })
    ] }, f.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-hero rounded-[4rem] p-12 md:p-20 text-white text-center relative overflow-hidden shadow-glow shadow-primary/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_30%,white,transparent_50%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-6xl font-black mb-6", children: "Experience True Luxury" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 max-w-xl mx-auto mb-10 text-lg font-medium", children: "Join the most exclusive directory of premium companions today." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/explore", className: "bg-white text-primary font-black px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-xl", children: "Start Exploring" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", className: "bg-white/10 backdrop-blur-md border border-white/30 text-white font-black px-10 py-4 rounded-full hover:bg-white/20 transition-all", children: "Join as Provider" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const SplitComponent = Home;
export {
  SplitComponent as component
};
