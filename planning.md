Project name: How Are You Feeling Today


Api Link:

Insult: https://evilinsult.com/
https://evilinsult.com/generate_insult.php

Example: "insult": "You're a failed abortion whose birth certificate is an apology from the condom factory."
 
Compliment: https://complimentr.com/api
*https://complimentr.com/
Example: "compliment": "i must say: you have a so bewitching soul"

Wireframe:
https://www.figma.com/community/file/1181646288116675823

Description:
A website that can either give you a compliment or humble you.

user stories:
1. User get on the website
2. user sees the welcome page 
3. User will also see navbar at the top of the screen with sections "Humble me", "Compliment me", "About", "HOTLINE". 
3. User sees two option buttons
    - one  gives you compliments 
    - second gives insults 
4. user clicks on "compliment me", which redirects them to compliment page
5. Compliment is generated. To generate another compliment, User clicks on "Compliment Me" button under the compliment.
6. user clicks on "Compliment me" prior compliment goes away and a random insult is generated
7. User clicks on "compliment me" 4 times, user will see message on screen appear that says "Humble yourself. You better watch yourself before you wreck yourself"
8. User clicks on "Humble Me" in the navbar, which redirects them to insult page
9. Insult is generated. To generate another insult, User clicks on "Humble Me" button under the insult.
10. user clicks on "Humble me" prior compliment goes away and a random insult is generated
11. User clicks on "Humble me" 4 times, user will see a message on screen appear that says "Be nice to yourself. Call peptoc hotline (707)998-8410 for life advice and encouraging messages. Or see hotlines for other resources"
     -"Other Resources" -> click redirects to HOTLINE page 
12. User clicks on About section on the navabr and it redirects them to an about page 
13. User will see a description of the app and a link to github
14. User clicks on HOTLINE section on navbar which redirects them to hotline page
15. User sees description of Peptoc, and links to different hotlines

Stretch:
1. Stretch Goal:"surpirse me" - Will give either a compliment or insult at random 
2. Have a meme pop up with every compliment or insult 


to creat react app 
apps - imports : react, compliments, insults, links, Routes/route
-2 async functions
conponents 
1. Compliments - imports: useState, useEffect, links, useParams 
    -props 
2. Insults - imports: useState, useEffect, link, useParams 
    -props 
3. About the app
4. Hotlines

