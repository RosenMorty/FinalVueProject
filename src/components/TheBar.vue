<template>
  <header class="w-[1440px] h-[96px] align-center text-white bg-[#0a192b] flex">
    <div
      class="flex flex-row items-center mt-[24px] mr-[80px] mb-[24px] ml-[80px]"
    >
      <img
        src="./icons/30527eba2bf32aebd4bd09c75e9f4869.png"
        alt="logo"
        class="h-[40px] w-[34px]"
      />
      <h2 class="ml-[4px] mr-[80px] cursor-pointer">МАРУСЯ</h2>
    </div>
    <div class="flex flex-row items-center">
      <h2 class="mr-[40px] cursor-pointer">Главная</h2>
      <h2 class="mr-[40px] cursor-pointer">Жанры</h2>
      <input
        type="text"
        class="w-[655px] h-[48px] rounded-[8px] p-[16px] gap-[12px] bg-[#3a3b3d] mr-[120px]"
        placeholder="Поиск"
      />
    </div>
    <h2
      v-if="authStore.isAuthorized"
      class="flex items-center cursor-pointer"
      @click="authStore.changeRegistr()"
      @close="modalStore.closeModal()"
    >
      Выйти
    </h2>
    <h2
      v-else
      class="flex items-center cursor-pointer"
      @click="
        authStore.changeRegistr();
        modalStore.openModal();
      "
    >
      Войти
    </h2>
    <TheModal v-if="modalStore.isOpen"></TheModal>
    <TheRegistration v-if="registrationStore.isRegistration"></TheRegistration>
  </header>
</template>

<script setup>
import { useAuthStore } from "../stores/auth";
import { useModalStore } from "../stores/modal";
import TheModal from "./TheModal.vue";
import TheRegistration from "./TheRegistration.vue";
import { useRegistrationStore } from "@/stores/registration";

const registrationStore = useRegistrationStore();

const authStore = useAuthStore();
const modalStore = useModalStore();
</script>
