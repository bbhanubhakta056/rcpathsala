<script setup>
const sections = [
  {
    id: "html",
    title: "HTML – Structure of the Web",
    desc: "Students will learn the building blocks of the web: how to create structured documents, add links, images, and semantic elements that form the foundation of every website.",
    outcomes: [
      "Understand the structure of web pages",
      "Work with links, lists, tables, and forms",
      "Create semantic and accessible markup"
    ],
    image: "https://images.unsplash.com/photo-1611078489935-0cb6a2dd1d1c?q=80&w=800"
  },
  {
    id: "css",
    title: "CSS – Styling the Web",
    desc: "Students will learn how to style websites beautifully, from colors, typography, and layouts to animations and responsive design.",
    outcomes: [
      "Use modern CSS for layouts (Flexbox & Grid)",
      "Style text, backgrounds, and components",
      "Create responsive designs for all devices"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1559027615-ce3a77c9db09?q=80&w=800",
      "https://images.unsplash.com/photo-1522202222404-54134eab0f07?q=80&w=800",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800"
    ]
  },
  {
    id: "javascript",
    title: "JavaScript – Making Websites Interactive",
    desc: "Students will dive into programming fundamentals using JavaScript. They will learn how to add interactivity, manipulate content dynamically, and prepare for advanced frameworks.",
    outcomes: [
      "Understand programming basics: variables, loops, functions",
      "Manipulate the DOM and handle events",
      "Build simple interactive web applications"
    ],
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=800"
  }
]
</script>

<template>
  <div class="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
    <!-- Hero Section -->
    <section class="text-center py-20 px-6">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Basic Web Development Course</h1>
      <p class="text-lg max-w-2xl mx-auto mb-6">
        Learn the foundations of the web: HTML, CSS, and JavaScript.  
        From zero to building your own responsive websites.
      </p>
      <a href="#enroll" class="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition">
        Enroll Now
      </a>
    </section>
  </div>

  <!-- Course Sections -->
  <div class="bg-white text-gray-800">
    <section v-for="(section, index) in sections" :key="section.id" class="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      <!-- Alternate Layout -->
      <div v-if="index % 2 === 0">
        <h2 class="text-3xl font-bold mb-4">{{ section.title }}</h2>
        <p class="mb-6">{{ section.desc }}</p>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li v-for="o in section.outcomes" :key="o">{{ o }}</li>
        </ul>
      </div>
      <div v-if="index % 2 === 0">
        <img v-if="section.image" :src="section.image" class="rounded-xl shadow-lg" />
        <!-- Gallery for CSS -->
        <div v-if="section.gallery" class="grid grid-cols-3 gap-2">
          <img v-for="img in section.gallery" :key="img" :src="img" class="rounded-lg shadow-md object-cover" />
        </div>
      </div>

      <!-- Reversed for odd sections -->
      <div v-else>
        <img v-if="section.image" :src="section.image" class="rounded-xl shadow-lg" />
        <div v-if="section.gallery" class="flex space-x-4">
          <div v-for="img in section.gallery" :key="img" class="relative w-1/3">
            <img :src="img" class="rounded-lg shadow-lg object-cover" />
          </div>
        </div>
      </div>
      <!-- <div v-else>
        <h2 class="text-3xl font-bold mb-4">{{ section.title }}</h2>
        <p class="mb-6">{{ section.desc }}</p>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li v-for="o in section.outcomes" :key="o">{{ o }}</li>
        </ul>
      </div> -->
    </section>
  </div>

  <!-- Enroll CTA -->
  <section id="enroll" class="bg-gray-100 py-16 text-center">
    <h2 class="text-3xl font-bold mb-4">Ready to Get Started?</h2>
    <p class="mb-6 text-gray-700">Course Fee: <span class="font-semibold">Rs. 15,000</span> • Duration: <span class="font-semibold">2 Months</span></p>
    <a href="/contact" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
      Contact Us to Enroll
    </a>
  </section>
</template>
