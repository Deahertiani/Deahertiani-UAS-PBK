<template>
    <q-layout view="hHh lpR fFf">
  
      <q-header elevated class="bg-primary text-white" height-hint="98">
        <q-toolbar>
          <q-toolbar-title>
            Dhea Hertiani
          </q-toolbar-title>
          <q-tabs align="left">
            <q-route-tab to="/Weather" label="weather" />
          </q-tabs>
          <q-btn-dropdown color="primary" label="Tugas Dea" margin-right="10px">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Tugas 1</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Tugas 2</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Tugas 3</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Tugas 4</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Tugas 5</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Tugas 6</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          </q-btn-dropdown>
        </q-toolbar>
      </q-header>
  
      <q-page-container>
        <router-view />
      </q-page-container>
  
      <q-footer elevated class="bg-white text-white">
        <q-toolbar>
          <q-toolbar-title>
            <div class="footer">Copyright © 2024 Dea Hertiani. All Rights Reserved.</div>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
  
    </q-layout>
  </template>

  <script setup>
</script>

<style scoped>
  .q-btn-dropdown{
    margin-left: 20px;
  }

  .footer{
    font-size: 10px;
    text-align: center;
    color: black;
  }

  .q-layout{
    background-image: url('../assets/bg-image.png');
    background-repeat: no-repeat;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
  }
</style >