<template>
  <div
    class="w-[420px] h-[600px] bg-white text-black absolute top-1/2 left-1/2 -translate-x-1/2 rounded-[24px] gap-[40px] pt-[20px] pr-[40px] pb-[64px] pl-[40px] shadow-lg"
  >
    <div
      class="flex flex-col items-center mt-[24px] mr-[80px] mb-[24px] ml-[80px] w-[220px] h-[35px] justify-center"
    >
      <div
        class="flex flex-row items-center mr-[80px] mb-[10px] ml-[80px] w-[130px]"
      >
        <img
          src="./icons/30527eba2bf32aebd4bd09c75e9f4869.png"
          alt="logo"
          class="h-[40px] w-[34px]"
        />
        <h2 class="ml-[4px] mr-[80px] cursor-pointer font-bold">МАРУСЯ</h2>
      </div>
      <h2
        class="flex items-center mb-[15px] w-[149px] h-[32px] font-bold text-[24px]"
      >
        Регистрация
      </h2>
    </div>
    <div class="flex flex-col">
      <input
        class="w-[340px] h-[56px] border-[1px] mb-[10px] p-[16px] gap-[12px] rounded-[8px]"
        type="email"
        placeholder="sample@domain.ru"
        required
      />
      <input
        class="w-[340px] h-[56px] p-[16px] border-[1px] gap-[12px] rounded-[8px] mb-[18px]"
        type="text"
        placeholder="Имя"
        required
      />
      <input
        class="w-[340px] h-[56px] p-[16px] border-[1px] gap-[12px] rounded-[8px] mb-[18px]"
        type="text"
        placeholder="Фамилия"
        required
      />
      <input
        class="w-[340px] h-[56px] p-[16px] border-[1px] gap-[12px] rounded-[8px] mb-[18px]"
        type="password"
        placeholder="Пароль"
        required
      />
      <input
        class="w-[340px] h-[56px] p-[16px] border-[1px] gap-[12px] rounded-[8px] mb-[18px]"
        type="password"
        placeholder="Подтвердите пароль"
        required
      />
      <button
        class="w-[340px] h-[56px] rounded-[28px] pt-[16px] pr-[48px] pb-[16px] pl-[48px] gap-[12px] bg-[#67a5eb] text-white text-[18px] leading-[24px] font-bold mb-[20px]"
      >
        Создать аккаунт
      </button>
      <button class="text-[18px] leading-[24px] font-bold text-black">
        У меня есть пароль
      </button>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "../stores/auth";
import { useModalStore } from "../stores/modal";

const authStore = useAuthStore();
const modalStore = useModalStore();
</script>
