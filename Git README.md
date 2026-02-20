# Git Commands and Notes

* git add . / git add -all / git add -A / git add *
> This tells git to keep track of all your files (you can use any one of the above commands to acheive this)

* git init
> Initializes a new Git (Version Control System (VCS)) repository in the current folder. It creates a hidden .git directory that starts tracking changes in the project.

* git status
> Shows the current state of your working directory and staging area. It tells you which files are modified, staged, or untracked.

* git config --global user.name "Kopano Sekonyela"
* git config --global user.email kopanodrkk@icloud.com
* git config --global init.default branch main

* git add index.html 
> git add *Name of the file* will tell git to keep track of this file. But it stays in staging until you commit these changes

* git rm --cached index.html
> git rm --cached *Name of the file* will tell git to stop tracking said file

* git commit -m "first commit"
> Saves the staged changes into the repository history with a message. Each commit acts as a snapshot of your project at that point in time.

* git branch -M main
> Creates, lists, or switches between branches. Branches allow you to work on features or fixes without affecting the main codebase.

* git remote add origin 'link to the repository'
> Links your local repository to a remote repository (usually on GitHub, GitLab, or Bitbucket). origin is the default name given to that remote connection.

* git push -u origin main
> Uploads your committed changes from your local repository to the remote repository. This makes your updates available to others or to backup online.

* .gitignore 
> This tells git to ignore all files listed in the *.gitignore* file  
> Good for ignoring sensitave data such as passwords  
> Documentation: <https://github.com/github/gitignore>

### Initial Git command at the beginning of a project

> git init  
git add *  
git commit -m "first commit"   
git branch -M main  
git remote add origin https://github.com/saoxygen/Dating-App-for-Devs.git  
git push -u origin main

### Second Git command for exist project

> git init  
 git add *  
 git commit -m "second commit"  
 git branch -M main  
 git push -u origin main