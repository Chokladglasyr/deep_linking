# Deferred deep linking solution
   
### Assignment:
You will build an Express.js server that displays a simple landing page with a registration form.
When a user registers, the system should check for campaign,
influencer, or source metadata. If such information exists, it should be saved along with the user's
account. The solution should also be able to preserve and reuse this information even if the user first visited the page with tracking data and then returns without it—for example, in a different browser or in a private window.

### Our solution:
We will fetch the users ip, save it with an ID for the influencer/campaign/source. When a user goes to the website in a different window, it will fetch the ip again, try to match it to an existing. If a match is found it will connect the fetched ID to the users account. This way the organisation can track which influencer/campaign/source they found the site through.

## BACKEND

### Deployed URL:
https://deep-linking-psi.vercel.app/

### Endpoints:
GET '/'   
_returns registration form_

POST '/signup'  
_creates user account_

### Response:
- ```message```: A message with new user created  
    + ```_id:```: id for user  
    + ```name```: name for user  
    + ```email```: email for user  
    + ```refId```: id for influencer/campaign
    + ```source```: source used

#### Example:
```
{
    message: "New user registered",
        user: {
            "_id": "689b0a279e34a7d4303d5223",
            "name": "Ida",
            "email": "ida@ida.com",
            "refId": "sara",
            "source": "instagram"
        }
}
```

### Status codes:
```400 Bad request```: Malformed or missing parameters  
```201 Created```: Created a user account 

## Getting started

+ ```git clone https://github.com/Chokladglasyr/deep_linking.git```
+ ```cp .env.example .env```
+ ```npm i && npm run dev```

## Team
<img src="https://avatars.githubusercontent.com/u/155150935?v=4" width="50" height="50">   <img src="https://avatars.githubusercontent.com/u/180587803?v=4" width="50" height="50">  <img src="https://avatars.githubusercontent.com/u/180533117?v=4" width="50" height="50">   
[Pedro](https://github.com/Lazcano007), [Ida](https://github.com/Chokladglasyr) and [Fredric](https://github.com/FredricLaestander)