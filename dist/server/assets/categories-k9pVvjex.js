import { T as jsxRuntimeExports } from "./worker-entry-BMfFwxLV.js";
import { h as useSearch, L as Link } from "./router-D9IWjkiy.js";
import { H as Header } from "./Header-E5oSMD-A.js";
import { F as Footer } from "./Footer-UTsEDd7N.js";
import { P as ProfileCard } from "./ProfileCard-BFgtWsqO.js";
import { u as useGetAllProfilesQuery } from "./providerApiSlice-CHhqj7eY.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./createLucideIcon-CeHspMVV.js";
import "./star-DTyg4ge-.js";
import "./crown-Dh4A_cwJ.js";
const img = (seed) => `https://images.unsplash.com/photo-${seed}?w=600&h=800&fit=crop&auto=format`;
const categories = [
  { id: "escort", name: "Escort", count: 248, image: img("1524504388940-b1c1722653e1"), icon: "heart" },
  { id: "call-girl", name: "Call Girl", count: 183, image: img("1494790108377-be9c29b29330"), icon: "phone" },
  { id: "massage", name: "Massage", count: 127, image: img("1540555700478-4be289fbecef"), icon: "hand-heart" },
  { id: "vip", name: "VIP Companion", count: 94, image: img("1509967419530-da38b4704bc6"), icon: "crown" }
];
function Categories() {
  const search = useSearch({ from: "/categories" });
  console.log(search, "search");
  const categoryId = search.catId;
  const params = { categoryId, city: "" };
  const { data: profileRes, isLoading: isAllProfileLoading } = useGetAllProfilesQuery(params);
  const profileData = profileRes?.data || [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-hero py-16 text-white text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-6xl", children: [
        "Browse by ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70", children: "Category" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-white/90", children: "Find exactly what you're looking for." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/explore", className: "group relative aspect-square rounded-3xl overflow-hidden shadow-card hover:shadow-glow transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.image, alt: c.name, className: "w-full h-full object-cover group-hover:scale-110 transition duration-500", loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-5 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-extrabold", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm opacity-90", children: [
            c.count,
            " profiles"
          ] })
        ] })
      ] }, c.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl", children: profileData[0]?.category.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/explore", className: "text-primary font-bold text-sm", children: "See all →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-5", children: profileData?.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileCard, { profile: p }, p._id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const SplitComponent = Categories;
export {
  SplitComponent as component
};
