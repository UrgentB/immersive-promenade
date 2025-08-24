import { ref } from 'vue';
const props = defineProps();
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
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "card" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ onClick: (__VLS_ctx.play) },
    ...{ class: "card-inner video-shell" },
});
// @ts-ignore
[play,];
__VLS_asFunctionalElement(__VLS_elements.video, __VLS_elements.video)({
    ref: "video",
    src: (__VLS_ctx.src),
    preload: "metadata",
    playsinline: true,
    controlslist: "nodownload noplaybackrate",
    ...{ style: {} },
});
/** @type {typeof __VLS_ctx.video} */ ;
// @ts-ignore
[src, video,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "play" },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (!__VLS_ctx.started) }, null, null);
// @ts-ignore
[vShow, started,];
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['card-inner']} */ ;
/** @type {__VLS_StyleScopedClasses['video-shell']} */ ;
/** @type {__VLS_StyleScopedClasses['play']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        started: started,
        video: video,
        play: play,
    }),
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
