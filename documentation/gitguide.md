# Git Guide
Want to start contributing but lost on how to start?
You may want to visit this guide on 
[GitHub flow](https://guides.github.com/introduction/flow/) first. 
Read on for our git tutorial and policies. 

## How to contribute using git
We use a [centralized workflow](https://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows)
 in this repository

### Clone the AlgoWiz Repository
If you do not have a local version yet, make a clone...

Using HTTPS:
```
git clone https://github.com/aadijain725/AlgoWiz.git
```

Using SSH:  
```
git clone git@github.com:aadijain725/AlgoWiz.git
```

### Make a new feature branch
Once you have a local version of the repository you can begin 
making changes on a your own branch.

1. Make sure you are in your local AlgoWiz directory
```
cd AlgoWiz
```

2. Make sure your local repo is up to date 
```
git pull
``` 

3. For code changes you probably want to work off of the **dev** branch
```
git checkout dev
```

4. Create and checkout a new local branch
```
git checkout -b <myUserName_myBranchName>
```
Note: Its a good idea to include your name or alias when naming your branch.

Begin coding your new feature!

### Commiting Changes
You will want to periodically save your work. 

1. View any local changes 
```
git status
```
2. Add your changes to the next commit
```
git add <myExampleFile.ext>
```
Note: Try to avoid using:
```
git add .
```
There are often extra files or build artifacts that we do not want to track.
Try to keep the repo history clean!
3. Commit any changes
```
git commit -m <"My example commit message">
```
Note: You may also choose to commit without the -m flag.
This will open a command line text editor where you may make a more verbose 
commit message. 

### Push Changes
Ready to make your changes public? Great!  

If this is your first push:
```
git push -







## AlgoWiz git Policies