const { createApp } = Vue


createApp({
    data() {
        let currentPosition = 1
        return {
            currentPosition,
            autoSlide: null,
            pausePlay: "play",
            animes: allAnimes,
            currentAnimes: [allAnimes[currentPosition - 1], allAnimes[currentPosition], allAnimes[currentPosition + 1]],
            upDown: "up",
        }
    },

    created() {
        this.autoSlide = setInterval(() => {
            this.upDown == "up" ? this.up() : this.down()
        }, 4000)
    },
    methods: {
        up() {
            this.upDown = "up"
            this.currentPosition < allAnimes.length - 1 ? this.currentPosition++ : this.currentPosition = 0
            this.updateThumb();
            clearInterval(this.autoSlide)
            this.autoSlide = setInterval(() => {
                this.upDown == "up" ? this.up() : this.down()
            }, 4000)
        },
        down() {
            this.upDown = "down"
            this.currentPosition <= 0 ? this.currentPosition = allAnimes.length - 1 : this.currentPosition--
            this.updateThumb()
            clearInterval(this.autoSlide)
            this.autoSlide = setInterval(() => {
                this.upDown == "up" ? this.up() : this.down()
            }, 4000)
        },
        changeImage(element) {
            this.currentPosition = this.animes.indexOf(element)
            this.updateThumb()
            clearInterval(this.autoSlide)
            this.autoSlide = setInterval(() => {
                this.upDown == "up" ? this.up() : this.down()
            }, 4000)

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
                this.autoSlide = setInterval(() => {
                    this.upDown == "up" ? this.up() : this.down()
                }, 4000)
            }

        },
        reverse() {
            this.upDown == "up" ? this.upDown = "down" : this.upDown = "up"
        }
    }
}).mount('#app')