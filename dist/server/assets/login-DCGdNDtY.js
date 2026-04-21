import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-BMfFwxLV.js";
import { u as useNavigate, g as useLoginMutation, L as Link, y } from "./router-D9IWjkiy.js";
import { C as Crown } from "./crown-Dh4A_cwJ.js";
import { M as Mail, L as Lock, E as EyeOff, a as Eye, A as ArrowRight } from "./mail-qc6rLlRm.js";
import { L as LoaderCircle } from "./loader-circle-B2Uz0pTG.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./createLucideIcon-CeHspMVV.js";
function Login() {
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      if (res.success) {
        localStorage.setItem("call_accessToken", res.data.token);
        y.success("Welcome back!");
        if (res.data) {
          navigate({ to: "/" });
        } else {
          navigate({ to: "/register" });
        }
      }
    } catch (err) {
      y.error(err?.data?.message || "Login failed. Please check credentials.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 mx-auto rounded-2xl gradient-hero flex items-center justify-center shadow-glow mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-8 h-8 text-white" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-black", children: "Welcome Back" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Login to manage your profile" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, className: "space-y-4 bg-card p-8 rounded-[2.5rem] shadow-card border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold ml-1", children: "Email Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-input rounded-2xl px-4 py-1 border border-transparent focus-within:border-primary/50 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              required: true,
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder: "riya@gmail.com",
              className: "bg-transparent outline-none py-3 w-full text-sm"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold ml-1", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-input rounded-2xl px-4 py-1 border border-transparent focus-within:border-primary/50 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-5 h-5 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: showPassword ? "text" : "password",
              required: true,
              value: password,
              onChange: (e) => setPassword(e.target.value),
              placeholder: "••••••••",
              className: "bg-transparent outline-none py-3 w-full text-sm"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setShowPassword(!showPassword),
              className: "text-muted-foreground hover:text-primary transition",
              children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-5 h-5" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "text-xs font-bold text-primary hover:underline", children: "Forgot Password?" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          disabled: isLoading,
          className: "w-full gradient-primary text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-glow hover:scale-[1.02] active:scale-[0.98] transition disabled:opacity-70",
          children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Login Now ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center mt-8 text-sm text-muted-foreground font-medium", children: [
      "Don't have an account? ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", className: "text-primary font-bold hover:underline", children: "Join as Provider" })
    ] })
  ] }) });
}
const SplitComponent = Login;
export {
  SplitComponent as component
};
