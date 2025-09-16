<template>
  <div class="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2">
    <!-- Basic Course -->
    <div class="bg-white/80 backdrop-blur-md text-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <img 
        src="/basic.jpg" 
        alt="Basic Web Development" 
        class="h-48 w-full object-cover"
      />
      <div class="p-6">
        <h3 class="text-2xl font-bold mb-2">👨‍💻 Basic Web Development</h3>
        <p class="mb-4">
          Start your journey with <span class="font-semibold">HTML, CSS, and JavaScript</span>.  
          Learn to build static websites and master the foundations of the web.
        </p>
        <ul class="list-disc list-inside text-sm space-y-1 mb-6">
          <li>HTML5 & Semantic Markup</li>
          <li>CSS3 & Responsive Design</li>
          <li>JavaScript Fundamentals</li>
        </ul>
        <a 
          href="#contact" 
          class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Enroll Now
        </a>
      </div>
    </div>

    <!-- Advanced Course -->
    <div class="bg-white/80 backdrop-blur-md text-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <img 
        src="/advanced.jpg" 
        alt="Advanced Web Development" 
        class="h-48 w-full object-cover"
      />
      <div class="p-6">
        <h3 class="text-2xl font-bold mb-2">🚀 Advanced Web Development</h3>
        <p class="mb-4">
          Level up with modern <span class="font-semibold">JavaScript Frameworks</span> and databases.  
          Work on real-world projects and prepare for professional development.
        </p>
        <ul class="list-disc list-inside text-sm space-y-1 mb-6">
          <li>React.js, Vue.js & Node.js</li>
          <li>API Development & Integration</li>
          <li>Databases: MongoDB & MSSQL</li>
        </ul>
        <a 
          href="#contact" 
          class="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Enroll Now
        </a>
      </div>
    </div>
  </div>
</template>
