import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

export const animate = {
  //HomepageAbout images
  parallax(el: string, container: string, startPsn: number, endPsn: number) {
    onMounted(() => {
      gsap.fromTo(
        el,
        {
          y: startPsn
        },
        {
          y: endPsn,
          scrollTrigger: {
            trigger: container,
            scrub: true,
            start: 'start bottom'
          }
        }
      )
    })
    onUnmounted(() => {
      ScrollTrigger.killAll()
    })
  },
  backgroundImage(el: string, container: string, position: number, scale: number) {
    onMounted(() => {
      gsap.to(el, {
        y: position,
        scale: scale,
        scrollTrigger: {
          trigger: container,
          scrub: true,
          start: 'start center'
        }
      })
    })
    onUnmounted(() => {
      ScrollTrigger.killAll()
    })
  }
}
