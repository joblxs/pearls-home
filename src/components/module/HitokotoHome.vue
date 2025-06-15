<!--一言-->
<template>
  <div class="section">
    <div class="hitokoto wow animate__animated animate__jello">
      <p>
        一天很短，开心了就笑，不开心了就过会儿再笑。
      </p>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.section {
  width: 100%;
  padding: 100px 0;
  background-color: var(--5-background-rgba);
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

.hitokoto {
  text-align: center;
  margin: 0 auto;
  max-width: 800px;
}

.hitokoto h1 {
  font-size: 2.5rem;
}

.hitokoto p {
  font-size: 1rem;
  letter-spacing: 0.5rem;
  margin: 1rem 0;
}

@media (max-width: 768px) {
  .hitokoto h1 {
    font-size: 2rem;
  }

  .hitokoto p {
    font-size: 0.9rem;
    letter-spacing: 0.3rem;
  }
}

@media (max-width: 480px) {
  .hitokoto h1 {
    font-size: 1.5rem;
  }

  .hitokoto p {
    font-size: 0.8rem;
    letter-spacing: 0.2rem;
  }
}
</style>