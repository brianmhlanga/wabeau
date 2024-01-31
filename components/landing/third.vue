<template>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="font-bold text-900 text-3xl mb-3 text-center">Participants</div>
    <div class="flex flex-column md:flex-row gap-3 md:align-items-center mycolor border-round-xl p-3">
  <div class="flex-1 gap-3 flex flex-column sm:flex-row">
    <div class="flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md">
      <div class="text-center">
        <div class="text-sm font-semibold mb-2">AFRICA</div>
        <span class="font-semibold">4000</span>
      </div>
    </div>
    <div class="flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md">
      <div class="text-center">
        <div class="text-sm font-semibold mb-2">EUROPE</div>
        <span class="font-semibold">40</span>
      </div>
    </div>
    <div class="flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md">
      <div class="text-center">
        <div class="text-sm font-semibold mb-2">ASIA</div>
        <span class="font-semibold">400</span>
      </div>
    </div>
    <div class="flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md">
      <div class="text-center">
        <div class="text-sm font-semibold mb-2">SOUTH AMERICA</div>
        <span class="font-semibold">400</span>
      </div>
    </div>
    <div class="flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md">
      <div class="text-center">
        <div class="text-sm font-semibold mb-2">NORTH AMERICA</div>
        <span class="font-semibold">400</span>
      </div>
    </div>
    <div class="flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md">
      <div class="text-center">
        <div class="text-sm font-semibold mb-2">AUSTRALIA</div>
        <span class="font-semibold">400</span>
      </div>
    </div>
    <div class="flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md">
      <div class="text-center">
        <div class="text-sm font-semibold mb-2">ARNTACTICA</div>
        <span class="font-semibold">400</span>
      </div>
    </div>
  </div>
</div>
    </div>
    <section class="surface-section px-4 py-8 md:px-6 lg:px-8">
  <header class="flex w-full justify-content-between align-items-center border-bottom-1 surface-border pb-5">
    <div>
      <h2 class="mt-0 mb-3 font-medium text-2xl text-900">Competitions</h2>
      <p class="mt-0 mb-0 font-normal text-base text-500"> Vote for your favorite models and witness the crowning of the next runway sensation. Strut, vote, and celebrate fashion democracy at its finest! </p>
    </div>
    <button class="p-button p-component p-ripple p-button-outlined" type="button" aria-label="Report Issue" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
      <!---->
      <span class="p-button-label" data-pc-section="label">Report Issue</span>
      <!---->
      <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
      <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
    </button>
  </header>
  <section class="flex flex-wrap flex-column md:flex-row md:align-items-center gap-2 py-5">
    <DropDown  optionLabel="name" placeholder="Select Competition Status" class="w-full md:w-14rem" />
    <span class="p-calendar p-component p-inputwrapper p-inputwrapper-filled w-full md:w-15rem" data-pc-name="calendar" data-pc-section="root" readonlyinput="">
      <input id="range" type="text" role="combobox" class="p-inputtext p-component" autocomplete="off" aria-autocomplete="none" aria-haspopup="dialog" aria-expanded="false" aria-controls="pv_id_189_panel" inputmode="none" tabindex="0" data-pc-section="input">
      <!---->
    </span>
    <div class="p-dropdown p-component p-inputwrapper p-inputwrapper-filled w-full md:w-15rem" data-pc-name="dropdown" data-pc-section="root" id="pv_id_207">
      <span class="p-dropdown-label p-inputtext" tabindex="0" role="combobox" aria-label="$5000 - $10000" aria-haspopup="listbox" aria-expanded="false" aria-controls="pv_id_207_list" aria-disabled="false" data-pc-section="input">$5000 - $10000</span>
      <!---->
      <div class="p-dropdown-trigger" data-pc-section="trigger">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-dropdown-trigger-icon" aria-hidden="true" data-pc-section="dropdownicon">
          <path d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  </section>
  <div class="grid">
  <div class="col-12 md:col-6 xl:col-4 p-3">
    <div class="surface-card shadow-2 border-round p-4">
      <div class="flex border-bottom-1 surface-border pb-4">
        <img src="https://blocks.primevue.org/images/blocks/avatars/circle/avatar-f-1.png" class="mr-3" style="width: 70px; height: 70px;">
        <div class="flex flex-column align-items-start">
          <span class="text-xl text-900 font-medium mb-1">Lindsay Connor</span>
          <span class="text-600 font-medium mb-2">Test Engineer</span>
          <span class="bg-blue-50 text-blue-400 border-round inline-flex py-1 px-2 text-sm">Editor</span>
        </div>
      </div>
      <div class="flex justify-content-between pt-4">
        <button class="p-button p-component p-button-outlined p-button-secondary w-6 mr-2" type="button" aria-label="View" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
          <span class="p-button-icon p-button-icon-left pi pi-search" data-pc-section="icon"></span>
          <span class="p-button-label" data-pc-section="label">View</span>
          <!---->
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </button>
        <button class="p-button p-component p-button-outlined p-button-secondary w-6 ml-2" type="button" aria-label="Follow" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
          <span class="p-button-icon p-button-icon-left pi pi-user-plus" data-pc-section="icon"></span>
          <span class="p-button-label" data-pc-section="label">Follow</span>
          <!---->
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </button>
      </div>
    </div>
  </div>
  <div class="col-12 md:col-6 xl:col-4 p-3">
    <div class="surface-card shadow-2 border-round p-4">
      <div class="flex border-bottom-1 surface-border pb-4">
        <img src="https://blocks.primevue.org/images/blocks/avatars/circle/avatar-m-1.png" class="mr-3" style="width: 70px; height: 70px;">
        <div class="flex flex-column align-items-start">
          <span class="text-xl text-900 font-medium mb-1">James McAvoy</span>
          <span class="text-600 font-medium mb-2">Project Manager</span>
          <span class="bg-purple-50 text-purple-400 border-round inline-flex py-1 px-2 text-sm">Contributor</span>
        </div>
      </div>
      <div class="flex justify-content-between pt-4">
        <button class="p-button p-component p-button-outlined p-button-secondary w-6 mr-2" type="button" aria-label="View" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
          <span class="p-button-icon p-button-icon-left pi pi-search" data-pc-section="icon"></span>
          <span class="p-button-label" data-pc-section="label">View</span>
          <!---->
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </button>
        <button class="p-button p-component p-button-outlined p-button-secondary w-6 ml-2" type="button" aria-label="Follow" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
          <span class="p-button-icon p-button-icon-left pi pi-user-plus" data-pc-section="icon"></span>
          <span class="p-button-label" data-pc-section="label">Follow</span>
          <!---->
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </button>
      </div>
    </div>
  </div>
  <div class="col-12 md:col-6 xl:col-4 p-3">
    <div class="surface-card shadow-2 border-round p-4">
      <div class="flex border-bottom-1 surface-border pb-4">
        <img src="https://blocks.primevue.org/images/blocks/avatars/circle/avatar-f-2.png" class="mr-3" style="width: 70px; height: 70px;">
        <div class="flex flex-column align-items-start">
          <span class="text-xl text-900 font-medium mb-1">Aisha Jones</span>
          <span class="text-600 font-medium mb-2">Designer</span>
          <span class="bg-blue-50 text-blue-400 border-round inline-flex py-1 px-2 text-sm">Editor</span>
        </div>
      </div>
      <div class="flex justify-content-between pt-4">
        <button class="p-button p-component p-button-outlined p-button-secondary w-6 mr-2" type="button" aria-label="View" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
          <span class="p-button-icon p-button-icon-left pi pi-search" data-pc-section="icon"></span>
          <span class="p-button-label" data-pc-section="label">View</span>
          <!---->
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </button>
        <button class="p-button p-component p-button-outlined p-button-secondary w-6 ml-2" type="button" aria-label="Follow" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
          <span class="p-button-icon p-button-icon-left pi pi-user-plus" data-pc-section="icon"></span>
          <span class="p-button-label" data-pc-section="label">Follow</span>
          <!---->
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </button>
      </div>
    </div>
  </div>
  <div class="col-12 md:col-6 xl:col-4 p-3">
    <div class="surface-card shadow-2 border-round p-4">
      <div class="flex border-bottom-1 surface-border pb-4">
        <img src="https://blocks.primevue.org/images/blocks/avatars/circle/avatar-m-2.png" class="mr-3" style="width: 70px; height: 70px;">
        <div class="flex flex-column align-items-start">
          <span class="text-xl text-900 font-medium mb-1">Roberto Fox</span>
          <span class="text-600 font-medium mb-2">QA Engineer</span>
          <span class="bg-orange-50 text-orange-400 border-round inline-flex py-1 px-2 text-sm">Author</span>
        </div>
      </div>
      <div class="flex justify-content-between pt-4">
        <button class="p-button p-component p-button-outlined p-button-secondary w-6 mr-2" type="button" aria-label="View" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
          <span class="p-button-icon p-button-icon-left pi pi-search" data-pc-section="icon"></span>
          <span class="p-button-label" data-pc-section="label">View</span>
          <!---->
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </button>
        <button class="p-button p-component p-button-outlined p-button-secondary w-6 ml-2" type="button" aria-label="Follow" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
          <span class="p-button-icon p-button-icon-left pi pi-user-plus" data-pc-section="icon"></span>
          <span class="p-button-label" data-pc-section="label">Follow</span>
          <!---->
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </button>
      </div>
    </div>
  </div>
  <div class="col-12 md:col-6 xl:col-4 p-3">
    <div class="surface-card shadow-2 border-round p-4">
      <div class="flex border-bottom-1 surface-border pb-4">
        <img src="https://blocks.primevue.org/images/blocks/avatars/circle/avatar-f-4.png" class="mr-3" style="width: 70px; height: 70px;">
        <div class="flex flex-column align-items-start">
          <span class="text-xl text-900 font-medium mb-1">Jenny Wilson</span>
          <span class="text-600 font-medium mb-2">Scrum Master</span>
          <span class="bg-purple-50 text-purple-400 border-round inline-flex py-1 px-2 text-sm">Contributor</span>
        </div>
      </div>
      <div class="flex justify-content-between pt-4">
        <button class="p-button p-component p-button-outlined p-button-secondary w-6 mr-2" type="button" aria-label="View" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
          <span class="p-button-icon p-button-icon-left pi pi-search" data-pc-section="icon"></span>
          <span class="p-button-label" data-pc-section="label">View</span>
          <!---->
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </button>
        <button class="p-button p-component p-button-outlined p-button-secondary w-6 ml-2" type="button" aria-label="Follow" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
          <span class="p-button-icon p-button-icon-left pi pi-user-plus" data-pc-section="icon"></span>
          <span class="p-button-label" data-pc-section="label">Follow</span>
          <!---->
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </button>
      </div>
    </div>
  </div>
  <div class="col-12 md:col-6 xl:col-4 p-3">
    <div class="surface-card shadow-2 border-round p-4">
      <div class="flex border-bottom-1 surface-border pb-4">
        <img src="https://blocks.primevue.org/images/blocks/avatars/circle/avatar-f-5.png" class="mr-3" style="width: 70px; height: 70px;">
        <div class="flex flex-column align-items-start">
          <span class="text-xl text-900 font-medium mb-1">Claire Flores</span>
          <span class="text-600 font-medium mb-2">Developer</span>
          <span class="bg-teal-50 text-teal-400 border-round inline-flex py-1 px-2 text-sm">Subscriber</span>
        </div>
      </div>
      <div class="flex justify-content-between pt-4">
        <button class="p-button p-component p-button-outlined p-button-secondary w-6 mr-2" type="button" aria-label="View" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
          <span class="p-button-icon p-button-icon-left pi pi-search" data-pc-section="icon"></span>
          <span class="p-button-label" data-pc-section="label">View</span>
          <!---->
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </button>
        <button class="p-button p-component p-button-outlined p-button-secondary w-6 ml-2" type="button" aria-label="Follow" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
          <span class="p-button-icon p-button-icon-left pi pi-user-plus" data-pc-section="icon"></span>
          <span class="p-button-label" data-pc-section="label">Follow</span>
          <!---->
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </button>
      </div>
    </div>
  </div>
</div>
</section>
</template>
<style>
.custom-shadow-2 {
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 5px 10px 0 rgba(41,61,102,.2);
    border: 1px solid #e1e8f5;
    padding: 24px 20px;
}
.flex.flex-column.md\:flex-row.gap-3.md\:align-items-center.mycolor.border-round-xl.p-3 {
    background-color: #FCAB2B;
}
.flex-1.flex.justify-content-center.align-items-center.bg-primary-400.shadow-1.p-3.border-round-md {
    background-color: #000000 !important;
    color: white;
}
</style>