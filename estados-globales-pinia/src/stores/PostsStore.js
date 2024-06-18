import { ref, computed } from "vue";
import { defineStore } from "pinia";
import posteos from "../data/posts.json"

export const usePostsStore = defineStore("PostsStore", () => {

    const posts = ref(posteos);

    const calcularCantidad = computed(() => posts.value.length);

    function agregarPost(nuevoPost){
        posts.value.push(nuevoPost);
    }

    return {
        posts,
        calcularCantidad,
        agregarPost
    }
})


