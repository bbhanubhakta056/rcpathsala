<script setup>
import { ref } from "vue"

// Props (you can pass data from router or parent)
const props = defineProps({
  course: {
    type: Object,
    required: true
  }
})

const { title, tagline, fee, duration, sections } = props.course
</script>

<template>
  <!-- Hero -->
  <div class="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
    <section class="text-center py-20 px-6">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4">{{ title }}</h1>
      <p class="text-lg max-w-2xl mx-auto mb-6">{{ tagline }}</p>
      <a href="#enroll" class="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition">
        Enroll Now
      </a>
    </section>
  </div>

  <!-- Course Sections -->
  <div class="bg-white text-gray-800">
    <section 
      v-for="(section, index) in sections" 
      :key="section.id" 
      class="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center"
    >
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
      <div v-if="index % 2 != 0">
        <h2 class="text-3xl font-bold mb-4">{{ section.title }}</h2>
        <p class="mb-6">{{ section.desc }}</p>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li v-for="o in section.outcomes" :key="o">{{ o }}</li>
        </ul>
      </div>
    </section>
  </div>

  <!-- Enroll CTA -->
  <section id="enroll" class="bg-gray-100 py-16 text-center">
    <h2 class="text-3xl font-bold mb-4">Ready to Get Started?</h2>
    <p class="mb-6 text-gray-700">
      Course Fee: <span class="font-semibold">{{ fee }}</span> • 
      Duration: <span class="font-semibold">{{ duration }}</span>
    </p>
    <a href="/contact" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
      Contact Us to Enroll
    </a>
  </section>

</template>
