# ITWS1100-S24-team13
## Team Members: Nidhi Padmanabhan, Ghea Chaw, Yu Qing Peng
## Our Idea: MindBodyU is a central wellness hub for college students.
* Wellness resources are often scattered across many platforms, but out platform covers multiple aspects of wellness (fitness, nutrition, mental health, & academics)​ and consolidates everything into one space, improving accessibility to these resources.
## Features of our Website
### About Us Page (AboutMe.html)
* The About Us page introduces our team members, our project's mission, and provides details about all of our services, along with quick links to our products.
### Academics Page (Academic.html)
#### Current Implementation
* The Academics page provides a comprehensive academic guide with study tips, time management tips & techniques, stress management tips, time management techniques, and links to helpful external resources, including planners/calendars which are beneficial for college students.
* This page also provides an assignment tracker which allows users to input classs they are currently taking, correlate them to a color, and add assignments for all classes into one visually appealing and easy-to-use table. The table allows you to organize assignments by type (homework,lab, project, presentation, quiz, midterm, final, etc. ), date, and class and sorts all assignments automatically by date. 
#### Future Plans
* In the future, we would like to add more functionality to our assignments tracker by providing users with notifications on the day prior to and the day when an assignment is due. 
### Fitness Page (Fitness.html)
#### Current Implementation
* The Fitness page provides a comprehensive fitness guide with the various health benefits of fitness and the different types of exercise, along with examples of each type.
* This page also provides a fitness planner which allows users to keep track of exercises to do, exercises in progress, and exercises finished with a user-friendly design so that users could easily keep track of their workouts.
* Another feauture on this page is a workout generator which was implemented using the API Ninjas Exercise API. 
    * Using JavaScript, we took user input through the workout generator (exercise type, muscle type, and difficulty level) and used form validation to ensure all input was valid.
    * Then, using Ajax, we concatenated the user input to generate the api call and fetch the response data in a JSON format. We parsed through this data in order to display 10 exercises to the user with equipment and instructions listed.
#### Future Plans
* In  the future, if possible, we would like to be able to filter out exercises according to equipment available to the user, making our workout generator more functional for college students. 
* We would also like to add a progress bar to the workout plan tracker so that users could be more motivated to complete their workouts.
### Mental Health Page (Mental.html)
#### Current Implementation
* The Mental Health page provides a comprehensive mental health guide with tips on how to actively take care of your mental health on a daily basis and ways to practice mindfullness. 
* This page also provides resources to meditation playlists, descriptions for useful apps, and links to hotlines and counseling resources.
### Nutrition (Nutrition.html)
#### Current Implementation
* The Nutrition page provides a comprehensive nutrition guide with information about each of the food groups, the daily reccomendation for each food group, and examples of foods you can eat from each group. 
* This page also provides a meal plan generator which was impleemnted using the Spoonful Meal Planner API. 
     * Using JavaScript, we took user input through the meal generator (target calories, diet, and excluded ingredients ) and used form validation to ensure all input was valid.
     * Then, using Ajax, we concatenated the user input to generate the api call and fetch the response data in a JSON format. We parsed through this data in order to display 3 meals for a day (breakfast, lunch, dinner) which fit the users nutritional goals. 
#### Future Plans
* In the future, we would like to implement a filter which allows users to input the equipment they would like to include/exclude (depending on available resources). This feature would make this meal planner more functional for college students, given their constaints in a college dorm.
### Calendar Page (Calendar.html)
#### Current Implementation
* Our Calendar page currently has only the UI implemented which is a weekly calendar with a section to add tasks for each day.
#### Future Plans
* In the future, we would like to expand on the functionality of this page in many ways. We would like to: 
    * fully implement the existing calendar using Javascript to enable users to input tasks for each day of the week
    * implement a habit tracker for each day which would allow users to keep track of healthy habits and motivate them to continue maintaining these habits.
    * add a progress bar for tasks and habits so users can visualize how much they have accomplished each week
    * provide notifications for users to let them know when tasks are comming up and how long they have held their habit streaks
### Login & Sign Up Pages (Login.html & SignUp.html)
#### Current Implementation
* Our Login & Sign Up pages currently have the UI and form validation using JavaScript implemented.
#### Future Plans
* In the future, we would like to implement these pages using PHP & MySQL so that users could save all of their workout plans, meal plans, assignments, and calendar tasks.
## Challenges
* Choosing a name: We used Generative AI to help us come up with a name for our application, as we struggled initially. It took us a few tries, but we finally found a name we really liked.
    * MindBodyU: The capitalized U signifies our emphasis on college students with our platform, as U is representative of Universities, as well as our focus on the user. 
* Formatting CSS: Formatting the CSS was initially a struggle, as we had long files with overlapping styles. However, over time, we began using a lot of comments in our CSS files and clear class/id names to help us navigate the styling process.
* API Implementation: Since API usage was something new for us, we struggled with it in the beginning. However, once we worked through our in-class labs with JSON & AJAX, we became more comfortable with integrating this feature.


Links to vm: 
https://pengy12rpi.eastus.cloudapp.azure.com/ITWS1100-S24-team13/index.html

username: pengy12
password: yuqing