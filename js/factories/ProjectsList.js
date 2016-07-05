app.factory('ProjectsList', function() {
    var fac = {};
    fac.projects = [
        {
            icon: 'img/amazon-price-checker-300px.jpg',
            name: 'Amazon Price Checker',
            genre: 'Web',
            team_members: 'Tim Cheung, David Dang, David Wong',
            duration: 'May 14-15, 2016',
            abstract: 'This website was developed for the Angular Attack 48 hour online Angular Hackathon. This website checks whether buying from Amazon.ca is cheaper than Amazon.com.'
        },

        {
            icon: 'img/robotic-boat-300px.jpg',
            name: 'Robotic Boat',
            genre: 'Mechatronics',
            team_members: 'Jaclyn Tarnai, Graham Williamson, David Wong, Yiran Zhou',
            duration: 'September,2015 - April,2016',
            abstract: 'The goal of this project is to create a low cost autonomous marine vessel for surveying the bottom of lakes with a bathymetry sensor. The main objectives for this project are autonomous GPS waypoint navigation for a cost less than $2,750. The final design was a 2m long catamaran vessel, with a top speed of 8km/h.'
        },

        {
            icon: 'img/sunlight-300px.jpg',
            name: 'Sunlight Position Simulator',
            genre: 'Mechatronics',
            team_members: 'Zhenhe Lu, David Wong',
            duration: 'March, 2016 - April, 2016',
            abstract: 'The objective of this project is to build a sunlight position simulator to demonstrate the concept of time zones and how the amount of daylight varies. The sunlight position simulator uses a desktop globe that rotates either automatically or according to the date and location from user input on the software. A stepper motor is used control globe’s angular position. As well, an array of LEDs is used to simulate the sunlight location relative to the earth. A user interface software was designed and used read user input and send signal to microcontroller to rotate the globe and light up LEDs in order to represent a miniature of earth-solar system.'
        },

        {
            icon: 'img/clefairy_says_300px.jpg',
            name: 'Clefairy Says',
            genre: 'Software',
            team_members: 'David Wong',
            duration: 'January, 2016',
            abstract: 'This program uses a 3-axis accelerometer as a controller to play the Nintendo 64 Pokémon Stadium mini-game, Clefairy Says. The program was developed in C# using Visual Studios.'
        },

        {
            icon: 'img/two-axis-300px.jpg',
            name: 'Two Axis Computer Control System',
            genre: 'Mechatronics',
            team_members: 'David Wong',
            duration: 'September, 2015 - December, 2015',
            abstract: 'WIP'
        },

        {
            icon: 'img/uv_fixture_exploded-300px.jpg',
            name: 'UV Light Fixture',
            genre: 'Mechatronics',
            team_members: 'David Wong',
            duration: 'May, 2015 - August, 2015',
            abstract: 'The purpose of the UV light fixture is to demonstrate a photolithography process on a three dimensional substrate, such as a cylinder, to fabricate devices, such as stents. The characteristic and performance of the UV light fixture is determined by conducting various exposure tests on various photoresist. This project was done at Takahata Lab at UBC.'
        },

        {
            icon: 'img/ubc-orbit-300px.jpg',
            name: 'UBC Orbit',
            genre: 'Mechanical',
            team_members: 'Liam Hodgson, David Wong',
            duration: 'September, 2013 - April, 2014',
            abstract: 'WIP'
        },

        {
            icon: 'img/trailrider-300px.jpg',
            name: 'TrailRider',
            genre: 'Mechanical',
            team_members: 'James Cardno, Ian Kerr, Gerard Merced, Alex Reddy, David Wong, Kevin Zhang',
            duration: 'September, 2014 - December, 2014',
            abstract: 'WIP'
        },

        {
            icon: 'img/elevator-simulator-300px.jpg',
            name: 'Elevator Simulation',
            genre: 'Software',
            team_members: 'David Wong',
            duration: 'September, 2015 - December, 2015',
            abstract: 'WIP'
        },

        {
            icon: 'img/social-network-300px.jpg',
            name: 'Social Network',
            genre: 'Software',
            team_members: 'John Henderson, David Wong',
            duration: 'November, 2013',
            abstract: 'WIP'
        }
    ];

    return fac;
})
