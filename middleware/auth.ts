export default defineNuxtRouteMiddleware((to, from) => {
    console.log('to', to);
    console.log('from', from);
    
    // return navigateTo('/')
    // isAuthenticated() is an example method verifying if a user is authenticated
    // if (isAuthenticated() === false) {
    //     return navigateTo('/login')
    // }
})