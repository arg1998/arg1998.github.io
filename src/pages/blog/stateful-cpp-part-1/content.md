> [!info]
> ### _**TL; DR;**_
> We are trying to build a state manager in C++ to enable our program to track users actions and perform undo/redo operations when requested. 

# Introduction

Modern softwares, especially the ones with **G**raphical **U**ser **I**nterface (GUIs), incorporate a lot of features, many of which are unique to the types of problems they are trying to solve. However, one and often very important feature of most softwares is **state management**. Ultimately, a software (or a program in general sense) is nothing but a gigantic set of functions that transform one form of data to another upon user actions or other system events. Any software with even minimal complexity, has tons of states. For example, the logic for opening a pop-up window and asking user to select a theme is tracking two different states, conceptually speaking: Is the the pop-up window open and the value for chosen theme.  As a matter of fact, these two states corresponds to at least two variables within the code. 

Now if you go back to your favorite GUI applications, you can see (hopefully) that all of them have a method for tracking your actions inside the software . This "Action Tracking" mechanism is what allows you to tell the application to **Undo** what you have just done! The famous `Ctrl + Z` that reverts your actions in time! The opposite is **Redo** where you tell the program to basically, well, redo you actions. A state manager's job is to track such state changes in the program and store a snapshot of the software before you commit an action. And when you change your mind, the state manager will bring back the latest snapshot upt to a particular point in time or a certain number of actions. 


However, an important concept when dealing with application states, is the separation of logic states and action states. Although one could argue for a different form of state separation, but I would like to stick with this one mainly because of the nature of the software we will be working on in the next few articles. But what do these logic vs action state categories mean? 

#### Action States
Actions states are the type of data that a user directly and intentionally changes and expect the program to remember those decisions. I know this not a clear definitions, but lets work it through intuition. In the theme pop-up window, we present the user with a list of 100 themes in a combobox. Our lovely user is selecting various themes and seeing them applied to the application in real-time. So far the user has chosen 5 themes from the list, but they are not happy with their current selection. They kind of liked the third theme, or some theme in the middle but they forgot the name and it is a huge list to go through. This example perfectly captures the need for a state manager, tracking the user's choice for theme so when they change their mind, they can revert back the state of the combobox. We call the variable that tracks the selected theme an action state. All action states are tracked by a state manager 


#### Logic State
Logic states dictate and track the behavior of the software, but unlike action states, the state manager does not track their changes. In our previous example, when the user clicks a button to change the theme of the application, a pop-up window shows up on the screen. Whether to display this pop-up or not is tracked by a `bool` variable. Set it to `true` and the program will show the pop-up and set it to `false` to close it. By design, this type of state change does not need to be tracked by our state manager since we (and by certain extension, the user) don't want to undo/redo the opening and closing of a pop-up window behavior. The opening/closing behavior of the pop-up window is only achieved through real-time interactions and not recorded actions by a state manager! 


# Goals
I am developing this system as a part of my on-going passion project <a href="https://argosta.me/projects/#ezego" target="_blank">eZeGo</a>
Before we start implementing, lets discuss some of the goals and expected behavior I want from a state manager for my software. 
