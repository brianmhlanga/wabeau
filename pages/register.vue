<template>
    <NuxtLayout name="default">
        <div class="block-content">
        <div class="">
            <div class="flex">
                <div class="surface-section w-full md:w-6 p-6 md:p-8" style="height: auto;">
                    <div class="mb-5">
                        <img src="/images/logo.png" alt="Image" height="100" class="mb-3">
                        <div class="text-900 text-3xl font-medium mb-3">Welcome To Wabeau</div>
                        <span class="text-600 font-medium mr-2">Already have an account?</span>
                        <a @click="navigateTo('/login')" class="font-medium no-underline text-blue-500 cursor-pointer">Sign In!</a>
                    </div>
                    <div class="form-body">
										<div class="row g-3">
                                            <InlineMessage v-if="isValid === false && password" severity="warn">Password is weak. Include at least one uppercase, one lowercase, one numeric and minimum 8 Characters</InlineMessage>
                                            <InlineMessage v-if="password && confirm_password && password !== confirm_password" severity="warn">Password do not match</InlineMessage>
                                            <InlineMessage v-if="email && !validEmail" severity="warn">Invalid email address</InlineMessage>
                                            <div class="flex">
                                                <div class="col-6">
                                                    <label for="inputEmailAddress" class="form-label">First Name</label>
                                                    <InputText v-model="first_name" />
                                                </div>
                                                <div class="col-6">
                                                    <label for="inputEmailAddress" class="form-label">Last Name</label>
                                                    <InputText v-model="last_name" />
                                                </div>
                                            </div>
                                            <div class="flex">
                                                <div class="col-6">
                                                    <label for="inputEmailAddress" class="form-label">Gender</label>
                                                    <DropDown  v-model="selectedGender" :options="gender" placeholder="Select your gender" class="reg w-full md:w-12" />
                                                </div>
                                                <div class="col-6">
                                                    <label for="inputEmailAddress" class="form-label">Address</label>
                                                    <InputText v-model="address"/>
                                                </div>
                                            </div>
                                           <div class="flex">
                                            <div class="col-6">
												<label for="inputEmailAddress" class="form-label">Age</label>
                                                <InputNumber class="w-full" v-model="age" placeholder="Input Your Age " suffix=" Years"/>
											</div>
                                            <div class="col-6">
												<label for="inputEmailAddress" class="form-label">Phone Number</label>
                                                <InputText v-model="phone_number"/>
											</div>
                                           </div>
                                           <div class="flex">
                                                <div class="col-12">
                                                <label for="inputEmailAddress" class="form-label">Email</label>
                                                <InputText @keyup="checkEmailValidity()" v-model="email" placeholder="Email Address" />
                                                </div>
                                           </div>
                                           <div class="flex">
                                            <div class="col-6">
												<label for="inputEmailAddress" class="form-label">Continent</label>
                                                <DropDown @change="filterCountries()" v-model="selectedContinent" :options="continents" placeholder="Select a Continent" class="w-full md:w-12" />
            
											</div>
                                            <div class="col-6">
												<label for="inputEmailAddress" class="form-label">Country</label>
												<DropDown  v-model="selectedCountry" :options="filteredCountries" filter optionLabel="name" placeholder="Select a Country" class="w-full md:w-12">
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
                                           </div>
                                            
                                            <div class="flex">
                                                <div class="col-6">
												<label for="inputChoosePassword" class="form-label">Password</label>
												<div class="input-group" id="show_hide_password">
                                                    <InputText @keyup="validatePassword(password)" type="password" v-model="password" placeholder="Enter Password" />
												</div>
											</div>
                                            <div class="col-6">
												<label for="inputChoosePassword" class="form-label">Confirm Password</label>
												<div class="input-group" id="show_hide_password">
                                                    <InputText v-model="confirm_password" type="password" placeholder="Enter Password"/>
												</div>
											</div>
                                            </div>
											
											<div class="col-12">
												<div class="d-grid">
                                                    <button @click="register" class="p-button p-component w-full p-3 customColor" type="button" aria-label="Sign In" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
                                                        <span class="p-button-icon p-button-icon-left pi pi-user" data-pc-section="icon"></span>
                                                        <span class="p-button-label" data-pc-section="label">Sign Up</span>
                                                        <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                                                    </button>
													</div>
                                                    <div class="col-12">
												<div class="text-center ">
													<p class="mb-0">Already have an Account? <a href="/login">Sign in here</a>
													</p>
												</div>
											</div>
											</div>
											
										</div>
									</div>
                </div>

            <div class="hidden md:block w-6 bg-no-repeat bg-cover" style="background-image: url(&quot;/images/model.jpg&quot;);"></div>
            </div>
        </div>
        </div>
    </NuxtLayout>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useToast } from "primevue/usetoast";
import { useAuthStore } from "~/stores/auth";
const authStore = useAuthStore()
const toast = useToast()
import countriesData from "~/countries.json";
const selectedCountry = ref();
const first_name = ref()
const last_name = ref()
const date_of_birth = ref()
const school = ref()
const grade = ref()
const email = ref()
const phone = ref()
const password = ref()
const selectedGender = ref()
    const age = ref()
    const phone_number = ref()
    const address = ref()
    const confirm_password = ref()
    const continents = ref(["AFRICA","ASIA","EUROPE","NORTH_AMERICA","OCEANIA","SOUTH_AMERICA"])
    const selectedContinent = ref()
    const gender = ref(["MALE", "FEMALE"])
    const passwordRegex = ref(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/);
    const countries = ref(countriesData)
    const filteredCountries = ref()
    const validEmail = ref(true)
    const isValid = ref(false)
    const validatePassword = (password:any) => {
       isValid.value = passwordRegex.value.test(password);
       return isValid.value
    }
    const  checkEmailValidity =async () => {
    
    // Use a regular expression to check the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validEmail.value = emailRegex.test(email.value);

    }
    const filterCountries = () => {
        selectedCountry.value = null
        const filteredCountriess = countries.value.filter(country => country.continent === selectedContinent.value);

        // Create a new object with the filtered countries
        filteredCountries.value = filteredCountriess

        return filteredCountriess;
    }
    const register = async () => {
        let data = {
            first_name: first_name.value,
            last_name: last_name.value,
            gender: selectedGender.value,
            age: age.value,
            email: email.value,
            password: password.value,
            continent: selectedContinent.value,
            country: selectedCountry.value,
            address: address.value,
            phone_number: phone_number.value
        }
        let result = await authStore.register(data).then((data) => {

            if (data?.data?.success) {
                toast.add({severity:'info', summary: 'Success', detail: "Succesfully Registred", life: 6000});
                navigateTo('/login')
            }
            else {
                toast.add({severity:'warn', summary: 'Registration failed', detail: data?.data?.message, life: 6000});
            }
        })
    }
onMounted(() => {
  countries.value = countriesData;
});

const signUp = async () => {
    let data = {
       first_name: first_name.value,
       last_name: last_name.value,
       date_of_birth: date_of_birth.value,
       country: selectedCountry.value,
       school: school.value,
       grade: grade.value,
       email: email.value,
       phone: phone.value,
       password: password.value,
       confirm_password: confirm_password
    }
    let result = await authStore.register(data).then((data) => {
        console.log(data)
        if (data?.data?.success) {
            toast.add({severity:'info', summary: 'Success', detail: "Succesfully Registred", life: 6000});
            navigateTo('/login')
        }
        else {
                toast.add({severity:'warn', summary: 'Registration failed', detail: "Failed to Register", life: 6000});
        }
    })
}
</script>
<style>
.surface-section.w-full.md\:w-6.p-6.md\:p-8 {
    height: 100vh;
}
.p-input-icon-right > .p-inputtext {
    padding-right: 2.5rem;
    width: 100%;
    height: 50px;
}
.p-input-icon-right > .p-inputtext {
    padding-right: 2.5rem;
    width: 515px;
}
input.p-inputtext.p-component {
    width: 100% !important;
}
.p-input-icon-right > .p-inputtext {
    padding-right: 218px !important;
}
button.p-button.p-component.w-full.p-3.customColor {
    background-color: #FCAB2B;
    border-color: #FCAB2B;
}
</style>