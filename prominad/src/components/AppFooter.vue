<template>
    <footer class="container app-footer">
        <div>
            <div class="footer-text">Мы на связи с Вами</div>
            <a href="tel:+78202738236" class="number">+7 (8202) 73-82-36</a>
        </div>
        <a href="https://vk.com" target="_blank" rel="noopener">
            <img src="/images/vk.svg" alt="VK" height="32" />
        </a>
    </footer>
</template>

<style scoped>
.app-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* логотип «чуть выше», как на макете */
    gap: 16px;
    height: 58px;
    /* визуально как на рис. 2 */
    background: #FFF8E9;
    /* цвет подложки как на скрине */
}

.footer-text {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--text);
    text-decoration: none;
    font-family: 'Rubik', sans-serif;
}

.number {
    text-decoration: none;
    color: var(--text);
    font-family: Rubik;
    font-weight: 400;
    font-style: Regular;
    font-size: 13px;
    line-height: 17px;
    letter-spacing: 0%;
    vertical-align: middle;

}
</style>