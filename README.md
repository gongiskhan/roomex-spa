# RoomexSpa

A Sample Project created only to serve as basis for discussion during the hiring process for Roomex.

Please see below how to run it, and also how to run the tests, including a simple e2e test.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.



## Notes about the tech choices

- **NG Cli for project initialization** - Using the Angular Cli (`ng new`) allowed me to start the project with very basic boilerplate scaffolding crucial for any Angular project. Without it would have to configure webpack for bundling and configure plugins for processing things like SCSS, add TypeScript, Karma, Jasmine and configuration for these, etc... Decided it was not relevant for the purpose of this sample project (as it wouldn't be for a production app either).  


- **Angular Material UI** - This component library implementing Google's Material UI design specification is very helpful for providing some out-of-the-box UI components and common functionality seen on webapps. 


- **Talwind CSS** - A modern CSS framework that complements Material UI with more options to customize the UI.


- **Talwind UI** - A set of components made by Tailwind's team using Tailwind CSS.


- **NGRX** - A state management framework to ensure that when scaling (as required) state is handled in a way that is quickly gathered, reproducible, and debuggable, and that, as more features are added to this app which does not have a closed scope (again, as specified), we maintain a well-defined structure that developers versed in this common technology can quickly understand the architecture of the app and "hit the ground running".

*Note about the certification in NGRX:* I mentioned the certification in the interview and have added the certificate and course content on the `angular-academy` folder of this project. However, this was back in 2017, and the professional experience I had with ngrx was soon after it. So, while working on this project I realised I have forgotten a lot about ngrx and that it changed quite a bit. I wanted to note this to explain why I might not be able to reply to advanced questions about this topic.

- **Transloco** - A i18n library that is easier to work with, more flexible and more comprehensive than Angular's localize.


- **Cypress** - A e2e testing framework, that, at least from my experience working with both, is easier to work with and more robust than Protactor.


## Documentation

**NONE!!** 

I believe that code should be intuitive and that developers should strive to learn what the common and best practises are so that other developers can understand they're code intuitively without the need for it to be explained with a description.
