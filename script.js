/**
 * Intro à vue.js
 * @author Nathan Juillerat
 * @date 2024-09-17
 */

console.log('Intro à vue.js');

const { createApp, ref } = Vue;

createApp({
    setup() {
        const message = "Bienvenue dans PokeCount!";
        const compteur = ref(0);
        const capturesTab = ref([]);

        function capturer() {
            compteur.value += 1;
        }

        function sauver() {
            if (compteur.value > 0) {
                capturesTab.value.push(compteur.value);
                compteur.value = 0;
            }
        }

        // retourne les objets dans le HTML
        return {
            message,
            compteur,
            capturer,
            capturesTab,
            sauver
        };
    }
}).mount("#poke-app");