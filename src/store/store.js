import {createStore} from "vuex"


export const store = createStore({
    state() {
        return {
            activeSlide: 0,
            items: [
                {
                    text: "Для первого примера мы показали вам его лицо. В первой серии он прячется в подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите на паузу — ему не терпится отдать вам промокод.",
                    img: "../../assets/img/person.png"
                },
                {
                    text: "Слайд пам-пам",
                    img: "../../assets/img/person.png"
                },
                {
                    text: "Ого еще слайд пам-пам",
                    img: "../../assets/img/person.png"
                },
                {
                    text: "lorefsdkflsdkgslkslfkglskdfoskofekowko kfoskdfo kweok otwkrt wkte",
                    img: "../../assets/img/person.png"
                },
                {
                    text: "Для еще одного слайда мы показали вам его лицо. Найдите героя и нажмите на паузу — ему не терпится отдать вам промокод.",
                    img: "../../assets/img/person.png"
                },
            ]
        }
    },
    mutations: {
        plusActiveSlide(state) {
            if (state.activeSlide >= state.items.length - 1) {
                state.activeSlide = 0
            } else {
                state.activeSlide += 1
            }
        },
        minusActiveSlide(state) {
            if (state.activeSlide == 0) {
                state.activeSlide = state.items.length - 1
            } else {
                state.activeSlide -= 1
            }
        }
    }
})