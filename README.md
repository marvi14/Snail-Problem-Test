# EthanTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Comments about project
Here we will walk through this sample project in order to explain or at least introduce all the technologies
were used, to get a better idea of the work. Based on @angular/cli starter project, I started adding
all the technologies I consider important in order to develop a big application without loosing focus on the performance. This is what I've done.

I used WebPack in order to perform the bootsraping process of the application and manage correctly
the scripts dependencies. During the bootsrap process, we also configure some global variables to
be accessed from anywhere in the application such as "Underscore" or "Charts.js".

In order to implement lazy-loading of the app scripts, I used Angular 2 Router, to lazy load my modules. It aids in the lazy download and registration
of services, directives, controllers and filters just-in-time. It supports hierarchies of dependencies within these components. This is a key aspect,
it let us develop as many modules to the app as we wish, without afecting its performance nor its loading & bootstraping times! So, thinking that our application
can scale without limits, it's always the best approach!

In the App Component (or Root component), you'll find all the initial configurations of the application such as routing rules, the transaltions
configuration to support i18n, the initial configuration of web browser push notifications (just as Slack, Whatsapp and Facebook) and all our common tools that will
help us all over the app.

Inside the modules folder, is where the application modules are. Each module, has it's own folder with the component or components used in that module,
a views, services, directives, pipes, Redux stuff such as Reducers, Actions, etc... This structure help us keep the MVC pattern, giving us abstraction
and spread of responsabilities, making code more flexible and mantainable.

We use Redux as it help us a lot managing the application state, reducing complexity and keeping full control over all the application. As Redux guys define thereselve,
Redux provides an easy way to centralize the state of your application.

Any further questions and comments will be well received in our next interview. I've made my best to demonstrate some of the experience I've beeing acquiring this time as a Frontend engineer, but as the task was so open, I don't know if I was able to pleased you, but I hope so. Anyway, thank you for your time :)