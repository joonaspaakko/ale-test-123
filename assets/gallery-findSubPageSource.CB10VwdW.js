import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, g as normalizeClass, d as createCommentVNode } from './lodash.Cy6RZ5mX.js';

/* unplugin-vue-components disabled */

/* unplugin-vue-components disabled */

const _sfc_main = {
  name: "libraryWishlistSwitcher",
  props: ['aboveSearch'],
  created: function() {
    
    // if ( this.$route.query.subPageSource !== this.$store.state.sticky.subPageSource ) {
    //   if ( this.$store.state.library[ this.$route.query.subPageSource ] ) {
    //     this.$store.commit('stickyProp', { key: 'subPageSource', value: this.$route.query.subPageSource });
    //   }
    // }
    
  },
  methods: {
    
    isActive: function( button ) {
      const source = this.$route.query.subPageSource || this.$store.state.sticky.subPageSource;
      if ( button === 'wishlist' && source === 'wishlist' ) {
        return true;
      }
      else if ( button === 'library' && (source === 'library' || source === 'books') ) {
        return true;
      }
    },
    
    switcher: function( key ) {
      
      this.$updateQueries({
        sort: null,
        sortDir: null,
        filterExtras: null,
        subPageSource: key,
      });
      
      this.$store.commit('stickyProp', { key: 'subPageSource', value: key });
      
    },
  },
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((_ctx.$route.meta.subPage && !_ctx.$route.meta.gallery) && (_ctx.$store.state.library.books || _ctx.$store.state.library.extras.pages.books) && (_ctx.$store.state.library.wishlist || _ctx.$store.state.library.extras.pages.wishlist))
    ? (openBlock(), createElementBlock("div", {
        key: 0,
        id: "library-wishlist-switcher",
        class: normalizeClass({ 'above-search': $props.aboveSearch })
      }, [
        createBaseVNode("button", {
          onClick: _cache[0] || (_cache[0] = $event => ($options.switcher('library'))),
          class: normalizeClass({ active: $options.isActive('library') })
        }, " Library ", 2),
        createBaseVNode("button", {
          onClick: _cache[1] || (_cache[1] = $event => ($options.switcher('wishlist'))),
          class: normalizeClass({ active: $options.isActive('wishlist') })
        }, " Wishlist ", 2)
      ], 2))
    : createCommentVNode("", true)
}
const __unplugin_components_1 = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-25b2dad4"]]);

const findSubPageSource = {
  data: function() {
    return {
      subPageSource: {
        collection: null,
        name: null,
        wishlist: false,
        library: false,
        books: false,
      }
    };
  },
  
  methods: {
    
    findSubPageSource: function() {
      const source = this.$route.query.subPageSource || this.$store.state.sticky.subPageSource;
      this.$store.commit('prop', { key: 'sticky.subPageSource', value: source });
      const sourceKey = source === 'library' ? 'books' : null;
      return {
        collection: this.$store.state.library[ sourceKey || source ],
        name: source,
        wishlist: source === 'wishlist',
        library: source === 'library' || source === 'books',
        books: source === 'library' || source === 'books',
      };
    },
    
  },
  
  watch: {
    
    '$route.query.subPageSource': function( source ) {
      const routeMeta = _.get(this.$route, 'meta', {});
      if ( !routeMeta.gallery && routeMeta.subPage ) {
        
        this.listReady = false;
        this.subPageSource = this.findSubPageSource();
        
        this.$nextTick(function() {
          this.makeCollection();
        });
        
      }
    }
    
  },

  beforeCreate: function () {

    this.$store.commit("prop", {key: "pageCollection", value: []});
    this.$store.commit("prop", {key: "mutatingCollection", value: []});

  },

  created: function () {
    
    const routeMeta = _.get(this.$route, 'meta', {});
    if ( routeMeta.subPage ) this.subPageSource = this.findSubPageSource();
    if ( !routeMeta.gallery && routeMeta.subPage ) this.makeCollection();
    
  },
  
};

export { __unplugin_components_1 as _, findSubPageSource as f };
