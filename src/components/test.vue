<template>
  <div class="min-h-screen flex flex-col justify-between bg-gradient-to-r from-blue-600 to-purple-700 text-white">
    <!-- Header -->
    <header class="p-6 flex justify-between items-center">
      <!-- Logo + Name + Address -->
      <div class="flex items-center space-x-2">
        <img src="@/assets/logo.jpg" alt="MyOffice Logo" class="h-12 w-auto rounded-lg shadow-md" />
        <div class="flex flex-col">
          <span class="text-2xl font-bold">MyOffice</span>
          <span class="text-sm text-gray-200">Kathmandu, Nepal</span>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="space-x-6 hidden md:flex">
        <a href="#who-we-are" class="hover:text-yellow-300">Who We Are</a>
        <a href="#what-we-do" class="hover:text-yellow-300">What We Do</a>
        <a href="#admission" class="hover:text-yellow-300">Courses</a>
        <a href="#contact" class="hover:text-yellow-300">Contact</a>
      </nav>
    </header>

    <!-- Main "Coming Soon" Section -->
    <main class="flex flex-col items-center text-center px-6 mt-8">
      <h2 class="text-5xl md:text-6xl font-extrabold mb-4">🚀 We’re Coming Soon</h2>
      <p class="text-lg md:text-xl mb-6 max-w-2xl">
        Our official website is under construction. We’re working hard to give you a great experience.
      </p>

      <!-- Opening Date -->
      <div class="bg-white text-gray-800 px-6 py-4 rounded-xl shadow-md mb-6">
        <p class="text-lg font-semibold">
          🎉 Opening Date: <span class="text-blue-600">December 15, 2025</span>
        </p>
      </div>

      <!-- Call to Action -->
      <a href="#contact" class="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-yellow-300 transition">
        Contact Us
      </a>
    </main>

    <!-- Who We Are -->
    <section id="who-we-are" class="bg-white text-gray-800 py-12 px-6 text-center">
      <h3 class="text-3xl font-bold mb-4">Who We Are</h3>
      <p class="max-w-3xl mx-auto">
        We are a passionate team building innovative solutions for businesses. 
        Our mission is to bring efficiency, creativity, and technology together 
        to create lasting impact.
      </p>
    </section>

    <!-- What We Do -->
    <section id="what-we-do" class="bg-gray-100 text-gray-800 py-12 px-6 text-center">
      <h3 class="text-3xl font-bold mb-4">What We Do</h3>
      <p class="max-w-3xl mx-auto">
        We specialize in web development, software solutions, and IT consulting. 
        From custom applications to digital transformation, we deliver reliable 
        solutions tailored to your needs.
      </p>
    </section>

    <!-- Advertising Banner -->
    <section id="admission" class="max-w-5xl mx-auto mt-12 px-6">
      <div class="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center">
        
        <!-- Left Image -->
        <div class="md:w-1/3 w-full">
          <img
            src="https://images.unsplash.com/photo-1584697964154-fb95b0c4b8c7?q=80&w=800"
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
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>👨‍🏫 Expert Trainers</li>
            <li>💻 Hands-on Projects</li>
            <li>🎓 Certificate on Completion</li>
          </ul>

          <!-- Call to Action -->
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              class="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-yellow-300 transition text-center"
            >
              Enroll Now
            </a>
            <a
              href="#contact"
              class="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-gray-900 transition text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact & Location -->
    <section id="contact" class="bg-white text-gray-800 py-12 px-6 text-center mt-12">
      <h3 class="text-3xl font-bold mb-4">📍 Contact Us</h3>
      <p>Email: <a href="mailto:info@myoffice.com" class="text-blue-600">info@myoffice.com</a></p>
      <p>Phone: +977-123456789</p>
      <p>Address: Kathmandu, Nepal</p>

      <!-- Google Map Embed -->
      <div class="mt-6">
        <iframe
          class="w-full h-64 rounded-xl shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!..."
          allowfullscreen=""
          loading="lazy"
        ></iframe>
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
