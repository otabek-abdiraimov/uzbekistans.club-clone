<template>
  <div class="bg">
    <div class="container">
      <div class="content">
        <div class="text_h1">
          <h1>
            PARTNERS
          </h1>
        </div>
        
        <div class="box">
            <div class="card">
              <NuxtLink to="https://yoshlar.gov.uz/uz/" target="_blank">
                <img src="https://uzbekistans.club/media/logos/Group2x-8.png" alt="">
              </NuxtLink>
            </div>
          <div class="card">
            <NuxtLink to="https://ucell.uz/uz/subscribers" target="_blank">
              <img src="https://uzbekistans.club/media/logos/UCELL_1.png" alt="">
            </NuxtLink>
          </div>
          <div class="card">
            <NuxtLink to="https://mfa.uz/uz" target="_blank">
              <img src="https://uzbekistans.club/media/logos/Logo.png" alt="">
            </NuxtLink>
          </div>
          <div class="card">
            <NuxtLink to="https://chevrolet.uz/" target="_blank">
              <img src="https://uzbekistans.club/media/logos/logo_CHEVROLET.png" alt="">
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
</script>

<style lang="scss" scoped>
.bg{
  background: #181818;
}
.content{
  padding-top: 45px;
  margin-top: 45px;
  margin-bottom: 45px;
  padding-bottom: 65px;
}
.text_h1{
  font-weight: 700;
  font-size: 45px;
  color: white;
  margin-bottom: 15px;
}

.box{
  display: grid;
  grid-template-columns: repeat(4 ,1fr);
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
.card{
  display: flex;
  align-items: center;
  justify-content: center;
  background: #212121;
  position: relative;
  width: 276px;
  height: 103px;
  padding: 30px;
  border-radius: 10px;
  transition: 0.8s ease;
  filter: grayscale(1);
  border: none;
  cursor: pointer;
;
  &:hover{
    background:  linear-gradient(to left, rgba(108, 86, 49, 0.1), rgba(205, 150, 45, 0.1));
    border: 1px solid #e3b269;
    filter: grayscale(0);
    transition: 0.8s ease;
  }
}
.card img{
  width: 100%;
  height: 36px;
  transition: 0.4s ease;
}

@media(max-width: 1142px){
  .box{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media(max-width: 860px){
  .box{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}


@media(max-width: 550px){
  .box{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>