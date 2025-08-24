import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import FedorBubble from '@/components/FedorBubble.vue';
import LocationPanel from '@/components/LocationPanel.vue';
import { useRoute, useRouter } from 'vue-router';
import { getLocationByRouteId } from '@/data/locations';
const route = useRoute();
const id = route.params.id;
const data = getLocationByRouteId(id);
const isLast = data?.order === 9;
if (!data)
    useRouter().replace('/');
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
    ...{ class: "container page-with-spirals" },
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_elements.img)({
    ...{ class: "spiral spiral-tr" },
    src: "/images/tr-spiral.svg",
    alt: "",
});
__VLS_asFunctionalElement(__VLS_elements.img)({
    ...{ class: "spiral spiral-bl" },
    src: "/images/dl-spiral.svg",
    alt: "",
});
/** @type {[typeof LocationPanel, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(LocationPanel, new LocationPanel({
    title: (__VLS_ctx.data.title),
    videoSrc: (__VLS_ctx.data.videoSrc),
    prev: (__VLS_ctx.data.wherePrev),
    here: (__VLS_ctx.data.whereHere),
    next: (__VLS_ctx.data.whereNext),
    order: (__VLS_ctx.data.order),
    bullets: (__VLS_ctx.data.bulletsHere),
}));
const __VLS_5 = __VLS_4({
    title: (__VLS_ctx.data.title),
    videoSrc: (__VLS_ctx.data.videoSrc),
    prev: (__VLS_ctx.data.wherePrev),
    here: (__VLS_ctx.data.whereHere),
    next: (__VLS_ctx.data.whereNext),
    order: (__VLS_ctx.data.order),
    bullets: (__VLS_ctx.data.bulletsHere),
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
// @ts-ignore
[data, data, data, data, data, data, data,];
if (__VLS_ctx.isLast) {
    // @ts-ignore
    [isLast,];
    /** @type {[typeof FedorBubble, typeof FedorBubble, ]} */ ;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(FedorBubble, new FedorBubble({
        cta: "Перейти к финалу",
        to: "/final",
    }));
    const __VLS_9 = __VLS_8({
        cta: "Перейти к финалу",
        to: "/final",
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const { default: __VLS_11 } = __VLS_10.slots;
    var __VLS_10;
}
else {
    /** @type {[typeof FedorBubble, typeof FedorBubble, ]} */ ;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(FedorBubble, new FedorBubble({
        cta: (__VLS_ctx.data.cta?.text),
        to: (__VLS_ctx.data.cta?.to),
    }));
    const __VLS_13 = __VLS_12({
        cta: (__VLS_ctx.data.cta?.text),
        to: (__VLS_ctx.data.cta?.to),
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    const { default: __VLS_15 } = __VLS_14.slots;
    // @ts-ignore
    [data, data,];
    var __VLS_14;
}
/** @type {[typeof AppFooter, ]} */ ;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(AppFooter, new AppFooter({}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['page-with-spirals']} */ ;
/** @type {__VLS_StyleScopedClasses['spiral']} */ ;
/** @type {__VLS_StyleScopedClasses['spiral-tr']} */ ;
/** @type {__VLS_StyleScopedClasses['spiral']} */ ;
/** @type {__VLS_StyleScopedClasses['spiral-bl']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        AppHeader: AppHeader,
        AppFooter: AppFooter,
        FedorBubble: FedorBubble,
        LocationPanel: LocationPanel,
        data: data,
        isLast: isLast,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
