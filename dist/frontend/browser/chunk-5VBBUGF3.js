import {
  AuthCoreFacade
} from "./chunk-Q4357RD3.js";
import "./chunk-FFJL2FAH.js";
import "./chunk-VRGFCTSI.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-SMFOV6AR.js";
import "./chunk-GOMI4DH3.js";

// apps/marketplace-web/src/app/features/personal/pages/info-page/info-page.ts
var InfoPage = class _InfoPage {
  authFacade = inject(AuthCoreFacade);
  onLogout() {
    this.authFacade.logout();
  }
  static \u0275fac = function InfoPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InfoPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfoPage, selectors: [["app-root"]], decls: 115, vars: 0, consts: [[1, "mx-auto", "w-full", "px-4", "py-8", "font-causten", "text-[var(--color-text-base)]"], [1, "font-coresans", "text-xl", "font-semibold", "text-[var(--color-text-base)]"], [1, "mt-6"], [1, "font-coresans", "text-base", "font-semibold", "text-[var(--color-text-base)]"], [1, "mt-4", "rounded-2xl", "bg-white", "[&>div]:px-5", "[&>div]:py-4", "[&>div]:grid", "[&>div]:items-center", "[&>div]:grid-cols-[1fr_auto]", "[&>div:not(:last-child)]:border-b", "[&>div:not(:last-child)]:border-gray-100"], [1, "text-xs", "text-[var(--color-text-gray)]"], [1, "mt-1", "text-sm", "font-semibold", "text-[var(--color-text-base)]"], ["type", "button", 1, "text-sm", "font-semibold", "text-[var(--color-text-gray)]", "hover:text-[var(--color-primary)]", "transition-colors"], [1, "mt-10"], [1, "flex", "items-center", "justify-between", "gap-4"], ["type", "button", 1, "text-sm", "font-semibold", "text-[var(--color-text-base)]", "hover:text-[var(--color-primary)]", "transition-colors"], [1, "mt-4", "grid", "gap-4", "sm:grid-cols-2"], [1, "rounded-2xl", "bg-gray-50", "p-5", "[&_.title]:text-sm", "[&_.title]:font-semibold", "[&_.title]:text-[var(--color-text-base)]", "[&_.meta]:mt-2", "[&_.meta]:text-xs", "[&_.meta]:text-[var(--color-text-gray)]", "[&_.addr]:mt-3", "[&_.addr]:text-xs", "[&_.addr]:leading-5", "[&_.addr]:text-[var(--color-text-gray)]", "[&_.chips]:mt-4", "[&_.chips]:flex", "[&_.chips]:flex-wrap", "[&_.chips]:gap-2", "[&_.chip]:rounded-lg", "[&_.chip]:border", "[&_.chip]:border-gray-300", "[&_.chip]:px-3", "[&_.chip]:py-1", "[&_.chip]:text-xs", "[&_.chip]:text-[var(--color-text-gray)]", "[&_.actions]:mt-4", "[&_.actions]:flex", "[&_.actions]:items-center", "[&_.actions]:gap-4", "[&_.action]:text-xs", "[&_.action]:font-semibold", "[&_.action]:text-[var(--color-text-base)]", "[&_.action:hover]:text-[var(--color-primary)]", "[&_.action]:transition-colors"], [1, "title"], [1, "meta"], [1, "addr"], [1, "chips"], [1, "chip"], [1, "actions"], ["type", "button", 1, "action"], [1, "rounded-2xl", "bg-gray-50", "p-5"], [1, "text-sm", "font-semibold", "text-[var(--color-text-base)]"], [1, "mt-2", "text-xs", "text-[var(--color-text-gray)]"], [1, "mt-3", "text-xs", "leading-5", "text-[var(--color-text-gray)]"], [1, "mt-4", "flex", "flex-wrap", "gap-2"], [1, "rounded-lg", "border", "border-gray-300", "px-3", "py-1", "text-xs", "text-[var(--color-text-gray)]"], [1, "mt-4", "flex", "items-center", "gap-4"], ["type", "button", 1, "text-xs", "font-semibold", "text-[var(--color-text-base)]", "hover:text-[var(--color-primary)]", "transition-colors"]], template: function InfoPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "main")(2, "h2", 1);
      \u0275\u0275text(3, "My Info");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "section", 2)(5, "h3", 3);
      \u0275\u0275text(6, " Contact Details ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "div", 4)(8, "div")(9, "div")(10, "p", 5);
      \u0275\u0275text(11, "Your Name");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "p", 6);
      \u0275\u0275text(13, "Jhanvi Shah");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(14, "button", 7);
      \u0275\u0275text(15, " Change ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(16, "div")(17, "div")(18, "p", 5);
      \u0275\u0275text(19, "Email Address");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "p", 6);
      \u0275\u0275text(21, "Jhanvi@gmail.com");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(22, "button", 7);
      \u0275\u0275text(23, " Change ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(24, "div")(25, "div")(26, "p", 5);
      \u0275\u0275text(27, "Phone Number");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "p", 6);
      \u0275\u0275text(29, "8980252445");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(30, "button", 7);
      \u0275\u0275text(31, " Change ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(32, "div")(33, "div")(34, "p", 5);
      \u0275\u0275text(35, "Password");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(36, "p", 6);
      \u0275\u0275text(37, "\u2022\u2022\u2022\u2022\u2022\u2022\u2022");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(38, "button", 7);
      \u0275\u0275text(39, " Change ");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(40, "section", 8)(41, "div", 9)(42, "h3", 3);
      \u0275\u0275text(43, "Address");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(44, "button", 10);
      \u0275\u0275text(45, " Add New ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(46, "div", 11)(47, "article", 12)(48, "p", 13);
      \u0275\u0275text(49, "Jhanvi shah");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(50, "p", 14);
      \u0275\u0275text(51, "8980252445");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(52, "p", 15);
      \u0275\u0275text(53, " 1/4 Pragatinagar Flats, opp. jain derasar, near Jain derasar, Vijaynagar road ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(54, "div", 16)(55, "span", 17);
      \u0275\u0275text(56, "Home");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(57, "span", 17);
      \u0275\u0275text(58, "Default billing address");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(59, "div", 18)(60, "button", 19);
      \u0275\u0275text(61, "Remove");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(62, "button", 19);
      \u0275\u0275text(63, "Edit");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(64, "article", 20)(65, "p", 21);
      \u0275\u0275text(66, "Jhanvi shah");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(67, "p", 22);
      \u0275\u0275text(68, "8980252445");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(69, "p", 23);
      \u0275\u0275text(70, " 1/4 Pragatinagar Flats, opp. jain derasar, near Jain derasar, Vijaynagar road ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(71, "div", 24)(72, "span", 25);
      \u0275\u0275text(73, "Home");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(74, "span", 25);
      \u0275\u0275text(75, "Default shipping address");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(76, "div", 26)(77, "button", 27);
      \u0275\u0275text(78, " Remove ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(79, "button", 27);
      \u0275\u0275text(80, " Edit ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(81, "article", 20)(82, "p", 21);
      \u0275\u0275text(83, "Jhanvi shah");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(84, "p", 22);
      \u0275\u0275text(85, "8980252445");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(86, "p", 23);
      \u0275\u0275text(87, " 1/4 Pragatinagar Flats, opp. jain derasar, near Jain derasar, Vijaynagar road ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(88, "div", 24)(89, "span", 25);
      \u0275\u0275text(90, "Office");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(91, "div", 26)(92, "button", 27);
      \u0275\u0275text(93, " Remove ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(94, "button", 27);
      \u0275\u0275text(95, " Edit ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(96, "button", 27);
      \u0275\u0275text(97, " Set as default ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(98, "article", 20)(99, "p", 21);
      \u0275\u0275text(100, "Jhanvi shah");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(101, "p", 22);
      \u0275\u0275text(102, "8980252445");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(103, "p", 23);
      \u0275\u0275text(104, " 1/4 Pragatinagar Flats, opp. jain derasar, near Jain derasar, Vijaynagar road ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(105, "div", 24)(106, "span", 25);
      \u0275\u0275text(107, "Home2");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(108, "div", 26)(109, "button", 27);
      \u0275\u0275text(110, " Remove ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(111, "button", 27);
      \u0275\u0275text(112, " Edit ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(113, "button", 27);
      \u0275\u0275text(114, " Set as default ");
      \u0275\u0275domElementEnd()()()()()()();
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoPage, [{
    type: Component,
    args: [{ selector: "app-root", imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: '<section class="mx-auto w-full px-4 py-8 font-causten text-[var(--color-text-base)]">\n  <!-- Main -->\n  <main>\n    <h2 class="font-coresans text-xl font-semibold text-[var(--color-text-base)]">My Info</h2>\n\n    <!-- Contact Details -->\n    <section class="mt-6">\n      <h3 class="font-coresans text-base font-semibold text-[var(--color-text-base)]">\n        Contact Details\n      </h3>\n\n      <!-- rows: \u0441\u0442\u0438\u043B\u0438 \u043D\u0430 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0435 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0442\u044C -->\n      <div\n        class="mt-4 rounded-2xl bg-white [&>div]:px-5 [&>div]:py-4 [&>div]:grid [&>div]:items-center [&>div]:grid-cols-[1fr_auto] [&>div:not(:last-child)]:border-b [&>div:not(:last-child)]:border-gray-100"\n      >\n        <div>\n          <div>\n            <p class="text-xs text-[var(--color-text-gray)]">Your Name</p>\n            <p class="mt-1 text-sm font-semibold text-[var(--color-text-base)]">Jhanvi Shah</p>\n          </div>\n          <button\n            type="button"\n            class="text-sm font-semibold text-[var(--color-text-gray)] hover:text-[var(--color-primary)] transition-colors"\n          >\n            Change\n          </button>\n        </div>\n\n        <div>\n          <div>\n            <p class="text-xs text-[var(--color-text-gray)]">Email Address</p>\n            <p class="mt-1 text-sm font-semibold text-[var(--color-text-base)]">Jhanvi@gmail.com</p>\n          </div>\n          <button\n            type="button"\n            class="text-sm font-semibold text-[var(--color-text-gray)] hover:text-[var(--color-primary)] transition-colors"\n          >\n            Change\n          </button>\n        </div>\n\n        <div>\n          <div>\n            <p class="text-xs text-[var(--color-text-gray)]">Phone Number</p>\n            <p class="mt-1 text-sm font-semibold text-[var(--color-text-base)]">8980252445</p>\n          </div>\n          <button\n            type="button"\n            class="text-sm font-semibold text-[var(--color-text-gray)] hover:text-[var(--color-primary)] transition-colors"\n          >\n            Change\n          </button>\n        </div>\n\n        <div>\n          <div>\n            <p class="text-xs text-[var(--color-text-gray)]">Password</p>\n            <p class="mt-1 text-sm font-semibold text-[var(--color-text-base)]">\u2022\u2022\u2022\u2022\u2022\u2022\u2022</p>\n          </div>\n          <button\n            type="button"\n            class="text-sm font-semibold text-[var(--color-text-gray)] hover:text-[var(--color-primary)] transition-colors"\n          >\n            Change\n          </button>\n        </div>\n      </div>\n    </section>\n\n    <!-- Address -->\n    <section class="mt-10">\n      <div class="flex items-center justify-between gap-4">\n        <h3 class="font-coresans text-base font-semibold text-[var(--color-text-base)]">Address</h3>\n\n        <button\n          type="button"\n          class="text-sm font-semibold text-[var(--color-text-base)] hover:text-[var(--color-primary)] transition-colors"\n        >\n          Add New\n        </button>\n      </div>\n\n      <!-- Cards grid -->\n      <div class="mt-4 grid gap-4 sm:grid-cols-2">\n        <!-- Card (\u0441\u0442\u0438\u043B\u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0435\u043C\u044B\u0445 \u0447\u0430\u0441\u0442\u0435\u0439 \u2014 \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u043B\u0435\u043A\u0442\u043E\u0440\u044B) -->\n        <article\n          class="rounded-2xl bg-gray-50 p-5 [&_.title]:text-sm [&_.title]:font-semibold [&_.title]:text-[var(--color-text-base)] [&_.meta]:mt-2 [&_.meta]:text-xs [&_.meta]:text-[var(--color-text-gray)] [&_.addr]:mt-3 [&_.addr]:text-xs [&_.addr]:leading-5 [&_.addr]:text-[var(--color-text-gray)] [&_.chips]:mt-4 [&_.chips]:flex [&_.chips]:flex-wrap [&_.chips]:gap-2 [&_.chip]:rounded-lg [&_.chip]:border [&_.chip]:border-gray-300 [&_.chip]:px-3 [&_.chip]:py-1 [&_.chip]:text-xs [&_.chip]:text-[var(--color-text-gray)] [&_.actions]:mt-4 [&_.actions]:flex [&_.actions]:items-center [&_.actions]:gap-4 [&_.action]:text-xs [&_.action]:font-semibold [&_.action]:text-[var(--color-text-base)] [&_.action:hover]:text-[var(--color-primary)] [&_.action]:transition-colors"\n        >\n          <p class="title">Jhanvi shah</p>\n          <p class="meta">8980252445</p>\n          <p class="addr">\n            1/4 Pragatinagar Flats, opp. jain derasar, near Jain derasar, Vijaynagar road\n          </p>\n\n          <div class="chips">\n            <span class="chip">Home</span>\n            <span class="chip">Default billing address</span>\n          </div>\n\n          <div class="actions">\n            <button type="button" class="action">Remove</button>\n            <button type="button" class="action">Edit</button>\n          </div>\n        </article>\n\n        <article class="rounded-2xl bg-gray-50 p-5">\n          <p class="text-sm font-semibold text-[var(--color-text-base)]">Jhanvi shah</p>\n          <p class="mt-2 text-xs text-[var(--color-text-gray)]">8980252445</p>\n          <p class="mt-3 text-xs leading-5 text-[var(--color-text-gray)]">\n            1/4 Pragatinagar Flats, opp. jain derasar, near Jain derasar, Vijaynagar road\n          </p>\n\n          <div class="mt-4 flex flex-wrap gap-2">\n            <span\n              class="rounded-lg border border-gray-300 px-3 py-1 text-xs text-[var(--color-text-gray)]"\n              >Home</span\n            >\n            <span\n              class="rounded-lg border border-gray-300 px-3 py-1 text-xs text-[var(--color-text-gray)]"\n              >Default shipping address</span\n            >\n          </div>\n\n          <div class="mt-4 flex items-center gap-4">\n            <button\n              type="button"\n              class="text-xs font-semibold text-[var(--color-text-base)] hover:text-[var(--color-primary)] transition-colors"\n            >\n              Remove\n            </button>\n            <button\n              type="button"\n              class="text-xs font-semibold text-[var(--color-text-base)] hover:text-[var(--color-primary)] transition-colors"\n            >\n              Edit\n            </button>\n          </div>\n        </article>\n\n        <article class="rounded-2xl bg-gray-50 p-5">\n          <p class="text-sm font-semibold text-[var(--color-text-base)]">Jhanvi shah</p>\n          <p class="mt-2 text-xs text-[var(--color-text-gray)]">8980252445</p>\n          <p class="mt-3 text-xs leading-5 text-[var(--color-text-gray)]">\n            1/4 Pragatinagar Flats, opp. jain derasar, near Jain derasar, Vijaynagar road\n          </p>\n\n          <div class="mt-4 flex flex-wrap gap-2">\n            <span\n              class="rounded-lg border border-gray-300 px-3 py-1 text-xs text-[var(--color-text-gray)]"\n              >Office</span\n            >\n          </div>\n\n          <div class="mt-4 flex items-center gap-4">\n            <button\n              type="button"\n              class="text-xs font-semibold text-[var(--color-text-base)] hover:text-[var(--color-primary)] transition-colors"\n            >\n              Remove\n            </button>\n            <button\n              type="button"\n              class="text-xs font-semibold text-[var(--color-text-base)] hover:text-[var(--color-primary)] transition-colors"\n            >\n              Edit\n            </button>\n            <button\n              type="button"\n              class="text-xs font-semibold text-[var(--color-text-base)] hover:text-[var(--color-primary)] transition-colors"\n            >\n              Set as default\n            </button>\n          </div>\n        </article>\n\n        <article class="rounded-2xl bg-gray-50 p-5">\n          <p class="text-sm font-semibold text-[var(--color-text-base)]">Jhanvi shah</p>\n          <p class="mt-2 text-xs text-[var(--color-text-gray)]">8980252445</p>\n          <p class="mt-3 text-xs leading-5 text-[var(--color-text-gray)]">\n            1/4 Pragatinagar Flats, opp. jain derasar, near Jain derasar, Vijaynagar road\n          </p>\n\n          <div class="mt-4 flex flex-wrap gap-2">\n            <span\n              class="rounded-lg border border-gray-300 px-3 py-1 text-xs text-[var(--color-text-gray)]"\n              >Home2</span\n            >\n          </div>\n\n          <div class="mt-4 flex items-center gap-4">\n            <button\n              type="button"\n              class="text-xs font-semibold text-[var(--color-text-base)] hover:text-[var(--color-primary)] transition-colors"\n            >\n              Remove\n            </button>\n            <button\n              type="button"\n              class="text-xs font-semibold text-[var(--color-text-base)] hover:text-[var(--color-primary)] transition-colors"\n            >\n              Edit\n            </button>\n            <button\n              type="button"\n              class="text-xs font-semibold text-[var(--color-text-base)] hover:text-[var(--color-primary)] transition-colors"\n            >\n              Set as default\n            </button>\n          </div>\n        </article>\n      </div>\n    </section>\n  </main>\n</section>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfoPage, { className: "InfoPage", filePath: "apps/marketplace-web/src/app/features/personal/pages/info-page/info-page.ts", lineNumber: 11 });
})();
export {
  InfoPage
};
//# sourceMappingURL=chunk-5VBBUGF3.js.map
