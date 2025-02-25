import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modal", () => {
  const isOpen = ref(false);

  const openModal = () => (isOpen.value = true);
  const closeModal = () => (isOpen.value = false);

  console.log("работате", isOpen.value);

  return { isOpen, openModal, closeModal };
});
