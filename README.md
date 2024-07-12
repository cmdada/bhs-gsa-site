[![pages-build-deployment](https://github.com/cmdada/bhs-gsa-site/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/cmdada/bhs-gsa-site/actions/workflows/pages/pages-build-deployment)
[![Deploy Docs](https://github.com/cmdada/bhs-gsa-site/actions/workflows/deploy-docs.yml/badge.svg)](https://github.com/cmdada/bhs-gsa-site/actions/workflows/deploy-docs.yml)
[![Deploy static content to Pages](https://github.com/cmdada/bhs-gsa-site/actions/workflows/static.yml/badge.svg)](https://github.com/cmdada/bhs-gsa-site/actions/workflows/static.yml)

This project is a statically deployed website designed to provide a comprehensive platform for the BHS GSA community. The site is hosted at [
https://bhsgsa.org](https://bhsgsa.org) (i just bought the domain through namecheap, if you're a future maintainer contact me at cmdada@proton.me.) oh and it uses cloudlfare pages and DNS for prod
## Getting Started
Follow these steps to get a local copy of the project up and running for development
### Prerequisites
- Ensure you have an adequate version of [Node.js](https://nodejs.org/) and pnpm installed
### Installation
1. Clone the repo:
   ```
   git clone https://github.com/cmdada/bhs-gsa-site

2. Navigate to the project directory:
   ```
   cd bhs-gsa-site

3. Install dependencies:
   ```
   pnpm install

4. Start the development server:
   ```
   pnpm run docs:dev

## Development
- The site is built using [VuePress](https://vuepress.vuejs.org/), and has a jank system to do deployments automagically through 3 and a half github workflows
## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
## Contact
If you have any questions or suggestions, feel free to open an issue or reach out to me
