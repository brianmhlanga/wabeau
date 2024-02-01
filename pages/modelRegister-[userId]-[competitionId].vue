<template>
        <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
        <div class="text-900 font-medium text-xl mb-3">Model Registration for {{ competition?.competition_name }} </div>
        <p class="m-0 mb-4 p-0 text-600 line-height-3 mr-3">Some of this information will be used for competition display purposes</p>
        <div class="surface-card p-4 shadow-2 border-round">
            <div class="grid formgrid p-fluid">
            <div class="field mb-4 col-6">
                <label for="nickname2" class="font-medium text-900">First Name</label>
                <input v-model="first_name" class="p-inputtext p-component" data-pc-name="inputtext" data-pc-section="root" id="nickname2" type="text" disabled>
            </div>
            <div class="field mb-4 col-6">
                <label for="nickname2" class="font-medium text-900">Last Name</label>
                <input v-model="last_name" class="p-inputtext p-component" data-pc-name="inputtext" data-pc-section="root" id="nickname2" type="text" disabled>
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="email2" class="font-medium text-900">Email</label>
                <input v-model="email" class="p-inputtext p-component" data-pc-name="inputtext" data-pc-section="root" id="email2" type="text" disabled>
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="email2" class="font-medium text-900">Phone Number</label>
                <input v-model="phone_number" class="p-inputtext p-component" data-pc-name="inputtext" data-pc-section="root" id="email2" type="text" disabled>
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="country2" class="font-medium text-900">Gender</label>
                <DropDown  v-model="selectedGender" :options="gender" placeholder="Select your gender" class="w-full md:w-20rem" />
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="country2" class="font-medium text-900">Continent</label>
                <DropDown @change="filterCountries()" v-model="selectedContinent" :options="continents" placeholder="Select a Continent" class="w-full md:w-20rem" />
            </div>
      
            <div class="field mb-4 col-12 md:col-6">
                <label for="country2" class="font-medium text-900">Country</label>
                <DropDown  v-model="selectedCountry" :options="filteredCountries" filter optionLabel="name" placeholder="Select a Country" class="w-full md:w-20rem">
                    <template #value="slotProps">
                        <div v-if="slotProps.value" class="flex align-items-center">
                            <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />
                            <div>{{ slotProps.value.name }}</div>
                        </div>
                        <span v-else>
                            {{ slotProps.placeholder }}
                        </span>
                    </template>
                    <template #option="slotProps">
                        <div class="flex align-items-center">
                            <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
                            <div>{{ slotProps.option.name }}</div>
                        </div>
                    </template>
                </DropDown>
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="city2" class="font-medium text-900">Address</label>
                <input class="p-inputtext p-component" data-pc-name="inputtext" data-pc-section="root" id="city2" type="text">
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="city2" class="font-medium text-900">Sponsors</label>
                <small class="red">Use a comma or enter to Input a new sponsor</small>
                <Chips v-model="sponsors" separator=","  />
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="city2" class="font-medium text-900">Pictures</label>
                <FileUpload :auto="true" mode="basic" style="width: fit-content;" name="photo" url="/backoffice/upload" @upload="onAdvancedUpload($event)"  accept="image/*" :maxFileSize="5000000"/>
                <Carousel :value="uploaded_images" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
                    <template #item="slotProps">
                        <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
                            <div class="mb-3">
                                <img :src="`uploads/${slotProps.data.image_url}`" class="w-6 shadow-2" />
                            </div>
                        </div>
                    </template>
                </Carousel>
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div @click="RegisterAsModel()" class="col-12">
                <button class="p-button p-component w-auto mt-3" type="button" aria-label="Save Changes" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
                <!---->
                <span class="p-button-label" data-pc-section="label">Register</span>
                <!---->
                <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                </button>
            </div>
            </div>
        </div>
        </div>
  </template>
  
  <script setup lang="ts">
    import { storeToRefs } from "pinia";
    import { useToast } from "primevue/usetoast";
    import auth from "~/middleware/auth";
    import { useAuthStore } from "~/stores/auth";
    import { useBackOfficeStore } from "~/stores/backoffice";
    import countriesData from "~/countries.json";
    const toast = useToast();
    const authStore = useAuthStore()
    const backofficeStore = useBackOfficeStore()
    const isLoading = ref(false);
    const { params: { userId, competitionId } }: any = useRoute();
    const competitions = ref()
    const competition = ref()
    const user = ref()
    const selectedCountry = ref()
    const selectedContinent = ref()
    const selectedGender = ref()
    const filteredCountries = ref()
    const countries = ref(countriesData)
    const first_name = ref()
    const last_name = ref()
    const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);
    const email = ref()
    const phone_number = ref()
    const address = ref()
    const sponsors = ref()
    const continents = ref(["AFRICA","ASIA","EUROPE","NORTH_AMERICA","OCEANIA","SOUTH_AMERICA"])
    const gender = ref(["MALE", "FEMALE"])
    const uploaded_images = ref<any>([])

    const onAdvancedUpload = async (event:any) => {
        let {upload:{attachment_name},success} = await JSON.parse(event.xhr.response)
        if(success){
            toast.add({ severity: 'success', summary: 'Upload Success', detail: "Succesfully Uploaded Image", life: 5000 });
            let new_image:any = {
                image_url: attachment_name
            }
            console.log("adding new image")
            uploaded_images.value.push(new_image)
            console.log("new array is ",uploaded_images.value)
        }else {
            toast.add({ severity: 'warn', summary: 'Upload Failed', detail: "Failed to upload image", life: 5000 });
        }
    };

    const RegisterAsModel = async () => {
        let data = {
            first_name: first_name.value,
            last_name: last_name.value,
            email: email.value,
            phone_number: phone_number.value,
            competition_id: competitionId,
            gender: selectedGender.value,
            country: selectedCountry.value,
            continent: selectedContinent.value,
            sponsors: sponsors.value,
            pictures: uploaded_images.value
        }
        let result = await backofficeStore.addParticipant(data).then((data) => {

            if(data?.data?.success) {
                toast.add({ severity: 'success', summary: 'Register Success', detail: "Succesfully Registred", life: 5000 });
                navigateTo('/')
            }
            else {
                toast.add({ severity: 'warn', summary: 'Registration Failed', detail: "Registration succesful", life: 5000 });
            }

        })
    }

    const filterCountries = () => {
        selectedCountry.value = null
        const filteredCountriess = countries.value.filter(country => country.continent === selectedContinent.value);

        // Create a new object with the filtered countries
        filteredCountries.value = filteredCountriess

        return filteredCountriess;
    }
    
    onMounted( async () => {
        let result = await authStore.singleUser(userId).then((data:any) => {
            console.log("data",data.data.single)
           let user = data.data.single
            first_name.value = user.first_name,
            last_name.value = user.last_name,
            email.value = user.email,
            phone_number.value = user.phone_number,
            address.value = user.address
            
        })
        let results = await backofficeStore.singleCompetition(competitionId).then((data:any) => {
            console.log("data",data.data.single)
            competition.value =data.data?.single
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
  
  img.logo {
    width: 150px !important;
    height: auto !important;
    margin: auto !important;
  }
  .brand-logo {
    text-align: center;
  }
  .absolute.h-4rem.w-4rem.border-2.border-yellow-500.bg-gray-900.text-white.inline-flex.justify-content-center.align-items-center {
      font-size: 9px;
  }
  .absolute.h-6rem.w-5rem.border-2.border-yellow-500.bg-gray-900.text-white.inline-flex.justify-content-center.align-items-center {
      font-size: 10px;
      padding: 2px;
  }
  small.red {
    color: #f50808;
    font-size: small;
    font-style: italic;
    padding: 3px;
}
  </style>