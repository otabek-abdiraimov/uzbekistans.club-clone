<template>
  <div class="bg">
    <div class="container mt-10">
      <div>
        <div class="text_h1">
          <h1>MASTER RESIDENTS</h1>
        </div>
      </div>
      <div class="wrapper">
        <div class="content">
          <div class="big">
            <img  src="https://uzbekclub.xn--h28h.uz/media/cache/f8/4c/f84c0ef5ed2759e6956fbfdf5fbc14d6.jpg"
                  class="img_h" alt="">
          </div>
          <div class="vertical">
            <img src="https://uzbekclub.xn--h28h.uz/media/cache/e3/df/e3df6dcd2ddbc41047e13d15870e1234.jpg" alt="">
          </div>

          <div class="big">
            <img  src="https://uzbekclub.xn--h28h.uz/media/cache/ac/27/ac27de8c6cdf6cb445fd0bed2d441fdb.jpg" alt="">
          </div>
          <div class="big">
            <img src="https://uzbekclub.xn--h28h.uz/media/cache/74/17/7417d3119f0b9725f789f7d0dabf8a3d.jpg" alt="">
          </div>
          <div class="horizontal"><img  src="https://uzbekclub.xn--h28h.uz/media/cache/d8/40/d840477f2a8e5b87851a98451ab2a02b.jpg" alt=""></div>
          <div><img src="https://uzbekclub.xn--h28h.uz/media/cache/74/ff/74ff9577e9997a7be9d6e8b2cc4d3c06.jpg" alt=""></div>
          <div class="horizontal"><img src="https://uzbekclub.xn--h28h.uz/media/cache/0f/1e/0f1e839ebd0f5f00346df6ba6cb0a9d0.jpg" alt=""></div>
          <div><img src="https://uzbekclub.xn--h28h.uz/media/cache/51/54/5154a94198a60886c97894e17ddc9f1e.jpg" alt=""></div>
          <div><img src="https://uzbekclub.xn--h28h.uz/media/cache/27/b7/27b7542fbe2ada5f62e79b38a4fc1424.jpg" alt=""></div>
          <div><img src="https://uzbekclub.xn--h28h.uz/media/cache/9a/f3/9af3d9cca0de6c89169bcad33158d952.jpg" alt=""></div>
          <div class="horizontal"><img  src="https://uzbekclub.xn--h28h.uz/media/cache/c6/f2/c6f25daf1dd663e25029d412abc5fbe0.jpg" alt=""></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

</script>

<style lang="scss" scoped>
.bg{
  background: #1b1b1b;
  padding-bottom: 70px;
  padding-top: 50px;
  //height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper{
  width: 100%;

}

h1{
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  font-size: 38px;
  text-align: center;

}


.content > div {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: #ffeead;
}

.content > div > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid black;
  transition: 0.5s ease;
}
.content > div > img:hover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid #e3b269;
}

/* Grid */
.content {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: 125px;
  grid-auto-flow: dense; /* Fill all spaces with fitted images */
}

.horizontal {
  grid-column: span 2;
  object-fit: cover;
}

.vertical {
  grid-row: span 3;
  grid-column: span 2;
}

.big {
  grid-column: span 2;
  grid-row: span 2;
}

.text_h1{
  display: flex;
  justify-content: start;
  font-size: 45px;
  color: white;
  font-weight: 700;
}

/* Media Queries */

@media screen and (min-width: 1024px){
  .wrapper{
    width: 1170px;
    margin: 0 auto;
  }
}
</style>