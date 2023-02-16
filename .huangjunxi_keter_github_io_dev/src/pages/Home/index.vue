<template>
    <div class="bodyer">
        <ul>
            <li v-for="i in 5" :key="i" :style="{ '--i': `${6 - i}` }">
                <a href="#">{{ `Item 0${i}` }}</a>
            </li>
        </ul>
</div>
</template>

<script>
export default {
    name: 'HomePage',
    data() { },
    methods: {}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Oswald:400,700');

* {
    box-sizing: border-box;
    font-family: 'Oswald', sans-serif;
}

.bodyer {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #434750;
}

ul {
    position: relative;
    transform: skewY(-15deg);
}

/* 正面 */
ul li {
    position: relative;
    list-style: none;
    width: 200px;
    background: #3e3f46;
    padding: 15px;
    z-index: var(--i); /* --i 在行内样式中定义，有点像变量 */
    transition: 0.5s;
}

/* 左面 */
ul li::before {
    content: '';
    position: absolute;
    top: 0;
    left: -40px;
    width: 40px;
    height: 100%;
    background-color: #2e3133;
    transform-origin: right;
    transform: skewY(45deg);
    transition: 0.5s;
}

/* 顶面 */
ul li::after {
    content: '';
    position: absolute;
    top: -40px;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: #35383e;
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.5s;
}

/* 正面（悬停） */
ul li:hover {
    background: #33a3ee;
    transition: 0.5s;
    transform:  translateX(-50px);
}

/* 左面（悬停） */
ul li:hover::before {
    background: #1f5378;
}

/* 顶面（悬停） */
ul li:hover::after {
    background: #2982b9;
}

ul li:last-child::after {
    box-shadow: -120px 120px 20px rgba(0, 0, 0, 0.25);
}

ul li a {
    text-decoration: none;
    color: #999;
    display: block;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: 0.5s;
}

ul li:hover a {
    color: #fff;

}
</style>