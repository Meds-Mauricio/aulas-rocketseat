"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.usersInProvider=usersInProvider;var IProviders;(function(IProviders){IProviders["COGNITO"]="cognito";IProviders["LEGACY"]="legacy";IProviders["FACEBOOK"]="facebook";IProviders["APPLE"]="apple";IProviders["GOOGLE"]="google"})(IProviders||(IProviders={}));function usersInProvider(usersExists){var user=updateUserNextStep(usersExists,[IProviders.COGNITO,IProviders.LEGACY],"Password");if(!user){user=updateUserNextStep(usersExists,[IProviders.FACEBOOK,IProviders.GOOGLE,IProviders.APPLE],"SocialLoginAccount")}else{user.nextStep=user.emailConfirmed?user.nextStep:"UnverifiedAccount"}return user}function updateUserNextStep(usersExists,providerArray,nextStep){var user=filterUserByProviders(usersExists,providerArray);if(user){user.nextStep=nextStep;return user}}function filterUserByProviders(users,providers){var usersFilter=users.filter(function(user){return providers.find(function(el){return el==user.provider})}).sort(function(a,b){return providers.indexOf(a.provider)>providers.indexOf(b.provider)?1:-1});return usersFilter[0]}
//# sourceMappingURL=index.js.map