--SET-UP INSTRUCTIONS
    --Setup npm server on port 5000
    --create dbms in postico (instructions in database.sql)

# weekend_challenge_3
-Daniel

BASE MODE

Here are the specific components for the challenge:

-Create a front end experience that allows a user to create a task.
-When the task is created, it should be stored inside of a database (SQL)
-Whenever a task is created the front end should refresh to show all tasks that need to be completed.
-Each task should have an option to 'Complete' or 'Delete'.
-When a task is complete, its visual representation should change on the front end (for example, the background of the task container could change from gray to green, as well as the complete option 'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete)
-Whether or not a task is complete should also be stored in the database.
-Deleting a task should remove it both from the Front End as well as the Database.
-Make sure that you also show us your best styling chops. Explore icons, fonts, libraries. Really work your CSS muscles.

We would recommend you spend some time thinking about how to approach this problem. Think through all the logic that will be needed prior to writing any code. Take your time, relax, remember that impostor syndrome is real, and that you are capable of knocking this out of the park!

Additionally, please include some way to recreate your initial database schema. This can be a database.sql file with CREATE TABLE statements or you can create your schema automatically when your app loads.

HARD MODE

Create a table of categories and allow Tasks to be assigned a single (1) category. This creates a one-to-many relationship (many tasks can have one category). You will need to add in joins in order to display and use this new data!
In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task.
PRO MODE

In no particular order:

Publish your app to Heroku.
Adjust the logic so that completed tasks are brought to the bottom of the page, where the remaining tasks left to complete are brought to the top of the list.
Add a due date to your tasks and put the items which need to be completed next at the top of the page. Highlight overdue tasks in red.
Add any additional features that you think would be useful or interesting!