<!-- ./components/SiteHeader.vue -->

<template>
  <div class="sticky top-0 w-full z-20">
    <header class="site-header bg-white">
      <div class="l-container">
        <div
          class="w-full grid grid-cols-3 l-grid-line l-grid-line--b md:grid-cols-12 | relative bg-gray-100 gap-px pb-px px-px"
        >
          <div
            class="col-span-1 md:flex md:col-span-2 bg-white p-4 justify-center items-center relative"
          >
            <div class="d-circles">
              <span class="d-circle d-circle__1"></span>
              <span class="d-circle d-circle__2"></span>
              <span class="d-circle d-circle__3" style="bottom: -5px"></span>
              <span class="d-circle d-circle__4" style="bottom: -5px"></span>
            </div>

            <NuxtLink to="/" class="no-underline flex">
              <nuxt-img 
                format="svg"
                src="/img/svg/ups-direct_logo-light.svg"
                alt="UPS Direct Logo"
                class="site-logo flex-shrink-0 w-full aspect-[2/1]"
              />
            </NuxtLink>
          </div>

          <div
            class="col-span-2 md:col-span-10 bg-white p-4 relative flex justify-center"
          >
            <div class="d-circles">
              <span class="d-circle d-circle__1"></span>
              <span class="d-circle d-circle__2"></span>
              <span class="d-circle d-circle__4" style="bottom: -5px"></span>
            </div>

            <nav
              ref="siteNav"
              id="a11y-nav-primary"
              class="c-nav c-nav--primary | flex justify-center items-center h-full w-full"
            >
              <ul
                class="links flex flex-col gap-6 w-full | md:flex-row md:justify-evenly"
              >
                <li class="link">
                  <NuxtLink to="/about" @click="clearState">About</NuxtLink>
                </li>
                <li class="link">
                  <NuxtLink to="/services" @click="clearState"
                    >Services</NuxtLink
                  >
                </li>
                <li class="link">
                  <NuxtLink to="/products" @click="clearState"
                    >Products</NuxtLink
                  >
                </li>
                <li class="link">
                  <NuxtLink to="/customised-solutions" @click="clearState"
                    >Customised Solutions</NuxtLink
                  >
                </li>
                <li class="link">
                  <NuxtLink to="/case-studies" @click="clearState"
                    >Case Studies</NuxtLink
                  >
                </li>
                <li class="link">
                  <NuxtLink to="/contact" @click="clearState">Contact</NuxtLink>
                </li>
              </ul>
            </nav>

            <button
              ref="btnToggle"
              @click="_onTogglerClick"
              aria-expanded="false"
              aria-controls="a11y-nav-primary"
              class="c-btn-menu | flex flex-row items-center ml-auto relative | md:hidden"
            >
              <span class="f-caps text-xs mr-4" ref="btnToggleLabel">Menu</span>
              <svg
                class="site-nav__icon"
                aria-hidden="true"
                focusable="false"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                viewBox="0 0 40 22"
                width="25"
                height="16"
              >
                <path
                  class="site-nav__bar bar--t"
                  d="M38,4H2C0.9,4,0,3.1,0,2s0.9-2,2-2h36c1.1,0,2,0.9,2,2S39.1,4,38,4z"
                />
                <path
                  class="site-nav__bar bar--m"
                  d="M38,13H2c-1.1,0-2-0.9-2-2s0.9-2,2-2h36c1.1,0,2,0.9,2,2S39.1,13,38,13z"
                />
                <path
                  class="site-nav__bar bar--b"
                  d="M38,22H2c-1.1,0-2-0.9-2-2s0.9-2,2-2h36c1.1,0,2,0.9,2,2S39.1,22,38,22z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";

let open = false;

const siteNav = ref();
const btnToggle = ref();
const btnToggleLabel = ref();

const _onTogglerClick = (e) => {
  e.preventDefault();
  const menuIsOpen = document
    .querySelector("body")
    .classList.contains("s-menu-open");
  if (!menuIsOpen) {
    openMenu();
  } else {
    closeMenu();
  }
};

const clearState = (e) => {
  if (open) {
    closeMenu();
  }
};

const openMenu = () => {
  const tlOpen = new gsap.timeline({
    defaults: { duration: 0.3, ease: "power1.inOut" },
    onStart: () => {
      open = true;
      document.querySelector("body").classList.add("s-menu-open");
      btnToggle.value.setAttribute("aria-expanded", "true");
      btnToggleLabel.value.textContent = "Close";
      // firstMenuItem.focus();
      // window.scroll( 0, 0 );
    },
  });
  tlOpen
    .set(siteNav.value, { autoAlpha: 1 })
    .to(siteNav.value, { xPercent: 0 });
};
const closeMenu = () => {
  const tlClose = new gsap.timeline({
    defaults: { duration: 0.3, ease: "power1.inOut" },
    onStart: () => {
      open = false;
      document.querySelector("body").classList.remove("s-menu-open");
      btnToggle.value.setAttribute("aria-expanded", "false");
      btnToggleLabel.value.textContent = "Menu";
    },
  });
  tlClose
    .to(siteNav.value, { xPercent: "-100" })
    .set(siteNav.value, { autoAlpha: 0, delay: 0.2 });
};

onMounted(() => {
  const mql = window.matchMedia("(max-width: 768px)");

  const _state = () => {
    if (mql.matches) {
      gsap.set(siteNav.value, { autoAlpha: 0, xPercent: "-100" });
    } else {
      gsap.set(siteNav.value, { clearProps: "all" });
      document.querySelector("body").classList.remove("s-menu-open");
      btnToggle.value.setAttribute("aria-expanded", "false");
    }
  };

  _state();

  if (mql.addEventListener) {
    mql.addEventListener(`change`, _state);
  } else {
    // Deprecated 'MediaQueryList' API, <Safari 14, IE, <Edge 16
    mql.addListener(_state);
  }
});

onUnmounted(() => {
  // ctx.revert(); // <- Easy Cleanup!
});
</script>

<style scoped lang="scss">
.site-header {
  width: 100%;
  overflow: hidden;
  padding-bottom: 4px;
  background-clip: content-box;
}
.site-header > .l-container {
  @apply flex items-center justify-between;
}

.site-logo {
  max-width: clamp(100px, 50%, 200px);
  margin: 0 auto;
}

// - BUTTON MENU
.c-btn-menu {
  z-index: 20;
  @apply font-header;
  .s-menu-open & {
    color: white;
  }
}

// - NAV
.c-nav--primary {
  a {
    @apply font-header;
  }
  // until md
  @media (max-width: 47.99em) {
    opacity: 0;
    visibility: hidden;
    z-index: 10;

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #000;
    width: 100vw;
    // width: calc(100vw - 122px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;

    padding-left: 1.25rem;

    a {
      font-size: clamp(1.5rem, 1.136rem + 1.82vw, 2.5rem);
      font-weight: 500;
      color: white;
      &:hover,
      &:focus {
        @apply text-b-blue-500;
      }
    }
  }

  // from - md
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
}
</style>
