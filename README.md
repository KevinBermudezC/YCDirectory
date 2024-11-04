# YCDirectory

[![Vercel](https://vercel.com/button)](https://yc-directory-k.vercel.app)

**YCDirectory** is a directory application built with **Next.js**, using **Sanity** as the CMS, **NextAuth.js** for authentication, and **Tailwind CSS** for styling and **Sentry** for error tracking.. This tool allows users to explore, register, and manage directory data, offering a fast and modern experience powered by advanced frontend and backend technologies.

## Demo

Check out the live demo here: [YCDirectory on Vercel](https://yc-directory-k.vercel.app)

## Features

- **Browse the Directory**: Search and view entries with a clean and user-friendly interface.
- **Authentication**: Sign up or log in using **NextAuth.js** for secure user account management.
- **Content Management**: Easily add, edit, or delete entries with **Sanity CMS** integration.
- **Tailwind CSS Styling**: Modern, responsive design ensures a visually appealing experience on any device.
- **Error Tracking with Sentry**: Monitors and reports errors in real time, providing insights for a more stable application.


## Technologies Used

- **[Next.js](https://nextjs.org/)** - A React framework for building fast, scalable web applications.
- **[Sanity](https://www.sanity.io/)** - A headless CMS that allows flexible and real-time content management.
- **[NextAuth.js](https://next-auth.js.org/)** - A complete authentication solution for Next.js.
- **[Tailwind CSS](https://tailwindcss.com/)** - A CSS framework for responsive and highly customizable design.
- **[Sentry](https://sentry.io/welcome)** - Real-time error tracking that helps monitor and fix crashes in production. 

## Installation

1. **Clone this repository**:
   ```bash
   git clone https://github.com/KevinBermudezC/YCDirectory.git
   cd YCDirectory
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env.local` file in the root of the project and add the following variables:

   ```bash
   AUTH_SECRET=your_secret_here
   AUTH_GITHUB_ID=your_github_id
   AUTH_GITHUB_SECRET=your_github_secret
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=your_sanity_dataset
   NEXT_PUBLIC_SANITY_API_VERSION=
   SANITY_WRITE_TOKEN=
   SENTRY_AUTH_TOKEN=
   ```

   - **AUTH_SECRET**: Generate a secret for NextAuth authentication.
   - **NEXT_PUBLIC_SANITY_PROJECT_ID** and **NEXT_PUBLIC_SANITY_DATASET**: Get these values from your Sanity project.

4. **Start the development server**:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Deployment

This project is automatically deployed on **Vercel**. For manual deployment, make sure to configure environment variables on Vercel or your chosen deployment service.

## Contributing

Contributions are welcome. Please follow these steps to contribute to the project:

1. Fork the project.
2. Create a branch for your feature (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.
