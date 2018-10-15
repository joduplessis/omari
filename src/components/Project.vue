<template>
    <section class="section">
        <div class="container">
            <router-link class="goback" to="/">
                <span>
                    <img height="20" src="../assets/arrow-left.svg"/>
                    Go back
                </span>
            </router-link>
            <br class="clearfix"/>
            <br class="clearfix"/>
            <div class="panels">
                <div class="panel">
                    <img :src="getImageUrl(item)" v-for="(item, index) in getFirstElement(item).images" v-if="index!=0"/>
                </div>
                <div class="panel">
                    <div class="padding">
                        <div class="year">
                            {{getFirstElement(item).year}}
                            <span v-if="getFirstElement(item).partner!=''">
                                • {{getFirstElement(item).partner}}
                            </span>
                        </div>
                        <div class="title">
                            {{getFirstElement(item).project}}
                        </div>
                        <span class="tag is-primary" v-for="(role, index) in getFirstElement(item).roles">
                            {{role.toUpperCase()}}
                        </span>
                        <div class="notes">
                            {{getFirstElement(item).notes}}
                        </div>
                        <span class="tag is-light" v-for="(tag, index) in getFirstElement(item).tags">
                            {{tag}}
                        </span>
                        <br class="clearfix"/>
                        <span v-for="(link, index) in getFirstElement(item).links" v-if="getFirstElement(item).links[0]">
                            <a class="tag is-light" target="_blank" v-bind:href="link">
                                {{link}}
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <br class="clearfix"/>
        </div>
    </section>
</template>
<script>
    const items = require('../work.json');

export default {
	name: 'work',
	data: function() {
		const { slug } = this.$route.params;

		return {
			item: items.project.filter((obj, index) => {
				return obj.slug == slug;
			}),
		}
	}
}
</script>
<style scoped="">
    a.goback img {
    height: 15px;
    width: 15px;
    position: relative;
    top: 3px;
  }

  .clearfix {
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
      width: 50%;
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
    font-weight: 600;
    font-family: 'Source Sans Pro', sans-serif;
    color: black;
    padding-bottom: 20px;
  }
  .title {
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
    color: black;
    font-size: 60px;
    padding-bottom: 10px;
  }
  .notes {
    color: #333;
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
