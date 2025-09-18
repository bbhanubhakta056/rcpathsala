<script setup>
  import CourseDetails from '../courses/CourseDetails.vue';
  import { basicCourse } from '../courses/courses';
</script>

<template>
  <CourseDetails :course="basicCourse" />
</template>