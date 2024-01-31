<template>
  <div class="block-content">
  <div class="" style="height: 100vh; overflow: hidden;">
    <div class="min-h-screen flex relative lg:static surface-ground">
      <div id="app-sidebar-9" class="h-screen surface-section hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-18rem lg:w-7rem select-none">
        <div class="flex flex-column h-full">
          <div class="flex align-items-center justify-content-center flex-shrink-0" style="height: 60px;">
            <img src="https://blocks.primevue.org/images/blocks/logos/hyper-cyan.svg" alt="Image" height="30">
          </div>
          <div class="mt-3">
            <ul class="list-none p-0 m-0">
              <li>
                <a class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-cyan-600 border-left-2 border-cyan-600 hover:border-300 transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
                  <i class="pi pi-home mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                  <span class="font-medium inline text-base lg:text-xs lg:block">Home</span>
                  <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                </a>
              </li>
              <li @click="navigateTo('/admin/subjects')">
                <a class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
                  <i class="pi pi-book mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                  <span class="font-medium inline text-base lg:text-xs lg:block">Subjects</span>
                 </a>
              </li>
              <li @click="navigateTo('/admin/examCreation')">
                <a class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
                  <i class="pi pi-pencil mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                  <span class="font-medium inline text-base lg:text-xs lg:block">Exams</span>
                 </a>
              </li>
              <li>
                <a class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
                  <i class="pi pi-users mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                  <span class="font-medium inline text-base lg:text-xs lg:block">Team</span>
                  <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                </a>
              </li>
              <li class="relative">
                <a class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" data-pd-ripple="true" data-pd-styleclass="true">
                  <i class="pi pi-chart-line mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl p-overlay-badge" data-pd-badge="true" data-p-overlay-badge="true">
                    <span id="pv_id_61_badge" class="p-badge p-component p-badge-danger p-badge-dot" data-pc-name="badge" data-pc-section="root"></span>
                  </i>
                  <span class="font-medium inline text-base lg:text-xs lg:block">Reports</span>
                  <i class="pi pi-chevron-down ml-auto lg:hidden"></i>
                  <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                </a>
                <ul class="list-none pl-3 pr-0 py-0 lg:p-3 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out static border-round-right lg:absolute left-100 top-0 z-1 surface-overlay shadow-none lg:shadow-2 w-full lg:w-15rem">
                  <li>
                    <a class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple" data-pd-ripple="true" data-pd-styleclass="true">
                      <i class="pi pi-chart-line mr-2"></i>
                      <span class="font-medium">Revenue</span>
                      <i class="pi pi-chevron-down ml-auto"></i>
                      <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                    </a>
                    <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                      <li>
                        <a class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
                          <i class="pi pi-table mr-2"></i>
                          <span class="font-medium">View</span>
                          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                        </a>
                      </li>
                      <li>
                        <a class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
                          <i class="pi pi-search mr-2"></i>
                          <span class="font-medium">Search</span>
                          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
                      <i class="pi pi-chart-line mr-2"></i>
                      <span class="font-medium">Expenses</span>
                      <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
                  <i class="pi pi-calendar mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                  <span class="font-medium inline text-base lg:text-xs lg:block">Events</span>
                  <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                </a>
              </li>
              <li>
                <a class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
                  <i class="pi pi-cog mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                  <span class="font-medium inline text-base lg:text-xs lg:block">Options</span>
                  <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-auto">
            <hr class="mb-3 mx-3 border-top-1 border-none surface-border">
            <a class="m-3 flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:surface-200 border-round text-600 transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
              <img src="https://blocks.primevue.org/images/blocks/avatars/circle/avatar-f-1.png" class="mr-2 lg:mr-0" style="width: 32px; height: 32px;">
              <span class="font-medium inline lg:hidden">Amy Elsner</span>
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </a>
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
            <span class="p-input-icon-left">
              <i class="pi pi-search"></i>
              <input class="p-inputtext p-component border-none w-10rem sm:w-20rem" data-pc-name="inputtext" data-pc-section="root" type="text" placeholder="Search">
            </span>
          </div>
          <a class="cursor-pointer block lg:hidden text-700 p-ripple" data-pd-ripple="true" data-pd-styleclass="true">
            <i class="pi pi-ellipsis-v text-2xl"></i>
            <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
          </a>
          <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
            <li>
              <a class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
                <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                <span class="block lg:hidden font-medium">Inbox</span>
                <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
              </a>
            </li>
            <li>
              <a class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
                <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge" data-pd-badge="true" data-p-overlay-badge="true">
                  <span id="pv_id_62_badge" class="p-badge p-component p-badge-danger p-badge-dot" data-pc-name="badge" data-pc-section="root"></span>
                </i>
                <span class="block lg:hidden font-medium">Notifications</span>
                <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
              </a>
            </li>
            <li class="border-top-1 surface-border lg:border-top-none">
              <a class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple" data-pd-ripple="true">
                <img src="https://blocks.primevue.org/images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px;">
                <div class="block lg:hidden">
                  <div class="text-900 font-medium">Amy Elsner</div>
                  <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                </div>
                <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
              </a>
            </li>
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
<style>
  .p-5.flex.flex-column.flex-auto {
    height: 300px;
    overflow-y: scroll;
    /* border: 1px solid #ccc; */
    padding: 10px;
  }
</style>