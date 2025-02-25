import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const isAuthorized = ref<boolean>(false);

  const changeRegistr = () => {
    isAuthorized.value = !isAuthorized.value;
    console.log("Текущее значение isRegistr:", isAuthorized.value);
  };

  const authFalse = () => {
    isAuthorized.value = false;
  };

  const authTrue = () => {
    isAuthorized.value = true;
  };

  return { isAuthorized, changeRegistr, authFalse, authTrue };
});
