# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

# По следам Фёдора — сайт маршрута


## Запуск
npm i
npm run dev


## Сборка
npm run build


## Маршруты для QR
/ – старт
/l/1-milyutina
/l/2-gymnast
/l/3-soviet-31
/l/4-soviet-21
/l/5-some
/l/6-some
/l/7-some
/l/8-some
/l/9-museum-yard (последняя страница выводит кнопку на /final)
/final


## Видео
Положите mp4 файлы в /public/videos и пропишите пути в src/data/locations.ts


## Хостинг
Проект — статический SPA, отдаётся любым хостингом как набор файлов из папки `dist` (например, Nginx, Timeweb, GitHub Pages). В `vite.config.ts` выставлен `base: './'` для корректной работы в подкаталоге.