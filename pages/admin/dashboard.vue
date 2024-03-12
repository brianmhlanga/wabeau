<template>
  <NuxtLayout name="dashboard">
    <div class="page-content">
      <div class="p-5">
        <div class="grid">
  <div class="col-12 lg:col-6 xl:col-3">
    <div class="surface-card shadow-2 p-3 border-1 border-50 border-round">
      <div class="flex justify-content-between mb-3">
        <div>
          <span class="block text-500 font-medium mb-3">Competitions</span>
          <div class="text-900 font-medium text-xl">{{ stats?.competitions }}</div>
        </div>
        <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width: 2.5rem; height: 2.5rem;">
          <i class="pi pi-star text-blue-500 text-xl"></i>
        </div>
      </div>
      <span class="text-green-500 font-medium">{{ stats?.closed_competitions }} closed </span>
      <span class="text-500">since launch</span>
    </div>
  </div>
  <div class="col-12 lg:col-6 xl:col-3">
    <div class="surface-card shadow-2 p-3 border-1 border-50 border-round">
      <div class="flex justify-content-between mb-3">
        <div>
          <span class="block text-500 font-medium mb-3">Users</span>
          <div class="text-900 font-medium text-xl">{{ stats?.users }}</div>
        </div>
        <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width: 2.5rem; height: 2.5rem;">
          <i class="pi pi-user text-orange-500 text-xl"></i>
        </div>
      </div>
      <span class="text-green-500 font-medium">{{ stats?.users }} participation </span>
      <span class="text-500">profiles</span>
    </div>
  </div>
  <div class="col-12 lg:col-6 xl:col-3">
    <div class="surface-card shadow-2 p-3 border-1 border-50 border-round">
      <div class="flex justify-content-between mb-3">
        <div>
          <span class="block text-500 font-medium mb-3">Likes</span>
          <div class="text-900 font-medium text-xl">{{ stats?.likes }}</div>
        </div>
        <div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width: 2.5rem; height: 2.5rem;">
          <i class="pi pi-heart text-cyan-500 text-xl"></i>
        </div>
      </div>
      <span class="text-green-500 font-medium">10% </span>
      <span class="text-500">increase</span>
    </div>
  </div>
  <div class="col-12 lg:col-6 xl:col-3">
    <div class="surface-card shadow-2 p-3 border-1 border-50 border-round">
      <div class="flex justify-content-between mb-3">
        <div>
          <span class="block text-500 font-medium mb-3">Votes</span>
          <div class="text-900 font-medium text-xl">{{ stats?.votes }}</div>
        </div>
        <div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width: 2.5rem; height: 2.5rem;">
          <i class="pi pi-inbox text-purple-500 text-xl"></i>
        </div>
      </div>
      <span class="text-green-500 font-medium">85 </span>
      <span class="text-500">responded</span>
    </div>
  </div>
</div>
      </div>
       <div class="card radius-10">
        <div class="card-header">
          <div>
              <h6 class="mb-5">Recent Registrations</h6>
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
  definePageMeta({
        middleware: ["auth"]
    });
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