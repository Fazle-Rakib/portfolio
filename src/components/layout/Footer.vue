<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__copyright w-full flex flex-col items-center mx-auto mt-8 md:flex-row md:justify-around md:mt-0">
          <em class="md:w-1/4">
            Customized by ✨
            <a href="http://github.com/fazle-rakib/portfolio">F R Rakib</a>
          </em>
          <em class="md:1/4">
          Made with ♥ by
          <a href="https://github.com/jeferson-sb/portfolio">Jeferson</a>
          </em>
        <div class="md:w-1/2">
          <div class="built-tech">
            <AppLink
              to="https://www.netlify.com/"
              aria-label="Hosted on Netlify"
              isExternal
            >
              <NetlifyLogoSVG />
            </AppLink>
            <AppLink
              to="https://vuejs.org/"
              aria-label="Built with Vue"
              title="Built with Vue.js"
              isExternal
            >
              <VueSVG />
            </AppLink>
            <AppLink
              to="https://www.github.com/"
              aria-label="Source Code on Github"
              isExternal
            >
              <OctocatSVG />
            </AppLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  height: 60px;
  border-top: 1px solid var(--color-gray-800);
  margin-top: 40px;
}

.footer .container {
  align-items: center;
  justify-content: space-between;
}

.footer__copyright em {
  text-emphasis: unset;
  font-style: normal;
  font-weight: 700;
}

.footer__copyright span {
  margin-left: 8px;
  font-weight: 700;
  opacity: 0.6;
  color: var(--text-color-default);
}

.footer .built-tech {
  flex-basis: 20%;
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
}

.footer .built-tech svg {
  max-width: 37px;
  min-height: 40px;
}

.footer .built-tech a + a {
  margin-left: 30px;
}

@media screen and (max-width: 1024px) {
  .container {
    padding: 18px;
  }

  .footer {
    font-size: var(--text-base);
  }
}

@media screen and (max-width: 768px) {
  .footer .built-tech {
    flex-basis: 25%;
  }
}

@media screen and (max-width: 425px) {
  .footer {
    height: 100%;
  }

  .footer .container {
    flex-direction: column;
    text-align: center;
  }

  .footer__copyright {
    order: 2;
  }

  .footer .built-tech {
    order: 1;
    width: 100%;
    flex: 1;
    margin-bottom: 10px;
  }
}
</style>
