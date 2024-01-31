<template>
    <NuxtLayout name="dashboard">
        <div class="grid">
  <div class="col-12 md:col-6 lg:col-3">
    <div class="surface-card shadow-2 border-round">
      <div class="p-3 flex align-items-start">
        <img src="/images/student.png" class="mr-2" style="width: 32px; height: 32px;">
        <div>
          <span class="text-700">Students</span>
        </div>
        <div class="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">23</div>
      </div>
      <img src="/images/students.svg" class="w-11 topart">
    </div>
  </div>
  <div class="col-12 md:col-6 lg:col-3">
    <div class="surface-card shadow-2 border-round">
      <div class="p-3 flex align-items-start">
        <img src="/images/examss.png" class="mr-2" style="width: 32px; height: 32px;">
        <div>
          <span class="text-700">Exams</span>
          
        </div>
        <div class="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">25</div>
      </div>
      <img src="/images/exams.svg" class="w-11 topart2">
    </div>
  </div>
  <div class="col-12 md:col-6 lg:col-3">
    <div class="surface-card shadow-2 border-round">
      <div class="p-3 flex align-items-start">
        <img src="/images/coursess.png" class="mr-2" style="width: 32px; height: 32px;">
        <div>
          <span class="text-700">Subjects</span>
        </div>
        <div class="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">59</div>
      </div>
      <img src="/images/subjects.svg" class="w-11 topart3">
    </div>
  </div>
  <div class="col-12 md:col-6 lg:col-3">
    <div class="surface-card shadow-2 border-round">
      <div class="p-3 flex align-items-start">
        <img src="/images/new.png" class="mr-2" style="width: 32px; height: 32px;">
        <div>
          <span class="text-700">New Registrations</span>
        </div>
        <div class="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">233</div>
      </div>
      <img src="/images/new.svg" class="w-11 topart4">
    </div>
  </div>
</div>
    </NuxtLayout>
  </template>
  
  <script setup lang="ts">
    import { useToast } from "primevue/usetoast";
    import { storeToRefs } from "pinia";
    import { useStatisticsStore } from "~/stores/statistics";
    import {useAdminStore} from "~/stores/admin"
    import { useAuthStore } from '@/stores/auth';
    import { useSageStore } from "~/stores/sage";
    import moment from "moment";
    const sageStore = useSageStore()
    const adminStore =  useAdminStore()
    const statisticsStore = useStatisticsStore()
    const authStore = useAuthStore();
    const applicants = ref()
    const current_openings = ref()
    const closed_openings = ref()
    const total_openings = ref()
    const rejected_applications = ref()
    const successful_applications = ref()
    // definePageMeta({ 
    //     middleware: ["auth"]
    // });

    const formatCurrency = (value) => {

    return value.toLocaleString('en-US', { style: 'currency', currency: 'ZWL' });

    };

      onMounted(async() => {

       let statistics = await sageStore.getAllStatistics().then((data) => {
            
            console.log("dddddddddddddddddddd",data.data)
            applicants.value = data.data.applicants
            current_openings.value = data.data.active_openings
            closed_openings.value = data.data.closed_openings
            total_openings.value = data.data.job_postings
            rejected_applications.value = data.data.rejected_applications
            successful_applications.value = data.data.succesful_applications
       })
       
      });
  
  
   
  
  </script>
  
  <style>
img.topart {
    margin: 11px;
}
img.w-11.topart2 {
    height: 137px;
}
img.w-11.topart3 {
    height: 137px;
}
img.w-11.topart4 {
    height: 136px;
} 
  </style>