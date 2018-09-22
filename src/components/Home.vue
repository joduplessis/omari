<template>
  <div>



    <!--
    <div class="item full">
      <section class="section">
        <div class="container">
          <div class="subtitle">Here are some of the projects I've been involved with over the years. See something you like (or something doesn't work)... <a href="mailto:jo@joduplessis.com">give me a shout</a>.</div>
          <div class="social-icons">
            <a href="https://github.com/joduplessis" target="_blank"><img src="https://joduplessis.com/images/github.png"></a>
            <a href="https://www.linkedin.com/in/jo-du-plessis-a03b0110/" target="_blank"><img src="https://joduplessis.com/images/linkedin-logo.png"></a>
            <a href="https://twitter.com/jo_duplessis" target="_blank"><img src="https://joduplessis.com/images/twitter.png"></a>
          </div>
        </div>
      </section>
    </div>
    -->

    <div class="item" v-for="(item, index) in items" v-bind:style="{ 'background-image': 'url('+getFirstImage(item.images)+')' }">
      <span>{{item.year}}<br/> <strong>{{item.project}}</strong></span>
      <router-link :to="{ name: 'Project', params: { slug: item.slug }}"></router-link>
    </div>
  </div>
</template>

<script>
import { db } from '../firebase';
import projects from '../work.json';

function compare(a,b) {
  if (a.year < b.year)
    return -1;
  if (a.year > b.year)
    return 1;
  return 0;
}

const items = projects.project.sort(compare).reverse();

console.log(items.length)

export default {
  name: 'work',
  data: function() {
    return {
      items
    }
  }
  /*
  firebase: {
    items: db.ref('project').orderByChild('_id').limitToFirst(200)
  },
  */
}
</script>

<style scoped>
  .logo {
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
      height: 100px;
      width: 100%;
      background-color: #00D7AF;
      margin: 0px;
      padding: 0px;
      position: relative;
      padding: 0px;
    }

    .item.full .subtitle {
      color: white;
      padding-right: 0px;
      width: 70%;
      margin: 0px;
      font-weight: 300;
      font-size: 20px;
      padding-top: 0px;
      padding-bottom: 20px;
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
