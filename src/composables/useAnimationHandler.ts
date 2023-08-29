import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
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
  },

  moveCards(cardList: string, container: string) {
    onMounted(() => {
      const cards: HTMLElement[] = gsap.utils.toArray(cardList)
      gsap.registerPlugin(Draggable)

      const loop = horizontalLoop(cards, { paused: false, draggable: true, repeat: -1 })

      document.querySelector(container)!.addEventListener('mouseenter', () => loop.pause())

      document.querySelector(container)!.addEventListener('mouseleave', () => loop.play())

      // Mobile
      document.querySelector(container)!.addEventListener('touchmove', () => loop.pause())

      document.querySelector(container)!.addEventListener('touchend', () => {
        setTimeout(() => {
          // if user stops touching cards, after 4s, they move again
          loop.play()
        }, 4000)
      })

      function horizontalLoop(items: HTMLElement[], config: any) {
        items = gsap.utils.toArray(items)
        config = config || {}
        const tl = gsap.timeline({
          repeat: config.repeat,
          paused: config.paused,
          defaults: { ease: 'none' },
          // @ts-ignore
          onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
        })
        const length = items.length
        const startX = items[0].offsetLeft - 20
        const times: number[] = []
        const widths: number[] = []
        const xPercents: number[] = []
        let curIndex = 0
        const pixelsPerSecond = (config.speed || 1) * 100
        const snap = config.snap === false ? (v: number) => v : gsap.utils.snap(config.snap || 1)
        const populateWidths = () =>
          items.forEach((el, i) => {
            // @ts-ignore
            widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px'))
            xPercents[i] = snap(
              // @ts-ignore
              (parseFloat(gsap.getProperty(el, 'x', 'px')) / widths[i]) * 100 +
                gsap.getProperty(el, 'xPercent')
            )
          })

        const getTotalWidth = () =>
          items[length - 1].offsetLeft +
          (xPercents[length - 1] / 100) * widths[length - 1] -
          startX +
          // @ts-ignore
          items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], 'scaleX') +
          (parseFloat(config.paddingRight) || 0)

        let totalWidth: number
        let curX: number
        let distanceToStart: number
        let distanceToLoop: number
        let item: HTMLElement
        let i: number

        populateWidths()
        gsap.set(items, {
          xPercent: (i: number) => xPercents[i]
        })
        gsap.set(items, { x: 0 })
        totalWidth = getTotalWidth()

        for (i = 0; i < length; i++) {
          item = items[i]
          curX = (xPercents[i] / 100) * widths[i]
          distanceToStart = item.offsetLeft + curX - startX
          // @ts-ignore
          distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, 'scaleX')

          tl.to(
            item,
            {
              xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
              duration: distanceToLoop / pixelsPerSecond
            },
            0
          )
            .fromTo(
              item,
              {
                xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100)
              },
              {
                xPercent: xPercents[i],
                duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                immediateRender: false
              },
              distanceToLoop / pixelsPerSecond
            )
            .add('label' + i, distanceToStart / pixelsPerSecond)

          times[i] = distanceToStart / pixelsPerSecond
        }

        function toIndex(index: number, vars: any) {
          vars = vars || {}
          Math.abs(index - curIndex) > length / 2 && (index += index > curIndex ? -length : length)

          const newIndex = gsap.utils.wrap(0, length, index)
          let time = times[newIndex]

          if (time > tl.time() !== index > curIndex) {
            vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) }
            time += tl.duration() * (index > curIndex ? 1 : -1)
          }

          curIndex = newIndex
          vars.overwrite = true

          return tl.tweenTo(time, vars)
        }

        tl.next = (vars: any) => {
          toIndex(curIndex + 1, vars)
        }

        tl.previous = (vars: any) => {
          toIndex(curIndex - 1, vars)
        }

        tl.current = () => curIndex

        tl.toIndex = (index: number, vars: any) => toIndex(index, vars)

        tl.updateIndex = () => (curIndex = Math.round(tl.progress() * items.length))
        tl.times = times
        tl.progress(1, true).progress(0, true)

        if (config.reversed) {
          // @ts-ignore
          tl.vars.onReverseComplete()
          tl.reverse()
        }

        if (config.draggable && typeof Draggable === 'function') {
          const proxy = document.createElement('div')
          const wrap = gsap.utils.wrap(0, 1)
          let ratio: number
          let startProgress: number
          // eslint-disable-next-line prefer-const
          let draggable: Draggable
          let dragSnap: number
          let roundFactor: number

          const align = () =>
            tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio))

          const syncIndex = () => tl.updateIndex()

          draggable = Draggable.create(proxy, {
            trigger: container,
            type: 'x',
            onPress() {
              startProgress = tl.progress()
              tl.progress(0)
              populateWidths()
              totalWidth = getTotalWidth()
              ratio = 1 / totalWidth
              dragSnap = totalWidth / items.length
              roundFactor = Math.pow(10, ((dragSnap + '').split('.')[1] || '').length)
              tl.progress(startProgress)
            },
            // @ts-ignore
            onDrag: align,
            // @ts-ignore
            onThrowUpdate: align,
            inertia: true,
            snap: (value: number) => {
              // @ts-ignore
              const n = Math.round(parseFloat(value) / dragSnap) * dragSnap * roundFactor
              return (n - (n % 1)) / roundFactor
            },
            onRelease: syncIndex,
            // @ts-ignore
            onThrowComplete: () => gsap.set(proxy, { x: 0 }) && syncIndex()
          })[0]

          tl.draggable = draggable
        }

        return tl
      }
    })
  }
}
