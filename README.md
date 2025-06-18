# DevDairies — Where Code, Ideas & Adventures Collide 🚀🌍

A personal blog dedicated to coding, creativity, and continuous learning. Here, I share my side projects, tech tutorials, life updates, and everything in between. Whether it’s a debugging story, a new framework I’m exploring, or thoughts on digital minimalism — this blog reflects my journey as a developer and a storyteller in the digital age.

![Preview Image](https://raw.githubusercontent.com/PintuVaishanv/post-images/refs/heads/main/43387c80-a739-4dcd-b76b-1236dfd36bd3.png)



## 🎯 Goal of this project

At its heart, this personal blog is built around a few simple but important goals:
1. **Share My Knowledge & Learning Journey:** I created this blog as a space to document and share everything I’ve learned — from coding projects and tech tips to personal reflections and problem-solving stories. It’s my way of giving back to the developer community and helping others learn alongside me.
2. **Showcase My Projects & Experiences:**: This is where I share the projects I build, the experiments I try, and the lessons I pick up along the way. Whether it's a new JavaScript trick, a DevOps deployment, or a personal side hustle, you’ll find it here.
3. **Create a Central Hub for DevOps Resources:**: One of my goals is to make this blog a go-to place for anyone interested in learning DevOps. I’ll be sharing curated resources, tutorials, toolkits, and guides — everything you need to get started or upskill in the world of DevOps, all in one place.

_This blog is more than just a collection of posts — it’s a growing archive of my tech journey, designed to inspire, educate, and connect with fellow developers around the world. 🚀

## Setting up the project locally

### Setting up the Backend

1. **Fork and Clone the Repository**

   ```bash
   git clone https://github.com/PintuVaishnav/DevDairies.git
   ```

2. **Navigate to the Backend Directory**

   ```bash
   cd backend
   ```

3. **Install Required Dependencies**

   ```bash
   npm i
   ```

4. **Set up your MongoDB Database**

   - Open MongoDB Compass and connect MongoDB locally at `mongodb://localhost:27017`.

5. **Import sample data**

   > To populate the database with sample posts, you can copy the content from the `backend/data/sample_posts.json` file and insert it as a document in the `DevDiaries/posts` collection in your local MongoDB database using either MongoDB Compass or `mongoimport`.

   ```bash
   mongoimport --db DevDiaries --collection posts --file ./data/sample_posts.json --jsonArray
   ```

6. **Configure Environment Variables**

   ```bash
   cp .env.sample .env
   ```

7. **Start the Backend Server**

   ```bash
   npm start
   ```

   > You should see the following on your terminal output on successful setup.
   >
   > ```bash
   > [BACKEND] Server is running on port 5000
   > [BACKEND] Database connected: mongodb://127.0.0.1/DevDiaries
   > ```

### Setting up the Frontend

1. **Open a New Terminal**

   ```bash
   cd frontend
   ```

2. **Install Dependencies**

   ```bash
   npm i
   ```

3. **Configure Environment Variables**

   ```bash
   cp .env.sample .env.local
   ```

4. **Launch the Development Server**

   ```bash
   npm run dev
   ```

## 🌟 Want to Connect or Learn Together?

If you enjoy the content here — whether it’s a project, a blog post, or a DevOps guide — I’d love to hear from you! This blog is meant to grow with contributions, feedback, and ideas from fellow tech enthusiasts like you.

## 💖 Support & Stay Connected

If you find value in what I’m sharing, you can support this journey by:

- ⭐ Sharing it with your network  
- 💬 Dropping your feedback, questions, or ideas in the comments or contact section  
- 🤝 Reaching out for collaborations, project ideas, or just a tech conversation  

Your encouragement means a lot and keeps this blog evolving with fresh content, projects, and learning resources.

> 🚀 **Let’s build, learn, and grow together in this ever-evolving tech world!**
