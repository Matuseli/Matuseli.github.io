const {createApp, ref, reactive} = Vue

import karta from "./components/Karta.js"
import hlavneMenu from "./components/hlavneMenu.js"

const app = createApp({

    components: 
    {
        karta,
        hlavneMenu
    },

    setup()
    {   
        const kartyPojmov = reactive([
            {id: "1", obsah: "Informačná bezpečnosť"},
            {id: "2", obsah: "Aktíva"},
            {id: "3", obsah: "Zálohovanie"},
            {id: "4", obsah: "Archivácia"},
            {id: "5", obsah: "RAID"},
            {id: "6", obsah: "Redunancia"},
            {id: "7", obsah: "OFF-LINE UPS"},
            {id: "8", obsah: "ON-LINE UPS"},
            {id: "9", obsah: "Logovanie"},
            {id: "10", obsah: "Biometria"},
            {id: "11", obsah: "KRYPTOLÓGIA"},
            {id: "12", obsah: "KRYPTOGRAFIA"},
            {id: "13", obsah: "DIFFIE-HELLMAN"},
            {id: "14", obsah: "Symetrické šifry"},
            {id: "15", obsah: "Asymetrické šifry"},
            {id: "16", obsah: "Site-to-site VPN"},
            {id: "17", obsah: "Remote-access VPN"},
            {id: "18", obsah: "Syslog"},
        ])

        const kartyDefinicii = reactive([
            {id: "1", obsah: "Vedná disciplína zaoberajúca sa vývojom metód na ochranu informácií a informačno-komunikačných technológii pred neoprávnenými alebo náhodnými zmenami, zničením a zverejnením"},
            {id: "2", obsah: "Všetko čo má pre spoločnosť nejakú hodnotu a malo by byť chránené"},
            {id: "3", obsah: "Vytvorenie kópie živých dát, ktoré sú pre nás cenné"},
            {id: "4", obsah: "Vytvorenie kópie dát, ku ktorým sa vieme dostať a vidieť ich po určitom čase"},
            {id: "5", obsah: "Jeho úlohou je zabezpečiť dostupnosť dát z hľadiska nepretržitej prevádzky"},
            {id: "6", obsah: "Nadbytočnosť, pridanie dalšieho sieťového zariadenia na ochranu pred zlyhaním siete"},
            {id: "7", obsah: "Zariadenie je napájané priamo zo siete a pri poklese napájania sa prepne na napájanie cez batériu"},
            {id: "8", obsah: "Energia sa najprv premieňa na jednosmernú, ktorá nabíja batériu a potom späť na striedavú, ktorá napája spotrebič"},
            {id: "9", obsah: "Zaznamenávanie identity používateľa, s akými dátami pracoval čo s nimi robil a v aký čas"},
            {id: "10", obsah: "V informačných technológiách sa využíva na autentifikáciu osôb pre prístup do systémov"},
            {id: "11", obsah: "Vedná disciplína, ktorá sa zaoberá bezpečnou komunikáciou"},
            {id: "12", obsah: "Úlohou je zašifrovať správu tak, aby nebola čitateľná pre nepovolené osoby"},
            {id: "13", obsah: "Protokol pre výmenu kľúča"},
            {id: "14", obsah: "Využíva ten istý kľúč na zašifrovanie a dešifrovanie správy"},
            {id: "15", obsah: "Využíva jeden kľúč na zašifrovanie a druhý na dešifrovanie správy"},
            {id: "16", obsah: "Prepája dve lokality, a to tak, že sa vytvára šifrované spojenie medzi routrami"},
            {id: "17", obsah: "Prepája koncového používateľa s inou sieťou"},
            {id: "18", obsah: "Protokol typu klient-server, klient zbiera logy z monitorovaného zariadenia a odosiela ich na server"},
        ])

        const vsetkyKarty = [...kartyPojmov, ...kartyDefinicii]

        function rozmiesanieKariet()
        {
            return Math.random() - 0.5
        }
        
        vsetkyKarty.sort(rozmiesanieKariet)

        return {
            kartyPojmov,
            kartyDefinicii,
            vsetkyKarty,
            rozmiesanieKariet,
        }
    }
})
app.mount("#app")