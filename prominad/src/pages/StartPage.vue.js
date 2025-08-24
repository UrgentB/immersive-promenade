import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import { LOCATIONS } from '@/data/locations';
const ids = Object.keys(LOCATIONS);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {[typeof AppHeader, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(AppHeader, new AppHeader({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_elements.main, __VLS_elements.main)({
    ...{ class: "container" },
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "card" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "h1" },
});
__VLS_asFunctionalElement(__VLS_elements.br)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "lead" },
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "card" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "h2" },
});
__VLS_asFunctionalElement(__VLS_elements.ol, __VLS_elements.ol)({
    ...{ class: "lead" },
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "card" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "h2" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ style: {} },
});
for (const [id] of __VLS_getVForSourceType((__VLS_ctx.ids))) {
    // @ts-ignore
    [ids,];
    const __VLS_4 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
    // @ts-ignore
    RouterLink;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        key: (id),
        ...{ class: "btn" },
        to: (`/l/${id}`),
    }));
    const __VLS_6 = __VLS_5({
        key: (id),
        ...{ class: "btn" },
        to: (`/l/${id}`),
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    const { default: __VLS_8 } = __VLS_7.slots;
    (id);
    var __VLS_7;
}
/** @type {[typeof AppFooter, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(AppFooter, new AppFooter({}));
const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['h1']} */ ;
/** @type {__VLS_StyleScopedClasses['lead']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['h2']} */ ;
/** @type {__VLS_StyleScopedClasses['lead']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['h2']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        AppHeader: AppHeader,
        AppFooter: AppFooter,
        ids: ids,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
