function main() {
    const img2 = document.querySelector('.img.img-2')
    const img2p = document.querySelector('.img.img-2 > p')
    const img2plane = document.querySelector('.img.img-2 > .plane')

    const showcase = document.querySelector('.showcase')
    const showcaseImgs = document.querySelectorAll('.showcase > .img')

    function cubic(x) {
        return -Math.pow(x - 1, 2) + 1
    }

    function scrollEffectPos(element, inverse = false) {
        const scroll = window.scrollY + window.innerHeight
        const start = element.offsetTop
        const end = Math.min(element.offsetHeight, window.innerHeight)
        const pos = Math.min(Math.max(Math.min((scroll - start) / end, window.innerHeight), 0), 1)
        if (inverse) return 1 - cubic(pos)
        return cubic(pos)
    }

    document.addEventListener("scroll", function () {
        img2p.style.translate = `0px ${scrollEffectPos(img2, true) * window.innerHeight}px`
        img2plane.style.opacity = (scrollEffectPos(img2) * 0.8 - 0.2).toFixed(2)

        const translations = [
            [scrollEffectPos(showcase, true) * -window.innerWidth, 0], 
            [0, 0], 
            [0, scrollEffectPos(showcase, true) * window.innerHeight], 
            [scrollEffectPos(showcase, true) * window.innerWidth, 0]]
        showcaseImgs.forEach(function(img, i) {
            img.style.translate = `${translations[i][0]}px ${translations[i][1]}px`
        })
    })
}

main()
