import './content-script-helpers.D7-AExPd.js';
import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createVNode, j as withCtx, d as createCommentVNode, t as toDisplayString, e as resolveComponent, s as createTextVNode } from './lodash.Cy6RZ5mX.js';

/* unplugin-vue-components disabled */

/* unplugin-vue-components disabled */

const _sfc_main = {
  name: "pageTitle",
  data() {
    return {
      route: {
        title: null,
        subtitle: null,
      },
    }
  },
  
  computed: {
    title() {
      return this.$store.state.pageTitle;
    },
    subtitle() {
      return this.$store.state.pageSubTitle;
    },
  },
  created: function() {
    
    this.route.title    = _.get(this.$route, 'meta.title');
    this.route.subtitle = _.get(this.$route, 'meta.subtitle');
    
    if ( !this.title    && this.route.title    ) this.$store.commit('prop', { key: 'pageTitle',    value: this.route.title });
    if ( !this.subtitle && this.route.subtitle ) this.$store.commit('prop', { key: 'pageSubTitle', value: this.route.subtitle });
    
    // const routeDolly = _.cloneDeep(this.$route);
    // routeDolly.query = {
    //   refresh: true,
    // };
    // this.pageLink = routeDolly;
    
  },
  
  beforeUnmount: function() {
    
    this.$store.commit('prop', { key: 'pageTitle', value: null });
    this.$store.commit('prop', { key: 'pageSubTitle', value: null });
    
  },
  
  methods: {
    titleClicked( e ) {
      this.$router.go();
    },
  },
  
};

const _hoisted_1 = {
  key: 0,
  class: "gallery-title-wrapper"
};
const _hoisted_2 = {
  key: 0,
  class: "gallery-title"
};
const _hoisted_3 = {
  key: 1,
  class: "divider"
};
const _hoisted_4 = {
  key: 2,
  class: "gallery-sub-title"
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");

  return ($options.title || $options.subtitle)
    ? (openBlock(), createElementBlock("div", _hoisted_1, [
        ($options.title)
          ? (openBlock(), createElementBlock("h2", _hoisted_2, [
              createVNode(_component_router_link, {
                to: { name: this.$router.name, query: { refresh: true } }
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString($options.title), 1)
                ]),
                _: 1
              }, 8, ["to"])
            ]))
          : createCommentVNode("", true),
        ($options.subtitle)
          ? (openBlock(), createElementBlock("div", _hoisted_3))
          : createCommentVNode("", true),
        ($options.subtitle)
          ? (openBlock(), createElementBlock("h3", _hoisted_4, toDisplayString($options.subtitle), 1))
          : createCommentVNode("", true)
      ]))
    : createCommentVNode("", true)
}
const __unplugin_components_0 = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { __unplugin_components_0 as _ };
