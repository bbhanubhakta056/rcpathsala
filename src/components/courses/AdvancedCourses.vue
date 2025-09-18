<script setup>
  import CourseDetails from './CourseDetails.vue';
  import { advancedCourse } from '../courses/courses';
</script>

<template>
  <CourseDetails :course="advancedCourse" />
</template>