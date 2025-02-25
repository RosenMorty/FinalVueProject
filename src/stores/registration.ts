import { defineStore } from "pinia";
import { ref } from "vue";

export const useRegistrationStore = defineStore("registration", () => {
  const isRegistration = ref<boolean>(false);

  const openRegistration = () => (isRegistration.value = true);
  const closeRegistration = () => (isRegistration.value = false);

  return { isRegistration, openRegistration, closeRegistration };
});
