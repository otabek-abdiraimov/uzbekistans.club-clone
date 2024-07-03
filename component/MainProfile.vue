<template>
  <div class="container">
    <div>
      <div class="text_h1">
        <h1>PROFILE</h1>
      </div>

      <div class="flex items-center justify-center gap-4 media_g">
        <div v-for="index in profile" :key="index">
          <div class="col-md-6 col-lg-4">
            <div class="item animated wow fadeIn">
              <img
                :src="index.img"
                class="rounded-lg m-auto w-full h-full object-cover"
                alt="no image"
              />
              <div class="overlay fade-overlay"></div>
            </div>
          </div>
          <div>
            <p class="text-white font-bold text_p">{{ index.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const profile = [
  {
    id: 1,
    img: "https://uzbekclub.xn--h28h.uz/media/cache/00/6e/006e7c830a3c74e6d38fb45d9413fcbe.jpg",
    name: "Granny, Mommy and I",
  },
  {
    id: 2,
    img: "https://uzbekclub.xn--h28h.uz/media/cache/a8/f9/a8f99dbff69f3af1b4a707337567247e.jpg",
    name: "Muzaffar Jalolov's truths of life",
  },
  {
    id: 3,
    img: "https://uzbekclub.xn--h28h.uz/media/cache/af/e9/afe906d505ce50d6c27ae1a03f7cd6bd.jpg",
    name: "Muzaffar Jalolov's truths of life",
  },
  {
    id: 4,
    img: "\thttps://uzbekclub.xn--h28h.uz/media/cache/bf/a4/bfa499c5a0749b6bd69842e7aba8fc8a.jpg",
    name: "Muzaffar Jalolov's truths of life",
  },
  {
    id: 5,
    img: "\thttps://uzbekclub.xn--h28h.uz/media/cache/53/67/5367d3aeed6a81ed751c20ee6ae7a4df.jpg",
    name: "Muzaffar Jalolov's truths of life",
  },
  {
    id: 6,
    img: "\thttps://uzbekclub.xn--h28h.uz/media/cache/ce/e8/cee86e3908465d363733945195216eb9.jpg",
    name: "Muzaffar Jalolov's truths of life",
  },
];
</script>

<style lang="scss" scoped>
.container {
  padding-top: 55px;
  padding-bottom: 45px;
}
.text_h1 {
  font-size: 45px;
  color: white;
  font-weight: 700;
}

.text_p {
  font-size: 18px;
}
.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: hsla(45, 77%, 72%, 0.4);
  border: 2px solid #e3b269;
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
  opacity: 0;
}
.item:hover .title-overlay {
  opacity: 1;
  height: auto;
  padding: 50px 0;
}

@media (max-width: 765px) {
  .media_g {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 545px) {
  .media_g {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 320px) {
  .media_g {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
