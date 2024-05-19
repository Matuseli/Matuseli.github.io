import { pocetChyb, pocetParov} from "./Karta.js"

const {ref} = Vue

const hlavneMenu = {
    template: `
        <div class="menuBar">
            
            <button class="resetButton" @click="novaHra">Resetovať hru</button>
             
            <div class="cas">
                <p> Čas: {{hodiny}}h : {{minuty}}m : {{sekundy}}s </p>
            </div>
        </div>
    `,
    
    props: [],

    setup()
    {   
        const sekundy = ref(-1)
        const minuty = ref(0)
        const hodiny = ref(0)

        function casovac()
        {   
            if(pocetParov >= 18)
            {
                alert(`Gratulujem! Donočil si moje pexeso z bezpečnosti! \nTvoj čas: ${hodiny.value}h : ${minuty.value}m : ${sekundy.value}s \nPočet chýb: ${pocetChyb}`)
            }
            else
            {
                sekundy.value++

                if(sekundy.value >= 60)
                {   
                    sekundy.value = 0
                    minuty.value++
                }

                if(minuty.value >= 60)
                {   
                    minuty.value = 0
                    hodiny.value++
                }
            
                setTimeout(()=> {casovac()}, 1000)
            }
        }
        
        casovac()

        function novaHra()
        {
            window.location.reload()
        }

        return {
            sekundy,
            minuty,
            hodiny,
            novaHra,
        }
    }
}
export default hlavneMenu;