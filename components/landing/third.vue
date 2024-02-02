<template>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8 ">
    <div class="font-bold text-900 text-3xl mb-3 text-center">Participants</div>
    <div class="flex flex-column md:flex-row gap-3 md:align-items-center mycolor border-round-xl p-3">
  <div class="flex-1 gap-3 flex flex-column sm:flex-row">
    <div class="flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md">
      <div class="text-center">
        <div class="text-sm font-semibold mb-2">AFRICA</div>
        <span class="font-semibold">{{ continent_stats?.africa }}</span>
      </div>
    </div>
    <div class="flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md">
      <div class="text-center">
        <div class="text-sm font-semibold mb-2">EUROPE</div>
        <span class="font-semibold">{{  continent_stats?.europe }}</span>
      </div>
    </div>
    <div class="flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md">
      <div class="text-center">
        <div class="text-sm font-semibold mb-2">ASIA</div>
        <span class="font-semibold">{{ continent_stats?.asia }}</span>
      </div>
    </div>
    <div class="flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md">
      <div class="text-center">
        <div class="text-sm font-semibold mb-2">SOUTH AMERICA</div>
        <span class="font-semibold">{{ continent_stats?.south_america }}</span>
      </div>
    </div>
    <div class="flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md">
      <div class="text-center">
        <div class="text-sm font-semibold mb-2">NORTH AMERICA</div>
        <span class="font-semibold">{{ continent_stats?.north_america }}</span>
      </div>
    </div>
    <div class="flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md">
      <div class="text-center">
        <div class="text-sm font-semibold mb-2">AUSTRALIA</div>
        <span class="font-semibold">{{ continent_stats?.australia }}</span>
      </div>
    </div>
    <div class="flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md">
      <div class="text-center">
        <div class="text-sm font-semibold mb-2">ARNTACTICA</div>
        <span class="font-semibold">{{ continent_stats?.arntactica }}</span>
      </div>
    </div>
  </div>
</div>
    </div>
    <section class="surface-section px-4 py-8 md:px-6 lg:px-8">
  <header class="flex w-full justify-content-between align-items-center border-bottom-1 surface-border pb-5">
    <div>
      <h2 id="competitions" class="mt-0 mb-3 font-medium text-2xl text-900">Competitions</h2>
      <p class="mt-0 mb-0 font-normal text-base text-500"> Vote for your favorite models and witness the crowning of the next runway sensation. Strut, vote, and celebrate fashion democracy at its finest! </p>
    </div>
    <button class="p-button p-component p-ripple p-button-outlined ngt" type="button" aria-label="Report Issue" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
      <!---->
      <span class="p-button-label" data-pc-section="label">Report Issue</span>
      <!---->
      <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
      <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
    </button>
  </header>
  <section class="flex flex-wrap flex-column md:flex-row md:align-items-center gap-2 py-5">
    <DropDown @change="filterCompetitions" v-model="current_status" :options="statuses" placeholder="Select Competition Status" class="w-full md:w-14rem" />
 
     <span class="p-calendar p-component p-inputwrapper p-inputwrapper-filled w-full md:w-15rem" data-pc-name="calendar" data-pc-section="root" readonlyinput="">
      <input @keyup="filterCompetitionsText"  v-model="searchText" id="range" placeholder="Search With Name" type="text" role="combobox" class="p-inputtext p-component" autocomplete="off" aria-autocomplete="none" aria-haspopup="dialog" aria-expanded="false" aria-controls="pv_id_189_panel" inputmode="none" tabindex="0" data-pc-section="input">
      <!---->
    </span>
  </section>
  <div class="grid">
  <div v-for="item in competitions" class="col-12 md:col-6 xl:col-4 p-3">
    <div class="surface-card shadow-2 border-round p-4">
      <div class="flex border-bottom-1 surface-border pb-4">
         <div class="flex flex-column align-items-start">
          <span class="text-xl text-900 font-medium mb-1">{{ item?.competition_name }}</span>
          <span class="text-600 font-medium mb-2">{{ item?.competition_description ? item?.competition_description : "Participate in this competition and stand a chance at glory" }}</span>
          <span class="bg-blue-50 text-blue-400 border-round inline-flex py-1 px-2 text-sm">{{ dateFormatter(item?.periods[0].period_start_date) }} to {{ dateFormatter(item?.periods[2].period_end_date) }}</span>
        </div>
      </div>
      <div class="flex justify-content-between pt-4">
        <button class="p-button p-component p-button-outlined p-button-secondary w-6 mr-2 dkl" type="button" aria-label="View" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
          <span class="p-button-icon p-button-icon-left pi pi-search" data-pc-section="icon"></span>
          <span class="p-button-label" data-pc-section="label">View</span>
          <!---->
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </button>
        <button v-if="item?.status === 'OPEN'" @click="goVote(item?.id)" class="p-button p-component p-button-outlined p-button-secondary w-6 ml-2 fdjl" type="button" aria-label="Follow" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
          <span class="p-button-icon p-button-icon-left pi pi-user-plus" data-pc-section="icon"></span>
          <span class="p-button-label" data-pc-section="label">Vote Now</span>
          <!---->
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </button>
        <button v-else-if="item?.status === 'OPEN_TO_REGISTRATION'" @click="goRegister(item?.id)" class="p-button p-component p-button-outlined p-button-secondary w-6 ml-2 ghf" type="button" aria-label="Follow" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
          <span class="p-button-icon p-button-icon-left pi pi-user-plus" data-pc-section="icon"></span>
          <span class="p-button-label" data-pc-section="label">Register As Model</span>
          <!---->
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </button>
        <button v-else @click="goRegister(item?.id)" class="p-button p-component p-button-outlined p-button-secondary w-6 ml-2 ghf" type="button" aria-label="Follow" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
          <span class="p-button-icon p-button-icon-left pi pi-user-plus" data-pc-section="icon"></span>
          <span class="p-button-label" data-pc-section="label">View Winner</span>
          <!---->
          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
        </button>
      </div>
    </div>
  </div>
 
</div>
</section>
</template>
<script lang="ts" setup>
  import { storeToRefs } from "pinia";
  import { useToast } from "primevue/usetoast";
  import { useAuthStore } from "~/stores/auth";
  import { useBackOfficeStore } from "~/stores/backoffice";
  const resetDialog = ref(false)
  const toast = useToast();
  const authStore = useAuthStore()
  const backofficeStore = useBackOfficeStore()
  const isLoading = ref(false);
  //@ts-ignore
  const { value: { first_name, last_name, profile,country, id,email }} = useCookie('user');
  const userId = ref(id)
  const emails = ref(email)
  const owner = storeToRefs(authStore).user_id
  const competitions = ref()
  const current_status = ref()
  const selectedCity = ref();
  const continent_stats = ref()
  const searchText = ref()
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
  const statuses = ref(["OPEN_TO_REGISTRATION","OPEN","CLOSED"])
  const filterCompetitionsText = async () => {
       await getCompetitions()
       let comps = competitions.value
       let typed = searchText.value
       let normalizedTypedText = typed.toLowerCase().trim()
       competitions.value = comps.filter((competition) => {
        return competition.competition_name.toLowerCase().includes(normalizedTypedText)
       })
  }
  const filterCompetitions = async () => {
     await getCompetitions()
    let comps = competitions.value
    let state = current_status.value
    competitions.value = comps.filter((competition) => {
      return competition.status === state
    })

  }
  const goVote = async (itemId:any) => {
    let data = {
      email: emails.value,
      competitionId: itemId
    }
   
    if (userId.value) {
     
        navigateTo(`/competitionVoting-${userId.value}-${itemId}`)
      
    }
    else {
      toast.add({ severity: 'info', summary: 'Sign In Required', detail: "Log In first", life: 5000 });
    }
    
  }
  const goRegister = async (itemId:any) => {
    let data = {
      email: emails.value,
      competitionId: itemId
    }
   
    if (userId.value) {
      let check = await backofficeStore.checkParticipation(data).then((data) => {
      console.log("my check",data.data.participant)

      if (data?.data?.participant?.id) {
        toast.add({ severity: 'info', summary: 'Already a participant', detail: "You are Already a participant", life: 5000 });
      } else {
        navigateTo(`/modelRegister-${userId.value}-${itemId}`)
      }
    })
      
    }
    else {
      toast.add({ severity: 'info', summary: 'Sign In Required', detail: "Log In first", life: 5000 });
    }
    
  }
  const getCompetitions = async () => {
    let data = {
            id: owner.value
        }
        let results = await backofficeStore.allCompetitions(data).then((datdd:any) => {
            competitions.value = datdd?.data?.competitions
          })
  }
  onMounted( async () => {
        let data = {
            id: owner.value
        }
        let results = await backofficeStore.allCompetitions(data).then((datdd:any) => {
            competitions.value = datdd?.data?.competitions
          })
        let statistics = await backofficeStore.statistics().then((response) => {
            console.log(response?.data,"my stats")
            continent_stats.value = response?.data
        })
    })
  const dateFormatter = (dateString: any) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
      });
  }
</script>
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
span.bg-blue-50.text-blue-400.border-round.inline-flex.py-1.px-2.text-sm {
    color: white !important;
    background-color: #fcab2b !important;
}
button.p-button.p-component.p-ripple.p-button-outlined.ngt {
    background-color: #A5CB3A;
    color: white;
}
.p-button-outlined.p-button-secondary.w-6.ml-2.fdjl {
    color: white;
    background-color: #A5CB3A;
}
.p-button-outlined.p-button-secondary.w-6.mr-2.dkl {
    background-color: black;
    color: white;
}
button.p-button.p-component.p-button-outlined.p-button-secondary.w-6.ml-2.ghf {
    background-color: #a5cb3a;
    color: white;
}
</style>