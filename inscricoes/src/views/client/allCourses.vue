<script setup>
import globalNavbar from "@/components/globalNavbar.vue";
import eventCard from "@/components/main/eventCards.vue";
import recentCard from "@/components/main/recentCourse.vue";
</script>

<template>
  <globalNavbar />

  <div class="min-h-screen mx-12">
    <div
      class="mb-5 border-b-2 border-solid border-gray-800 w-full flex justify-center items-center"
    >
      <!--Most recent event-->
      <recentCard />
    </div>

    <div>
      <!--Cards vertically aligned with other courses-->
      <eventCard />
    </div>
  </div>
</template>
