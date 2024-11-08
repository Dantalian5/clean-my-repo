<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">Clean My Repo</h3>

  <p align="center">
    A simple ,efficient and opinionated CLI tool to keep your repositories clean and organized.
    <br />
    <a href="https://github.com/Dantalian5/clean-my-repo"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Dantalian5/clean-my-repo/issues">Report Bug</a>
    ·
    <a href="https://github.com/Dantalian5/clean-my-repo/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

**Clean My Repo** helps you maintain your repositories by removing unnecessary files and folders, and by initializing your `.gitignore` file with predefined templates for various environments and programming languages.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Node][Nodejs.org]][Nodejs-url]
- [![Typescript][TypeScript.com]][Typescript-url]
- [![Jest][Jest.com]][Jest-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Follow these steps to set up Clean My Repo locally.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation
1.  Clone the repo
```sh
git clone https://github.com/Dantalian5/clean-my-repo.git
```
2.  Install NPM packages
```sh
npm install
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### Initialize the .gitignore File

To initialize your .gitignore with a specific template:
```bash
npx clean-my-repo --init [template]
``` 
**Example:**
```bash
npx clean-my-repo --init node
```

### Clean the Repository
To clean up unwanted files and folders:
```bash
npx clean-my-repo --clean [template]
```
**Example:**
```bash
npx clean-my-repo --clean build
```

### Options:
•	--init, -i [template]: Initializes .gitignore with the specified template.
•	--clean, -c [template]: Cleans the repository by deleting files and folders based on the specified template.

**Available Templates:**
- **node**: Ignores and cleans common files and folders in Node.js projects, such as node_modules/, npm-debug.log, etc.
- **build**: Cleans build directories like dist/ and build/.
- **log**: Removes log files, such as npm-debug.log*, yarn-debug.log*, yarn-error.log*, etc.
- **test**: Cleans test-related files and code coverage folders, like coverage/ and .nyc_output/.
- **framework**: Ignores files specific to popular frameworks like Next.js (.next/), Nuxt.js (.nuxt/), and Parcel (.parcel-cache/).
- **os**: Ignores OS-generated files, such as .DS_Store, Thumbs.db, and more.
- **backup**: Removes temporary and backup files, like *.tmp, *.bak, and ~$*.
- **database**: Ignores database files, such as *.sqlite3, *.db, and dump.rdb.
- **ide**: Ignores files and folders specific to development environments (IDEs), like .vscode/, .idea/, and .history/.
- **design**: Ignores design files, such as *.sketch, *.fig, and *.xd.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Add -init to populate .gitignore.
- [x] Add -clean to delete unnecessary files.
- [x] Add templates to more selective user approach
- [x] Add cli prompts if user not enter args
- [ ] Add more templates
- [ ] Add custom configuration support
- [ ] Improve interactive prompts
- [ ] Multi-language support for prompts

See the [open issues](https://github.com/Dantalian5/clean-my-repo/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

- Website - [Marcos Valenzuela](https://valenzuela.dev)
- Linkedin - [Marcos Valenzuela](https://www.linkedin.com/in/marcos-valenzuela-dev)
- Github - [@Dantalian5](https://github.com/Dantalian5)
- Frontend Mentor - [@Dantalian5](https://www.frontendmentor.io/profile/Dantalian5)
- Start2Impact Portfolio - [Marcos Valenzuela](https://talent.start2impact.it/profile/marcos-ernesto-planos-valenzuela)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Dantalian5/clean-my-repo.svg?style=for-the-badge
[contributors-url]: https://github.com/Dantalian5/clean-my-repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Dantalian5/clean-my-repo.svg?style=for-the-badge
[forks-url]: https://github.com/Dantalian5/clean-my-repo/network/members
[stars-shield]: https://img.shields.io/github/stars/Dantalian5/clean-my-repo.svg?style=for-the-badge
[stars-url]: https://github.com/Dantalian5/clean-my-repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/Dantalian5/clean-my-repo.svg?style=for-the-badge
[issues-url]: https://github.com/Dantalian5/clean-my-repo/issues
[license-shield]: https://img.shields.io/github/license/Dantalian5/clean-my-repo.svg?style=for-the-badge
[license-url]: https://github.com/Dantalian5/clean-my-repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/marcos-valenzuela-dev
[product-screenshot]: images/screenshot.png

<!-- Tech Stack Badges -->

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[Tailwind.com]: https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=%23fff
[Tailwind-url]: https://tailwindcss.com/
[Typescript.com]: https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=%23fff
[Typescript-url]: https://www.typescriptlang.org/
[Postgresql.com]: https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=%23fff
[Postgresql-url]: https://www.postgresql.org
[Jest.com]: https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=%23fff
[Jest-url]: https://jestjs.io/
[NextUI.com]: https://img.shields.io/badge/NextUI-000000?style=for-the-badge&logo=nextui&logoColor=%23fff
[NextUI-url]: https://nextui.org/
[Astro.build]: https://img.shields.io/badge/Astro-000000?style=for-the-badge&logo=astro
[Astro-url]: https://astro.build/
[Expressjs.com]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express
[Expressjs-url]: https://expressjs.com/
[Nodejs.org]: https://img.shields.io/badge/Node-000000?style=for-the-badge&logo=nodedotjs
[Nodejs-url]: https://nodejs.org/