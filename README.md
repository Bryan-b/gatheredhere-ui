## GatheredHere Coding Test

This is a typical React + TailwindCSS project, with a custom theme, and a basic set of building blocks provided to you. The purpose of the exercise is to understand the application code (this means yoiu can ignore the build system), and add in the missing functionality, as well as fix any existing bugs

### Setup

- Clone the repo to your local system
- Create a new branch `development` where all your changes will be pushed
- Install dependencies: `yarn install`
- Run the dev server: `yarn dev`

### Problem

- We're creating a Project Tracker in a Kanban style board to help the project manager track internal team activities
- We need the ability to create tasks, which have a description of the task (multiline supported)
- We need the ability to create categories, which act as buckets, to group similar tasks together
- On creating a category, the new category is always added as the last column
- On creating a task, if no category is supplied it gets added to the first category
- We should be able to move tasks between adjacent categories
- We should be able to delete a task, and a category
- Deleting a category also deletes all the tasks within that category

### Guidelines

- Plan your approach by breaking down the deliverables into small and meaningful tasks (this is going to be required later)
- All the required components have been made available in the codebase, with basic styles (look in the `src/components` folder)
- The contexts under `src/context` are used to manage the category and task data, please feel free to add the required functionality to them
- The hooks under `src/hooks` are used to interact with the context, please feel free to add the required functionality to them
- No additional libs are required
- Please create atomic commits with a reasonable message about the changes in the commit (AVOID pushing ONE LARE COMMIT with all the changes)
- Once the code is ready for submission:
  - Add your planned tasks (created in Step 1) as items in the app and move them to the appropriate bucket based on their status
  - Create a file named `data.json` in the project root (the directory containing this README file)
  - Click on the `Export` button in the app UI, which should copy the localstorage data to your clipboard
  - Paste this into the new file and commit it to the codebase
- Once complete, push your changes to the `development` branch, and open a new PR on GitHub with the base branch `master`

### Utils

- While saving/fetching categories, or items, use the `src/utils/storage.ts` helpers to save/get them from localstorage

### QnA

- For any questions, or clarifications, write to [varshneya@gatheredhere.com.au](mailto:varshneya@gatheredhere.com.au)
