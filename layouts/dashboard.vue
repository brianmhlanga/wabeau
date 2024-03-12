<template>
  <div class="block-content">
  <div class="" style="height: 100vh; overflow: hidden;">
    <div class="min-h-screen flex relative lg:static surface-ground">
      <div id="app-sidebar-9" class="h-screen surface-section hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-18rem lg:w-7rem select-none">
        <div class="flex flex-column h-full">
          <div class="flex align-items-center justify-content-center flex-shrink-0" style="height: 60px;">
            <img src="/images/logo.png" alt="Image" height="50">
          </div>
          <div class="mt-3">
            <ul class="list-none p-0 m-0">
              <li @click="navigateTo('/admin/dashboard')">
                <a class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-cyan-600 border-left-2 border-cyan-600 hover:border-300 transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
                  <i class="pi pi-home mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                  <span class="font-medium inline text-base lg:text-xs lg:block">Home</span>
                  <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                </a>
              </li>
              <li @click="navigateTo('/admin/competitions')">
                <a class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
                  <i class="pi pi-book mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                  <span class="font-medium inline text-base lg:text-xs lg:block">Competitions</span>
                 </a>
              </li>
              <li @click="navigateTo('/admin/users')">
                <a class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
                  <i class="pi pi-users mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                  <span class="font-medium inline text-base lg:text-xs lg:block">Users</span>
                  <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border" style="height: 60px;">
          <div class="flex">
            <a class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple" data-pd-ripple="true" data-pd-styleclass="true">
              <i class="pi pi-bars text-4xl"></i>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
          </div>
          <a class="cursor-pointer block lg:hidden text-700 p-ripple" data-pd-ripple="true" data-pd-styleclass="true">
            <i class="pi pi-ellipsis-v text-2xl"></i>
            <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
          </a>
          <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
      <li v-if="first_name">
        {{first_name}} {{ last_name }}
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
        
        <div class="p-5 flex flex-column flex-auto">
          <slot />
          
        </div>
      </div>
    </div>
  </div>
  <!---->
</div>
</template>
<script lang="ts" setup>
import { useAuthStore } from "~/stores/auth";
const authStore = useAuthStore()
//@ts-ignore
const { value: { first_name, last_name, profile,country, id }} = useCookie('user');
const logOut = async () => {
    let result = await authStore.logout()
}
</script>
<style>
  .p-5.flex.flex-column.flex-auto {
    height: 300px;
    overflow-y: scroll;
    /* border: 1px solid #ccc; */
    padding: 10px;
  }
</style>