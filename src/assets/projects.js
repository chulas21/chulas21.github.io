import nefro from './logoNefro.png'
import aeroLab from './aeroLab.png'
import growEase from './growEase.png'
import inipay from './inipay.png'
import barking from './barking.png'
import qr from './qr-code.png'

const projects = [
  {
    key: 1,
    name: "NefroWeb",
    logo: nefro,
    about:
      "This project was developed for a dialysis center, with the aim of optimizing its internal functioning. At first it was exclusively intended for stock control, but after the first deployment, a second stage was planned where other functionalities were implemented such as patient control, clinical history management, medication, social and psychological reports, personnel control, management of invoices, suppliers, payments, report generation, morbidity and mortality statistics, etc. A third stage was also planned, which is still under development, which consists of implementing a schedule control, generation of digital recipes, management of funds and a lobby for guests where they can obtain information about the center, schedule an appointment, see images of the facilities, etc",
    technologies:
      "For this project I used ReactJS, Firebase Suite (Realtime Database, Storage, Auth & Hosting), Bootstrap,",
    disclaimer:
      "This project contains sensitive information about patients at the center. If you are interested contact me and I can show you the project with dummy data",
    deployed: false,
  },
  {
    key: 2,
    name: "Barking WebApp",
    about: "I've created this website to help a local fast food business, the main problem that they had was take orders via Whatsapp, so the solution I came up with was a responsive website that allows the clients to make the order by selecting what they want from the menu, choosing the time of delivey and providing the location using Google Maps to make things easier to the delivery boy. On the other side, the restaurant see all the orders pending ordered by time, and allow the chefs to update the status of the order. When its ready they send the order data to the delivery boy using the Whatsapp API. Also have the option of talking to the client directly if there was a problem with the order.",
    technologies: "In order to fulfill the requirements of this project I used React, with Firebase as database and hosting provider, and also succesfully integrated Google Maps API to get the user's location",
    logo: barking,
    deployed: true,
  },
  {
    key: 3,
    name: "Inipay",
    about:
      "I'm currently working at Inipop LCC, here I'm in charge of the mobile development and, working side by side with an amazing team, we created a digital payment system that can work without an internet conection, using a LoRaWAN network. I'm the lead mobile developer, it means that I'm in charge of both the mobile app and the POS app. This project is currently on open beta testing and it's deployed on Play Store (only the mobile app). This service is currently operating only in Argentina, but we are planning an expansion to Latam soon.",
    technologies:
      "Here i used React Native for the main structure of the apps, some graphical elements libraries and a bit of Java to integrate various system functions (such as Bluetooth, GPS, Biometrical authentication, etc)",
    logo: inipay,
    deployed: true,
  },
  {
    key: 4,
    name: "QR Attendance",
    about: "The objective of this project was to improve attendace tracking on a found raising event. The man behind this event was a friend of mine that came to me with a problem: It was very hard to keep track of the guest's attendace by simply giving a card as ticket. I provided a solution using a QR app that allows the staff to generate codes for each person, using the name and ID number of the guest to create an encrypted code wich is converted to QR. Later on the day of the event, all staff members use the same app to scan the codes and verify the autenticity of the code.",
    technologies: "For this project I decided to use React Native, with two main libraries to generate and scan QR codes. This app was not deployed to Play Store.",
    logo: qr,
    deployed: true,
  },
{
    key: 4,
    name: "GrowEase",
    about:
      "This is a personal project that arises from the need to take care of an indoor crop with few hours available. By implementing an Arduino board, some relays and various sensors, I managed to develop a mobile app that allows me to keep track of the variables of the environment, such as temperature, humidity and soil irrigation, as well as adjust them if necessary through air extractors and inlets, cooling with peltier cells, photoperiod programming, etc. I had planned to use this app personally but after several requests I am thinking of developing and manufacturing DIY management systems for anyone who wants to get started in crop automation.",
    technologies:
      "This project has two parts, the application was built with React Native, using firebase as a database. The sensor and relay system was built with Arduino and the code implemented on the boards was developed in Arduino's own language (similar to C ++)",
    logo: growEase,
    deployed: true,
  },
 {
    key: 5,
    name: "AeroRewards",
    about:
      "This project was part of a challenge promoted by Aerolab Digital. This challenge consisted of developing an app for a rewards program where the user could use previously obtained points to purchase products. Both the products and the points are obtained from an API provided by Aerolab and through Axios requests the data from said API is consumed. My main idea during the development of the app was to create an optimal user experience, with subtle but visible animations and a color palette that matches the image of the company.",
    technologies:
      "In this project I implemented ReactJs for the entire app, Axios to consume the API and Vercel for the deployment",
    logo: aeroLab,
    url: "https://aero-rewards.vercel.app/",
    deployed: true,
  },
];

export default projects
