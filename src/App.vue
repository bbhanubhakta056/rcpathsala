<template>
  <div class="min-h-screen flex flex-col justify-between bg-gradient-to-r from-blue-600 to-purple-700 text-white">
    <!-- Header -->
    <header class="p-6 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <img src="/logo.jpg" alt="MyOffice Logo" class="h-12 w-auto" />
        <!-- Company Name + Address -->
        <div class="flex flex-col">
            <span class="text-2xl font-bold">RC Pathsala</span>
            <span class="text-1xl font-bold">आर.सि. पाठशाला</span>
        </div>
      </div>
      <nav class="space-x-1 hidden md:flex">
        <a href="mailto:rcpathsala@gmail.com" class="hover:text-yellow-300">rcpathsala@gmail.com</a>
        <p>/</p>
        <a class="hover:text-yellow-300">9868241083</a>
        <p>/</p>
        <a  class="hover:text-yellow-300">9847106554</a>
      </nav>
    </header>

    <!-- Main "Coming Soon" Section -->
    <main class="flex flex-col items-center text-center px-6 mt-8">
      <h2 class="text-5xl md:text-6xl font-extrabold mb-4">🚀 We’re Coming Soon</h2>
      <p class="text-lg md:text-xl mb-6 max-w-2xl">
        Our official website is under construction. We’re working hard to give you a great experience.
      </p>
    </main>

    <!-- Advertising Banner -->
    <section id="admission" class="max-w-4xl mx-auto m-12 px-6">
      <div class="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center">
        
        <!-- Left Image -->
        <div class="md:w-1/3 w-full bg-white">
          <img
            src="/logo.jpg"
            alt="Web Development"
            class="h-64 md:h-full w-full object-cover"
          />
        </div>

        <!-- Right Content -->
        <div class="md:w-2/3 w-full p-8 flex flex-col justify-center">
          <h2 class="text-3xl md:text-4xl font-extrabold mb-4">📢 Admission Open!</h2>
          <p class="mb-4 text-lg">
            Learn from <span class="font-semibold text-yellow-300">Basic Web Development</span> 
            with <span class="font-semibold">HTML, CSS, JavaScript</span> to 
            <span class="font-semibold text-yellow-300">Advanced JavaScript Frameworks</span> like 
            <span class="font-semibold">React.js, Vue.js, Node.js</span> and Databases 
            <span class="font-semibold">MongoDB & MSSQL</span>.
          </p>

          <!-- Highlights -->
          <!-- <ul class="list-disc list-inside space-y-2 mb-6">
            <li>👨‍🏫 Expert Trainers</li>
            <li>💻 Hands-on Projects</li>
            <li>🎓 Certificate on Completion</li>
          </ul> -->

          <!-- Call to Action -->
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:rcpathsala@gmail.com"
              class="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-yellow-300 transition text-center"
            >
              Enroll Now
            </a>
            <a
              href="mailto:rcpathsala@gmail.com"
              class="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-gray-900 transition text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-400 text-center py-4">
      <p>&copy; 2025 MyOffice. All Rights Reserved. <br>™ Trademark Registered</p>
    </footer>
  </div>
</template>

<script setup>
</script>
