import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import FedorBubble from '@/components/FedorBubble.vue';
import { ref } from 'vue';
const started = ref(false);
const video = ref();
const play = () => {
    if (started.value)
        return;
    started.value = true;
    const el = video.value;
    el.style.display = 'block';
    el.play();
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
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
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "card panel" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "h1" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ onClick: (__VLS_ctx.play) },
    ...{ class: "card-inner video-shell" },
});
// @ts-ignore
[play,];
__VLS_asFunctionalElement(__VLS_elements.video)({
    ref: "video",
    src: ('/videos/final.mp4'),
    preload: "metadata",
    playsinline: true,
    controlslist: "nodownload noplaybackrate",
    ...{ style: {} },
});
/** @type {typeof __VLS_ctx.video} */ ;
// @ts-ignore
[video,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "play" },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (!__VLS_ctx.started) }, null, null);
// @ts-ignore
[vShow, started,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "h2" },
});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "lead" },
});
/** @type {[typeof FedorBubble, typeof FedorBubble, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(FedorBubble, new FedorBubble({}));
const __VLS_5 = __VLS_4({}, ...__VLS_functionalComponentArgsRest(__VLS_4));
const { default: __VLS_7 } = __VLS_6.slots;
var __VLS_6;
/** @type {[typeof AppFooter, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(AppFooter, new AppFooter({}));
const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['page-with-spirals']} */ ;
/** @type {__VLS_StyleScopedClasses['spiral']} */ ;
/** @type {__VLS_StyleScopedClasses['spiral-tr']} */ ;
/** @type {__VLS_StyleScopedClasses['spiral']} */ ;
/** @type {__VLS_StyleScopedClasses['spiral-bl']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['h1']} */ ;
/** @type {__VLS_StyleScopedClasses['card-inner']} */ ;
/** @type {__VLS_StyleScopedClasses['video-shell']} */ ;
/** @type {__VLS_StyleScopedClasses['play']} */ ;
/** @type {__VLS_StyleScopedClasses['h2']} */ ;
/** @type {__VLS_StyleScopedClasses['lead']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        AppHeader: AppHeader,
        AppFooter: AppFooter,
        FedorBubble: FedorBubble,
        started: started,
        video: video,
        play: play,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
