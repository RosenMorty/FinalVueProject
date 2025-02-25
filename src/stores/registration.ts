import { defineStore } from "pinia";
import { ref } from "vue";

export const useRegistrationStore = defineStore("registration", () => {
  const isRegistration = ref<boolean>(false);
  const email = ref<string>("");
  const name = ref<string>("");
  const surename = ref<string>("");
  const password = ref<string>("");
  const repPassword = ref<string>("");

  const openRegistration = () => (isRegistration.value = true);
  const closeRegistration = () => (isRegistration.value = false);

  return {
    isRegistration,
    email,
    name,
    surename,
    password,
    repPassword,
    openRegistration,
    closeRegistration,
  };
});
