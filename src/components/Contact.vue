<template>

    <section class="section">
      <div class="container">

        <br/><br/>

        <div class="panels">
          <div class="panel">

              <div class="year">
                The internet elves are still processing our order for a brand new website. Please email us.
			  </div>


              <!--
              <a href="https://github.com/joduplessis" target="_blank" class="social"><img src="../assets/github.png"></a>
              <a href="https://www.linkedin.com/in/jo-du-plessis-a03b0110/" target="_blank" class="social"><img src="../assets/linkedin-logo.png"></a>
              <a href="https://twitter.com/jo_duplessis" target="_blank" class="social"><img src="../assets/twitter.png"></a>
              <br class="clearfix"/>
              -->




              <div class="notes">
                <a href="mailto:hello@omari.studio">hello@omari.studio</a>
              </div>
          </div>
        </div>



        <br class="clearfix"/>


      </div>
    </section>

</template>

<script>


export default {
  name: 'about'
}
</script>


<style scoped>
a.social {
  margin-right: 10px;
}
a.social img {
  width: 20px;
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
    font-family: 'Roboto', sans-serif;
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
    font-weight: 600;
    color: black;
    padding-bottom: 20px;
    font-family: 'Source Sans Pro', sans-serif;
  }
  .title {
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
    color: black;
    font-size: 60px;
    margin-bottom: 0px;
  }
  .notes {
    color: #777;
    font-family: 'Roboto Mono', monospace;
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
