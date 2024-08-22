Take GitHub to the command line

GitHub CLI brings GitHub to your terminal. Free and open source.

gh auth login
cd C:\Users\hunt_\OneDrive\문서\Github\websetupguide
git init

git add .
git commit -m "first commit"

Create the GitHub Repository via CLI:
Use the GitHub CLI to create a new repository on GitHub:

gh repo create websetupguide --public --source=. --remote=origin
git push -u origin main

git commit -m "Initial commit"


git branch -M main
git push -u origin main

git remote set-url origin git@github.com:josryan/websetupguide.git
git remote -v
origin  git@github.com:josryan/websetupguide.git (fetch)
origin  git@github.com:josryan/websetupguide.git (push)
git push -u origin main
