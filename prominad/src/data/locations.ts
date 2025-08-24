export type LocationId =
| '1-milyutina'
| '2-gymnast'
| '3-soviet-31'
| '4-soviet-21'
| '5-some'
| '6-some'
| '7-some'
| '8-some'
| '9-museum-yard'


export interface LocationData {
id: LocationId
order: number
title: string
wherePrev?: string
whereHere: string
whereNext?: string
bulletsHere?: string[]
videoSrc: string
cta?: { text: string; to: string }
}

// ДАННЫЕ ДЛЯ 9 СТРАНИЦ.
export const LOCATIONS: Record<LocationId, LocationData> = {
'1-milyutina': {
id: '1-milyutina',
order: 1,
title: '1. Площадь Милютина',
whereHere: 'Площадь Милютина',
whereNext: 'Арт-объект «Гимнастистка»',
videoSrc: '/videos/1.mp4',
cta: { text: 'Узнать больше', to: '/about' }
},
'2-gymnast': {
id: '2-gymnast',
order: 2,
title: '2. Арт-объект «Гимназистка»',
wherePrev: 'Площадь Милютина',
whereHere: 'Арт-объект «Гимнастистка»',
whereNext: 'Советский просп., д. 31',
videoSrc: '/videos/2.mp4',
cta: { text: 'Узнать больше', to: '/about' }
},
'3-soviet-31': {
id: '3-soviet-31',
order: 3,
title: '3. Советский просп., д. 31',
wherePrev: 'Арт-объект «Гимнастистка»',
whereHere: 'Советский просп., д. 31',
whereNext: 'Советский просп., д. 31',
bulletsHere: [
'Дом Анны Демидовой (Советский просп., д. 31)',
'Дом Степана Заводчикова (Советский просп., д. 29)',
'Арт-арка (Советский просп., д. 23)',
'Дом купца Волкова (Советский просп., д. 21)'
],
videoSrc: '/videos/3.mp4',
cta: { text: 'Узнать больше', to: '/about' }
},
'4-soviet-21': {
id: '4-soviet-21',
order: 4,
title: '4. Советский просп., д. 21',
wherePrev: 'Советский просп., д. 31',
whereHere: 'Советский просп., д. 21',
whereNext: '—',
videoSrc: '/videos/4.mp4'
},
'5-some': {
id: '5-some',
order: 5,
title: '5. Локация',
wherePrev: '—',
whereHere: 'Локация 5',
whereNext: '—',
videoSrc: '/videos/5.mp4'
},
'6-some': {
id: '6-some',
order: 6,
title: '6. Локация',
wherePrev: '—',
whereHere: 'Локация 6',
whereNext: '—',
videoSrc: '/videos/6.mp4'
},
'7-some': {
id: '7-some',
order: 7,
title: '7. Локация',
wherePrev: '—',
whereHere: 'Локация 7',
whereNext: '—',
videoSrc: '/videos/7.mp4'
},
'8-some': {
id: '8-some',
order: 8,
title: '8. Локация',
wherePrev: '—',
whereHere: 'Локация 8',
whereNext: '—',
videoSrc: '/videos/8.mp4'
},
'9-museum-yard': {
id: '9-museum-yard',
order: 9,
title: '9. Музейный дворик',
wherePrev: 'Музей Верещагиных',
whereHere: 'Музейный дворик',
videoSrc: '/videos/9.mp4'
}
}


export function getLocationByRouteId(id: string){
return LOCATIONS[id as LocationId]
}