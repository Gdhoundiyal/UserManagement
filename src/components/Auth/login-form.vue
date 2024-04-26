<script setup>
import { useloginStore } from '@/stores/login'
import { storeToRefs } from 'pinia'
import { RouterLink, useRouter } from 'vue-router'
import { useForm } from 'vee-validate';
import * as yup from 'yup'
import axios from 'axios';
import { BASE_URL } from '@/assets/assets';


// store //
const store = useloginStore()
const { Authenticate, isloading } = storeToRefs(store)
console.log('from store', Authenticate.value, isloading.value)

//Validation//
const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().min(6).required().matches(/[A-Z]/, 'Contain at least one uppercase letter')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Contain at least one special character')
});

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: schema,
});

const [username, usernameAttrs] = defineField('username');
const [password, passwordAttrs] = defineField('password');

// Route //
const route = useRouter()


// local variables //
// const name = localStorage.getItem("name")
// console.log("name", name)

const token = localStorage.getItem('accessToken');


// local Functions //

const onSubmit = handleSubmit(values => {
  
  store.$patch((state) => {
    state.isloading = true
  })

  axios.post(`${BASE_URL}login`, {
    username: values.username,
    password: values.password
  }).then(
    (response) => {
        console.log(response);
        if(response?.data?.access_token){
          store.updateDetails(values)
          localStorage.setItem('accessToken', response.data.access_token)
          store.$patch((state) => {
            state.isloading = false;
            state.Authenticate = true;
          });
          route.push("/home");
          alert("user log in Successfully");
        }else if(response?.data?.status== false){
          console.log(response)
          store.$patch((state) => {
            state.isloading = false;
          });
          alert(response?.data?.detail);
        }
      },
      (error) => {
        store.$patch((state) => {
          state.isloading = false;
        });
        console.log(error);
      }
  )

  // setTimeout(() => {
  //   store.$patch((state) => {
  //   state.isloading = false
  //   route.push("/home")
  // })
  // }, 4000);

});

// console.log(Values)
</script>

<template>

  <div class="Container">

    <div class="Right-cont">
      <div class="logindiv">
        <div>
          <div class="heading">
            <h3>Welcome Back !</h3>
            <p>Log in to continue with JustConnect</p>
          </div>
        </div>
      {{ token }}
        <form @submit="onSubmit">
          <div class="usernamediv">
            <label class="usernametext" for="name">Username</label>
            <input class="usernameinputbox" placeholder="Enter Username" type="text" v-model="username"
              v-bind="usernameAttrs" />
            <span class="errormsg">{{ errors.username }}</span>
          </div>
          <div class="userpassworddiv">
            <label class="userpasswordtext" for="password">Password</label>
            <input class="userpasswordinputbox" placeholder="Enter Password" type="password" v-model="password"
              v-bind="passwordAttrs" />
            <span class="errormsg">{{ errors.password }}</span>
          </div>
          <div class="Loginbtndiv">
            <button v-if="isloading" class="loginbtn btnspinner">
              <i class="pi pi-spin pi-spinner-dotted"></i>
            </button>
            <button v-else class="loginbtn">login
            </button>
          </div>
          <div class="Signinwithdiv">
            <div class="leftLine"></div>
            <div class="signinwithtext">Sign in with</div>
            <div class="rightLine"></div>
          </div>
          <div class="socialicons">
            <div class="piDiv">
              <i class="pi pi-facebook"></i>
            </div>
            <div class="piDiv">
              <i class="pi pi-twitter"></i>
            </div>
            <div class="piDiv">
              <i class="pi pi-google"></i>
            </div>
          </div>
        </form>
        <div class="Registerdiv">
          <p class="Registercontent">
            Don't have an account ? <RouterLink to="/signup">Sign Up</RouterLink>
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* Overall container */
.Container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #777;
}


/* Right container */
.Right-cont {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55vw;
  padding: 20px;
  background-color: #888;
  border-radius: 10px;
  padding: 30px;
}

.logindiv {
  width: 35vw;
  padding: 30px;
  background-color: #888;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

}

.heading {
  text-align: center;
}

.heading h3 {
  font-size: 29px;
  margin: 0 0 10px 0;
}

.heading p {

  font-size: 20px;
  margin: 20px 0;
}

.usernamediv,
.userpassworddiv,
.RememberMediv,
.Loginbtndiv {
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
}

.userpassworddiv {
  padding-bottom: 10px;
}

.usernametext,
.userpasswordtext {
  padding-bottom: 10px;
}

.usernameinputbox,
.userpasswordinputbox {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.errormsg {
  color: darkred;
  margin: 7px 0px 5px 5px;
}

.Remembercheckbox {
  margin-right: 10px;
}

.loginbtn {
  width: 100%;
  padding: 9px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btnspinner {
  padding: 5px;
}

.pi-spin {
  font-size: 16px;
  padding: 5px;
  color: white;
}

.Signinwithdiv {
  display: flex;
  align-items: center;
  margin: 15px 0;
  padding-top: 7px;
}

.leftLine,
.rightLine {
  flex: 1;
  height: 1px;
  background-color: #3f3b3b;
}

.signinwithtext {
  margin: 0 10px;
  text-transform: uppercase;
  font-size: 14px;
}

.piDiv {
  width: 5vw;
  border: 1px solid black;
  border-radius: 4px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #898e8e;
  padding-top: 7px;

}

.socialicons {
  display: flex;
  justify-content: space-evenly;
  padding-top: 7px;
}

.Registerdiv {
  text-align: center;
}

.Registercontent {
  text-align: center;
  font-size: 16px;
  padding-top: 15px;
  color: black
}

/* Media Query for responsiveness */
@media (max-width: 768px) {}
</style>
