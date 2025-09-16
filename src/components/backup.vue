<template>
  <div class="min-h-screen flex flex-col justify-between bg-gradient-to-r from-blue-600 to-purple-700 text-white">
    <!-- Header -->
    <header class="p-6 flex justify-between items-center shadow-md">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <img src="/logo.jpg" alt="MyOffice Logo" class="h-12 w-auto" />
        <!-- Company Name + Address -->
        <div class="flex flex-col">
            <span class="text-2xl font-bold">RC Pathsala</span>
            <span class="text-1xl font-bold">आर.सि. पाठशाला</span>
        </div>
      </div>
      <!-- <h1 class="text-2xl font-bold">RC Pathsala</h1> -->
      <nav class="space-x-1 hidden md:flex">
        <a href="mailto:rcpathsala@gmail.com" class="hover:text-yellow-300">rcpathsala@gmail.com</a>
        <p>/</p>
        <a class="hover:text-yellow-300">9868241083</a>
        <p>/</p>
        <a  class="hover:text-yellow-300">9847106554</a>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex flex-col items-center text-center px-6">
      <h2 class="text-5xl md:text-6xl font-extrabold mb-4">🚀 We’re Coming Soon</h2>
      <p class="text-lg md:text-xl mb-6 max-w-2xl">
        Our official website is under construction. We’re working hard to give you a great experience.
      </p>

      <!-- Opening Date -->
      <div class="bg-white text-gray-800 px-6 py-4 rounded-xl shadow-md mb-6">
        <p class="text-lg font-semibold">Admission Open Join Us Now</p>
      </div>

      <!-- Call to Action -->
      <a href="mailto:rcpathsala@gmail.com" class="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-yellow-300 transition">
        Contact Us
      </a>
    </main>
    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-400 text-center py-4">
      <p>&copy; 2025 Gtech. All Rights Reserved. <br>™ Trademark Registered</p>
    </footer>
  </div>
  <AdmissionOpen/>
</template>

<script setup>
  import AdmissionOpen from './components/AdmissionOpen.vue';   
</script>
