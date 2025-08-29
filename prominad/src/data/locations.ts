export type LocationId =
| '1-milyutina'
| '2-gymnast'
| '3-soviet-31'
| '4-archaeology'
| '5-vinogradov'
| '6-revol'
| '7-naber'
| '8-vermuseum'
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
whereNext: 'Арт-объект «Гимназистка»',
videoSrc: '/videos/1.mp4',
cta: { text: 'Узнать больше', to: '/about' }
},
'2-gymnast': {
id: '2-gymnast',
order: 2,
title: '2. Арт-объект «Гимназистка»',
wherePrev: 'Площадь Милютина',
whereHere: 'Арт-объект «Гимназистка»',
whereNext: 'Советский просп., д. 31',
videoSrc: '/videos/2.mp4',
cta: { text: 'Узнать больше', to: '/about' }
},
'3-soviet-31': {
id: '3-soviet-31',
order: 3,
title: '3. Советский просп., д. 31',
wherePrev: 'Арт-объект «Гимназистка»',
whereHere: 'Советский просп., д. 31',
whereNext: 'Музей археологии',
bulletsHere: [
'Дом Анны Демидовой (Советский просп., д. 31)',
'Дом Степана Заводчикова (Советский просп., д. 29)',
'Арт-арка (Советский просп., д. 23)',
'Дом купца Волкова (Советский просп., д. 21)'
],
videoSrc: '/videos/3.mp4',
cta: { text: 'Узнать больше', to: '/about' }
},
'4-archaeology': {
id: '4-archaeology',
order: 4,
title: '4. Музей археологии',
wherePrev: 'Советский просп., д. 31',
whereHere: 'Музей археологии (Советский просп., 19)',
whereNext: 'Дом купца Виноградова',
videoSrc: '/videos/test.mp4',
cta: { text: 'Узнать больше', to: '/about' }
},
'5-vinogradov': {
id: '5-vinogradov',
order: 5,
title: '5. Дом купца Виноградова',
wherePrev: 'Музей археологии',
whereHere: 'Дом купца Виноградова (Советский просп., 1)',
whereNext: 'Площадь Революции',
videoSrc: '/videos/5.mp4',
cta: { text: 'Узнать больше', to: '/about' }
},
'6-revol': {
id: '6-revol',
order: 6,
title: '6. Площадь Революции',
wherePrev: 'Дом купца Виноградова',
whereHere: 'Площадь Революции',
whereNext: 'Набережная',
videoSrc: '/videos/6.mp4',
cta: { text: 'Узнать больше', to: '/about' },
bulletsHere: [
	'Памятник братьям Верещагиным',
	'Дом И.А. Милютина (пл. Революции, 1)',
	'Булыжная мостовая (Памятник Афанасию и Феодосию)',
	'Воскресенский собор (Соборная горка, 1)'
],
},
'7-naber': {
id: '7-naber',
order: 7,
title: '7. Набережная',
wherePrev: 'Площадь Революции',
whereHere: 'Набережная',
whereNext: 'Музей Верещагиных',
videoSrc: '/videos/7.mp4',
cta: { text: 'Узнать больше', to: '/about' },
bulletsHere: [
	'Арт-объект "Городовой" (Александровская наб.)',
	'Стрелка рек Шексны и Ягорбы (Александровская наб.)',
	'Арт-объект "Речные рыбы-флюгеры" (Александровская наб.)',
	'Фигуры из кортена (Университетская наб.)'
],
},
'8-vermuseum': {
id: '8-vermuseum',
order: 8,
title: '8. Музей Верещагиных',
wherePrev: 'Набережная',
whereHere: 'Музей Верещагиных',
whereNext: 'Музейный дворик',
videoSrc: '/videos/8.mp4',
cta: { text: 'Узнать больше', to: '/about' },
bulletsHere: [
	'Мемориальный дом-музей Верещагиных (ул. Социалистическая, 22)',
	'Дворик Дома-музея Верещагиных',
	'Деревянный тротуар',
	'Перекрёсток ул. Коммунистов и Советского просп.'
],
},
'9-museum-yard': {
id: '9-museum-yard',
order: 9,
title: '9. Музейный дворик',
wherePrev: 'Музей Верещагиных',
whereHere: 'Музейный дворик',
videoSrc: '/videos/9.mp4',
cta: { text: 'Узнать больше', to: '/about' }
}
}


export function getLocationByRouteId(id: string){
return LOCATIONS[id as LocationId]
}