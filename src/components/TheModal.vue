<template>
  <div
    v-if="modalStore.isOpen"
    class="w-[420px] h-[380px] bg-white text-black absolute top-1/2 left-1/2 -translate-x-1/2 rounded-[24px] gap-[40px] pt-[20px] pr-[40px] pb-[64px] pl-[40px] shadow-lg mt-[100px]"
  >
    <div
      class="flex flex-row items-center mt-[24px] mr-[80px] mb-[24px] ml-[80px] w-[220px] h-[35px] justify-center"
    >
      <img
        src="./icons/30527eba2bf32aebd4bd09c75e9f4869.png"
        alt="logo"
        class="h-[40px] w-[34px]"
      />
      <h2 class="ml-[4px] mr-[80px] cursor-pointer font-bold">МАРУСЯ</h2>
    </div>
    <div class="flex flex-col">
      <input
        class="w-[340px] h-[56px] border-[1px] mb-[10px] p-[16px] gap-[12px] rounded-[8px]"
        type="email"
        placeholder="Электронная почта"
      />
      <input
        class="w-[340px] h-[56px] p-[16px] border-[1px] gap-[12px] rounded-[8px] mb-[18px]"
        type="password"
        placeholder="Пароль"
      />
      <button
        class="w-[340px] h-[56px] rounded-[28px] pt-[16px] pr-[48px] pb-[16px] pl-[48px] gap-[12px] bg-[#67a5eb] text-white text-[18px] leading-[24px] font-bold mb-[20px]"
      >
        Войти
      </button>
      <button
        class="text-[18px] leading-[24px] font-bold text-black"
        @click="
          registrationStore.openRegistration();
          modalStore.closeModal();
        "
      >
        Регистрация
      </button>
      <TheRegistration
        v-if="registrationStore.isRegistration === true"
      ></TheRegistration>
    </div>
    <button
      class="absolute top-4 right-4 text-gray-500 hover:text-black w-[48px] h-[48px] gap-[10px] rounded-[24px] bg-[#67a5eb]"
      @click="modalStore.closeModal()"
    >
      <img src="./icons/close.png" class="pl-[14px]" />
    </button>
  </div>
</template>

<script setup>
import TheRegistration from "./TheRegistration.vue";
import { useAuthStore } from "../stores/auth";
import { useModalStore } from "../stores/modal";
import { useRegistrationStore } from "@/stores/registration";

const registrationStore = useRegistrationStore();
const authStore = useAuthStore();
const modalStore = useModalStore();
</script>
