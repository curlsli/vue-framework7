import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use( VueRouter );

const router = new VueRouter();

router.map( {
  '/': {
    component: require( './index.vue' )
  },
  '/modal': {
    component: require( './modal.vue' )
  },
  '/navbar': {
    component: require( './navbar.vue' )
  },
  '/searchbar': {
    component: require( './searchbar.vue' )
  },
  '/toolbar': {
    component: require( './toolbar.vue' )
  },
  '/content-block': {
    component: require( './content-block.vue' )
  }
} );

export default router;
