<template>
  <footer class="site-footer overflow-y-hidden">
    <div class="l-container">
      <div class="grid grid-cols-1 l-grid-line l-grid-line--t md:grid-cols-12 | relative bg-gray-100 gap-px pt-px px-px">
        <div class="hidden md:flex md:col-span-2 bg-white p-4 relative">
          <div class="d-circles">
            <span class="d-circle d-circle__1"></span>
            <span class="d-circle d-circle__3"></span>
          </div>
        </div>
        <div class="md:col-span-10 bg-white relative" style="padding: var(--space-xs)">
          <div class="d-circles">
            <span class="d-circle d-circle__1"></span>
            <span class="d-circle d-circle__2"></span>
            <span class="d-circle d-circle__3"></span>
            <span class="d-circle d-circle__4"></span>
          </div>
          <ul class="footer-links flex justify-end">
            <li class="link-item">
              <small>&copy; {{ new Date().getFullYear() }} UPS Direct</small>
            </li>
          </ul>
        </div>
      </div>
      <div class="grid grid-cols-1 l-grid-line l-grid-line--b md:grid-cols-12 | relative bg-gray-100 gap-px pb-px px-px"></div>
    </div>
  </footer>
</template>
