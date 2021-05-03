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
git push --set-upstream origin este_fk_branch
```

If tracking is already set up:
```
git push
```

### Pull Requests
Once you are ready to merge your changes you should create a pull request.
You can [do this through the command line](https://git-scm.com/docs/git-request-pull) using:
```
git request-pull [-p] <start> <url> [<end>]
```
But its easier to use the github online UI:
1. [Go to AlgoWiz Repo](https://github.com/aadijain725/AlgoWiz)
2. Select the 'Pull requests' tab at the top of the page
3. Select 'New pull request'
4. Select the base branch. base refers to the branch you are merging into.
This will likely be the branch you first split off from. 'dev' in our 
previous examples. 
5. Select the target (or compare) branch. This should be your new feature 
branch to merge. 
6. Select 'Compare & pull request' Add a title and summary for the new feature, bug fix, or documentation added. If there are any merge conflicts you should resolve them now. 

### Final Notes
Thats it, you did it! Your pull request will have to pass the CI pipeline
and have at least 1 passing review before it can be merged! You can visit 
the pull request tab to see progress made on your pull request. 

Your reviewer may request some changes before they allow you to merge 
your code. If this occurs simply leave the pull request open and follow
the same steps outlined above. Go to your local repository, checkout your
feature branch and make the requested changes, track them, commit, 
and push. As long as it is open your pull request will reflect any new 
changes you push. No need to create a new one!

## AlgoWiz git Policies

* **DO NOT** attempt push or merge directly into the `main` branch

* If you are only changing documentation, such as weekly reports etc. 
you can make the changes directly to the `doc` branch as it does not 
require a code review. **DO NOT** push **ANYTHING** to the `doc` branch 
except for .md files or this policy may have to change. 

* If you are making code changes create a pull request to the `dev` branch.

* `dev` & `main` branchs require all CI tests to pass and at least 1 passing 
review before any changes are made.

* In most cases select the 'Squash and merge' option in a pull request. 
This helps keep the git history clean. 

* Unless you plan to make further code changes it is best to delete feature branches once merged.

* Feature branches should use the following naming convetion:
userAlias_feature_anyOtherDetails