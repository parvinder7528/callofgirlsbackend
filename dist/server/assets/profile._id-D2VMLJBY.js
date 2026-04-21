import { T as jsxRuntimeExports } from "./worker-entry-BMfFwxLV.js";
import { L as Link, R as Route } from "./router-D9IWjkiy.js";
import { H as Header } from "./Header-E5oSMD-A.js";
import { F as Footer } from "./Footer-UTsEDd7N.js";
import { M as MapPin, S as Star } from "./star-DTyg4ge-.js";
import { c as createLucideIcon } from "./createLucideIcon-CeHspMVV.js";
import { a as Clock, C as ChevronLeft } from "./clock-Du1LET8G.js";
import { M as MessageCircle, P as Phone } from "./phone-OOmLLlr0.js";
import { c as useGetProfileByIdQuery } from "./providerApiSlice-CHhqj7eY.js";
import { L as LoaderCircle } from "./loader-circle-B2Uz0pTG.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode);
function Profile({ profile }) {
  const waNumber = profile?.whatsAppNumber || "";
  const wa = `https://wa.me/${waNumber.replace(/\D/g, "")}`;
  const tel = `tel:${waNumber}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-5 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[3/4] rounded-3xl overflow-hidden shadow-card relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: Array.isArray(profile.gallery) ? profile.gallery[0] : profile.gallery,
            alt: profile.name,
            className: "w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-4 right-4 bg-black/60 backdrop-blur text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-green-400 animate-pulse" }),
          " Online Now"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl font-extrabold capitalize", children: [
            profile.name,
            ", ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: profile.age })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4" }),
              " ",
              profile.city?.name || "Premium City"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-yellow-400 text-yellow-400" }),
              " 4.9 (Verified)"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl p-6 shadow-card border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold mb-3", children: "About" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed italic", children: [
            '"',
            profile.bio,
            '"'
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl p-6 shadow-card border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold mb-3", children: "Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: profile.services?.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-accent text-accent-foreground text-sm px-3 py-1.5 rounded-full flex items-center gap-1 font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 text-primary" }),
            " ",
            s.name
          ] }, s._id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl p-6 shadow-card border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-extrabold mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-primary" }),
            " Pricing"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary rounded-xl p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase font-bold text-muted-foreground mb-1", children: "1 Hour" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-extrabold text-lg text-primary", children: [
                "₹",
                profile.pricing?.oneHour || 0
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary rounded-xl p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase font-bold text-muted-foreground mb-1", children: "3 Hours" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-extrabold text-lg text-primary", children: [
                "₹",
                profile.pricing?.threeHours || 0
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary rounded-xl p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase font-bold text-muted-foreground mb-1", children: "Full Night" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-extrabold text-lg text-primary", children: [
                "₹",
                profile.pricing?.fullNight || 0
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: wa, target: "_blank", rel: "noopener noreferrer", className: "bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition shadow-card active:scale-95", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5" }),
            " WhatsApp"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: tel, className: "gradient-primary text-primary-foreground font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:scale-105 transition shadow-glow active:scale-95", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
            " Call Now"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center font-medium", children: "Direct contact. No middlemen. 100% discreet." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/explore", className: "text-primary font-bold text-sm hover:underline", children: "← Back to Explore" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function ProfileRoute() {
  const {
    id
  } = Route.useLoaderData();
  const {
    data: response,
    isLoading,
    isError
  } = useGetProfileByIdQuery(id);
  const profileData = response?.data;
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-12 h-12 animate-spin text-primary mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-medium italic", children: "Fetching premium profile..." })
    ] });
  }
  if (isError || !profileData) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center p-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-black mb-4", children: "Oops! Profile disappeared." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "gradient-primary text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }),
        " Back to Home"
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Profile, { profile: profileData });
}
export {
  ProfileRoute as component
};
