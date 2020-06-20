<template>
  <div id="app">
    <div class="container-fluid main">
      <div class="container">
        <b-button>創立房間</b-button>
        <b-button>加入房間</b-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

.main {
  margin: auto;
  background-color: rgba(51, 51, 51, 0.8);

  .container {
    max-width: 420px;
    margin: 0 auto;
    background-color: red;
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  button {
    box-shadow: none;
    animation: pop 0.5s;
  }
}
</style>
