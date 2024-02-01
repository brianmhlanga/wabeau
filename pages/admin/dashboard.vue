<template>
  <NuxtLayout name="dashboard">
    <div class="page-content">
      <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">
                 <div class="col">
         <div class="card radius-10 border-start border-0 border-4 border-info">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div>
                <p class="mb-0 text-secondary">Competitions</p>
                <h4 class="my-1 text-info">{{ stats?.competitions }}</h4>
                <p class="mb-0 font-13">Closed: {{ stats?.closed_competitions }}</p>
                
              </div>
              <div class="widgets-icons-2 rounded-circle bg-gradient-blues text-white ms-auto"><i class='bx bxs-cart'></i>
              </div>
            </div>
          </div>
         </div>
         </div>
         <div class="col">
        <div class="card radius-10 border-start border-0 border-4 border-danger">
           <div class="card-body">
             <div class="d-flex align-items-center">
               <div>
                 <p class="mb-0 text-secondary">Total Users</p>
                 <h4 class="my-1 text-danger">{{ stats?.users }}</h4>
               </div>
               <div class="widgets-icons-2 rounded-circle bg-gradient-burning text-white ms-auto"><i class='bx bxs-wallet'></i>
               </div>
             </div>
           </div>
        </div>
        </div>
        <div class="col">
        <div class="card radius-10 border-start border-0 border-4 border-success">
           <div class="card-body">
             <div class="d-flex align-items-center">
               <div>
                 <p class="mb-0 text-secondary">Total Likes</p>
                 <h4 class="my-1 text-success">{{stats?.likes}}</h4>
               </div>
               <div class="widgets-icons-2 rounded-circle bg-gradient-ohhappiness text-white ms-auto"><i class='bx bxs-bar-chart-alt-2' ></i>
               </div>
             </div>
           </div>
        </div>
        </div>
        <div class="col">
        <div class="card radius-10 border-start border-0 border-4 border-warning">
           <div class="card-body">
             <div class="d-flex align-items-center">
               <div>
                 <p class="mb-0 text-secondary">Total Votes</p>
                 <h4 class="my-1 text-warning">{{stats?.votes}}</h4>
               </div>
               <div class="widgets-icons-2 rounded-circle bg-gradient-orange text-white ms-auto"><i class='bx bxs-group'></i>
               </div>
             </div>
           </div>
        </div>
        </div> 
      </div><!--end row-->

      <!--end row-->

       <div class="card radius-10">
        <div class="card-header">
          <div>
              <h6 class="mb-0">Recent Registrations</h6>
            </div>
          <div class="d-flex align-items-center">
            
            <DataTable :value="users" tableStyle="min-width: 50rem">
            <Column header="Full Name">
              <template #body="slotProps">
                {{ slotProps.data.first_name }} {{ slotProps.data.last_name }}
              </template>
            </Column>
            <Column field="price" header="Phone Number">
              <template #body="slotProps">
                {{ slotProps.data.phone_number }}
              </template>
            </Column>
            <Column field="price" header="Gender">
              <template #body="slotProps">
                {{ slotProps.data.gender }}
              </template>
            </Column>
            <Column field="price" header="Age">
              <template #body="slotProps">
                {{ slotProps.data.age }}
              </template>
            </Column>
            <Column field="price" header="Gender">
              <template #body="slotProps">
                {{ slotProps.data.gender }}
              </template>
            </Column>
            <Column field="price" header="Email Address">
              <template #body="slotProps">
                {{slotProps.data.email }}
              </template>
            </Column>
            <Column field="rating" header="Country">
              <template #body="slotProps">
                {{slotProps.data.country?.name }}
              </template>
            </Column>
            <Column field="rating" header="Continent">
              <template #body="slotProps">
                {{slotProps.data.continent }}
              </template>
            </Column>
            <Column field="rating" header="Role">
              <template #body="slotProps">
                {{slotProps.data.role }}
              </template>
            </Column>
            <Column field="rating" header="Date Registered">
              <template #body="slotProps">
                {{ slotProps?.data?.date_created ? dateFormatter(slotProps?.data?.date_created) : "NOT SET" }}
              </template>
            </Column>
            <!-- <Column header="Actions">
              <template #body="slotProps">
                <SplitButton
                  icon="pi pi-ellipsis-v"
                  :model="[
                    { label: 'Change Level', icon: 'pi pi-fw pi-arrow-up', command: () => changeLevel(slotProps.data?.id) },
                    { label: 'View Participants', icon: 'pi pi-fw pi-user', command: () => viewParticipants(slotProps.data?.id) }
                  ]"
                ></SplitButton>
              </template>
            </Column> -->
          </DataTable>
          </div>
        </div>
                    
        </div>

    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useToast } from "primevue/usetoast";
  import { useAuthStore } from "~/stores/auth";
  import { useBackOfficeStore } from "~/stores/backoffice";
  // definePageMeta({
  //     middleware: ["auth"]
  // });
  const authStore = useAuthStore()
  const backofficeStore = useBackOfficeStore()
  const resetDialog = ref(false)
  const toast = useToast();
  const isLoading = ref(false);
  const name = ref();
  const description = ref();
  const rooms = ref();
  const image_url = ref();
  const price = ref();
  const owner = storeToRefs(authStore).user_id;
  const properties = ref()
  const stats = ref()
const users = ref()
  const formatCurrency = (value: any) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'ZAR' });
  };
  const dateFormatter = (dateString: any) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
      });
  }

  onMounted( async () => {
      let data = {
          id: owner.value
      }
  let result = await backofficeStore.statistics().then((data) => {

    console.log("dataaa",data)
    stats.value = data?.data
  })
  let recent = await backofficeStore.users().then((data) => {
    console.log("users", data)
    users.value = data?.data?.users
  })
  })
</script>

<style>

img.logo {
  width: 150px !important;
  height: auto !important;
  margin: auto !important;
}
.brand-logo {
  text-align: center;
}
</style>