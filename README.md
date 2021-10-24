# React Component Library  

## Getting Started  
1. Clone this repository - `git clone git@github.com:riyasavant/dls.git`
2. `cd dls`
3. Run `yarn` to install dependencies
4. Run the project - `yarn start`
5. Run storybook - `yarn storybook`

## Contributing  
develop is the main branch which will contain stable versions of components, that can be deployed.  

### Steps  
1. Sync origin develop branch changes into local
   1. In develop branch - `git pull origin develop`
2. Create a new branch - `git branch <branch_name>`
3. Checkout to the new branch - `git checkout <branch_name>`
4. Create a dir inside src/components with the component name
5. Write the code, styling and a story for the component
6. Stage the changes - `git add .`
7. Commit the changes - `git commit -m "message"`
8. Push the changes
   1. If the branch is newly created locally - `git push --set-upstream origin <branch_name>`
   2. For exisiting branches - `git push origin <branch_name>`
9. Create a PR to the develop branch  

### Naming Guidelines for new Branches
1. New component - `new/componentName`
2. Updating an existing component - `update/componentName`
3. Fixing fatal issues in existing components - `fix/componentName`