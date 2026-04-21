import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-BMfFwxLV.js";
import { u as useNavigate, a as useUploadPhotosMutation, b as useGetCityCategoryServiceQuery, c as useGetCurrentStepQuery, d as useSignupMutation, e as useManageProfileMutation, y, L as Link } from "./router-D9IWjkiy.js";
import { H as Header, U as User } from "./Header-E5oSMD-A.js";
import { F as Footer } from "./Footer-UTsEDd7N.js";
import { C as Crown } from "./crown-Dh4A_cwJ.js";
import { c as createLucideIcon } from "./createLucideIcon-CeHspMVV.js";
import { C as Calendar } from "./calendar-BCkErYKM.js";
import { P as Phone, M as MessageCircle } from "./phone-OOmLLlr0.js";
import { M as Mail, L as Lock, E as EyeOff, a as Eye, A as ArrowRight } from "./mail-qc6rLlRm.js";
import { L as LoaderCircle } from "./loader-circle-B2Uz0pTG.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
      key: "18u6gg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
];
const Camera = createLucideIcon("camera", __iconNode$2);
const __iconNode$1 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$1);
const __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode);
function Register() {
  const navigate = useNavigate();
  const [uploadPhotos, { isLoading: isUploading }] = useUploadPhotosMutation();
  const { data: setupData, isLoading: isLoadingLocation } = useGetCityCategoryServiceQuery();
  const { data: currentStep, isLoading: currentStepLoading } = useGetCurrentStepQuery();
  const [signup, { isLoading: isRegistering }] = useSignupMutation();
  const [manageProfile, { isLoading: isUpdating }] = useManageProfileMutation();
  const [isView, setIsView] = reactExports.useState(false);
  const [step, setStep] = reactExports.useState(1);
  const [data, setData] = reactExports.useState({
    name: "riya",
    age: "20",
    phone: "8115809072",
    email: "",
    password: "12345678",
    city: "",
    category: "",
    bio: "",
    services: [],
    pricing: { hour: "", threeHour: "", night: "" },
    photos: [],
    whatsapp: "",
    agree: false
  });
  const apiCities = setupData?.data?.cities || [];
  const apiCategories = setupData?.data?.categories || [];
  const apiServices = setupData?.data?.services || [];
  const stepValid = () => {
    if (step === 1) return data.name && data.age && data.phone && data.email;
    if (step === 2) return data.city && data.category;
    if (step === 3) return data.bio.length > 0 && data.services.length > 0;
    if (step === 4) return data.agree;
    return false;
  };
  const next = async () => {
    if (!stepValid()) return;
    try {
      if (step === 1) {
        const res = await signup({
          name: data.name,
          email: data.email,
          password: data.password,
          age: Number(data.age),
          phoneNumber: data.phone
        }).unwrap();
        if (res.data?.token) {
          localStorage.setItem("call_accessToken", res?.data.token);
          y.success(res.message);
          setStep(res?.data?.currentStep || 2);
        }
      } else if (step === 2) {
        await manageProfile({
          step: 2,
          data: { cityId: data.city, categoryId: data.category }
        }).unwrap();
        setStep(3);
      } else if (step === 3) {
        await manageProfile({
          step: 3,
          data: {
            bio: data.bio,
            servicesIds: data.services,
            pricing: {
              oneHour: Number(data.pricing.hour),
              threeHours: Number(data.pricing.threeHour),
              fullNight: Number(data.pricing.night)
            }
          }
        }).unwrap();
        setStep(4);
      }
    } catch (err) {
      alert(err?.data?.message || "Data store karne mein dikkat aayi.");
    }
  };
  const back = () => setStep((s) => Math.max(1, s - 1));
  const submit = async (e) => {
    e.preventDefault();
    try {
      await manageProfile({
        step: 4,
        data: {
          gallery: data.photos,
          whatsAppNumber: data.whatsapp,
          isVerifiedAge: data.agree
        }
      }).unwrap();
      y.success("Profile created successfully!");
      navigate({ to: "/" });
    } catch (err) {
      alert(err?.data?.message || "Final step failed");
    }
  };
  const toggleService = (id) => setData((d) => ({
    ...d,
    services: d.services.includes(id) ? d.services.filter((x) => x !== id) : [...d.services, id]
  }));
  const isLoading = isRegistering || isUpdating;
  reactExports.useEffect(() => {
    setStep(Number(currentStep?.data?.currentStep || 1));
  }, [currentStep]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "flex-1 py-12 px-6 gradient-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 mx-auto rounded-3xl gradient-hero flex items-center justify-center shadow-glow mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-10 h-10 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl", children: "Join as Provider" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Create your profile and start earning" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-2 mb-10", children: [1, 2, 3, 4].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition ${step >= n ? "gradient-primary text-primary-foreground shadow-glow" : "bg-accent text-muted-foreground"}`, children: step > n ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4" }) : n }),
        n < 4 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 md:w-20 h-1 rounded-full ${step > n ? "bg-primary" : "bg-accent"}` })
      ] }, n)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "bg-card rounded-3xl shadow-card p-8 border border-border", children: [
        step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-extrabold", children: "Basic Information" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Display Name", icon: User, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: data.name, onChange: (e) => setData({ ...data, name: e.target.value }), placeholder: "Your name", className: "bg-transparent outline-none py-3 w-full text-sm" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Age", icon: Calendar, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", min: "18", value: data.age, onChange: (e) => setData({ ...data, age: e.target.value }), placeholder: "21", className: "bg-transparent outline-none py-3 w-full text-sm" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Field, { label: "Phone Number", icon: Phone, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "+91" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: data.phone, onChange: (e) => setData({ ...data, phone: e.target.value }), placeholder: "98765 43210", className: "bg-transparent outline-none py-3 w-full text-sm" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", icon: Mail, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: data.email, onChange: (e) => setData({ ...data, email: e.target.value }), placeholder: "you@example.com", className: "bg-transparent outline-none py-3 w-full text-sm" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Field, { label: "Password", icon: Lock, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: isView ? "text" : "password",
                value: data.password,
                onChange: (e) => setData({ ...data, password: e.target.value }),
                placeholder: "Password",
                className: "bg-transparent outline-none py-3 w-full text-sm"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setIsView(!isView),
                className: "p-2 hover:bg-accent rounded-lg transition text-muted-foreground",
                children: isView ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-extrabold", children: "Location & Category" }),
          isLoadingLocation ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin mx-auto" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold mb-3 block", children: "City" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: apiCities.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setData({ ...data, city: c._id }),
                  className: `px-3 py-3 rounded-xl text-sm font-semibold transition ${data.city === c._id ? "gradient-primary text-primary-foreground shadow-glow" : "bg-accent hover:bg-primary/10"}`,
                  children: c.name
                },
                c._id
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold mb-3 block", children: "Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: apiCategories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setData({ ...data, category: c._id }),
                  className: `px-3 py-3 rounded-xl text-sm font-semibold transition ${data.category === c._id ? "gradient-primary text-primary-foreground shadow-glow" : "bg-accent hover:bg-primary/10"}`,
                  children: c.name
                },
                c._id
              )) })
            ] })
          ] })
        ] }),
        step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-extrabold", children: "About You & Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold mb-2 block", children: "Bio / Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                maxLength: 500,
                value: data.bio,
                onChange: (e) => setData({ ...data, bio: e.target.value }),
                rows: 4,
                placeholder: "Tell clients about yourself...",
                className: "bg-input rounded-xl p-4 w-full text-sm outline-none resize-none"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground text-right mt-1", children: [
              data.bio.length,
              "/500"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold mb-3 block", children: "Services Offered" }),
            isLoadingLocation ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: apiServices.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => toggleService(s._id),
                className: `px-4 py-2 rounded-full text-sm font-semibold transition ${data.services.includes(s._id) ? "gradient-primary text-primary-foreground" : "bg-accent hover:bg-primary/10"}`,
                children: s.name
              },
              s._id
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold mb-3 block", children: "Pricing (₹)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: ["hour", "threeHour", "night"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: k === "hour" ? "1 Hour" : k === "threeHour" ? "3 Hours" : "Full Night" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  value: data.pricing[k],
                  onChange: (e) => setData({ ...data, pricing: { ...data.pricing, [k]: e.target.value } }),
                  placeholder: k === "hour" ? "3000" : k === "threeHour" ? "8000" : "20000",
                  className: "bg-input rounded-xl px-3 py-2.5 w-full text-sm outline-none"
                }
              )
            ] }, k)) })
          ] })
        ] }),
        step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-extrabold", children: "Photos & Verification" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold mb-3 block", children: "Profile Photos" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "file",
                id: "photo-upload",
                multiple: true,
                accept: "image/*",
                className: "hidden",
                onChange: async (e) => {
                  const files = e.target.files;
                  if (!files || files.length === 0) return;
                  const formData = new FormData();
                  Array.from(files).forEach((file) => {
                    formData.append("photos", file);
                  });
                  try {
                    const res = await uploadPhotos(formData).unwrap();
                    if (res.success) {
                      setData({ ...data, photos: [...data.photos, ...res.paths] });
                      y.success("Photos uploaded successfully!");
                    }
                  } catch (err) {
                    y.error(err?.data?.message || "Upload failed");
                  }
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => document.getElementById("photo-upload")?.click(),
                  disabled: isUploading,
                  className: "aspect-square bg-accent border-2 border-dashed border-primary/30 rounded-2xl flex flex-col items-center justify-center text-primary hover:bg-primary/5 transition disabled:opacity-50",
                  children: isUploading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-6 h-6 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-6 h-6 mb-1" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", children: "Add Photos" })
                  ] })
                }
              ),
              data.photos.map((url, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: `${url}`,
                    alt: "preview",
                    className: "w-full h-full object-cover rounded-2xl border border-border"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setData({ ...data, photos: data.photos.filter((_, i) => i !== idx) }),
                    className: "absolute -top-2 -right-2 bg-destructive text-white rounded-full p-1 shadow-lg",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3 rotate-45" })
                  }
                )
              ] }, idx)),
              data.photos.length < 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square bg-accent/50 border-2 border-dashed border-border rounded-2xl flex items-center justify-center text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-6 h-6" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "Upload at least 1 photo. Max 10 photos." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "WhatsApp Number", icon: MessageCircle, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: data.whatsapp,
              onChange: (e) => setData({ ...data, whatsapp: e.target.value }),
              placeholder: "Same as phone or different",
              className: "bg-transparent outline-none py-3 w-full text-sm"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-3 bg-accent/50 p-4 rounded-xl text-sm cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: data.agree,
                onChange: (e) => setData({ ...data, agree: e.target.checked }),
                className: "accent-primary mt-1"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "I confirm that I am 18+ years old and agree to the",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-primary font-semibold ml-1", children: "Terms of Service" }),
              " and",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-primary font-semibold ml-1", children: "Privacy Policy" }),
              "."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-8", children: [
          step > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: back, className: "flex-1 bg-card border border-border font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-accent transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            " Back"
          ] }),
          step < 4 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: next,
              disabled: !stepValid() || isLoading,
              className: "flex-1 gradient-primary text-primary-foreground font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition shadow-glow disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed",
              children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                "Continue ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ] })
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              disabled: !stepValid() || isLoading,
              className: "flex-1 gradient-primary text-primary-foreground font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition shadow-glow disabled:opacity-50",
              children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4" }),
                " Create Profile"
              ] })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center mt-6 text-sm text-muted-foreground", children: [
        "Already have an account? ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-primary font-bold", children: "Login" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Field({ label, icon: Icon, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold mb-2 block", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-input rounded-xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-muted-foreground" }),
      children
    ] })
  ] });
}
const SplitComponent = Register;
export {
  SplitComponent as component
};
