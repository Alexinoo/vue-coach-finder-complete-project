<template>
      <section>
            <base-card>
                  <h2>Register as a coach now</h2>
                  <coach-form @save-data="saveData"></coach-form>
            </base-card>
      </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {

      components : {
            CoachForm,
      },    
      methods : {

            saveData(data){
                  this.$store.dispatch('coaches/registerCoach',data)

                  // Redirect to coaches
                 // this.$router.push('/coaches')
                  //Diff with .push - We can't go back to the page we came from thereafter
                  //And we don't want to go back once the form is submitted
                  this.$router.replace('/coaches')
            }
      }
}
</script>