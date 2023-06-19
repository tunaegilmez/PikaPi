<template>
  <div class="card card-side bg-base-100 shadow-xl flex px-10 items-center">
    <figure class="mr-4">
      <slot name="imageSlot"></slot>
    </figure>
    <div class="card-body place-content-center">
      <h2 class="card-title justify-center text-sm">
        <!-- Poke Name -->
        <slot name="nameSlot"></slot>
      </h2>
    </div>
  </div>
</template>
