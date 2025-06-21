(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/LoadingSpinner.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LoadingSpinner": (()=>LoadingSpinner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function LoadingSpinner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 bg-white/50 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"
        }, void 0, false, {
            fileName: "[project]/src/components/LoadingSpinner.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/LoadingSpinner.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = LoadingSpinner;
var _c;
__turbopack_context__.k.register(_c, "LoadingSpinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/marketingBot.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "MarketingBot": (()=>MarketingBot),
    "marketingBot": (()=>marketingBot)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
class MarketingBot {
    email;
    password;
    token = null;
    retryCount = 3;
    retryDelay = 1000;
    constructor(){
        this.email = ("TURBOPACK compile-time value", "nkoudefiosirus@gmail.com") || '';
        this.password = ("TURBOPACK compile-time value", "Osirusdefi1@") || '';
    }
    async retryOperation(operation, fallback) {
        let lastError;
        for(let i = 0; i < this.retryCount; i++){
            try {
                return await operation();
            } catch (error) {
                lastError = error;
                if (i < this.retryCount - 1) {
                    await new Promise((resolve)=>setTimeout(resolve, this.retryDelay));
                }
            }
        }
        console.error('Operation failed after retries:', lastError);
        return fallback;
    }
    // Authentication
    async login() {
        return this.retryOperation(async ()=>{
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/api/auth/login', {
                email: this.email,
                password: this.password
            });
            this.token = response.data.token;
            return true;
        }, false);
    }
    // Product Management
    async createProduct(product) {
        return this.retryOperation(async ()=>{
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/api/products', product, {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            });
            return response.data;
        }, null);
    }
    async getProducts() {
        return this.retryOperation(async ()=>{
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/api/products', {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            });
            return response.data;
        }, []);
    }
    // Campaign Management
    async createCampaign(campaign) {
        return this.retryOperation(async ()=>{
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/api/campaigns', campaign, {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            });
            return response.data;
        }, null);
    }
    async getCampaigns() {
        return this.retryOperation(async ()=>{
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/api/campaigns', {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            });
            return response.data;
        }, []);
    }
    // Payment Processing
    async getTransactions() {
        return this.retryOperation(async ()=>{
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/api/transactions', {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            });
            return response.data;
        }, []);
    }
    // Affiliate Management
    async getAffiliateStats() {
        return this.retryOperation(async ()=>{
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/api/affiliates/stats', {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            });
            return response.data;
        }, {
            totalAffiliates: 0
        });
    }
    // AI Product Research
    async researchProducts(query) {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/api/ai/research', {
                query
            }, {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Failed to research products:', error);
            return [];
        }
    }
    // Analytics
    async getAnalytics() {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/api/analytics', {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Failed to fetch analytics:', error);
            return null;
        }
    }
}
const marketingBot = new MarketingBot();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useMarketingData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useMarketingData": (()=>useMarketingData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$marketingBot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/marketingBot.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const initialStats = {
    products: 0,
    campaigns: 0,
    transactions: 0,
    affiliates: 0,
    revenue: 0
};
function useMarketingData() {
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialStats);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoadingStats, setIsLoadingStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const retryCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const fetchWithTimeout = async (promise, timeout = 5000)=>{
        const timeoutPromise = new Promise((_, reject)=>{
            setTimeout(()=>reject(new Error('Request timed out')), timeout);
        });
        return Promise.race([
            promise,
            timeoutPromise
        ]);
    };
    const connectBot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMarketingData.useCallback[connectBot]": async ()=>{
            setIsLoading(true);
            setError(null);
            try {
                const success = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$marketingBot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marketingBot"].login();
                setIsConnected(success);
                if (!success) {
                    setError('Failed to connect to the bot');
                }
            } catch (error) {
                console.error('Failed to connect bot:', error);
                setError('Connection error occurred');
                setIsConnected(false);
            } finally{
                setIsLoading(false);
            }
        }
    }["useMarketingData.useCallback[connectBot]"], []);
    const fetchStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMarketingData.useCallback[fetchStats]": async ()=>{
            if (!isConnected) return;
            setIsLoadingStats(true);
            setError(null);
            try {
                const [products, campaigns, transactions, affiliates] = await Promise.allSettled([
                    fetchWithTimeout(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$marketingBot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marketingBot"].getProducts()),
                    fetchWithTimeout(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$marketingBot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marketingBot"].getCampaigns()),
                    fetchWithTimeout(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$marketingBot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marketingBot"].getTransactions()),
                    fetchWithTimeout(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$marketingBot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marketingBot"].getAffiliateStats())
                ]);
                const results = {
                    products: products.status === 'fulfilled' ? products.value : [],
                    campaigns: campaigns.status === 'fulfilled' ? campaigns.value : [],
                    transactions: transactions.status === 'fulfilled' ? transactions.value : [],
                    affiliates: affiliates.status === 'fulfilled' ? affiliates.value : {
                        totalAffiliates: 0
                    }
                };
                // Calculate total revenue safely
                const revenue = results.transactions.reduce({
                    "useMarketingData.useCallback[fetchStats].revenue": (sum, t)=>{
                        const amount = parseFloat(t.amount);
                        return sum + (isNaN(amount) ? 0 : amount);
                    }
                }["useMarketingData.useCallback[fetchStats].revenue"], 0);
                // Update stats with the new data
                setStats({
                    products: results.products.length || 0,
                    campaigns: results.campaigns.length || 0,
                    transactions: results.transactions.length || 0,
                    affiliates: results.affiliates?.totalAffiliates || 0,
                    revenue
                });
                // Handle any failed requests
                const failedRequests = [
                    products,
                    campaigns,
                    transactions,
                    affiliates
                ].filter({
                    "useMarketingData.useCallback[fetchStats].failedRequests": (result)=>result.status === 'rejected'
                }["useMarketingData.useCallback[fetchStats].failedRequests"]).map({
                    "useMarketingData.useCallback[fetchStats].failedRequests": (result)=>result.reason
                }["useMarketingData.useCallback[fetchStats].failedRequests"]);
                if (failedRequests.length > 0) {
                    const timeoutErrors = failedRequests.filter({
                        "useMarketingData.useCallback[fetchStats]": (error)=>error.message === 'Request timed out'
                    }["useMarketingData.useCallback[fetchStats]"]).length;
                    const networkErrors = failedRequests.filter({
                        "useMarketingData.useCallback[fetchStats]": (error)=>error.message.includes('network')
                    }["useMarketingData.useCallback[fetchStats]"]).length;
                    const otherErrors = failedRequests.length - timeoutErrors - networkErrors;
                    const errorParts = [];
                    if (timeoutErrors > 0) {
                        errorParts.push(`${timeoutErrors} request${timeoutErrors > 1 ? 's' : ''} timed out`);
                    }
                    if (networkErrors > 0) {
                        errorParts.push(`${networkErrors} network error${networkErrors > 1 ? 's' : ''}`);
                    }
                    if (otherErrors > 0) {
                        errorParts.push(`${otherErrors} other error${otherErrors > 1 ? 's' : ''}`);
                    }
                    const errorMessage = `Some data may be incomplete (${errorParts.join(', ')}).`;
                    setError(errorMessage);
                    // Implement smart retry logic
                    if (retryCountRef.current < 3) {
                        const delay = Math.min(1000 * Math.pow(2, retryCountRef.current), 10000); // Max 10s delay
                        setTimeout({
                            "useMarketingData.useCallback[fetchStats]": ()=>{
                                retryCountRef.current++;
                                fetchStats();
                            }
                        }["useMarketingData.useCallback[fetchStats]"], delay);
                    } else {
                        // After max retries, try one final time after a longer delay
                        setTimeout({
                            "useMarketingData.useCallback[fetchStats]": ()=>{
                                retryCountRef.current = 0; // Reset retry count
                                fetchStats();
                            }
                        }["useMarketingData.useCallback[fetchStats]"], 30000); // Wait 30s before final retry
                    }
                } else {
                    retryCountRef.current = 0; // Reset retry count on full success
                    setError(null); // Clear any previous errors
                }
            } catch (error) {
                console.error('Failed to fetch stats:', error);
                setError('Failed to fetch latest statistics. Retrying...');
                // Implement exponential backoff for complete failures
                if (retryCountRef.current < 5) {
                    const delay = Math.min(1000 * Math.pow(2, retryCountRef.current), 30000);
                    setTimeout({
                        "useMarketingData.useCallback[fetchStats]": ()=>{
                            retryCountRef.current++;
                            fetchStats();
                        }
                    }["useMarketingData.useCallback[fetchStats]"], delay);
                }
            } finally{
                setIsLoadingStats(false);
            }
        }
    }["useMarketingData.useCallback[fetchStats]"], [
        isConnected
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMarketingData.useEffect": ()=>{
            let mounted = true;
            let reconnectAttempts = 0;
            let reconnectTimeout;
            const attemptReconnect = {
                "useMarketingData.useEffect.attemptReconnect": async ()=>{
                    if (!mounted || isConnected) return;
                    try {
                        reconnectAttempts++;
                        await connectBot();
                        // If still not connected and under max attempts, try again with exponential backoff
                        if (!isConnected && mounted && reconnectAttempts < 5) {
                            const delay = Math.min(1000 * Math.pow(2, reconnectAttempts), 30000); // Max 30s delay
                            reconnectTimeout = setTimeout(attemptReconnect, delay);
                        }
                    } catch (error) {
                        console.error('Reconnection attempt failed:', error);
                        // Still retry on error if under max attempts
                        if (mounted && reconnectAttempts < 5) {
                            const delay = Math.min(1000 * Math.pow(2, reconnectAttempts), 30000);
                            reconnectTimeout = setTimeout(attemptReconnect, delay);
                        }
                    }
                }
            }["useMarketingData.useEffect.attemptReconnect"];
            // Start connection attempt immediately
            attemptReconnect();
            // Also attempt reconnect when connection is lost
            const connectionCheckInterval = setInterval({
                "useMarketingData.useEffect.connectionCheckInterval": ()=>{
                    if (!isConnected && mounted) {
                        reconnectAttempts = 0; // Reset attempts when starting a new reconnection cycle
                        attemptReconnect();
                    }
                }
            }["useMarketingData.useEffect.connectionCheckInterval"], 60000); // Check connection every minute
            return ({
                "useMarketingData.useEffect": ()=>{
                    mounted = false;
                    if (reconnectTimeout) {
                        clearTimeout(reconnectTimeout);
                    }
                    clearInterval(connectionCheckInterval);
                }
            })["useMarketingData.useEffect"];
        }
    }["useMarketingData.useEffect"], [
        isConnected,
        connectBot
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMarketingData.useEffect": ()=>{
            let mounted = true;
            let updateInterval;
            const updateStats = {
                "useMarketingData.useEffect.updateStats": async ()=>{
                    if (mounted && isConnected) {
                        await fetchStats();
                    }
                }
            }["useMarketingData.useEffect.updateStats"];
            if (isConnected) {
                // Reset retry count when connection state changes
                retryCountRef.current = 0;
                updateStats();
                updateInterval = setInterval(updateStats, 30000);
            } else {
                // Reset stats and error state when disconnected
                setStats(initialStats);
                setError(null);
                // Also reset retry count when disconnected
                retryCountRef.current = 0;
            }
            return ({
                "useMarketingData.useEffect": ()=>{
                    mounted = false;
                    if (updateInterval) {
                        clearInterval(updateInterval);
                    }
                }
            })["useMarketingData.useEffect"];
        }
    }["useMarketingData.useEffect"], [
        isConnected,
        fetchStats
    ]);
    return {
        isLoading,
        isConnected,
        stats,
        error,
        isLoadingStats,
        connectBot,
        fetchStats
    };
}
_s(useMarketingData, "Ik5UUHLcBS6r0HN+ruappmTy6Ds=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Dashboard.tsx [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/src/components/Dashboard.tsx'

Unexpected token `div`. Expected jsx identifier`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/src/components/Dashboard.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/Dashboard.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_26f1be78._.js.map