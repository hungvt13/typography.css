let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        selected: 'A',
        options: [],
        leftSideClass: 'left-side',
    },

    beforeMount(){
      this.$data.selected = 'general';
      this.$data.options = [
        { text: 'general', value: 'general' },
        { text: 'high-end', value: 'high-end'},
        { text: 'modern', value: 'modern' },
        { text: 'start-up', value: 'start-up' },
        { text: 'elegant', value: 'elegant' },
        { text: 'attention', value: 'attention'},
        { text: 'medieval', value: 'medieval' },
        { text: 'art', value: 'art' },
      ];
    }
});
