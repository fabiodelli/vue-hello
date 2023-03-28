const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      image: 'https://picsum.photos/300/200'
    }
  }
}).mount('#app')