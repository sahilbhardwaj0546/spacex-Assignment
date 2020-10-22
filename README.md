# Publicis

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Few Points fo running this app on your local
1.) Assignment is build up using Angular 10,Bootstrap CDN
2.) Clone or download files and run npm i.
3.) after running npm i please run ng serve

Importants points regarding development 
1.) Used standard griding system for responsive web design.
2.) Used grids such as col-4, col-xl-6 with predefined breakpoints like col is setting for 578px ,col-md for >=768.
3.) Create two custom grids i.e custom-col-3-above-1024,custom-col-2-above-1024,custom-col-10-above-1024 which will provide breakpoints after 1440px.
4.) In assignment it was mentioned to set 700px for mobile but used bootstrap defined grids i.e<768px. I can also create custom grid for 700 px as i have create for 1440px using col-xxl.
5.) All filters are working as per expectation. 
used land_success for successful landing 
used launch_success for successful launch
used launch_year for launching year

if from api we are getting land_success as null then on UI on value is 
Accepted as we are having check for boolean values.

6.) Used images from links.mission_patch key.
7.) The content will be centered align with a max width of 1440==>> I was not very clear with this requirement i have implemented what i understood that is having one col with all data center aligned with a max-width of 1440px.
8.) Added message to user when no match is made.

Demonstrate a high Lighthouse score for Performance
1.) Created reusable components footer & Header.
2.) used same function for successfull launch and successful landing.
3.) Modifying single api instead of creating different files in environment.
4.) Used String Array( from typescript) for rendering year filter button instead of creating multiple HTML elements.

Hence resucing LOC and complexity and enhancing productivity/performance of our app.







