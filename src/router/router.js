import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/home/HomePage.vue';
import BasicCourseDetails from '../components/basic_course/BasicCourseDetails.vue';
import AdvancedCourses from '../components/courses/AdvancedCourses.vue';

const routes = [
    { path: '/', component: HomePage},
    { path: '/basic-course', component: BasicCourseDetails},
    { path: '/advanced-course', component: AdvancedCourses}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;