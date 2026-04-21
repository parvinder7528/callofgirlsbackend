import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-BMfFwxLV.js";
import { H as Header } from "./Header-E5oSMD-A.js";
import { F as Footer } from "./Footer-UTsEDd7N.js";
import { P as ProfileCard } from "./ProfileCard-BFgtWsqO.js";
import { u as useGetAllProfilesQuery, a as useGetAllCityCategoryServiceQuery } from "./providerApiSlice-CHhqj7eY.js";
import { c as createLucideIcon } from "./createLucideIcon-CeHspMVV.js";
import { L as LoaderCircle } from "./loader-circle-B2Uz0pTG.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-D9IWjkiy.js";
import "./star-DTyg4ge-.js";
import "./crown-Dh4A_cwJ.js";
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
function Explore() {
  const [city, setCity] = reactExports.useState("");
  const [category, setCategory] = reactExports.useState("");
  const [q, setQ] = reactExports.useState("");
  const { data: profileRes, isLoading: isAllProfileLoading } = useGetAllProfilesQuery({ all: true });
  const { data: locationData } = useGetAllCityCategoryServiceQuery();
  const allProfiles = profileRes?.data || [];
  const cities = locationData?.data?.cities || [];
  const categories = locationData?.data?.categories || [];
  const filtered = allProfiles.filter((p) => {
    const matchesCity = !city || p.city?._id === city;
    const matchesCategory = !category || p.category?._id === category;
    const matchesName = !q || p.name.toLowerCase().includes(q.toLowerCase());
    return matchesCity && matchesCategory && matchesName;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-hero py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 text-white text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-6xl font-black italic tracking-tighter", children: [
        "Explore ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70", children: "Companions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-white/90 font-medium", children: isAllProfileLoading ? "Finding profiles..." : `${filtered.length} profiles available` })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card shadow-card rounded-2xl p-4 flex flex-col md:flex-row gap-3 mb-8 border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 flex-1 bg-secondary/50 rounded-xl border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: q,
              onChange: (e) => setQ(e.target.value),
              placeholder: "Search by name...",
              className: "bg-transparent outline-none py-3 w-full text-sm"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: city,
            onChange: (e) => setCity(e.target.value),
            className: "bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm outline-none cursor-pointer focus:border-primary",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Cities" }),
              cities.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c._id, children: c.name }, c._id))
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: category,
            onChange: (e) => setCategory(e.target.value),
            className: "bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm outline-none cursor-pointer focus:border-primary",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Categories" }),
              categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c._id, children: c.name }, c._id))
            ]
          }
        )
      ] }),
      isAllProfileLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-10 h-10 animate-spin text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Loading premium profiles..." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5", children: filtered.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileCard, { profile: p }, p._id)) }),
        filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20 bg-secondary/20 rounded-3xl border-2 border-dashed border-border mt-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-medium", children: "No profiles match your filters." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                setCity("");
                setCategory("");
                setQ("");
              },
              className: "text-primary font-bold mt-2 hover:underline",
              children: "Clear all filters"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const SplitComponent = Explore;
export {
  SplitComponent as component
};
