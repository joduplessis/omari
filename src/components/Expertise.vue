<template>
    <section class="section">
        <div class="container">
            <br/>
            <br/>
            <div class="panels">
                <div class="panel">
                    <div class="year">
                        We're pretty great at the following things. If you're looking for something a little more bespoke, please
                        <router-link :to="{ name: 'Contact'}">
                            contact us
                        </router-link>
                        . (hover over the asterisks)
                    </div>
                    <div class="title">
                        UI design & UX
                    </div>
                    <div class="title">
                        E-commerce (development & strategy)
                    </div>
                    <div class="title" v-tooltip.center-center="frontend">
                        Frontend & Javascript*
                    </div>
                    <div class="title">
                        Ruby on Rails & Python Django
                    </div>
                    <div class="title">
                        NodeJS, MongoDB & MEAN
                    </div>
                    <div class="title" v-tooltip.center-center="mobile">
                        Mobile apps *
                    </div>
                    <div class="title" v-tooltip.center-center="backend">
                        Wordpress, Laravel & PHP *
                    </div>
                    <div class="title" v-tooltip.center-center="game">
                        Games *
                    </div>
                    <div class="title">
                        AWS, cloud & distributed systems
                    </div>
                    <div class="title">
                        Bots, USSD & Facebook Messenger
                    </div>
                    <br class="clearfix"/>
                    <div class="notes">
                    </div>
                </div>
            </div>
            <br class="clearfix"/>
        </div>
    </section>
</template>
<script>
    export default {
	name: 'expertise',
	data: function() {
		return {
			frontend: 'VueJS (this site), React, Angular, Ember, Vanilla (old school), <br/>Typescript, ES6, SASS, Webpack, Jquery (only legacy), etc.',
			backend: 'PHP, Laravel, Lumen, <br/>CodeIgnitor, Yii 2, Micron, Moodle, Magento',
			mobile: 'Swift, Java, React Native, Expo, Cordova, NativeScript',
			game: 'HTML5, Unity3D, Flash',
		}
	}
}
</script>
<style scoped="">.clearfix {
    clear: both;
}
.item a {
    width: 100%;
    height: 100%;
    background: black;
    display: block;
    opacity: 0.6;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
}
.item a:hover {
    opacity: 0;
    -webkit-transition: all 280ms ease-in-out;
    transition: all 280ms ease-in-out;
}
.item span {
    color: white;
    z-index: 2;
    font-family: 'Roboto Mono', monospace;
    font-size: 9px;
    padding: 5px;
    background: black;
    color: #aaa;
    font-weight: 400;
    text-transform: uppercase;
}
.item span strong {
    font-weight: 700;
    text-transform: capitalize;
    color: white;
    font-size: 11px;
    color: white;
}
.item {
    width: 100%;
    height: 500px;
    background-color: white;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: left;
    justify-content: left;
    background-position: center;
    background-size: cover;
}
@media (min-width: 1024px) {
    .panels {
        display: flex;
        align-items: left;
        justify-content: left;
    }
    .panel {
        width: 100%;
    }
    .panel img {
        margin: 0px;
        padding: 0px;
        width: 100%;
        height: auto;
        margin-top: -5px;
    }
    .panel .padding {
        padding-left: 50px;
    }
}
@media (max-width: 1024px) {
    .panels {
        display: block;
    }
    .panel {
        width: 100%;
    }
    .panel img {
        margin: 0px;
        padding: 0px;
        width: 100%;
        height: auto;
        margin-top: -5px;
    }
    .panel .padding {
        padding-left: 0px;
    }
}
.year {
    font-size: 14px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    color: black;
    padding-bottom: 20px;
}
.title {
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
    color: black;
    font-size: 30px;
    margin-bottom: 0px;
}
.notes {
    color: #777;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
    font-size: 24px;
    padding-bottom: 10px;
    padding-top: 10px;
}
.subtitle {
    color: #AAA;
    font-family: 'Roboto Mono', monospace;
    font-size: 16px;
    margin: 0px;
    text-transform: uppercase;
    padding-bottom: 10px;
}
.goback {
    font-family: 'Roboto Mono', monospace;
    color: black;
    font-size: 12px;
    font-weight: 500;
}
.goback:hover {
    opacity: 0.75;
    -webkit-transition: all 280ms ease-in-out;
    transition: all 280ms ease-in-out;
}
.tag {
    margin-right: 2px;
    font-family: 'Roboto Mono', monospace;
    color: #aaa;
    font-size: 12px;
}
.tag.is-primary {
    color: white;
    background: black;
    font-size: 12px;
}
</style>
