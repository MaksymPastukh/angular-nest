import {
  AuthFacade
} from "./chunk-GZWGFULK.js";
import "./chunk-MRSX6FQU.js";
import {
  FormField,
  debounce,
  email,
  form,
  minLength,
  pattern,
  required,
  submit,
  validate
} from "./chunk-T4F5K7HN.js";
import {
  Toast
} from "./chunk-M7Z6RRSA.js";
import "./chunk-CH46WUXX.js";
import {
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-C2RRMDEJ.js";
import "./chunk-SXE3IDZP.js";
import "./chunk-PV4HM4QP.js";
import {
  RouterLink
} from "./chunk-M4TX5Q67.js";
import {
  CommonModule,
  NgOptimizedImage
} from "./chunk-SJAIUEWT.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2WGIEBYO.js";

// libs/frontend/auth/feature-register/src/lib/pages/register-page/register-page.ts
var _c0 = (a0) => ({ "auth-input": true, "border-red-500": a0 });
function RegisterPage_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.registerForm.firstName().errors()[0].message);
  }
}
function RegisterPage_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.registerForm.email().errors()[0].message);
  }
}
function RegisterPage_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 46);
    \u0275\u0275element(1, "path", 47)(2, "path", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 49);
    \u0275\u0275text(4, "Show");
    \u0275\u0275elementEnd();
  }
}
function RegisterPage_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 50);
    \u0275\u0275element(1, "path", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(2, "span", 49);
    \u0275\u0275text(3, "Hide");
    \u0275\u0275elementEnd();
  }
}
function RegisterPage_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.registerForm.password().errors()[0].message);
  }
}
function RegisterPage_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 46);
    \u0275\u0275element(1, "path", 47)(2, "path", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 49);
    \u0275\u0275text(4, "Show");
    \u0275\u0275elementEnd();
  }
}
function RegisterPage_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 50);
    \u0275\u0275element(1, "path", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(2, "span", 49);
    \u0275\u0275text(3, "Hide");
    \u0275\u0275elementEnd();
  }
}
function RegisterPage_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.registerForm.confirmPassword().errors()[0].message);
  }
}
function RegisterPage_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 52)(2, "div", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.registerForm.agreeToTerms().errors()[0].message);
  }
}
function RegisterPage_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 53);
    \u0275\u0275element(2, "circle", 54)(3, "path", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Registering...");
    \u0275\u0275elementEnd()();
  }
}
function RegisterPage_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign Up");
    \u0275\u0275elementEnd();
  }
}
var RegisterPage = class _RegisterPage {
  authFacade = inject(AuthFacade);
  isPasswordVisible = signal(false, ...ngDevMode ? [{ debugName: "isPasswordVisible" }] : []);
  isConfirmPasswordVisible = signal(false, ...ngDevMode ? [{ debugName: "isConfirmPasswordVisible" }] : []);
  registerModel = signal({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    subscribeToNewsletter: false
  }, ...ngDevMode ? [{ debugName: "registerModel" }] : []);
  registerForm = form(this.registerModel, (controlSchema) => {
    required(controlSchema.firstName, { message: "Name is required." });
    minLength(controlSchema.firstName, 3, { message: "Name must be at least 3 characters long." });
    debounce(controlSchema.email, 300);
    required(controlSchema.email, { message: "Email is required." });
    email(controlSchema.email, { message: "Please enter a valid email address." });
    required(controlSchema.password, { message: "Password is required." });
    minLength(controlSchema.password, 6, {
      message: "Password must be at least 6 characters long."
    });
    pattern(controlSchema.password, /^(?=.*[A-Z])(?=.*\d)/, {
      message: "Password must contain at least one uppercase letter and one number."
    });
    required(controlSchema.confirmPassword, { message: "Please confirm your password." });
    validate(controlSchema.confirmPassword, (helpers) => {
      const confirmPassword = helpers.value();
      const password = helpers.valueOf(controlSchema.password);
      if (confirmPassword !== password) {
        return {
          kind: "passwordMismatch",
          message: "Passwords do not match."
        };
      }
      return null;
    });
    required(controlSchema.agreeToTerms, { message: "You must agree to the terms and conditions." });
  });
  async register(event) {
    event.preventDefault();
    await submit(this.registerForm, () => {
      const formModel = this.registerModel();
      const registerData = {
        firstName: formModel.firstName,
        email: formModel.email,
        password: formModel.password,
        confirmPassword: formModel.confirmPassword,
        agreeToTerms: formModel.agreeToTerms,
        subscribeToNewsletter: formModel.subscribeToNewsletter
      };
      this.authFacade.register(registerData);
      return Promise.resolve(void 0);
    }).catch(console.error);
  }
  static \u0275fac = function RegisterPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterPage, selectors: [["app-register"]], decls: 76, vars: 35, consts: () => {
    let i18n_0;
    if (false) {
      const MSG_EXTERNAL_imageLogin$$LIBS_FRONTEND_AUTH_FEATURE_REGISTER_SRC_LIB_PAGES_REGISTER_PAGE_REGISTER_PAGE_TS_0 = goog.getMsg("image login");
      i18n_0 = MSG_EXTERNAL_imageLogin$$LIBS_FRONTEND_AUTH_FEATURE_REGISTER_SRC_LIB_PAGES_REGISTER_PAGE_REGISTER_PAGE_TS_0;
    } else {
      i18n_0 = $localize`:@@imageLogin:image login`;
    }
    return [["position", "bottom-right"], [1, "flex", "flex-col", "sm:flex-row", "min-h-screen", "overflow-hidden"], [1, "hidden", "sm:block", "sm:flex-1"], ["alt", i18n_0, "priority", "", "width", "695", "height", "956", 1, "w-full", "h-full", "object-cover", 3, "ngSrc"], [1, "flex-1", "flex", "flex-col", "justify-center", "items-center", "px-4", "sm:px-12"], ["novalidate", "", "autocomplete", "on", 1, "flex", "flex-col", "w-full", "max-w-xl", 3, "submit"], [1, "font-coresans", "font-semibold", "text-3xl", "sm:text-4xl"], [1, "font-causten-medium", "text-gray-600/80", "mt-4"], ["type", "button", 1, "auth-button", "mt-[50px]"], ["width", "21", "height", "20", "viewBox", "0 0 21 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "mr-3"], ["d", "M20.5002 10.2219C20.5002 9.39973 20.4321 8.79973 20.2848 8.17752H10.7041V11.8886H16.3277C16.2144 12.8108 15.6022 14.1997 14.2416 15.133L14.2225 15.2572L17.2517 17.557L17.4616 17.5775C19.389 15.833 20.5002 13.2664 20.5002 10.2219", "fill", "#4285F4"], ["d", "M10.7027 20C13.4578 20 15.7708 19.1111 17.4602 17.5778L14.2402 15.1332C13.3785 15.7221 12.222 16.1332 10.7027 16.1332C8.0043 16.1332 5.71403 14.3888 4.89761 11.9777L4.77794 11.9877L1.62811 14.3766L1.58691 14.4888C3.26493 17.7555 6.71171 20 10.7027 20Z", "fill", "#34A853"], ["d", "M4.89914 11.9778C4.68372 11.3556 4.55904 10.6889 4.55904 10C4.55904 9.31107 4.68372 8.64444 4.8878 8.02222L4.8821 7.88971L1.69278 5.46245L1.58843 5.51109C0.896838 6.86666 0.5 8.3889 0.5 10C0.5 11.6111 0.896838 13.1333 1.58843 14.4888L4.89914 11.9778", "fill", "#FBBC05"], ["d", "M10.7028 3.86663C12.6189 3.86663 13.9114 4.67773 14.6484 5.35555L17.5283 2.59999C15.7596 0.988889 13.4579 0 10.7028 0C6.71174 0 3.26494 2.24442 1.58691 5.51105L4.88629 8.02218C5.71405 5.61109 8.00433 3.86663 10.7028 3.86663", "fill", "#EB4335"], [1, "font-medium", "text-xl", "text-[#8a33fd]"], ["type", "button", 1, "auth-button", "mt-5"], ["d", "M6.77767 20C4.46696 20 2.31298 19.1818 0.5 17.7701C2.03928 17.8914 4.75576 17.601 6.44541 15.6389C3.90363 15.497 2.75733 13.1237 2.60781 12.1095C2.82378 12.211 3.85379 12.3327 4.43524 12.0487C1.51136 11.1562 1.06281 8.03245 1.16248 7.07911C1.71071 7.54564 2.64104 7.70791 3.00652 7.66734C0.281995 5.29412 1.26216 1.72414 1.74394 0.953347C3.69916 4.25101 6.62943 6.1031 10.2546 6.20612C10.1862 5.84118 10.1501 5.46124 10.1501 5.07099C10.1501 2.27036 12.0096 0 14.3034 0C15.5018 0 16.5817 0.619786 17.3398 1.61116C18.1406 1.3827 19.3459 0.847885 19.9352 0.385396C19.6382 1.68357 18.7135 2.76651 18.1542 3.16789C18.1589 3.18155 18.1497 3.15418 18.1542 3.16789C18.6455 3.07742 19.9748 2.76641 20.5 2.33266C20.2403 3.06196 19.26 4.27455 18.4555 4.95341C18.6052 12.9896 13.5546 20 6.77767 20Z", "fill", "#47ACDF"], [1, "flex", "flex-col", "gap-2", "relative", "color-text-base", "mt-8"], [1, "font-family", "font-normal", "text-lg"], ["type", "text", "id", "firstName", "autocomplete", "given-name", "placeholder", "", "aria-describedby", "firstName-error", 3, "formField"], ["role", "alert", "aria-live", "polite", "id", "firstName-error", 1, "errors", "absolute", "top-1/2", "-translate-y-1/2", "right-[12px]"], [1, "flex", "flex-col", "gap-2", "relative", "color-text-base", "mt-3"], ["type", "text", "id", "email", "autocomplete", "email", "placeholder", "", "aria-describedby", "email-error", 3, "formField"], ["role", "alert", "aria-live", "polite", "id", "email-error", 1, "errors", "absolute", "top-1/2", "-translate-y-1/2", "right-[12px]"], [1, "flex", "justify-between"], ["type", "button", "aria-label", "Toggle password visibility", 1, "cursor-pointer", "flex", "items-center", 3, "click"], ["placeholder", "", "autocomplete", "new-password", "aria-describedby", "password-error", 3, "formField", "type"], [1, "errors", "absolute", "top-1/2", "-translate-y-1/2", "right-[12px]"], ["type", "button", "aria-label", "Toggle confirm password visibility", 1, "cursor-pointer", "flex", "items-center", 3, "click"], ["placeholder", "", "autocomplete", "new-password", "aria-describedby", "confirmPassword-error", 3, "formField", "type"], [1, "flex", "flex-col", "mt-6"], [1, "auth-checkbox", "color-text-base"], ["type", "checkbox", "id", "agreeToTerms", 1, "signup-checkbox", 3, "formField"], ["for", "agreeToTerms"], ["routerLink", "/#", 1, "underline", "cursor-pointer"], [1, "min-h-[20px]"], [1, "ml-6"], ["role", "alert", "aria-live", "polite", "id", "terms-error", 1, "errors"], [1, "mt-1", "flex", "flex-col"], ["type", "checkbox", "id", "news", 1, "signup-checkbox"], ["for", "news"], ["type", "submit", 1, "authResponseButton", "mt-8", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], [1, "flex", "items-center", "justify-center", "gap-2"], [1, "mt-3", "font-family", "text-base", "text-[#3c4242]"], ["routerLink", "/login", 1, "underline"], [1, "error"], ["width", "19", "height", "16", "viewBox", "0 0 19 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16.9682 0.869862L16.2322 0.133919C16.0242 -0.0740721 15.6402 -0.042063 15.4002 0.245882L12.84 2.78985C11.688 2.29391 10.4241 2.05391 9.09604 2.05391C5.14392 2.06984 1.72014 4.37381 0.0720207 7.68602C-0.0240069 7.89401 -0.0240069 8.14994 0.0720207 8.32593C0.839954 9.89395 1.99202 11.19 3.43203 12.1659L1.33603 14.2939C1.09603 14.5339 1.06402 14.9179 1.22407 15.1259L1.96002 15.8618C2.16801 16.0698 2.55199 16.0378 2.79199 15.7499L16.8399 1.70198C17.1439 1.46211 17.1759 1.07815 16.9679 0.870136L16.9682 0.869862ZM9.94403 5.70175C9.67202 5.63773 9.38407 5.55778 9.11205 5.55778C7.752 5.55778 6.66411 6.6458 6.66411 8.00571C6.66411 8.27772 6.72813 8.56566 6.80809 8.83768L5.73597 9.89372C5.41601 9.33376 5.24003 8.70966 5.24003 8.00574C5.24003 5.87776 6.95205 4.16574 9.08003 4.16574C9.78409 4.16574 10.4081 4.34172 10.968 4.66168L9.94403 5.70175Z", "fill", "#807D7E"], ["d", "M18.1206 7.68596C17.5606 6.56591 16.8246 5.55798 15.9127 4.74194L12.9366 7.68596V8.00591C12.9366 10.1339 11.2246 11.8459 9.09661 11.8459H8.77665L6.88867 13.7339C7.59273 13.8779 8.32868 13.9739 9.04868 13.9739C13.0008 13.9739 16.4246 11.6699 18.0727 8.34177C18.2167 8.11771 18.2167 7.8938 18.1206 7.68578L18.1206 7.68596Z", "fill", "#807D7E"], [1, "ml-1", "w-[42px]"], ["width", "18", "height", "13", "viewBox", "0 0 18 13", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9 0C5.04856 0 1.65436 2.37401 0.151954 5.77272C0.0495662 6.00434 0.0495663 6.26839 0.151954 6.50001C1.65436 9.89872 5.04856 12.2727 9 12.2727C12.9514 12.2727 16.3456 9.89872 17.848 6.50001C17.9504 6.26839 17.9504 6.00434 17.848 5.77272C16.3456 2.37401 12.9514 0 9 0ZM9 10.2273C6.74182 10.2273 4.90909 8.39455 4.90909 6.13636C4.90909 3.87818 6.74182 2.04545 9 2.04545C11.2582 2.04545 13.0909 3.87818 13.0909 6.13636C13.0909 8.39455 11.2582 10.2273 9 10.2273ZM9 3.68182C7.64182 3.68182 6.54545 4.77818 6.54545 6.13636C6.54545 7.49455 7.64182 8.59091 9 8.59091C10.3582 8.59091 11.4545 7.49455 11.4545 6.13636C11.4545 4.77818 10.3582 3.68182 9 3.68182Z", "fill", "#807D7E"], [1, "errors"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-5", "w-5"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]];
  }, template: function RegisterPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast", 0);
      \u0275\u0275elementStart(1, "section", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "form", 5);
      \u0275\u0275listener("submit", function RegisterPage_Template_form_submit_5_listener($event) {
        return ctx.register($event);
      });
      \u0275\u0275elementStart(6, "h1", 6);
      \u0275\u0275text(7, "Sign Up");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h3", 7);
      \u0275\u0275text(9, " Sign up for free to access to in any of our products ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 9);
      \u0275\u0275element(12, "path", 10)(13, "path", 11)(14, "path", 12)(15, "path", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "span", 14);
      \u0275\u0275text(17, "Continue With Google");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "button", 15);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 9);
      \u0275\u0275element(20, "path", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "span", 14);
      \u0275\u0275text(22, "Continue With Twitter");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 17)(24, "h3", 18);
      \u0275\u0275text(25, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "input", 19);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(27, RegisterPage_Conditional_27_Template, 3, 1, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 21)(29, "h3", 18);
      \u0275\u0275text(30, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "input", 22);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(32, RegisterPage_Conditional_32_Template, 3, 1, "div", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 21)(34, "div", 24)(35, "h3", 18);
      \u0275\u0275text(36, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "button", 25);
      \u0275\u0275listener("click", function RegisterPage_Template_button_click_37_listener() {
        return ctx.isPasswordVisible.set(!ctx.isPasswordVisible());
      });
      \u0275\u0275conditionalCreate(38, RegisterPage_Conditional_38_Template, 5, 0)(39, RegisterPage_Conditional_39_Template, 4, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(40, "input", 26);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(41, RegisterPage_Conditional_41_Template, 3, 1, "div", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 21)(43, "div", 24)(44, "h3", 18);
      \u0275\u0275text(45, "Confirm Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "button", 28);
      \u0275\u0275listener("click", function RegisterPage_Template_button_click_46_listener() {
        return ctx.isConfirmPasswordVisible.set(!ctx.isConfirmPasswordVisible());
      });
      \u0275\u0275conditionalCreate(47, RegisterPage_Conditional_47_Template, 5, 0)(48, RegisterPage_Conditional_48_Template, 4, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(49, "input", 29);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(50, RegisterPage_Conditional_50_Template, 3, 1, "div", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 30)(52, "div", 31);
      \u0275\u0275element(53, "input", 32);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(54, "label", 33);
      \u0275\u0275text(55, " Agree to our ");
      \u0275\u0275elementStart(56, "a", 34);
      \u0275\u0275text(57, "Terms of use");
      \u0275\u0275elementEnd();
      \u0275\u0275text(58, " and ");
      \u0275\u0275elementStart(59, "a", 34);
      \u0275\u0275text(60, "Privacy Policy");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "div", 35)(62, "div", 36);
      \u0275\u0275conditionalCreate(63, RegisterPage_Conditional_63_Template, 4, 1, "div", 37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 38)(65, "div", 31);
      \u0275\u0275element(66, "input", 39);
      \u0275\u0275elementStart(67, "label", 40);
      \u0275\u0275text(68, "Subscribe to our monthly newsletter");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "button", 41);
      \u0275\u0275conditionalCreate(70, RegisterPage_Conditional_70_Template, 6, 0, "div", 42)(71, RegisterPage_Conditional_71_Template, 2, 0, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 43);
      \u0275\u0275text(73, " Already have an account? ");
      \u0275\u0275elementStart(74, "a", 44);
      \u0275\u0275text(75, "Log in");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngSrc", "/assets/images/sing-up-page.png");
      \u0275\u0275advance(23);
      \u0275\u0275classMap(\u0275\u0275pureFunction1(27, _c0, ctx.registerForm.firstName().touched() && ctx.registerForm.firstName().invalid()));
      \u0275\u0275property("formField", ctx.registerForm.firstName);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.registerForm.firstName().touched() && ctx.registerForm.firstName().invalid() ? 27 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classMap(\u0275\u0275pureFunction1(29, _c0, ctx.registerForm.email().touched() && ctx.registerForm.email().invalid()));
      \u0275\u0275property("formField", ctx.registerForm.email);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.registerForm.email().touched() && ctx.registerForm.email().invalid() ? 32 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275attribute("aria-pressed", ctx.isPasswordVisible());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isPasswordVisible() ? 38 : 39);
      \u0275\u0275advance(2);
      \u0275\u0275classMap(\u0275\u0275pureFunction1(31, _c0, ctx.registerForm.password().touched() && ctx.registerForm.password().invalid()));
      \u0275\u0275property("formField", ctx.registerForm.password)("type", ctx.isPasswordVisible() ? "text" : "password");
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.registerForm.password().touched() && ctx.registerForm.password().invalid() ? 41 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275attribute("aria-pressed", ctx.isConfirmPasswordVisible());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isConfirmPasswordVisible() ? 47 : 48);
      \u0275\u0275advance(2);
      \u0275\u0275classMap(\u0275\u0275pureFunction1(33, _c0, ctx.registerForm.confirmPassword().touched() && ctx.registerForm.confirmPassword().invalid()));
      \u0275\u0275property("formField", ctx.registerForm.confirmPassword)("type", ctx.isConfirmPasswordVisible() ? "text" : "password");
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.registerForm.confirmPassword().touched() && ctx.registerForm.confirmPassword().invalid() ? 50 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("formField", ctx.registerForm.agreeToTerms);
      \u0275\u0275control();
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.registerForm.agreeToTerms().touched() && ctx.registerForm.agreeToTerms().invalid() ? 63 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.registerForm().invalid() || ctx.authFacade.isLoading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.authFacade.isLoading() ? 70 : 71);
    }
  }, dependencies: [CommonModule, NgOptimizedImage, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, NgControlStatusGroup, FormField, Toast], styles: ['@charset "UTF-8";\n\n\n\n.auth-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  appearance: none;\n  -webkit-appearance: none;\n  border: 0.1rem solid #3c4242;\n  border-radius: 3px;\n  width: 18px;\n  height: 18px;\n  padding: 0;\n  margin: 0.2rem 0 0 0;\n  cursor: pointer;\n  position: relative;\n  outline: none;\n}\n.auth-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked {\n  background-color: #3c4242;\n  border: 0.1rem solid #3c4242;\n}\n.auth-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked::after {\n  content: "\\2713";\n  position: absolute;\n  color: white;\n  padding: 0;\n  font-size: 18px;\n  font-weight: 700;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=register-page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterPage, [{
    type: Component,
    args: [{ selector: "app-register", imports: [CommonModule, NgOptimizedImage, RouterLink, ReactiveFormsModule, FormField, Toast], changeDetection: ChangeDetectionStrategy.OnPush, template: `<p-toast position="bottom-right" />
<section class="flex flex-col sm:flex-row min-h-screen overflow-hidden">
  <div class="hidden sm:block sm:flex-1">
    <img
      class="w-full h-full object-cover"
      alt="image login"
      priority
      width="695"
      height="956"
      [ngSrc]="'/assets/images/sing-up-page.png'"
      i18n-alt="@@imageLogin"
    />
  </div>

  <div class="flex-1 flex flex-col justify-center items-center px-4 sm:px-12">
    <form
      class="flex flex-col w-full max-w-xl"
      novalidate
      autocomplete="on"
      (submit)="register($event)"
    >
      <h1 class="font-coresans font-semibold text-3xl sm:text-4xl">Sign Up</h1>
      <h3 class="font-causten-medium text-gray-600/80 mt-4">
        Sign up for free to access to in any of our products
      </h3>

      <button type="button" class="auth-button mt-[50px]">
        <svg
          class="mr-3"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.5002 10.2219C20.5002 9.39973 20.4321 8.79973 20.2848 8.17752H10.7041V11.8886H16.3277C16.2144 12.8108 15.6022 14.1997 14.2416 15.133L14.2225 15.2572L17.2517 17.557L17.4616 17.5775C19.389 15.833 20.5002 13.2664 20.5002 10.2219"
            fill="#4285F4"
          />
          <path
            d="M10.7027 20C13.4578 20 15.7708 19.1111 17.4602 17.5778L14.2402 15.1332C13.3785 15.7221 12.222 16.1332 10.7027 16.1332C8.0043 16.1332 5.71403 14.3888 4.89761 11.9777L4.77794 11.9877L1.62811 14.3766L1.58691 14.4888C3.26493 17.7555 6.71171 20 10.7027 20Z"
            fill="#34A853"
          />
          <path
            d="M4.89914 11.9778C4.68372 11.3556 4.55904 10.6889 4.55904 10C4.55904 9.31107 4.68372 8.64444 4.8878 8.02222L4.8821 7.88971L1.69278 5.46245L1.58843 5.51109C0.896838 6.86666 0.5 8.3889 0.5 10C0.5 11.6111 0.896838 13.1333 1.58843 14.4888L4.89914 11.9778"
            fill="#FBBC05"
          />
          <path
            d="M10.7028 3.86663C12.6189 3.86663 13.9114 4.67773 14.6484 5.35555L17.5283 2.59999C15.7596 0.988889 13.4579 0 10.7028 0C6.71174 0 3.26494 2.24442 1.58691 5.51105L4.88629 8.02218C5.71405 5.61109 8.00433 3.86663 10.7028 3.86663"
            fill="#EB4335"
          />
        </svg>
        <span class="font-medium text-xl text-[#8a33fd]">Continue With Google</span>
      </button>

      <button type="button" class="auth-button mt-5">
        <svg
          class="mr-3"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.77767 20C4.46696 20 2.31298 19.1818 0.5 17.7701C2.03928 17.8914 4.75576 17.601 6.44541 15.6389C3.90363 15.497 2.75733 13.1237 2.60781 12.1095C2.82378 12.211 3.85379 12.3327 4.43524 12.0487C1.51136 11.1562 1.06281 8.03245 1.16248 7.07911C1.71071 7.54564 2.64104 7.70791 3.00652 7.66734C0.281995 5.29412 1.26216 1.72414 1.74394 0.953347C3.69916 4.25101 6.62943 6.1031 10.2546 6.20612C10.1862 5.84118 10.1501 5.46124 10.1501 5.07099C10.1501 2.27036 12.0096 0 14.3034 0C15.5018 0 16.5817 0.619786 17.3398 1.61116C18.1406 1.3827 19.3459 0.847885 19.9352 0.385396C19.6382 1.68357 18.7135 2.76651 18.1542 3.16789C18.1589 3.18155 18.1497 3.15418 18.1542 3.16789C18.6455 3.07742 19.9748 2.76641 20.5 2.33266C20.2403 3.06196 19.26 4.27455 18.4555 4.95341C18.6052 12.9896 13.5546 20 6.77767 20Z"
            fill="#47ACDF"
          />
        </svg>
        <span class="font-medium text-xl text-[#8a33fd]">Continue With Twitter</span>
      </button>

      <div class="flex flex-col gap-2 relative color-text-base mt-8">
        <h3 class="font-family font-normal text-lg">First Name</h3>
        <input
          type="text"
          id="firstName"
          autocomplete="given-name"
          [formField]="registerForm.firstName"
          placeholder=""
          [class]="{
            'auth-input': true,
            'border-red-500':
              registerForm.firstName().touched() && registerForm.firstName().invalid(),
          }"
          aria-describedby="firstName-error"
        />
        @if (registerForm.firstName().touched() && registerForm.firstName().invalid()) {
          <div
            class="errors absolute top-1/2 -translate-y-1/2 right-[12px]"
            role="alert"
            aria-live="polite"
            id="firstName-error"
          >
            <div class="error">{{ registerForm.firstName().errors()[0].message }}</div>
          </div>
        }
      </div>

      <div class="flex flex-col gap-2 relative color-text-base mt-3">
        <h3 class="font-family font-normal text-lg">Email Address</h3>
        <input
          type="text"
          id="email"
          autocomplete="email"
          [formField]="registerForm.email"
          placeholder=""
          [class]="{
            'auth-input': true,
            'border-red-500': registerForm.email().touched() && registerForm.email().invalid(),
          }"
          aria-describedby="email-error"
        />
        @if (registerForm.email().touched() && registerForm.email().invalid()) {
          <div
            class="errors absolute top-1/2 -translate-y-1/2 right-[12px]"
            role="alert"
            aria-live="polite"
            id="email-error"
          >
            <div class="error">{{ registerForm.email().errors()[0].message }}</div>
          </div>
        }
      </div>

      <div class="flex flex-col gap-2 relative color-text-base mt-3">
        <div class="flex justify-between">
          <h3 class="font-family font-normal text-lg">Password</h3>
          <button
            type="button"
            (click)="isPasswordVisible.set(!isPasswordVisible())"
            class="cursor-pointer flex items-center"
            aria-label="Toggle password visibility"
            [attr.aria-pressed]="isPasswordVisible()"
          >
            @if (!isPasswordVisible()) {
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9682 0.869862L16.2322 0.133919C16.0242 -0.0740721 15.6402 -0.042063 15.4002 0.245882L12.84 2.78985C11.688 2.29391 10.4241 2.05391 9.09604 2.05391C5.14392 2.06984 1.72014 4.37381 0.0720207 7.68602C-0.0240069 7.89401 -0.0240069 8.14994 0.0720207 8.32593C0.839954 9.89395 1.99202 11.19 3.43203 12.1659L1.33603 14.2939C1.09603 14.5339 1.06402 14.9179 1.22407 15.1259L1.96002 15.8618C2.16801 16.0698 2.55199 16.0378 2.79199 15.7499L16.8399 1.70198C17.1439 1.46211 17.1759 1.07815 16.9679 0.870136L16.9682 0.869862ZM9.94403 5.70175C9.67202 5.63773 9.38407 5.55778 9.11205 5.55778C7.752 5.55778 6.66411 6.6458 6.66411 8.00571C6.66411 8.27772 6.72813 8.56566 6.80809 8.83768L5.73597 9.89372C5.41601 9.33376 5.24003 8.70966 5.24003 8.00574C5.24003 5.87776 6.95205 4.16574 9.08003 4.16574C9.78409 4.16574 10.4081 4.34172 10.968 4.66168L9.94403 5.70175Z"
                  fill="#807D7E"
                />
                <path
                  d="M18.1206 7.68596C17.5606 6.56591 16.8246 5.55798 15.9127 4.74194L12.9366 7.68596V8.00591C12.9366 10.1339 11.2246 11.8459 9.09661 11.8459H8.77665L6.88867 13.7339C7.59273 13.8779 8.32868 13.9739 9.04868 13.9739C13.0008 13.9739 16.4246 11.6699 18.0727 8.34177C18.2167 8.11771 18.2167 7.8938 18.1206 7.68578L18.1206 7.68596Z"
                  fill="#807D7E"
                />
              </svg>
              <span class="ml-1 w-[42px]">Show</span>
            } @else {
              <svg
                width="18"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C5.04856 0 1.65436 2.37401 0.151954 5.77272C0.0495662 6.00434 0.0495663 6.26839 0.151954 6.50001C1.65436 9.89872 5.04856 12.2727 9 12.2727C12.9514 12.2727 16.3456 9.89872 17.848 6.50001C17.9504 6.26839 17.9504 6.00434 17.848 5.77272C16.3456 2.37401 12.9514 0 9 0ZM9 10.2273C6.74182 10.2273 4.90909 8.39455 4.90909 6.13636C4.90909 3.87818 6.74182 2.04545 9 2.04545C11.2582 2.04545 13.0909 3.87818 13.0909 6.13636C13.0909 8.39455 11.2582 10.2273 9 10.2273ZM9 3.68182C7.64182 3.68182 6.54545 4.77818 6.54545 6.13636C6.54545 7.49455 7.64182 8.59091 9 8.59091C10.3582 8.59091 11.4545 7.49455 11.4545 6.13636C11.4545 4.77818 10.3582 3.68182 9 3.68182Z"
                  fill="#807D7E"
                />
              </svg>
              <span class="ml-1 w-[42px]">Hide</span>
            }
          </button>
        </div>
        <input
          [formField]="registerForm.password"
          [type]="isPasswordVisible() ? 'text' : 'password'"
          placeholder=""
          autocomplete="new-password"
          [class]="{
            'auth-input': true,
            'border-red-500':
              registerForm.password().touched() && registerForm.password().invalid(),
          }"
          aria-describedby="password-error"
        />

        @if (registerForm.password().touched() && registerForm.password().invalid()) {
          <div class="errors absolute top-1/2 -translate-y-1/2 right-[12px]">
            <div class="error">{{ registerForm.password().errors()[0].message }}</div>
          </div>
        }
      </div>

      <div class="flex flex-col gap-2 relative color-text-base mt-3">
        <div class="flex justify-between">
          <h3 class="font-family font-normal text-lg">Confirm Password</h3>
          <button
            type="button"
            (click)="isConfirmPasswordVisible.set(!isConfirmPasswordVisible())"
            class="cursor-pointer flex items-center"
            aria-label="Toggle confirm password visibility"
            [attr.aria-pressed]="isConfirmPasswordVisible()"
          >
            @if (!isConfirmPasswordVisible()) {
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9682 0.869862L16.2322 0.133919C16.0242 -0.0740721 15.6402 -0.042063 15.4002 0.245882L12.84 2.78985C11.688 2.29391 10.4241 2.05391 9.09604 2.05391C5.14392 2.06984 1.72014 4.37381 0.0720207 7.68602C-0.0240069 7.89401 -0.0240069 8.14994 0.0720207 8.32593C0.839954 9.89395 1.99202 11.19 3.43203 12.1659L1.33603 14.2939C1.09603 14.5339 1.06402 14.9179 1.22407 15.1259L1.96002 15.8618C2.16801 16.0698 2.55199 16.0378 2.79199 15.7499L16.8399 1.70198C17.1439 1.46211 17.1759 1.07815 16.9679 0.870136L16.9682 0.869862ZM9.94403 5.70175C9.67202 5.63773 9.38407 5.55778 9.11205 5.55778C7.752 5.55778 6.66411 6.6458 6.66411 8.00571C6.66411 8.27772 6.72813 8.56566 6.80809 8.83768L5.73597 9.89372C5.41601 9.33376 5.24003 8.70966 5.24003 8.00574C5.24003 5.87776 6.95205 4.16574 9.08003 4.16574C9.78409 4.16574 10.4081 4.34172 10.968 4.66168L9.94403 5.70175Z"
                  fill="#807D7E"
                />
                <path
                  d="M18.1206 7.68596C17.5606 6.56591 16.8246 5.55798 15.9127 4.74194L12.9366 7.68596V8.00591C12.9366 10.1339 11.2246 11.8459 9.09661 11.8459H8.77665L6.88867 13.7339C7.59273 13.8779 8.32868 13.9739 9.04868 13.9739C13.0008 13.9739 16.4246 11.6699 18.0727 8.34177C18.2167 8.11771 18.2167 7.8938 18.1206 7.68578L18.1206 7.68596Z"
                  fill="#807D7E"
                />
              </svg>
              <span class="ml-1 w-[42px]">Show</span>
            } @else {
              <svg
                width="18"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C5.04856 0 1.65436 2.37401 0.151954 5.77272C0.0495662 6.00434 0.0495663 6.26839 0.151954 6.50001C1.65436 9.89872 5.04856 12.2727 9 12.2727C12.9514 12.2727 16.3456 9.89872 17.848 6.50001C17.9504 6.26839 17.9504 6.00434 17.848 5.77272C16.3456 2.37401 12.9514 0 9 0ZM9 10.2273C6.74182 10.2273 4.90909 8.39455 4.90909 6.13636C4.90909 3.87818 6.74182 2.04545 9 2.04545C11.2582 2.04545 13.0909 3.87818 13.0909 6.13636C13.0909 8.39455 11.2582 10.2273 9 10.2273ZM9 3.68182C7.64182 3.68182 6.54545 4.77818 6.54545 6.13636C6.54545 7.49455 7.64182 8.59091 9 8.59091C10.3582 8.59091 11.4545 7.49455 11.4545 6.13636C11.4545 4.77818 10.3582 3.68182 9 3.68182Z"
                  fill="#807D7E"
                />
              </svg>
              <span class="ml-1 w-[42px]">Hide</span>
            }
          </button>
        </div>
        <input
          [formField]="registerForm.confirmPassword"
          [type]="isConfirmPasswordVisible() ? 'text' : 'password'"
          placeholder=""
          autocomplete="new-password"
          [class]="{
            'auth-input': true,
            'border-red-500':
              registerForm.confirmPassword().touched() && registerForm.confirmPassword().invalid(),
          }"
          aria-describedby="confirmPassword-error"
        />

        @if (registerForm.confirmPassword().touched() && registerForm.confirmPassword().invalid()) {
          <div class="errors absolute top-1/2 -translate-y-1/2 right-[12px]">
            <div class="error">{{ registerForm.confirmPassword().errors()[0].message }}</div>
          </div>
        }
      </div>

      <div class="flex flex-col mt-6">
        <div class="auth-checkbox color-text-base">
          <input
            type="checkbox"
            id="agreeToTerms"
            [formField]="registerForm.agreeToTerms"
            class="signup-checkbox"
          />
          <label for="agreeToTerms">
            Agree to our <a class="underline cursor-pointer" routerLink="/#">Terms of use</a> and
            <a class="underline cursor-pointer" routerLink="/#">Privacy Policy</a>
          </label>
        </div>
        <div class="min-h-[20px]">
          <div class="ml-6">
            @if (registerForm.agreeToTerms().touched() && registerForm.agreeToTerms().invalid()) {
              <div class="errors" role="alert" aria-live="polite" id="terms-error">
                <div class="errors">
                  <div class="error">{{ registerForm.agreeToTerms().errors()[0].message }}</div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>

      <div class="mt-1 flex flex-col">
        <div class="auth-checkbox color-text-base">
          <input type="checkbox" id="news" class="signup-checkbox" />
          <label for="news">Subscribe to our monthly newsletter</label>
        </div>
      </div>

      <button
        type="submit"
        [disabled]="registerForm().invalid() || authFacade.isLoading()"
        class="authResponseButton mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        @if (authFacade.isLoading()) {
          <div class="flex items-center justify-center gap-2">
            <svg
              class="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              />
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Registering...</span>
          </div>
        } @else {
          <span>Sign Up</span>
        }
      </button>

      <div class="mt-3 font-family text-base text-[#3c4242]">
        Already have an account?
        <a routerLink="/login" class="underline">Log in</a>
      </div>
    </form>
  </div>
</section>
`, styles: ['@charset "UTF-8";\n\n/* libs/frontend/auth/feature-register/src/lib/pages/register-page/register-page.scss */\n.auth-checkbox input {\n  appearance: none;\n  -webkit-appearance: none;\n  border: 0.1rem solid #3c4242;\n  border-radius: 3px;\n  width: 18px;\n  height: 18px;\n  padding: 0;\n  margin: 0.2rem 0 0 0;\n  cursor: pointer;\n  position: relative;\n  outline: none;\n}\n.auth-checkbox input:checked {\n  background-color: #3c4242;\n  border: 0.1rem solid #3c4242;\n}\n.auth-checkbox input:checked::after {\n  content: "\\2713";\n  position: absolute;\n  color: white;\n  padding: 0;\n  font-size: 18px;\n  font-weight: 700;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=register-page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterPage, { className: "RegisterPage", filePath: "libs/frontend/auth/feature-register/src/lib/pages/register-page/register-page.ts", lineNumber: 26 });
})();
export {
  RegisterPage
};
//# sourceMappingURL=chunk-GHHJNKFH.js.map
