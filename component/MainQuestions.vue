<template>
  <div class="container">
    <div>
      <div>
        <h1 class="text_h1">
          TOP QUESTIONS
        </h1>
      </div>

      <div>
        <div class="card">

            <div class="img_i">
              <div class="col-md-6 col-lg-4">
                <div class="item animated wow fadeIn">
                  <img src="https://uzbekistans.club/media/post_pics/1280%D1%85720_master.jpg" alt="">
                  <div class="overlay fade-overlay">
                    <div class="text"> Who are master residents?y</div>
                  </div>
                  <div class="overlay fade-overlay"></div>
                </div>
              </div>
            </div>

            <div class="img_i">
              <div class="col-md-6 col-lg-4">
                <div class="item animated wow fadeIn">
                  <img src="https://uzbekistans.club/media/post_pics/1280%D1%85720_master.jpg" alt="">
                  <div class="overlay fade-overlay">
                    <div class="text"> Who are master residents?</div>
                  </div>
                  <div class="overlay fade-overlay"></div>
                </div>
              </div>
            </div>

            <div class="img_i">
              <div class="col-md-6 col-lg-4">
                <div class="item animated wow fadeIn">
                  <img src="https://uzbekistans.club/media/post_pics/1280%D1%85720_master.jpg" alt="">
                  <div class="overlay fade-overlay">
                    <div class="text"> Who are master residents?y</div>
                  </div>
                  <div class="overlay fade-overlay"></div>
                </div>
              </div>
            </div>

            <div class="img_i">
              <div class="col-md-6 col-lg-4">
                <div class="item animated wow fadeIn">
                  <img src="https://uzbekistans.club/media/post_pics/1280%D1%85720_master.jpg" alt="">
                  <div class="overlay fade-overlay">
                    <div class="text"> Who are master residents?</div>
                  </div>
                  <div class="overlay fade-overlay"></div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const question = [
  {
    id: 1,
    image: "https://uzbekistans.club/media/post_pics/1280%D1%85720_master.jpg",
    name: " Who are master residents?",
  },
  {
    id: 2,
    image: "https://uzbekistans.club/media/post_pics/%D0%91%D0…%8F%D0%BD%D0%BD%D1%8B%D0%B8-3_qbm9MCJ_9gJptLD.jpg",
    name: " Who are master residents?",
  },
  {
    id: 3,
    image: "\thttps://uzbekistans.club/media/post_pics/%D0%91%D0…%8F%D0%BD%D0%BD%D1%8B%D0%B8-4_xwyEtPU_kJZuelt.jpg",
    name: " Who are master residents?",
  },
  {
    id: 4,
    image: "\thttps://uzbekistans.club/media/post_pics/%D0%91%D0…7%D1%8B%D0%BC%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9-1.jpg",
    name: " Who are master residents?",
  },
]
</script>

<style lang="scss" scoped>
.card{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.text_h1{
  margin-top: 25px;
  font-size: 45px;
  color: white;
  font-weight: 700
}
.text_t{
  //border: 2px solid white;
  opacity: 1;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: relative;
  transition: opacity 0.1s 0s;
}
.text_t h2{
  font-size: 22px;
  font-weight: 600;
}
.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: hsla(43, 60%, 21%, 0.4);
  border: 2px solid #7c6643;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  border-radius: 9px;
}

.item {
  position: relative;
  overflow: hidden;
  margin: 20px 0;
}

.item:hover .overlay {
  bottom: 0;
  height: 100%;
  width: 100%;
}

.top-overlay {
  bottom: 100%;
  height: 0;
}
.item:hover .top-overlay {
  bottom: 0;
}
.bottom-overlay {
  top: 100%;
}

.item:hover .bottom-overlay {
  top: 0;
}

.right-overlay {
  left: 100%;
  height: 100%;
}

.item:hover .right-overlay {
  left: 0;
}

.left-overlay {
  right: 100%;
  height: 100%;
  left: auto;
}

.item:hover .left-overlay {
  right: 0;
}


.fade-overlay {
  height: 100%;
  opacity: 0;
}

.item:hover .fade-overlay {
  opacity: 1;
}
.title-overlay {
  height: auto;
  top: auto;
}
.item:hover .title-overlay {
  height: auto;
  padding: 50px 0;
}
.text {
  color: white;
  font-size: 1.2vw;
  position: absolute;
  font-weight: 600;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}


.title-overlay {
  height: auto;
  top: auto;
  opacity: 1;
}

.img_i img{
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  object-fit: cover;
  //filter: brightness(70%);
  //transition: all .8s cubic-bezier(.499,.05,.55,.55);
  transition:  0.8s, background-position 0.8s;
}

@media(max-width: 1142px){
  .card{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media(max-width: 860px){
  .card{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>