import { ref, watch } from "vue";

export function useViewMode() {
    init()

    const theme = ref(localStorage.theme);

    watch(theme, () => {
        localStorage.theme = theme.value
        init()
    })

    function init() {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    function change() {
        if (theme.value == 'light') {
            theme.value = 'dark'
        } else {
            theme.value = 'light'
        }
    }

    return {theme, change}
} 