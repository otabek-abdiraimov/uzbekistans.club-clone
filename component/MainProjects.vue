<template>
  <div class="bg">
    <div class="container">
      <div class="text_h1">
        <h1>PROJECTS</h1>
      </div>
      <div class="card">
        <div v-for="index in projects" :key="index"
        >
          <div class="box">
            <div class="img_i border-r-4 border-red-900">
              <img :src="index.img" alt="no image">
              <div class="text-white text_t mt-5">
                <h2 class="">{{index.name}}</h2>
                <p class="group-hover">{{index.title}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script setup>
const projects = [
  {
    id: 1,
    img: "https://uzbekistans.club/media/thumbnails/3_%D0%9F%D0%9E%D0%A1%D0%A2%D0%95%D0%A0%D0%90.jpg",
    name: "O'zbekistonlik",
    title: "Documentary films",
  },
  {
    id: 2,
    img: "\thttps://uzbekistans.club/media/thumbnails/FOOD_poster.jpg",
    name: "FOOD",
    title: "Gastronomic show",
  },
  {
    id: 3,
    img: "\thttps://uzbekistans.club/media/thumbnails/%D1%81%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82_11.jpg",
    name: "Students",
    title: "Tourist Show",
  },
  {
    id: 4,
    img: "\thttps://uzbekistans.club/media/thumbnails/811_bnVg8sc.jpg",
    name: "Podcast",
    title: "Podcast shou",
  },

]
</script>

<style lang="scss" scoped>
.bg{
  background: black;
}
.text_h1{
  padding-top: 40px;
  font-size: 45px;
  color: white;
  font-weight: 700;
  margin-bottom: 15px;
}
.card{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
}

.box{
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  //height: 450px;
}
.img_i{
  width: 380px;
  height: 350px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 40px;
  padding-right: 40px;
  overflow: hidden;
  cursor: pointer;
 }
.img_i img{
  width: 350px;
  height: 200px;
  overflow: hidden;
  border-radius: 12px;
  object-fit: cover;
  overflow: hidden;
  //filter: brightness(70%);
  //transition: all .8s cubic-bezier(.499,.05,.55,.55);
  transition:  0.8s, background-position 0.8s;
}

.img_i img:hover{
  transform: scale(1.9);
  filter: brightness(80%) hue-rotate(20deg);
  cursor: pointer;
  transition:  0.8s, background-position 0.8s;
}
.group-hover{
  color: #a3a6a3;
}
.img_i:hover .group-hover {
  color: #e3b269;
  transition:  0.8s;
}

.text_t{
  //border: 2px solid white;
  opacity: 1;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  text-transform: uppercase;
  position: relative;
  transition: opacity 0.1s 0s;
}
.text_t h2{
  font-size: 22px;
  font-weight: 600;
}

@media(max-width: 1150px){
  .card{
    display: none;
  }
}
</style>