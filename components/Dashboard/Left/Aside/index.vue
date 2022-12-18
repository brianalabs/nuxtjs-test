<template>
  <aside class="w-[240px] shrink-0 grow-0 border-r">
    <div class="flex h-full flex-col">
      <section class="flex-1">
        <DashboardLeftAsideTopButton />
      </section>

      <section class="h-full overflow-y-scroll">
        <DashboardLeftAsideNavigation />
      </section>

      <section class="px-3 py-3 text-center">
        <Copyright class="text-xs text-gray-400" />
      </section>
    </div>
  </aside>
</template>
