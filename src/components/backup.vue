<script setup>
import { ref } from "vue"

const showDetails = ref(false)
const selectedCourse = ref(null)

const courses = [
  {
    id: 1,
    title: "👨‍💻 Basic Web Development",
    desc: "Learn the foundations of web technologies using HTML, CSS & JavaScript. Build static websites and get ready for the next level.",
    objectives: [
      "Master HTML, CSS & JS fundamentals",
      "Build responsive websites",
      "Understand core web concepts"
    ],
    fee: "Rs. 15,000",
    duration: "2 Months",
    method: "Hands-on training, guided projects, weekly assessments",
    image: "https://images.unsplash.com/photo-1584697964154-fb95b0c4b8c7?q=80&w=800"
  },
  {
    id: 2,
    title: "🚀 Advanced Web Development",
    desc: "Take your skills further with React.js, Vue.js, Node.js & databases. Work on real projects and prepare for professional development.",
    objectives: [
      "Deep dive into modern JS frameworks",
      "Develop APIs & integrate databases",
      "Work on real-world team projects"
    ],
    fee: "Rs. 30,000",
    duration: "3 Months",
    method: "Project-based learning, mentorship, industry practices",
    image: "https://images.unsplash.com/photo-1523473827532-4c30374764df?q=80&w=800"
  }
]

function openDetails(course) {
  selectedCourse.value = course
  showDetails.value = true
}
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2">
    <div 
      v-for="course in courses" 
      :key="course.id" 
      class="bg-white text-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col"
    >
      <img :src="course.image" :alt="course.title" class="h-48 w-full object-cover" />
      <div class="p-6 flex-1 flex flex-col">
        <h3 class="text-2xl font-bold mb-2">{{ course.title }}</h3>
        <p class="mb-4 text-gray-600">{{ course.desc }}</p>
        <ul class="list-disc list-inside text-sm text-gray-700 space-y-1 mb-6">
          <li v-for="obj in course.objectives" :key="obj">{{ obj }}</li>
        </ul>
        <button 
          @click="openDetails(course)" 
          class="mt-auto bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          See Details
        </button>
      </div>
    </div>
  </div>

  <!-- Modal for Fee Structure & Training Info -->
  <div v-if="showDetails" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="bg-white text-gray-800 rounded-2xl shadow-xl max-w-lg w-full p-6 relative">
      <!-- Close Button -->
      <button 
        @click="showDetails = false" 
        class="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
      >
        ✖
      </button>

      <h3 class="text-2xl font-bold mb-2">{{ selectedCourse.title }}</h3>
      <p class="mb-4 text-gray-600">{{ selectedCourse.desc }}</p>

      <div class="bg-gray-100 rounded-lg p-4 mb-4">
        <p><span class="font-semibold">💰 Fee:</span> {{ selectedCourse.fee }}</p>
        <p><span class="font-semibold">⏳ Duration:</span> {{ selectedCourse.duration }}</p>
      </div>

      <div class="mb-4">
        <h4 class="font-semibold text-lg mb-2">📌 Training Method</h4>
        <p>{{ selectedCourse.method }}</p>
      </div>

      <div>
        <h4 class="font-semibold text-lg mb-2">🎯 Objectives</h4>
        <ul class="list-disc list-inside text-sm space-y-1">
          <li v-for="obj in selectedCourse.objectives" :key="obj">{{ obj }}</li>
        </ul>
      </div>

      <div class="mt-6 flex justify-end">
        <a 
          href="#contact" 
          class="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Enroll Now
        </a>
      </div>
    </div>
  </div>
</template>
