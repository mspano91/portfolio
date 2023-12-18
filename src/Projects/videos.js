import res1 from "../assets/img/res1.png";
import res2 from "../assets/img/res2.png";
import res3 from "../assets/img/res3.png";
import res4 from "../assets/img/res4.png";

const videos = [
  {
    video: "https://www.youtube.com/embed/7tl0l3bRQjA",
    tittle: "Poke ApiRest",
    description:
      "I developed a RESTful Pokémon API by fetching data from the official Pokémon API available online. Initially, the server-side implementation was carried out, where requests to the API were made, and database models were created to store Pokémon data in Redux. This allowed us to manage information across global states without the need for constant requests. Subsequently, a visually appealing front end was crafted where Pokémon can be viewed and filtered in various ways. Users can search for Pokémon by name using a search bar, and a form is available for creating and deleting custom Pokémon.",
    git: "https://github.com/mspano91/Poke_Api",
    imagen: res2,
  },
  {
    video: "https://www.youtube.com/embed/LREzajthtd8",
    tittle: "E-commerce Furniture",
    description:
      "We worked as a team of developers, with three of us in the front end and the others in the back end. The project spanned three weeks, with three sprints each, following the Scrum methodology and supervised by a Product Owner. We created an e-commerce platform focused on furniture and design, addressing both the client side and the administrator side. Technologies employed included React, Vite.js, CSS modules, Redux, JavaScript, Node.js, Postman, Express.js, Nodemon, MercadoPago for payment processing, Cloudinary for image management, third-party authentication, and various libraries.",
    git1: "https://github.com/mspano91/BlackGroup_Ecommerce_BackEnd",
    git2: "https://github.com/mspano91/BlackGroup_Ecommerce_Front",
    deploy: "https://blackgroupdesing.vercel.app/",
    imagen: res1,
  },
  {
    video: "https://www.youtube.com/embed/zMBfu6kXLPY",
    tittle: "Ecommerce Shirts",
    description:
      "I developed an E-commerce platform for football shirts using just vanilla JavaScript, basic HTML, and CSS. The home page was meticulously designed on Figma. This project served as a practical exercise, and I incorporated LocalStorage to ensure cart persistence. Additionally, users have the ability to filter products and employ a search bar for easy navigation.",
    git: "https://github.com/mspano91/ShirtsEcommerce",
    imagen: res3,
  },
  {
    video: "https://www.youtube.com/embed/mWmfqrrMUIM",
    tittle: "Rick and Morty ApiRest",
    description:
      "I developed a RESTful API by fetching data from the official Rick and Morty API available online. The task included retrieving information from the API and integrating it into our global state management system to efficiently handle characters and associated details. This enables us to execute actions such as duplicating characters in our global state for effective management. As a result, we implemented a 'Favorites' section that empowers users to save their preferred characters. This feature optimally utilizes the global state to effortlessly manage and showcase the user's favorite characters, thereby enhancing the overall user experience.",
    git: "https://github.com/mspano91/rick_andMorty",
    imagen: res4,
  },
];

export default videos;
