const keywords=[
    'Django','Spring Boot','Express Js','React Js',
]

const skills=[
    {
        project_title:'Two-Factor Authentication System',
        framework:'Django',
        description:'This project called Two-Factor Authentication System, highlights the development of a robust Authentication & Verification System using Django, Celery,RabbitMQ and PostgreSQL. It ensures user data security and email address validation. The system includes seamless SMTP email integration for user notifications.',
        tool1:'Used Celery for handling tasks of sending mails asynchronously.',
        tool2:'Integrated RabbitMQ as a message broker.',
        tool3:'Utilized PostgreSQL for efficient data storage and Management.',
        tool4:'Leveraged Docker to containerize the application.',
        img:'/img/auth1.png',
        img1:'/img/auth2.png',
        img2:'/img/auth3.png',
        img3:'/img/auth4.png',
        

        slug:'Django-Based-Auth-App',
        link:'https://www.linkedin.com/posts/benjamin-koshy_python-django-celery-activity-7103561153854767105--R_L?utm_source=share&utm_medium=member_desktop',

    },

    {
        project_title:'Java based Internship Project',
        framework:'Spring Boot',
        description:'DCMS is a Web based application that was developed using Java Spring Boot for Backend, Angular for Front-end development and Artemis to implement JMS along MySQL Database. I configured Artemis with the project and implemented the SMTP Server for the transfer of mails.',
        tool1:'Used ActiveMQ as Message Broker.',
        tool2:'MySQL for Data Storage and Management.',
        tool3:'SMTP Configuration',
        img:'/img/smtp.png',
        slug:'Java-based-Internship-Project'

    },

    {
        project_title:'Movie App with OMDB Api',
        framework:'React js',
        description:'Created a simple Movie Web App using ReactJs. Did not use a database but rather OMDB API to fetch the data for the movies.',
        tool1:'Used OMDB API to get movies data.',
        
        tool2:'Hosted the React project on an AWS EC2 Instance.',
        
        img:'/img/react.png',
        slug:'Movie-App-with-OMDB-api',
        link:'https://github.com/BenjaminKoshyBiju/react-App'

    },

    {
        project_title:'Todo App',
        framework:'Django',
        description:'following a tutorial for a todo app i implemented API that i had built in Django with the Todo app performing CRUD Operations, also made use of Django Authentication so that each user will be able to list out and work on their own list.',
        tool1:'Performed CRUD Operations.',
        tool2:'Authentication.',
        tool3:'PostgreSQL for Data Storage.',
        tool4:' Created InHouse API.',    
        img:'/img/todo.png',
        slug:'Second-Django-based-app',
        link:'https://github.com/BenjaminKoshyBiju/notes_app'

    },

    {
        project_title:'News App using Express Js',
        framework:'Express',
        description:'Created a News app using Express for backend and bootstrap for frontend. used Public apis News API and OpenWeather API for fetching the news and weather data and integrating them in the Web App.',
        tool1:'Used Bootstrap for frontend.',
        tool2:'Used News API to fetch news Articles.',
        tool3:'Used OpenWeather API to fetch weather data of my Area.',
        tool4:'Worked on Handlebars templete engine.',
        img:'/img/news_app.png',
        img1:'/img/news1.png',
        img2:'/img/news2.png',
        slug:'News-App-using-Express-Js',
        link:'https://github.com/BenjaminKoshyBiju/Node_projects/tree/main/news_app'

    },

    {
        project_title:'Ecommerce Web App',
        framework:'Django',
        description:'Worked on a static ECommerce website using Django made the Site Dynamic till the Cart page.',
        tool1:'Used Bootstrap for frontend.',
        tool2:'Managed Static files using Django and made the site dynamic.',

        img:'/img/Ecommerce.png',
        link:'https://github.com/BenjaminKoshyBiju/Ecommerce-website',
        
        
        slug:'Ecommerce-Web-App'

    },

    

    
]
export {skills,keywords}