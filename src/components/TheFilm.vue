<template>
  <div
    class="bg-[#0a192b] from-gray-900 to-gray-800 text-white p-6 flex gap-6 w-[1440px] h-[600px] mx-auto"
  >
    <!-- Левая часть с текстом -->
    <div class="flex-1 space-y-3 flex flex-col justify-center ml-[80px]">
      <div class="flex items-center gap-2">
        <span
          class="bg-green-500 text-black text-sm font-bold px-2 py-1 rounded"
          >7.5</span
        >
        <span class="text-gray-400 text-sm">1979</span>
        <span class="text-gray-400 text-sm">детектив</span>
        <span class="text-gray-400 text-sm">1 ч 7 мин</span>
      </div>

      <h1 class="text-4xl font-bold leading-tight">
        Шерлок Холмс и доктор Ватсон: Знакомство
      </h1>
      <p class="text-gray-400 text-lg">
        Увлекательные приключения самого известного сыщика всех времен
      </p>

      <!-- Кнопки -->
      <div class="flex gap-4 mt-4">
        <button
          class="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 text-lg"
        >
          Трейлер
        </button>
        <button
          class="bg-gray-700 px-6 py-3 rounded-lg hover:bg-gray-600 text-lg"
        >
          О фильме
        </button>
        <button class="bg-gray-700 p-3 rounded-full hover:bg-gray-600">
          <img src="./icons/Vector.png" alt="" />
        </button>
        <button class="bg-gray-700 p-3 rounded-full hover:bg-gray-600">
          <img src="./icons/Refresh.png" alt="" />
        </button>
      </div>
    </div>

    <!-- Правая часть с изображением -->
    <div class="w-[400px] flex items-center mr-[80px]">
      <img
        src="https://s3-alpha-sig.figma.com/img/8073/c46c/19d71f02f96e4212b7cde03b1d2ed9b5?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fQ~2fmuxoU8uOc7z3UiRwtp7B99wEwXmT0zvTaCpwikKlVMBOM0i1TeKIVno6gRHrf59L9hpoFpTpUIL~axJyXDE3mo8-yjVIflQm~SO12CMZJijus0pyXCEm0J8npTCoMogms-FD0GS99f29mX0eeCYRghK1~csCZVPY9Be0ROviBYr64HhurKK7XwWqwsdFsSne5sNRfwrnBGHZAN4hSseW48cabXS5gbJTXrti9XPLKDVXqKrhAqIrIsZVh7PtJMdBeyRCtveFU6BKUUEri7AxYhFArZPzaA92jh8nd4ZB-5U1XFLB9pAPSVLR9HpV31i-wAX0sVYnHu7WohSZQ__"
        alt="Шерлок Холмс"
        class="rounded-lg shadow-lg object-cover w-full h-auto"
      />
    </div>
  </div>
  <div class="bg-[#0a192b] text-white">
    <h2 class="text-3xl font-bold mb-6 ml-[80px]">Топ 10 фильмов</h2>
    <div class="grid grid-cols-5 gap-6 ml-[80px] mr-[80px]">
      <div
        v-for="n in 10"
        :key="n"
        class="relative bg-gray-800 rounded-lg shadow-lg w-[224px] h-[336px]"
      >
        <span
          class="absolute top-2 left-2 bg-white text-black text-sm font-bold px-2 py-1 rounded-full"
          >{{ n }}</span
        >
        <img
          src="https://s3-alpha-sig.figma.com/img/8073/c46c/19d71f02f96e4212b7cde03b1d2ed9b5?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fQ~2fmuxoU8uOc7z3UiRwtp7B99wEwXmT0zvTaCpwikKlVMBOM0i1TeKIVno6gRHrf59L9hpoFpTpUIL~axJyXDE3mo8-yjVIflQm~SO12CMZJijus0pyXCEm0J8npTCoMogms-FD0GS99f29mX0eeCYRghK1~csCZVPY9Be0ROviBYr64HhurKK7XwWqwsdFsSne5sNRfwrnBGHZAN4hSseW48cabXS5gbJTXrti9XPLKDVXqKrhAqIrIsZVh7PtJMdBeyRCtveFU6BKUUEri7AxYhFArZPzaA92jh8nd4ZB-5U1XFLB9pAPSVLR9HpV31i-wAX0sVYnHu7WohSZQ__"
          alt="Фильм"
          class="rounded-lg w-full h-full"
        />
      </div>
    </div>
  </div>
  <footer
    class="bg-[#0a192b] w-[1440px] h-[120px] bg-gray-900 flex items-center justify-end px-8"
  >
    <!-- Социальные кнопки -->
    <div class="flex gap-4 mr-[50px]">
      <button class="w-[36px] h-[36px] hover:bg-gray-600">
        <img
          src="./icons/vk.png"
          alt="Фильм"
          class="rounded-lg w-full h-full"
          @click="openMyVk"
        />
      </button>
      <button class="w-[36px] h-[36px] hover:bg-gray-600">
        <img
          src="./icons/youtube.png"
          alt="Фильм"
          class="rounded-lg w-full h-full"
        />
      </button>
      <button class="w-[36px] h-[36px] hover:bg-gray-600">
        <img
          src="./icons/ok.png"
          alt="Фильм"
          class="rounded-lg w-full h-full"
        />
      </button>
      <button class="w-[36px] h-[36px] hover:bg-gray-600">
        <img
          src="./icons/telegram.png"
          alt="Фильм"
          class="rounded-lg w-full h-full"
          @click="openMyTg"
        />
      </button>
    </div>
  </footer>
</template>

<script setup>
const openMyVk = () => {
  window.open("https://vk.com/vcx99", "_blank");
};

const openMyTg = () => {
  window.open("https://t.me/RosenM044", "_blank");
};
</script>
