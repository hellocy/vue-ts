<template>
  <div class="index-wrap">
        <mt-header :title="data.pageName">
            <router-link to="/" slot="left">
                <mt-button icon="back">back</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        
        dddd:{{selected}}
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">option A</mt-tab-item>
            <mt-tab-item id="2">option B</mt-tab-item>
            <mt-tab-item id="3">option C</mt-tab-item>
            </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-button type="default">default</mt-button>
                <mt-button type="primary">primary</mt-button>
                <mt-button type="danger">danger</mt-button>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell title="content 2" />
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell title="content 3" />
            </mt-tab-container-item>
        </mt-tab-container>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss">
  @import './index.scss'
</style>

