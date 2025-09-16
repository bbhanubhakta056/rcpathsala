<template>
    <div class="max-w-4xl mx-auto mt-12 px-6">
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
  </div>
</template>