const { createApp } = Vue


createApp({
    data() {
        let currentPosition = 1
        return {
            currentPosition,
            animes: allAnimes,
            currentAnimes: [allAnimes[currentPosition - 1], allAnimes[currentPosition], allAnimes[currentPosition + 1]]
        }
    },
    methods: {
        up() {

            this.currentPosition < allAnimes.length - 1 ? this.currentPosition++ : this.currentPosition = 0

            this.currentAnimes = [
                this.animes[this.currentPosition - 1 >= 0 ? this.currentPosition - 1 : allAnimes.length - 1],
                this.animes[this.currentPosition],
                this.animes[this.currentPosition + 1 > allAnimes.length - 1 ? 0 : this.currentPosition + 1]
            ];
        },
        down() {
            this.currentPosition <= 0 ? this.currentPosition = allAnimes.length - 1 : this.currentPosition--
            // this.currentPosition--
            this.currentAnimes = [
                this.animes[this.currentPosition - 1 >= 0 ? this.currentPosition - 1 : allAnimes.length - 1],
                this.animes[this.currentPosition],
                this.animes[this.currentPosition + 1 > allAnimes.length - 1 ? 0 : this.currentPosition + 1]
            ];
        },
        changeImage(index) {
            console.log(index)
            this.currentPosition = index
        }
    }
}).mount('#app')