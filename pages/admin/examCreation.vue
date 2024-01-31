<template>
    <NuxtLayout name="dashboard">
        <div class="block-content container mb-4">
           <div class="">
           <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
               <div class="font-bold text-5xl text-900 mb-5">Exam Creation</div>
               <!--table will come heres-->
               <div class="surface-card p-4  border-round">
                <div class="grid formgrid p-fluid">

                    <div class="field mb-4 col-12">
                    <label for="nickname2" class="font-medium text-900">Subject</label>
                    <DropDown  optionLabel="name" placeholder="Select Subject" class="w-full md:w-14rem" />
                    </div>
                    <div class="field mb-4 col-12">
                    <label for="nickname2" class="font-medium text-900">Test Time</label>
                    <InputGroup class="mb-4">
                        <InputGroupAddon>
                            Hours
                        </InputGroupAddon>
                        <InputNumber v-model="hours" placeholder="Enter Number of Hours" :useGrouping="false" :min="0" />
                    </InputGroup>
                    <InputGroup>
                        <InputGroupAddon>Minutes</InputGroupAddon>
                        <InputNumber v-model="minutes" placeholder="Enter Number of Minutes" :min="0" :max="59" />
                    </InputGroup>
                    
                    </div>
                    <div class="mb-4 col-12">
                        <Button @click="createQuestionModal = true" class="mb-5" label="Create Question" icon="pi pi-plus" />
                    </div>
                    </div>
                </div>

           </div>
           </div>
           <!---->
       </div>
       <Dialog v-model:visible="createQuestionModal" maximizable modal header="Create Question" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <div class="grid formgrid p-fluid">
                    <div class="field mb-4 col-12">
                    <label for="nickname2" class="font-medium text-900">Question</label>
                    <Editor v-model="question" editorStyle="height: 200px"/>
                    </div>
                    <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
                    <div class="field mb-4 col-12 md:col-6">
                    <label for="bio2" class="font-medium text-900">Question Type</label>
                    <SelectButton v-model="question_type" :options="question_types" aria-labelledby="single" />
                    </div>
                    
                    <div v-if="question_type === 'MultiChoice'" class="field mb-4 col-12 md:col-6">
                    <label for="city2" class="font-medium text-900">Set Up Options</label>
                    <Chips :max="4" v-model="multichoice_options" :allowDuplicate="false">
                        <template #chip="slotProps">
                            <div>
                                <span><span class="innercircle">{{options[multichoice_options.indexOf(slotProps.value)]}}</span> {{slotProps.value}} </span>
                            </div>
                        </template>
                    </Chips>
                    </div>
                    <div v-if="question_type === 'MultiChoice'" class="field mb-4 col-12 md:col-6">
                    <label for="state2" class="font-medium text-900">Required Answer</label>
                    <ListBox v-model="multichoice_answer" :options="multichoice_options" optionLabel=""  style="width:100%" />
                    </div>
                    
                    <div v-if="question_type === 'Yes/No'" class="field mb-4 col-12">
                    <label for="website2" class="font-medium text-900">Required Answer</label>
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">Required Answer</span>
                        <ToggleButton v-model="boolean_answer" onIcon="pi pi-check" offIcon="pi pi-times" class="w-full sm:w-10rem" aria-label="Confirmation" />
                    </div>
                    </div>
                    <div class="mb-4 col-12">
                        <Button @click="createQuestionaire()" class="mb-5" label="Add Question" icon="pi pi-plus" />
                    </div>
                    
                    <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
                    
                </div>
        </Dialog>
    </NuxtLayout>
 
</template>
<script setup lang="ts">
    import {useRecruitmentStore} from "~/stores/recruitment"
    import { storeToRefs } from "pinia";
    import Swal from 'sweetalert2';
    import { useToast } from 'primevue/usetoast';

    definePageMeta({
        middleware: "auth"
    });
    const toast = useToast();
    const recruitmentStore = useRecruitmentStore();
    const displayResults = ref(false);
    const createQuestionModal = ref(false);
    const number_of_questions = storeToRefs(recruitmentStore).number_of_questions;
    const number_of_passed_questions = storeToRefs(recruitmentStore).number_of_passed_questions;
    const number_of_unstructured_questions = storeToRefs(recruitmentStore).number_of_unstructured_questions
    const createExamModal = ref(false)
    const displayQuestionaire = ref(false);
    const hours = ref();
    const minutes = ref();
    const displayApplication = ref(false);
    const displayQuestionsList = ref(false);
    const openings = storeToRefs(recruitmentStore).jobOpenings;
    const employees = storeToRefs(recruitmentStore).employeeData
    const selectedOpening = storeToRefs(recruitmentStore).selectedOpening
    const date1 = ref();
    const items = ref([
    {
        label: 'Mark As Best Fit',
        icon: 'pi pi-angle-double-up',
        command: async () => {
            let status = "BestFit"
        }
    },
    {
        label: 'Mark As Not Fit',
        icon: 'pi pi-angle-double-down',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
        }
    },
    {
        label: 'Mark As Moderate',
        icon: 'pi pi-angle-double-right',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
        }
    }
]);
    const postId = storeToRefs(recruitmentStore).postId
    const question_type = storeToRefs(recruitmentStore).question_type
    const question_types = storeToRefs(recruitmentStore).question_types
    const boolean_answer = storeToRefs(recruitmentStore).boolean_answer
    const multichoice_answer = storeToRefs(recruitmentStore).multichoice_answer
    const multichoice_options = storeToRefs(recruitmentStore).multichoice_options
    const options = storeToRefs(recruitmentStore).options
    const types = storeToRefs(recruitmentStore).types
    const is_editing = ref(false)
    const applicationsList = storeToRefs(recruitmentStore).applicationsList
    const question = storeToRefs(recruitmentStore).question
    const questionsList = storeToRefs(recruitmentStore).questionsList
    const score = storeToRefs(recruitmentStore).score
    const description = storeToRefs(recruitmentStore).description
    const department = storeToRefs(recruitmentStore).department
    const hiring_manager = storeToRefs(recruitmentStore).hiring_manager
    const deadline = storeToRefs(recruitmentStore).deadline
    const job_type = storeToRefs(recruitmentStore).job_type
    const experience = storeToRefs(recruitmentStore).experience
    const salary = storeToRefs(recruitmentStore).salary
    const location = storeToRefs(recruitmentStore).location
    const skills = storeToRefs(recruitmentStore).skills
    const vacancyList = storeToRefs(recruitmentStore).vacancyList
  
    onMounted(async ()=>{
    });

    const test = ({textValue}) => {
        question.value = textValue;
    }
    const openQuestionaire = (arg) => {
            displayQuestionaire.value = true;
    };
    const closeResults = () => {
            displayResults.value = false;
    };
    const openResume = async (arg: String) => {
        let file_url = "./public/uploads/" + arg;
        let pdfBuffer = await recruitmentStore.viewPDF(file_url);

        //Open the pdf in another tab
        const arr = new Uint8Array(pdfBuffer);
        const file = new Blob([arr], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
    };
    const openResults = async (applicantId: String,postindId:String) => {
        let results = await recruitmentStore.getResults(applicantId,postindId);
        displayResults.value = true
    };
    const openApplications = async (arg) => {
        let applications = await recruitmentStore.getApplications(arg);
        displayApplication.value = true;
    };
    const closeQuestionaire =  () => {
        displayQuestionaire.value = false;
    };
    const closeApplications =  () => {
        displayApplication.value = false;
    };
    const openQuestionaireList = async (arg) => {
        let questions = await recruitmentStore.getAllQuestions();
        let jobList = await recruitmentStore.getQuestionDetail();
        displayQuestionsList.value = true
       
    }
    const openQuestionEdit = async (arg) => {
        is_editing.value = true
        let question = await recruitmentStore.getSingleQuestion();
        
    }
    const closeQuestionaireList = () => {
        displayQuestionsList.value = false
        is_editing.value = false
    }
    const createPost =  async () => {
            let result =  await recruitmentStore.createJobPost();
            if(result.data.success){
                      Swal.fire({
                    title: 'Awesome',
                    text: 'Job Post Succesfully Created',
                    icon: 'success',
                    confirmButtonText: 'Done'})
                
                }else{
                   Swal.fire({
                    title: 'Error!',
                    text: result.data.message,
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                    })
                }
    };
    const setStatusAsBestFit =  async (applicantId,postingId,applicationId) => {
            let status = "BestFit"
            let result = await recruitmentStore.updateApplicantStatus(applicantId,postingId,applicationId,status);
            if(result.data.success){
                toast.add({ severity: 'success', summary: 'Success', detail: 'Application Set As Best Fit', life: 3000});
                let applications = await recruitmentStore.getApplications(postingId);
                }else{
                toast.add({ severity: 'warn', summary: 'Error', detail: result.data.message, life: 3000});
                }
    };
    const setStatusAsNotFit =  async (applicantId,postingId,applicationId) => {
            let status = "NotFit"
            let result = await recruitmentStore.updateApplicantStatus(applicantId,postingId,applicationId,status);
            if(result.data.success){

                toast.add({ severity: 'success', summary: 'Success', detail: 'Application Set As Not Fit', life: 3000});
                let applications = await recruitmentStore.getApplications(postingId);
                }else{
                toast.add({ severity: 'warn', summary: 'Error', detail: result.data.message, life: 3000});
                }
    };
    const setStatusAsModerateFit =  async (applicantId,postingId,applicationId) => {
            let status = "Moderate"
            let result = await recruitmentStore.updateApplicantStatus(applicantId,postingId,applicationId,status);
            if(result.data.success){

                toast.add({ severity: 'success', summary: 'Success', detail: 'Application Set As Moderate Fit', life: 3000});
                let applications = await recruitmentStore.getApplications(postingId);
                }else{
                toast.add({ severity: 'warn', summary: 'Error', detail: result.data.message, life: 3000});
                }
    };
    const updatePost =  async () => {
            let result =  await recruitmentStore.updateJobPost();
            if(result.data.success){
                      Swal.fire({
                    title: 'Awesome',
                    text: 'Job Post Succesfully Updated',
                    icon: 'success',
                    confirmButtonText: 'Done'})
                
                }else{
                   Swal.fire({
                    title: 'Error!',
                    text: result.data.message,
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                    })
                }
    };
    const createQuestionaire = async () =>{
            let result = await recruitmentStore.createQuestionaire();
          
             if(result.data.success){
                // const loanTypes = await setupStore.getAllLoanTypes();
                      Swal.fire({
                    title: 'Awesome',
                    text: 'Question Successfully Created',
                    icon: 'success',
                    confirmButtonText: 'Done'})

                question.value = "",
                question_type.value = "",
                multichoice_answer.value = "",
                boolean_answer.value = false,
                multichoice_options.value = [],
                score.value = ""

                }else{
                   Swal.fire({
                    title: 'Error!',
                    text: result.data.message,
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                    })
                }
        }
        const updateQuestionaire = async () =>{
            let result = await recruitmentStore.updateSingleQuestion();
          
             if(result.data.success){
                // const loanTypes = await setupStore.getAllLoanTypes();
                      Swal.fire({
                    title: 'Awesome',
                    text: 'Question Successfully Updated',
                    icon: 'success',
                    confirmButtonText: 'Done'})

                question.value = "",
                question_type.value = "",
                multichoice_answer.value = "",
                boolean_answer.value = false,
                multichoice_options.value = [],
                score.value = ""
                is_editing.value = false

                }else{
                   Swal.fire({
                    title: 'Error!',
                    text: result.data.message,
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                    })
                }
        }
</script>
<style>
  span.innercircle {
    border: black;
    padding: 5px ;
    /* border-radius: 32px; */
    width: 25px;
    background-color: black;
    height: 25px;
    color: white;
    text-align: center;
}
.p-listbox .p-listbox-list .p-listbox-item.p-highlight {
    color: #ffffff;
    background: #EFF6FF;
}
</style>
