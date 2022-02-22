
const monApp = Vue.createApp({
    data() {
        return {
            selectcard1: 'blue',
            selectCard2: 'violet'
        };
    },

    methods: {
        selection(card){
            if(card == 1){
                this.selectcard1 = 'red';
            } else if(card == 2){
                this.selectcard2 = 'green';
            }
        }
    }
});

monApp.mount('#app');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               