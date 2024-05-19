const {ref} = Vue

//:style="{opacity: zobrazenie ? 1 : 0}"

const poleFarieb = ["none","#CC0000", "#CC6600", "#CCCC00", "#66CC00", "#006633", "#00FFFF", "#0080FF", "#0000CC", "#6600CC", "#FF00FF", "#660033", "#808080", "#FFCCCC", "#E5CCFF", "#330000", "#330033", "#666600", "#CCFFFF"] 
let prvaKarta = null
let druhaKarta = null
let prebiehaResetovanie = false
let pocetChyb = 0
let pocetParov = 0

const karta = {
    template: `
    <section class="border" @click="klik" :style="{borderColor : zparovanie ? farba : 'black'}">
        <span v-if="otocenie == false" class="kontajner">
            <img class="obrazok" src="../obrazky/hacker.jpg"><img>
        </span>
        <span v-if="otocenie == true"> {{text}} </span>
    </section>
    `,
    
    props: ["id", "text"],

    setup(props)
    {   
        const otocenie = ref(false)
        const zparovanie = ref(false)
        const farba = ref("")

        function klik()
        {   
            if(otocenie.value || prebiehaResetovanie)
            {
                return
            }

            otocenie.value = !otocenie.value

            if(prvaKarta == null)
            {
                prvaKarta = 
                { 
                    id: props.id, 
                    otocenie,
                    zparovanie,
                    farba
                }
            }
            else if(druhaKarta == null)
            {
                druhaKarta = 
                {   
                    id: props.id, 
                    otocenie,
                    zparovanie,
                    farba
                }
                
                if(prvaKarta.id == druhaKarta.id)
                {
                    console.log(`Gratulujeme! Nasiel si par`)

                    pocetParov++

                    const farby = poleFarieb[props.id]
                    
                    prvaKarta.farba.value = farby
                    druhaKarta.farba.value = farby
                    
                    prvaKarta.zparovanie.value = true
                    druhaKarta.zparovanie.value = true
                    
                    prvaKarta = null
                    druhaKarta = null
                }
                else
                {
                    console.log(`Nenasiel si par`)

                    pocetChyb++

                    prebiehaResetovanie = true
                    setTimeout(reset, 2000)
                }
            }
        }

        function reset()
        {   
            prebiehaResetovanie = false
            prvaKarta.otocenie.value = false
            druhaKarta.otocenie.value = false
            prvaKarta = null
            druhaKarta = null
        }

        return {
            otocenie,
            zparovanie,
            farba,
            klik,
            reset,
        }
    }
}
export {pocetChyb, pocetParov}

export default karta