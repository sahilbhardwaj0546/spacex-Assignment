# Publicis

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Few Points fo running this app on your local
1.) Assignment is build up using Angular 9,Bootstrap CDN
2.) Clone or download files and run npm i.
3.) after running npm i please run ng serve

Importants points regarding development 
1.) Used standard griding system for responsive web design.
2.) Used grids such as col-4, col-xl-6 with predefined breakpoints like col is setting for 578px ,col-md for >=768.
3.) Create two custom grids i.e col-xxl-2,col-xxl-8 which are providing breakpoints after 1440px.
4.) In assignment it was mentioned to set 700px for mobile but used bootstrap defined grids i.e<768px. I can also create custom grid for 700 px as i have create for 1440px using col-xxl.
5.) All filters are working as per expectation. We are not getting launch_landing from JSON so in UI we gonna see Successful Landing label with no result but filter functionality for successful landing will work as per expectation once we are able to get key in JSON.
6.) There was no image provided to me for assignment so using single image for all missions.

Demonstrate a high Lighthouse score for Performance
1.) Created reusable components footer & Header.
2.) used same function for successfull launch and successful landing.
3.) Modifying single api instead of creating different files in environment.
4.) Used String Array( from typescript) for rendering year filter button instead of creating multiple HTML elements.

Hence resucing LOC and complexity and enhancing productivity/performance of our app.














Directed=>
⦁	Mobile View: Page should have only one Column until 700 px. We have provided the Visual designs for Mobile screen.
⦁	Tablet View: Page should have 2 columns between 700 and 1024 px. Design is provided for Desktop tile and that should be followed for this viewport.
⦁	Desktop View: Page should have 4 columns between 1024 and 1440 px. Beyond 1440px viewport,  the content will be centered align with a max width of 1440.

Instead of upper approach used w3 defined resolution standards

Mobile view => Upto 767px
tab view => 768px to 1199px
Desktop View =>1200px to 1439px
Extra Large Desktop => Custom designed grid(col-xxl-2,col-xxl-8) for >=1400px 

We can also design Directed design with custom defined breakpoints in same manner as defined breakpoints for col-xxl 










