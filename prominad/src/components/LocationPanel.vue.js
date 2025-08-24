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
/** @type {__VLS_StyleScopedClasses['play']} */ ;
/** @type {__VLS_StyleScopedClasses['dot']} */ ;
/** @type {__VLS_StyleScopedClasses['dot']} */ ;
/** @type {__VLS_StyleScopedClasses['txt']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "card panel" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "h1 loc-title" },
});
(__VLS_ctx.title);
// @ts-ignore
[title,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ onClick: (__VLS_ctx.play) },
    ...{ class: "card-inner video-shell" },
});
// @ts-ignore
[play,];
__VLS_asFunctionalElement(__VLS_elements.video, __VLS_elements.video)({
    controls: (true),
    ref: "video",
    src: (__VLS_ctx.videoSrc),
    preload: "metadata",
    playsinline: true,
    controlslist: "nodownload noplaybackrate",
    ...{ style: {} },
});
/** @type {typeof __VLS_ctx.video} */ ;
// @ts-ignore
[videoSrc, video,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "play" },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (!__VLS_ctx.started) }, null, null);
// @ts-ignore
[vShow, started,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "h2" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "timeline" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "rail" },
    'aria-hidden': "true",
});
if (__VLS_ctx.prev) {
    // @ts-ignore
    [prev,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "row" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "dot num" },
    });
    (__VLS_ctx.order - 1);
    // @ts-ignore
    [order,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "txt" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "label" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "title" },
    });
    __VLS_asFunctionalElement(__VLS_elements.b, __VLS_elements.b)({});
    (__VLS_ctx.prev);
    // @ts-ignore
    [prev,];
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "row" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "dot pin" },
});
__VLS_asFunctionalElement(__VLS_elements.svg, __VLS_elements.svg)({
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
});
__VLS_asFunctionalElement(__VLS_elements.path)({
    d: "M12 2c-3.314 0-6 2.686-6 6 0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",
    fill: "currentColor",
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "txt" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "label" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "title" },
});
__VLS_asFunctionalElement(__VLS_elements.b, __VLS_elements.b)({});
(__VLS_ctx.here);
// @ts-ignore
[here,];
if (__VLS_ctx.bullets?.length) {
    // @ts-ignore
    [bullets,];
    __VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)({
        ...{ class: "bullets" },
    });
    for (const [b, i] of __VLS_getVForSourceType((__VLS_ctx.bullets))) {
        // @ts-ignore
        [bullets,];
        __VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({
            key: (i),
        });
        (b);
    }
}
if (__VLS_ctx.next) {
    // @ts-ignore
    [next,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "row" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "dot num" },
    });
    (__VLS_ctx.order + 1);
    // @ts-ignore
    [order,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "txt" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "label" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "title" },
    });
    __VLS_asFunctionalElement(__VLS_elements.b, __VLS_elements.b)({});
    (__VLS_ctx.next);
    // @ts-ignore
    [next,];
}
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['h1']} */ ;
/** @type {__VLS_StyleScopedClasses['loc-title']} */ ;
/** @type {__VLS_StyleScopedClasses['card-inner']} */ ;
/** @type {__VLS_StyleScopedClasses['video-shell']} */ ;
/** @type {__VLS_StyleScopedClasses['play']} */ ;
/** @type {__VLS_StyleScopedClasses['h2']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline']} */ ;
/** @type {__VLS_StyleScopedClasses['rail']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['dot']} */ ;
/** @type {__VLS_StyleScopedClasses['num']} */ ;
/** @type {__VLS_StyleScopedClasses['txt']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['dot']} */ ;
/** @type {__VLS_StyleScopedClasses['pin']} */ ;
/** @type {__VLS_StyleScopedClasses['txt']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['bullets']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['dot']} */ ;
/** @type {__VLS_StyleScopedClasses['num']} */ ;
/** @type {__VLS_StyleScopedClasses['txt']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
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
