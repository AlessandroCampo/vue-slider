const { createApp } = Vue


createApp({
    data() {
        let currentPosition = 1
        return {
            currentPosition,
            autoSlide: null,
            pausePlay: "play",
            activeClass: "opacity-100 border-2 border-white",
            inactiveClass: "opacity-35",
            animes: allAnimes,
            currentAnimes: [allAnimes[currentPosition - 1], allAnimes[currentPosition], allAnimes[currentPosition + 1]]
        }
    },
    mounted() {
        this.autoSlide = setInterval(this.up, 3000)
    },
    methods: {
        up() {
            this.currentPosition < allAnimes.length - 1 ? this.currentPosition++ : this.currentPosition = 0
            this.updateThumb();
        },
        down() {
            this.currentPosition <= 0 ? this.currentPosition = allAnimes.length - 1 : this.currentPosition--
            // this.currentPosition--
            this.updateThumb()
        },
        changeImage(index) {
            console.log(index)
            this.currentPosition = index
            this.updateThumb()

        },
        updateThumb() {
            this.currentAnimes = [
                this.animes[this.currentPosition - 1 >= 0 ? this.currentPosition - 1 : allAnimes.length - 1],
                this.animes[this.currentPosition],
                this.animes[this.currentPosition + 1 > allAnimes.length - 1 ? 0 : this.currentPosition + 1]
            ];
        },
        stopAutoSlide(e) {
            if (e.target.classList.contains("fa-circle-stop")) {
                e.target.classList.remove("fa-circle-stop")
                console.log(e.target.classList)
                e.target.classList.add("fa-circle-play")
                clearInterval(this.autoSlide)
                this.autoSlide = null
            } else {
                e.target.classList.add("fa-circle-stop")
                console.log(e.target.classList)
                e.target.classList.remove("fa-circle-play")
                this.autoSlide = setInterval(this.up, 3000)
            }

        }
    }
}).mount('#app')