import { defineStore } from "pinia";
import Swal from "sweetalert2";
import axios from "axios";

export const useManagementStore = defineStore('management', {
  state: () => ({
   
    
  }),
  getters: {
  
  },
  actions: {
   async  addSubject(info: any){
      var data = JSON.stringify({
          "data": info,
      });
      var config = {
          method: 'post',
          url: '/management/addSubject',
          headers: { 
              'Content-Type': 'application/json'
          },
          data: data
      };
  
      const result: any = await axios(config).then(function (response) {
          return {
              data: response.data,
              success: true
            }
      })
      .catch(function (error) {
          console.log(error);
          return {
              success: false
            }
      });
      return result;
   },
   async  listSubjects(){
  
    var config = {
        method: 'post',
        url: '/management/listSubjects',
        headers: { 
            'Content-Type': 'application/json'
        }
    };

    const result: any = await axios(config).then(function (response) {
        return {
            data: response.data,
            success: true
          }
    })
    .catch(function (error) {
        console.log(error);
        return {
            success: false
          }
    });
    return result;
 },
  }
});

