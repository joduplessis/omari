<template>
    <div>
        <div class="item full">
            <section class="section">
                <div class="container">
                 	<div class="title">
                        Yack connects you to wellness experts, as well as a wider community of people passionate about health, fitness and wholeness.
                    </div>
                    <div class="subtitle">
                        Featured project <img src="https://yack.app/logo-transparent.png" height="20" />
                        	<router-link :to="{ name: 'Project', params: { slug: 'yack' }}">
                        		<img height="20" src="../assets/arrow-right-white.svg"/>
                        	</router-link>
                        </a>
                    </div>
                </div>
            </section>
        </div>
        <div class="item" v-bind:style="{ 'background-image': 'url('+getFirstImage(item.images)+')' }" v-for="(item, index) in items">
            <span>
                {{item.year}}
                <br/>
                <strong>
                    {{item.project}}
                </strong>
            </span>
            <router-link :to="{ name: 'Project', params: { slug: item.slug }}">
            </router-link>
        </div>
    </div>
</template>

<script>
    function compare(a,b) {
	if (a.year < b.year)
		return -1;

	if (a.year > b.year)
		return 1;

	return 0;
}

const projects = require('../work.json');
const items = projects.project.sort(compare).reverse();

export default {
	name: 'work',
	data: function() {
		return {
			items
		}
	}
}
</script>

<style scoped="">.logo {
    height: 30px;
}
.item .social-icons a {
    color: #2F69AA;
    position: relative;
    display: inline;
    background-color: transparent;
    opacity: 1;
    padding: 5px;
}
.item .social-icons a:hover {
    opacity: 1;
}
.item .social-icons a img {
    width: 25px;
    height: 25px;
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
    font-size: 8px;
    padding: 5px;
    background: black;
    color: #666;
    font-weight: 800;
    height: -moz-fit-content;
    height: fit-content;
    display: table;
}
.item span strong {
    font-weight: 500;
    text-transform: capitalize;
    font-family: 'Roboto Mono', monospace;
    color: white;
    font-size: 10px;
    color: white;
}
@media (min-width: 1024px) {
    .item {
        width: 20%;
        height: 200px;
        background-color: white;
        position: relative;
        float: left;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: left;
        justify-content: left;
    }
    .item.full {
        height: 400px;
        width: 100%;
        background-color: black;
        margin: 0px;
        padding: 0px;
        position: relative;
        padding: 0px;
        background: url('https://s3-us-west-2.amazonaws.com/yack/public/hero01.png');
        background-size: contain;
    }
    .item.full .container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
    }
    .item.full .title {
        padding-left: 20px;
        padding-right: 20px;
        color: white;
        font-weight: 300;
        font-size: 30px;
        width: 100%;
        font-family: 'Roboto Mono';
    }
    .item.full .subtitle {
        padding-left: 20px;
        padding-top: 30px;
        padding-right: 20px;
        color: white;
        text-align: left;
        width: 100%;
        font-weight: 700;
        font-size: 14px;
        font-family: 'Source Sans Pro';
    }
    .item.full .subtitle img {
    	height: 20px;
    	position: relative;
    	left: 10px;
    	top: 5px;
    }
    .item.full .subtitle a {
    	width: auto;
    	height: auto;
	    background: none;
	    display: inline;
	    opacity: 1;
	    position: relative;
	    top: 0px;
	    left: 0px;
	    z-index: 1;
    }
}
@media (max-width: 1024px) {
    .item {
        width: 20%;
        height: 200px;
        background-color: white;
        position: relative;
        float: left;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: left;
        justify-content: left;
    }
    .item.full {
        height: 400px;
        width: 60%;
        background-color: black;
        margin: 0px;
        padding: 0px;
        position: relative;
        padding: 0px;
        background: url('https://s3-us-west-2.amazonaws.com/yack/public/hero01.png');
        background-size: contain;
    }
    .item.full .container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
    }
    .item.full .title {
        padding-left: 20px;
        padding-right: 20px;
        color: white;
        font-weight: 300;
        font-size: 30px;
        width: 100%;
        font-family: 'Roboto Mono';
    }
    .item.full .subtitle {
        padding-left: 20px;
        padding-top: 30px;
        padding-right: 20px;
        color: white;
        text-align: left;
        width: 100%;
        font-weight: 700;
        font-size: 14px;
        font-family: 'Source Sans Pro';
    }
    .item.full .subtitle img {
    	height: 20px;
    	position: relative;
    	left: 10px;
    	top: 5px;
    }
    .item.full .subtitle a {
    	width: auto;
    	height: auto;
	    background: none;
	    display: inline;
	    opacity: 1;
	    position: relative;
	    top: 0px;
	    left: 0px;
	    z-index: 1;
    }
}
@media (max-width: 480px) {
    .item {
        width: 50%;
        height: 200px;
        background-color: white;
        position: relative;
        float: left;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: left;
        justify-content: left;
    }
    .item.full {
        height: 400px;
        width: 100%;
        background-color: #00D7AF;
        margin: 0px;
        padding: 0px;
        position: relative;
    }
    .item.full .subtitle {
        color: white;
        padding-right: 50px;
        width: 100%;
        font-weight: 300;
        font-size: 20px;
        padding-top: 20px;
        padding-bottom: 10px;
    }
    .item.full .subtitle a {
        color: white;
        opacity: 0.75;
        position: relative;
        display: inline;
        background-color: transparent;
        -webkit-transition: all 280ms ease-in-out;
        transition: all 280ms ease-in-out;
    }
    .item.full .subtitle a:hover {
        opacity: 0.75;
    }
}
</style>
