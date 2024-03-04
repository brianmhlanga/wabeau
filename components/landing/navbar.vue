<template>
    <div class="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static" style="min-height: 80px;">
  <img src="/images/logo.png" alt="Image" height="80" class="mr-0 lg:mr-6">
  <a class="cursor-pointer block lg:hidden text-700 mt-1 p-ripple" data-pd-ripple="true" data-pd-styleclass="true">
    <i class="pi pi-bars text-4xl"></i>
    <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
  </a>
  <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
    <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
      <li @click="navigateTo('/')">
        <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple" data-pd-ripple="true">
          <span>Home</span>
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </a>
      </li>
      <li @click="navigateTo('/#competitions')">
        <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple" data-pd-ripple="true">
          <span>Competitions</span>
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </a>
      </li>
      <li href="/contestants">
        <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple" data-pd-ripple="true">
          <span>Contestants</span>
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </a>
      </li>
      <li href="/faqs">
        <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple" data-pd-ripple="true">
          <span>FAQs</span>
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </a>
      </li>
      <li href="/contact">
        <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple" data-pd-ripple="true">
          
          <span>Contact Us</span>
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </a>
      </li>
    </ul>
    <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
      <li v-if="first_name">
        {{first_name}} {{ last_name }}
       ( <img src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${(country.code).toLowerCase()}`" data-v-inspector="pages/register.vue:65:57" style="width: 18px;">
        <span>{{ country?.name }}</span>
       )
      </li>
  
      <div v-if="first_name" class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 px-6 lg:px-0 mt-3 lg:mt-0">
        <button v-if="profile === 'ADMIN'" @click="navigateTo('/admin/dashboard')" class="p-button p-component ml-3 font-bold h-full" type="button" aria-label="Register" data-pc-name="button" data-pc-section="root" data-pd-ripple="true" style="border-radius: 0px;">
            
            <span class="p-button-label" data-pc-section="label">Admin Dashboard</span>
            
            <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </button>
        <button @click="logOut" class="p-button p-component ml-3 font-bold h-full custmy" type="button" aria-label="Register" data-pc-name="button" data-pc-section="root" data-pd-ripple="true" style="border-radius: 0px;">
            
            <span class="p-button-label" data-pc-section="label">Log Out</span>
            
            <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </button>
        </div>
        <div v-else class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 px-6 lg:px-0 mt-3 lg:mt-0">
        <button @click="navigateTo('/login')" class="p-button p-component p-button-text font-bold h-full sdjk" type="button" aria-label="Login" data-pc-name="button" data-pc-section="root" data-pd-ripple="true" style="border-radius: 0px;">
            
            <span class="p-button-label" data-pc-section="label">Login</span>
            
            <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </button>
        <button @click="navigateTo('/register')" class="p-button p-component ml-3 font-bold h-full thdyr" type="button" aria-label="Register" data-pc-name="button" data-pc-section="root" data-pd-ripple="true" style="border-radius: 0px;">
            
            <span class="p-button-label" data-pc-section="label">Register</span>
            
            <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </button>
        </div>
    </ul>
  </div>
</div>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useToast } from "primevue/usetoast";
import { useAuthStore } from "~/stores/auth";
const authStore = useAuthStore()
//@ts-ignore
const { value: { first_name, last_name, profile,country, id }} = useCookie('user');
const logOut = async () => {
    let result = await authStore.logout()
}
</script>
<style>
button.p-button.p-component.ml-3.font-bold.h-full.custmy {
    background-color: #93B531;
    border-radius: 10px !important;
    border-color: #93B531;
}
button.p-button.p-component.ml-3.font-bold.h-full.thdyr {
    background-color: #A5CB3A;
    border-color: #A5CB3A;
    border-radius: 10px !important;
}
button.p-button.p-component.p-button-text.font-bold.h-full.sdjk {
    border-color: #A5CB3A;
    color: #a5cb3a;
    border-radius: 10px !important;
}
</style>