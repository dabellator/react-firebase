# SHQ Git Guidelines
When working on this repo, here are the guidelines for working with git.


- Fork the repo
- Clone your forked repo locally
    ```
    git clone <forked repo url>
    ```
- Add the upstream repo to remote as `upstream`
    ```
    git remote add upstream <main repo url>
    ```
- Make a new branch to begin working on your feature
- When done, git add and commit your work
- Checkout master branch
- Fetch from upstream to see if there are any new updates
    ```
    git fetch upstream master
    ```
- If there are changes, merge with upstream/master, then merge master into your feature branch
- Resolve conflicts and commit if necessary
- Push commits to origin feature branch
- Make a pull request to the main repo master branch
- Be sure to fill in the user stories that your feature addresses
- Alert the code review team that a PR has been made
